### UTeam API

## Как запустить

```
Первый запуск

npm i 
docker-compose up -d

Перебилдить контейнеры

docker-compose up -d --build
```

## Как подключиться к бд

```
DB_HOST=localhost
DB_PORT=3306

DB_NAME=uteam-db
DB_PASSWORD=123234345
```

## Работа с миграциями

```
Создать миграцию
npm run typeorm:migrate -n {{название миграции}}

Запустить миграцию
docker-compose exec uteam-api npm run typeorm:run

Отменить последнюю миграцию
docker-compose exec uteam-api npm run typeorm:revert
```


