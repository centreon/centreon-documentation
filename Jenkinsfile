pipeline {
    agent any 
    stages {

      stage('Install documentation dependencies') {
        steps {
            echo 'Using Yarn to install dependencies'
            sh 'yarn install'
        }
      }

      stage('Build documentation') {
        steps {
          echo 'Using yarn to build documentation'
          sh 'yarn build'
        }
      }

      stage('Deploy documentation') {
        when {
          expression { BRANCH_NAME ==~ /(production|staging)/ }
            anyOf {
              environment name: 'DEPLOY_TO', value: 'production'
              environment name: 'DEPLOY_TO', value: 'staging'
            }
        }
        steps {
          input message: 'Deploying to staging ? (Click "Proceed" to continue)'
          sh 'aws s3 sync --delete build s3://centreon-documentation-staging/'
          sh 'aws cloudfront create-invalidation --distribution-id E2RGAHPD1BRMW0 --paths "/*"'
        }
      }
    } 
}