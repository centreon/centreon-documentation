pipeline {
   agent any
   stages {
 
     stage('Install documentation dependencies') {
       when {
         not { branch 'test' }
       }
       steps {
         echo 'Using Yarn to install dependencies'
         sh 'cd .. && sudo npm cache clean -f && sudo npm install -g n && sudo n latest'
         sh 'yarn install --verbose'
       }
     }
     stage('Build documentation') {
       when {
         not { branch 'test' }
       }
       steps {
         echo 'Using yarn to build documentation'
         sh 'export NODE_OPTIONS=--max_old_space_size=16000 && yarn build'
         sh 'tar czf build.tar.gz build'
         archiveArtifacts artifacts: "build.tar.gz"
       }
     }
      
     stage('Deploy PR to prewiew platform') {
       when { changeRequest target: 'staging' }
       steps {
         input message: 'Deploy PR to prewiew platform? (Click "Proceed" to continue)'
         sh 'aws s3 sync --delete build s3://centreon-documentation-dev/'
         sh 'aws cloudfront create-invalidation --distribution-id E1BCVJJJ9ZUAQZ  --paths "/*"'
       }
     }
      
     stage('Deploy documentation to staging') {
       when { branch 'staging' }
       steps {
         sh 'ssh -o StrictHostKeyChecking=no admin@10.24.11.179 sudo rm -Rf /var/www/html/*'
         sh 'scp -r build/* admin@10.24.11.179:/var/www/html'
       }
     }
     stage('Deploy documentation to production') {
       when { branch 'test' }      
       steps {
         input message: 'Deploying to production? (Click "Proceed" to continue)'
         sh 'aws s3 sync --delete s3://centreon-documentation-staging/ s3://centreon-documentation-production/'
         sh 'aws cloudfront create-invalidation --distribution-id E2ZKHBQFFL6WGV --paths "/*"'
       }
     }
   }
   post {
     always {
       cleanWs()
     }
   }
}
