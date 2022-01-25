pipeline {
   agent any
   stages {
 
     stage('Install dev documentation dependencies') {
       steps {
         echo 'Using Yarn to install dependencies'
         sh 'cd .. && sudo npm cache clean -f && sudo npm install -g n && sudo n latest'
         sh 'yarn install --verbose'
       }
     }
     stage('Build dev documentation') {
       steps {
         echo 'Using yarn to build documentation'
         sh 'export NODE_OPTIONS=--max_old_space_size=16000 && yarn build'
       }
     }
     stage('Deploy next documentation release version to dev environment') {
       when { branch 'next' }
       steps {
         sh 'aws s3 sync --delete build s3://centreon-documentation-dev/*'
         sh 'aws cloudfront create-invalidation --distribution-id E1BCVJJJ9ZUAQZ --paths "/*"'
       }
     }
   }
   post {
     always {
       cleanWs()
     }
   }
}
