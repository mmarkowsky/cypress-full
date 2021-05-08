pipeline {

    agent any
    
    tools {nodejs "node"}

    stages {
        stage('Test the Project') {
            steps {
                git 'https://github.com/mmarkowsky/cypress-full.git'
                echo pwd()
                sh 'npm install'
                sh 'npm update'
                sh 'npm run dashboard'
                echo "Testing finish"
            }
        }
}