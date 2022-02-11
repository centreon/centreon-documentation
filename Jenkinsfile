pipeline {
   agent any
   stages {
 
     stage('Install documentation dependencies') {
       when {
         not { branch 'production' }
       }
       steps {
         echo 'Using Yarn to install dependencies'
         sh 'cd .. && sudo npm cache clean -f && sudo npm install -g n && sudo n latest'
         sh 'yarn install'
       }
     }
     stage('Build documentation') {
       when {
         not { branch 'production' }
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
         //sh 'aws s3 sync --delete build s3://centreon-documentation-preview-pr/ --exclude "robots.txt"'
         //sh 'aws cloudfront create-invalidation --distribution-id E1JOAJFE0XFP6P  --paths "/*"'
       }
     }
     /* 
     stage('Deploy documentation to staging') {
       when { branch 'staging' }
       steps {
         sh 'rsync -e "ssh -o StrictHostKeyChecking=no" -arzvh --delete build/* admin@docs-dev.int.centreon.com:/var/www/html/'
         //TODO : invalidate cloudfront cache
         //sh 'aws cloudfront create-invalidation --distribution-id ID_DISTRIB_STAGING --paths "/*"'
         
       }
     }
     stage('Deploy documentation to production') {
       when { branch 'test' }      
       steps {
         input message: 'Deploying to production? (Click "Proceed" to continue)'
         sh 'ssh -o StrictHostKeyChecking=no admin@docs-dev.int.centreon.com rsync -arzvh --delete /var/www/html admin@docs.int.centreon.com:/var/www/'
         sh 'aws cloudfront create-invalidation --distribution-id E4YWX2X3MLBMI --paths "/*"'
       }
     }*/
   }
   post {
     always {
       cleanWs()
     }
   }
}
