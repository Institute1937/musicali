export UID = $(id -u)
export GID = $(id -g)

prepare: install start

start:
	docker-compose up

local:
	cd yesmate && npm run dev

install:
	docker-compose run --rm --no-deps no-youre-a-docker bash -ci 'npm install'

sounds:
	cd yesmate && npm run sounds