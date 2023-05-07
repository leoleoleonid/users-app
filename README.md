Test task:

"Users app" assignment with 3 views:
1. List view of all users (read from API/DB)
2. Form view for creating / updating user (CRUD | GraphQL)
3. Map view for user location (Google map with markers)
- Navigation between the views (menu)

User model:
- full name
- email
- address
- ACL (access level - just for information)
- home location (lat-long for map)

Tech stack
Client side:
- Angular (latest version)
- Bootstrap / other templating system (with mobile view)

Server:
- Nest JS
- MongoDB (you can use Mongoose if you like)


run dev
```bash
docker-compose --env-file=./users-server/.env  up --build
```

run prod (better to use only for images building)
```bash
docker-compose -f ./docker-compose.prod.yml --env-file=./users-server/.env  up -V --build
```