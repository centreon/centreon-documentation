pipeline {
    agent { label 'aws' } 
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
        when { branch 'staging' }        
        steps {
          input message: 'Deploying to staging ? (Click "Proceed" to continue)'
          sh 'aws s3 sync --delete build s3://centreon-documentation-staging/'
          sh 'aws cloudfront create-invalidation --distribution-id E2RGAHPD1BRMW0 --paths "/*"'
        }
      }
    } 
    post { 
      always { 
        cleanWs()
      }
    }
}
