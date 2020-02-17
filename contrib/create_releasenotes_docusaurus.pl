#!/usr/bin/perl

package centreon::script::create_releasenotes_docusaurus;

use strict;
use warnings;
use FindBin;
use Getopt::Long;
use Pod::Usage;
use Data::Dumper;
use Sort::Versions;
use Pandoc;

centreon::script::create_releasenotes_docusaurus->new()->run();

sub new {
    my $class = shift;
    my $self = {};
    
    $self->{options} = {
        "notes-directory=s" => \$self->{notes_directory},
        "output-file=s" => \$self->{output_file},
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

    die "Set --notes-directory option" if (!defined($self->{notes_directory}) || $self->{notes_directory} eq '');
    die "$self->{notes_directory} is not a valid directory : $!" if (!-d $self->{notes_directory});
}

sub clean_file {
    my ($self, %options) = @_;
    
    my $note = $options{note};

    my $pandoc = Pandoc->new(qw(-f rst -t gfm --columns=80 --shift-heading-level-by=2));
    $pandoc->run({ in => \$note, out => \$note });

    $note =~ s/\>   -/    -/g;
    $note =~ s/\>    /     /g;
 
    return $note;
}

sub run {
    my ($self) = @_;

    $self->parse_options();
    $self->init();

    my $content = <<END;
---
id: release-notes
title: Release notes
---

## Introduction

You can find in this chapter all changelogs that give you knowledges about the
changes integrated into each releases of Centreon Web.

> It is very important when you update your system to refer to this section in
> order to learn about behavior changes or major changes that have been made on
> this version. This will let you know the impact of the installation of these
> versions on the features you use or the specific developments that you have
> built on your platform (modules, widgets, plugins).

If you have any questions relating to the content of the notes, you can ask your
questions on our [github](https://github.com/centreon/centreon).

## Releases

END
    
    return [] if (!-d $self->{notes_directory});
    opendir (DIR, $self->{notes_directory}) or die "Could not open directory '$self->{notes_directory}' : $!";

    while (my $note = readdir(DIR)) {
        next if ($note !~ /^centreon-/);
        push @{$self->{notes}}, $note;
    }
    
    local $/;
    foreach my $note (sort { versioncmp($b, $a) } @{$self->{notes}}) {
        open(my $fh, '<:encoding(UTF-8)', $self->{notes_directory} . '/' . $note)
            or die "Could not open file '$self->{notes_directory}/$note' : $!";
        my $rst = <$fh>;
        close $fh;

        my $gfm = $self->clean_file(note => $rst);
        $content .= $gfm . "\n\n";
    }
            
    open(my $fh, '>:encoding(UTF-8)', $self->{output_file}) or die "Could not open file '$self->{output_file}' : $!";
    print $fh $content if (defined($content) && $content ne '');
    close $fh;
}

1;

__END__

=head1 NAME

create_releasenotes_docusaurus - script to generate docusaurus documentation for Plugin Packs

=head1 SYNOPSIS

create_releasenotes_docusaurus [options]

=head1 OPTIONS

=over 8

=item B<--notes-directory>

Specify the path to the notes directory.

=item B<--output-file>

Specify the path to the output file.

=item B<--help>

Print a brief help message and exits.

=back

=head1 DESCRIPTION

B<create_releasenotes_docusaurus>.

=cut