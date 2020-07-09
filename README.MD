## Extra support

This an app that connect students with professionals where a professional can offer their service for students

`git clone https://github.com/CodeYourFuture/extra-support.git` or if you use SSH (recommended):`git clone git@github.com:CodeYourFuture/extra-support.git`

#### [Installation and run backend](./backend/README.md)

- `cd backend`
- Create local `.env` using the `.env.example`
- `yarn`
- `yarn dev`

#### [Installation and run database](https://github.com/CodeYourFuture/extra-support/wiki/Get-the-local-database-ready)
* Install docker - https://docs.docker.com/
* Install docker-compose - https://docs.docker.com/compose/install/
* In the root of extra-support/backend run **`docker-compose up`** or **`sudo docker-compose up`** to run local mongo database

----
#### If you see this error:
   > `ERROR: for cyf-api_mongo_1  Cannot start service mongo: driver failed programming external connectivity `
    `on endpoint cyf-api_mongo_1 (31cd76eff115cb562f0d52e5575f30c04eb9dea0017f4c56217caefcdfec07f3): Bind for `
     `0.0.0.0:27017 failed: port is already allocated`
     `ERROR: for mongo  Cannot start service mongo: driver failed programming external connectivity on endpoint `
     `cyf-api_mongo_1 (31cd76eff115cb562f0d52e5575f30c04eb9dea0017f4c56217caefcdfec07f3): Bind for 0.0.0.0:27017 `
     `failed: port is already allocated`
     `ERROR: Encountered errors while bringing up the project.`

 run **`sudo service mongodb stop`** or **`docker stop $(docker ps -aq)`** and than re-run 
      **`docker-compose up`** or **`sudo docker-compose up`**

#### [Installation and run frontend](./frontend/README.md)

- `cd frontend`
- Create local `.env` using the `.env.example`
- `yarn`
- `yarn start`

App well be running on `http://localhost:3000`
