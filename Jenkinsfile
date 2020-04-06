/*
** Variables.
*/
properties([buildDiscarder(logRotator(numToKeepStr: '50'))])
def serie = '20.04'
def maintenanceBranch = "${serie}.x"
if (env.BRANCH_NAME.startsWith('release-')) {
  env.BUILD = 'RELEASE'
} else if ((env.BRANCH_NAME == 'master') || (env.BRANCH_NAME == maintenanceBranch)) {
  env.BUILD = 'REFERENCE'
} else {
  env.BUILD = 'CI'
}

/*
** Pipeline code.
*/
node {
  stage('Source') {
    sh 'setup_centreon_build.sh'
    dir('centreon-documentation') {
      checkout scm
    }
    sh "./centreon-build/jobs/doc/doc-source.sh"
    source = readProperties file: 'source.properties'
    env.VERSION = serie
    env.RELEASE = "${source.RELEASE}"
  }

  stage('Build') {
    sh "./centreon-build/jobs/doc/doc-build.sh"
    publishHTML([
      reportDir: 'build/unstable',
      reportFiles: 'index.html',
      reportName: 'Centreon documentation preview'
    ])
  }

  if ((env.BUILD == 'RELEASE') || (env.BUILD == 'REFERENCE')) {
    stage('Delivery') {
      sh "./centreon-build/jobs/doc/doc-delivery.sh"
    }
  }
}
