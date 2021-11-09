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

      stage('Deploy documentation to staging') {
        when { branch 'staging' }       
        steps {
          sh 'aws s3 sync --delete build s3://blablablal/'
          sh 'aws cloudfront create-invalidation --distribution-id E3T0F281DYJGMK --paths "/*"'
        }
      }
      stage('Deploy documentation to production') {
        when { branch 'production' }       
        steps {
          input message: 'Deploying to production ? (Click "Proceed" to continue)'
          sh 'aws s3 sync --delete build s3://blablablal/'
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
