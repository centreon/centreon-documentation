pipeline {
   agent any
   stages {
     stage('Install next documentation dependencies') {
       steps {
         echo 'Using Yarn to install dependencies'
         sh 'cd ~ && curl -sL https://deb.nodesource.com/setup_16.x | sudo bash - && sudo apt install nodejs -y'
         sh 'sudo n 16'
         sh 'yarn install'
       }
     }
     stage('Build next documentation') {
       steps {
         echo 'Using yarn to build documentation'
         sh 'yarn build'
       }
     }
     stage('Deploy next documentation release version to next environment') {
       when { branch 'next' }
       steps {
         sh 'aws s3 sync --delete build s3://centreon-documentation-next/'
         sh 'aws cloudfront create-invalidation --distribution-id E2DXODEFBNUFTG --paths "/*"'
       }
     }
   }
   post {
     always {
       cleanWs()
     }
   }
}
