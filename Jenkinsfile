pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                env.NODE_ENV = "test"
                    sh 'node -v'
                    sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
