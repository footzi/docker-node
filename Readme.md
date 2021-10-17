-https://vladilen.notion.site/Docker-2021-a72201ec8573461c8a2e62e2fcf33aa3
- https://dashboard.heroku.com/apps/footzi-docker-node/deploy/heroku-container
- docker build -t registry.heroku.com/footzi-docker-node/web .
- docker tag docker-node registry.heroku.com/footzi-docker-node/web
- docker push registry.heroku.com/footzi-docker-node/web
- ????  heroku container:push web
- heroku container:release web -a footzi-docker-node

# Запуск
docker build -t registry.heroku.com/footzi-docker-node/web .
docker run -p 3000:3000 -d --rm --name docker-node registry.heroku.com/footzi-docker-node/web
docker stop docker-node

# Деплой - на Хероку только 1 контейнер можно
- heroku login
- heroku container:login
- docker build -t registry.heroku.com/footzi-docker-node/web .
- docker push registry.heroku.com/footzi-docker-node/web:latest
- heroku container:release web -a footzi-docker-node

# Команды
- docker build -t name:tag . - сборка image
- docker images - список images
- docker ps - просмотр запущенных контейнеров
- docker ps -a - просмотр всех контейнеров
- docker start CONTAINER_ID || NAME - запуск уже собранного контейнера
- docker stop CONTAINER_ID || NAME - остановка контейнера
- docker run -p 3000:3000 - запуск контейнера с прокси на порт
- docker run -d - datach - не погружение в контейнер
- docker run --name docker-node - запуск контейнера со своим именем
- docker run --rm - запуск контейнера с удалением постле остановки
- docker run --env-file ./config/.env - использование .env файла
- docker run -v logs:app/data - запуск с именованным volume
- docker logs CONTAINER_ID || NAME - логи внутри контейнера
- docker container prune - удаление не используемых контейнеров
- docker rmi IMAGE - удаление image
- docker rm CONTAINER_IDS - удаление контейнеров
- docker volume
- docker tag OLD_NAME NEW_NAME - переименование image

# Compose
- docker-compose up - запуск контейнеров
- docker-compose up -d - запуск контейнеров без интерактивного режима
- docker-compose ps - просмотр запущенных контейнеров
- docker-compose rm СONTAINER_NAME - удалить контейнер
- docker-compose stop SERVICE_NAME - остановить сервис/сервисы
- docker-compose restart SERVICE_NAME - рестарт сервиса (server/ client)
- docker-compose logs SERVICE_NAME - посмотреть логи сервиса

tty и stdin_open аналогичны аргументам -t и -i для команды docker run , соответственно.
CREATE TABLE accounts (name varchar);
SELECT * FROM accounts;