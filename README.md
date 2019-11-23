# NodeJS Login page using MongoDB as database 

Login page created using Nodejs and MongoDB as database.

# Instruction :warning:

If you would like to run the application:

- Clone the repo: `git clone git@github.com:iulianroman/ex1-node-login`
For local install (mongodb service should be installed and started locally):
- Install packages: `npm install`
- Change out the database configuration in `config/database.js`
- Launch: `node server.js`
- Visit in your browser at: `http://localhost:<APPPORT>`
For running as docker container:
- edit the .env file 
- run docker-compose up 
For running in a Kubernetes cluster:
- run kubectl create -f k8s-pod-node-login.yaml 
OR
- kubectl create -f k8s-svc-node-login.yaml


