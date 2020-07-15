## Extra support backend

### Installation and run backend
- `cd backend`
- Create local `.env` using the `.env.example`
- `yarn`
- `yarn dev`

### Import the categories collection to the database 
- `run the database using docker-compose up`
- `cd backend/src/db`
- `run this command: mongoimport  --db=ESDevDB  --port=27017 --file=categories.json --collection=categories --jsonArray`
