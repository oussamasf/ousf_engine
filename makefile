up:
	export $(grep -v '^#' .env | xargs)
	docker-compose up -d 

rebuild: 
	export $(grep -v '^#' .env | xargs)
	docker-compose up -d --build 

server-stop:
	pm2 stop ecosystem.config.js

server-kill:
	pm2 delete ecosystem.config.js