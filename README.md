# NodeJS Login page using MongoDB as database 

Login page created using Nodejs and MongoDB as database.

# Installing

If you would like to run the application:

- Clone the repo: `git clone git@github.com:iulianroman/ex1-node-login`

## For local install (mongodb service should be installed and started locally):
- Install packages: `npm install`
- Edit the  `config/database.js` if you want to change the application port or database host
- Start the server: `node server.js`
- Visit in your browser at: `http://localhost:<APPPORT>`

## For running as docker container:
- edit the `.env` file if you want to change the application port
- Run: `docker-compose up`
- Visit in your browser at: `http://localhost:<APPPORT>` 

## For running in a Kubernetes cluster:
- To run as pod: `kubectl create -f k8s-pod-node-login.yaml`
- To run as service: `kubectl create -f k8s-svc-node-login.yaml`
- Forward the service or pod in order to access it from outside the K8s cluster: `kubectl port-forward svc/node-login <APPPORT>:<APPPORT>`
- Visit in your browser at: `http://localhost:<APPPORT>`


