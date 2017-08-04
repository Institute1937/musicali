webpack.config.js
------------------
* bundles the js/index.js into a bundle.js,  then reference in index.html. served on port 1998

webpack.sounds.js

* bundles the js/sound.js into a bundle.js, served on port 1999 - this reflects a modular version

package.json
------------------
* 'npm run dev' runs the webpack server from inside the container, docker-compose.yml references npm run dev from...out there 

* 'npm run sounds' runs the webpack server, bundling the sounds modular version of the app



