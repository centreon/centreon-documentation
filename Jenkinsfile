/*
** Variables.
*/
properties([buildDiscarder(logRotator(numToKeepStr: '50'))])
def serie = '21.04'
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
def inputError = false
try {
  node {
    stage('Source') {
      sh 'setup_centreon_build.sh'
      dir('centreon-documentation') {
        checkout scm
      }
      sh "./centreon-build/jobs/doc/21.04/doc-source.sh"
      source = readProperties file: 'source.properties'
      env.VERSION = serie
      env.RELEASE = "${source.RELEASE}"
      archiveArtifacts artifacts: 'assets_diff_en.txt, assets_diff_fr.txt'
    }

    stage('Build') {
      sh "./centreon-build/jobs/doc/21.04/doc-build.sh"
      stash name: 'vanilla-build', includes: 'vanilla.tar.gz'
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
        unstash 'vanilla-build'
        sh "./centreon-build/jobs/doc/21.04/doc-staging.sh"
        stash name: 'prod-build', includes: 'prod.tar.gz'
      }
    }

    stage('Release') {
      timeout(time: 1, unit: 'HOURS') {
        inputError = true
        input message: 'Release documentation ?', ok: 'Release'
        inputError = false
      }
      milestone label: 'Release'
      node {
        sh 'setup_centreon_build.sh'
        unstash 'prod-build'
        sh "./centreon-build/jobs/doc/21.04/doc-release.sh"
      }
    }
 
  }
} catch(e) {
  if (!inputError) {
    if ((env.BUILD == 'RELEASE') || (env.BUILD == 'REFERENCE')) {
      slackSend channel: "#documentation",
        color: "#F30031",
        message: "*FAILURE*: `CENTREON DOCUMENTATION` <${env.BUILD_URL}|build #${env.BUILD_NUMBER}> on branch ${env.BRANCH_NAME}\n" +
            "*COMMIT*: <https://github.com/centreon/centreon-documentation/commit/${source.COMMIT}|here> by ${source.COMMITTER}\n" +
            "*INFO*: ${e}"
    }
    currentBuild.result = 'FAILURE'
  } else {
    currentBuild.result = 'SUCCESS'
  }
}
