start.sh
------------------
* script which runs the docker command and opens in browser. thats it!

Dockerfile
------------------
* Base image is Ubuntu
* Installs python 

docker-compose.yml
------------------
* one service initially, for the front end ("no-youre-a-docker")
* builds in current directory
* makes an image - seaside
* makes a container - landlocked
* makes the yesmate directory available to the container as /root/inhere
* runs a python server serving that directory on 1998
* maps it to the host on 8080

useful commands / troubleshooting
------------------
* docker images - list images
* docker ps - list containers
* docker exec landlocked cat /etc/os-release - runs a command inside a container

