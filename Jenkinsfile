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
      reportDir: 'preview',
      reportFiles: 'index.html',
      reportName: 'Centreon documentation preview'
    ])
  }
}
if ((env.BUILD == 'RELEASE') || (env.BUILD == 'REFERENCE')) {
  stage('Staging') {
    milestone label: 'Staging'
    node {
      sh 'setup_centreon_build.sh'
      sh "./centreon-build/jobs/doc/doc-staging.sh"
    }
  }

  stage('Release') {
    timeout(time: 1, unit: 'HOURS') {
      input message: 'Release documentation ?', ok: 'Release'
    }
    milestone label: 'Release'
    node {
      sh 'setup_centreon_build.sh'
      sh "./centreon-build/jobs/doc/doc-release.sh"
    }
  }
}
