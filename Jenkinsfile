pipeline {
    agent any

    environment {
        DOCKER_USERNAME = credentials('DOCKER_USERNAME')
        DOCKER_PASSWORD = credentials('DOCKER_PASSWORD')
        VM_IP = '3.208.86.234'
    }

    stages {
        stage('Pull Latest Images') {
            steps {
                sh '''
                    echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin
                    docker pull $DOCKER_USERNAME/polyglot-frontend:latest
                    docker pull $DOCKER_USERNAME/polyglot-backend:latest
                    docker pull $DOCKER_USERNAME/polyglot-worker:latest
                '''
            }
        }

        stage('Deploy to VM') {
            steps {
                sshagent(['SSH_KEY']) {
                    sh '''
                        ssh -o StrictHostKeyChecking=no ubuntu@${VM_IP} "
                            cd /home/ubuntu/app &&
                            docker compose pull &&
                            docker compose up -d
                        "
                    '''
                }
            }
        }

        stage('Health Check') {
            steps {
                sh 'sleep 15'
                sh "curl -f http://${VM_IP}:3000 || exit 1"
            }
        }
    }
}