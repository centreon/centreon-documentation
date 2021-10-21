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
                expression { BRANCH_NAME ==~ /(master|staging)/ }
                anyOf {
                    environment name: 'DEPLOY_TO', value: 'production'
                    environment name: 'DEPLOY_TO', value: 'staging'
                }
            }
            steps {
                echo 'Deploying documentation'
                //some s3 cp and cloudfront invalidations
            }
        }
  }
}