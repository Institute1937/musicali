#rebuilds both the image and also does npm install inside container
docker-compose -f docker-compose.build.yml up --build

