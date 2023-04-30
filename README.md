run dev
```bash
docker-compose --env-file=./users-server/.env  up --build
```

run prod (only to build prod images)
```bash
docker-compose -f ./docker-compose.prod.yml --env-file=./users-server/.env  up -V --build
```