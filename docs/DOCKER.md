start.sh
------------------
* script which runs the docker command and opens in browser. thats it!

Dockerfile
------------------
* Base image is Ubuntu
* Installs curl and node

docker-compose.yml / start.sh
------------------
* one service initially, for the front end ("no-youre-a-docker")
* builds in current directory
* makes an image - seaside
* makes a container - landlocked
* makes the yesmate directory available to the container as /root/inhere
* runs a python server serving that directory on 1998 (later change to running npm run dev on 1998)
* maps it to the host on 8080
* is run by ./start.sh

docker-compose.build.yml / rebuild.sh
------------------
* same as docker-compose.yml but also does an npm install, done via an install-npm.sh script instead of direct reference to command
* is run by ./rebuild.sh

yesmate/install-npm.sh
------------------
* runs npm install and then npm run dev



useful commands / troubleshooting
------------------
* docker images - list images
* docker ps - list containers
* docker exec landlocked cat /etc/os-release - runs a command inside a container
* docker-compose down


