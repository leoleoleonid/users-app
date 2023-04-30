run dev
```bash
docker-compose --env-file=./users-server/.env  up --build
```

run prod (better to use only for images building)
```bash
docker-compose -f ./docker-compose.prod.yml --env-file=./users-server/.env  up -V --build
```