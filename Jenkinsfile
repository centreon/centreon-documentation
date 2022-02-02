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
         archiveArtifacts artifacts: "build"
       }
     }
      
     stage('Deploy PR to staging') {
       when { changeRequest target: 'staging' }
       steps {
         input message: 'Deploying PR to staging ? (Click "Proceed" to continue)'
         sh 'aws s3 sync --delete build s3://centreon-documentation-dev/'
         sh 'aws cloudfront create-invalidation --distribution-id E1BCVJJJ9ZUAQZ  --paths "/*"'
       }
     }
      
     stage('Deploy documentation to staging') {
       when { branch 'staging' }
       steps {
         sh 'aws s3 sync --delete build s3://centreon-documentation-staging/'
         sh 'aws cloudfront create-invalidation --distribution-id E3T0F281DYJGMK --paths "/*"'
       }
     }
     stage('Deploy documentation to production') {
       when { branch 'test' }      
       steps {
         input message: 'Deploying to production ? (Click "Proceed" to continue)'
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
