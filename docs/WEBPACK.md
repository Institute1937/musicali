webpack.config.js
------------------
* bundles the js/index.js into a bundle.js,  then reference in index.html. served on port 1998

package.json
------------------
* 'npm run dev' runs the webpack server from inside the container, docker-compose.yml references npm run dev from...out there 

docker-compose.yml
------------------
* one service initially, for the front end ("no-youre-a-docker")
* builds in current directory
* makes an image - seaside
* makes a container - landlocked
* makes the yesmate directory available to the container as /root/inhere
* runs a python server serving that directory on 1998 (later change to running npm run dev on 1998)
* maps it to the host on 8080

useful commands / troubleshooting
------------------
* docker images - list images
* docker ps - list containers
* docker exec landlocked cat /etc/os-release - runs a command inside a container
* docker-compose down


