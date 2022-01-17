pipeline {
    agent any
    stages {

      stage('Install documentation dependencies') {
        steps {
          echo 'Using Yarn to install dependencies'
          sh 'cd .. && sudo npm cache clean -f && sudo npm install -g n && sudo n latest'
          sh 'yarn install --verbose'
        }
      }
      stage('Build documentation') {
        steps {
          echo 'Using yarn to build documentation'
          sh 'export NODE_OPTIONS=--max_old_space_size=32000 && yarn build'
        }
      }
      stage('Deploy documentation to staging') {
        when { branch 'staging' }       
        steps {
          sh 'aws s3 sync --delete build s3://centreon-documentation-test-prod/'
          sh 'aws cloudfront create-invalidation --distribution-id E3T0F281DYJGMK --paths "/*"'
        }
      }
      stage('Deploy documentation to production') {
        when { branch 'production' }       
        steps {
          input message: 'Deploying to production ? (Click "Proceed" to continue)'
          sh 'aws s3 sync --delete build s3://centreon-documentation-test-prod/'
          sh 'aws cloudfront create-invalidation --distribution-id E3T0F281DYJGMK --paths "/*"'
        }
      }
    } 
    post { 
      always { 
        cleanWs()
      }
    }
}
