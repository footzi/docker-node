build:
	docker build -t registry.heroku.com/footzi-docker-node/web .

run:
	docker run -p 3000:3000 -d --rm --name docker-node registry.heroku.com/footzi-docker-node/web

stop:
	docker stop docker-node

build-server:
	cd server && docker build -t server .

run-server:
	docker run -p 3000:3000 -d --rm --name server server

stop-server:
	docker stop server
