## Getting Started

Clone the repo into a directory. Navigate to the directory and run `docker-compose up`. This will build and start the project.

Navigate to `localhost:3000` to view the app.

## Database

Once the containers are up, the following commands can be run to migrate models to the database, initialzie the Prisma client, and run Prisma Studio.

1. `docker-compose run app npx prixma migrate deploy`
2. `docker-compose run app npx prixma generate`
3. `docker-compose run -p 5555:5555 app npx prisma studio`

Navigate to `localhost:3000` to use the databse inspector.
