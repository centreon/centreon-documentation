#!/usr/bin/perl

package centreon::script::create_pp_docusaurus;

use strict;
use warnings;
use FindBin;
use Getopt::Long;
use Pod::Usage;
use Data::Dumper;
use JSON::XS;
use POSIX qw(strftime);
use Pandoc;

centreon::script::create_pp_docusaurus->new()->run();

sub new {
    my $class = shift;
    my $self = {};
    
    $self->{options} = {
        "pack-directory=s" => \$self->{pack_directory},
        "doc-directory=s" => \$self->{doc_directory},
        "help|?" => \$self->{help}
    };

    bless $self, $class;
    return $self;
}

sub parse_options {
    my $self = shift;

    Getopt::Long::Configure('bundling');
    die "Options parsing error" if !GetOptions(%{$self->{options}});
    pod2usage(-exitval => 1, -input => $FindBin::Bin . "/" . $FindBin::Script) if $self->{help};
}

sub init {
    my $self = shift;

    die "Set --pack-directory option" if (!defined($self->{pack_directory}) || $self->{pack_directory} eq '');
    die "$self->{pack_directory} is not a valid directory : $!" if (!-d $self->{pack_directory});
    die "Set --doc-directory option" if (!defined($self->{doc_directory}) || $self->{doc_directory} eq '');
    die "$self->{doc_directory} is not a valid directory : $!" if (!-d $self->{doc_directory});
}

sub list_packs {
    my ($self, %options) = @_;
    
    return [] if (!-d $options{directory});
    opendir (DIR, $options{directory})
        or die "Could not open directory '$options{directory}' : $!";

    while (my $slug = readdir(DIR)) {
        next if ($slug =~ /^\./);
        push @{$self->{packs_definitions}}, $slug . '/pack.json';
    }
}

sub clean_procedure {
    my ($self, %options) = @_;
    
    my $procedure = $options{procedure};
    $procedure =~ s/# Monitoring procedure\r\n//;
    $procedure =~ s/\r//g;

    my $pandoc = Pandoc->new(qw(-f gfm -t gfm --columns=120));
    $pandoc->run({ in => \$procedure, out => \$procedure });

    $procedure =~ s/\n\n\s+#\s(yum\sinstall\s.*)\n/\n\n``` shell\n$1\n```\n/g;

    while ($procedure =~ m/.*?(\<table\>.*?\<\/table\>\n).*/s) {
        my $pandoc = Pandoc->new(qw(-f html -t gfm --columns=120));
        my $table_md;
        $pandoc->run({ in => \$1, out => \$table_md });        
        $procedure =~ s/\Q$1/$table_md/;
    }

    $procedure =~ s/\|.*Relations.*Parent.*Hostgroups.*\n//g;
 
    return $procedure;
}

sub run {
    my ($self) = @_;

    $self->parse_options();
    $self->init();

    $self->list_packs(directory => $self->{pack_directory});
    
    local $/;
    foreach my $pack (@{$self->{packs_definitions}}) {
        open(my $fh, '<:encoding(UTF-8)', $self->{pack_directory} . '/' . $pack)
            or die "Could not open file '$self->{pack_directory}/$pack' : $!";
        my $json = <$fh>;
        close $fh;
        
        my $data = JSON::XS->new->utf8->decode($json);

        my $id = $data->{information}->{slug};
        my $title = $data->{information}->{name};
        my $version = $data->{information}->{version};
        my $status = uc($data->{information}->{status});
        my $date = strftime "%b %e %Y", localtime($data->{information}->{update_date});
        my $procedure = $self->clean_procedure(procedure => $data->{information}->{monitoring_procedure});

        my $content = <<END;
---
id: $id
title: $title
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| $version | `$status` | $date |

$procedure
END

        my $output_file = $self->{doc_directory} . '/' . $data->{information}->{slug} . '.md';

        open($fh, '>:encoding(UTF-8)', $output_file)
        or die "Could not open file '$output_file' : $!";
        print $fh $content if (defined($content) && $content ne '');
        close $fh;

        my $sidebar_id = 'integrations/plugin-packs/procedures/' . $data->{information}->{slug};
        my $category = "No Category";
        $category = $data->{information}->{discovery_category} if ($data->{information}->{discovery_category} ne '');
        $category =~ s/-/ /g;
        $category =~ s/([\w']+)/\u\L$1/g;
        push @{$self->{categories}->{$category}}, { title => $title, id => $sidebar_id };
    }
    
    # "Plugin Packs": [
    #     {
    #         "type": "subcategory",
    #         "label": "Category",
    #         "ids": [
    #             "plugin-packs/hardware-pdu-emerson-snmp",
    #             "plugin-packs/applications-haproxy-snmp"
    #     },
    #     {
    #         "type": "subcategory",
    #         "label": "Category",
    #         "ids": [
    #             "plugin-packs/hardware-pdu-emerson-snmp",
    #             "plugin-packs/applications-haproxy-snmp"
    #     }
    # ]
    foreach my $category (sort keys %{$self->{categories}}) {
        my @ids = sort { lc($a->{title}) cmp lc($b->{title}) } @{$self->{categories}->{$category}};
        @ids = map { $_->{id} } @ids;
        push @{$self->{sidebars_output}->{'Plugin Packs'}}, {
            type => 'subcategory',
            label => $category,
            ids => \@ids
        };
    }

    print JSON::XS->new->utf8->pretty->encode($self->{sidebars_output});
}

1;

__END__

=head1 NAME

create_pp_docusaurus - script to generate docusaurus documentation for Plugin Packs

=head1 SYNOPSIS

create_pp_docusaurus [options]

=head1 OPTIONS

=over 8

=item B<--pack-directory>

Specify the path to the pack directory.

=item B<--doc-directory>

Specify the path to the doc directory.

=item B<--help>

Print a brief help message and exits.

=back

=head1 DESCRIPTION

B<create_pp_docusaurus>.

=cut