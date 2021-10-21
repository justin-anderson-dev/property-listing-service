# NotReallyAirBnB Property Listing Service

It's like AirBnB, but... not really.
   
<br>

## Table of Contents

1. [Description](#Description)
2. [Getting Started](#Getting-Started)
3. [Related Projects](#Related-Projects)
4. [API](#API)
  
<br>

## Description

_This repo is one-fourth of a team full-stack system design project. The project uses a microservice architecture to create an **AirBnB** clone, with each team member responsible for one critical service -- in my case, the property listing details. See [Related Projects](#Related-Projects) below for links._
 
### Frontend and Data Modeling

I began by breaking down the AirBnB listing details UI and creating a React component tree to match it. I used the information in sample listings to create database schema to store TK unique pieces of information about each property listing. I styled the Listing Details module to match the actual AirBnB UI.
 
 ![SDC-frontend-lorem](https://user-images.githubusercontent.com/42009003/138357146-4e4cfdba-2df0-4b34-baa3-b01d4dcee0bc.png)

 <img width="1455" alt="modal" src="https://user-images.githubusercontent.com/42009003/138357218-9db468b7-468d-4987-b2e2-f1392d6e1820.png">

### Database Seeding

To simulate the demands of an enterprise-scale production app, I created a script to seed my database with **10 million realistic mock records**. I tested both relational and non-relational databases for performance with my schema before ultimately selecting PostgresQL.

### Proxy Server

After getting the backend API up and running, I built a proxy server to bring all four of the team's microservices together into a single browser view, as depicted below. 
 
![AirBnB Clone - Property Service](https://user-images.githubusercontent.com/42009003/138357692-a8c7fd54-1fb8-4f06-9daa-1147b0b1b2a4.png)

 
### Testing and Tuning

Once all aspects of the system -- frontend, API, database, and proxy -- were working and connected, I began the process of performance tuning, with the goal of being able to respond to 1000 requests per second in less than 1 second each, with an error rate below 5%. 

My biggest initial performance gains came from implementing Lighthouse recommendations on the frontend client build.

<img width="1221" alt="Screen Shot 2021-10-13 at 12 52 19 PM" src="https://user-images.githubusercontent.com/42009003/138357915-b7969788-9c8a-4a1d-b435-8a2933938275.png">

To achieve my 1000rps goal, I created an Nginx load-balanced cluster of three servers for the Property Listing Details service. This cut down my **average response time under 1000rps load by 98%**.

<img width="1008" alt="Screen Shot 2021-10-13 at 12 55 06 PM" src="https://user-images.githubusercontent.com/42009003/138358796-a944dd64-0876-4744-ae4a-b2e6d0ea84e7.png">
<img width="1007" alt="Screen Shot 2021-10-13 at 12 55 28 PM" src="https://user-images.githubusercontent.com/42009003/138358821-070fac14-3546-46f3-8d10-2bf7351717cd.png">
 
<br>


## Getting Started

This project comprises the Listing Details service only. There are three other services, plus a proxy server, needed to re-create the entire AirBnB clone. (See [Related Projects](#Related-Projects) below.)

**These instructions are sufficient to get this single microservice running, seed the database with 1M mock records, and make the API available locally.**

<br>

### Requirements

- The backend is built on **Node 12.16.2**. More recent versions may also be supported, but I can't guarantee that!
- **Postgres 14.0 or greater must be installed and running** locally in order to seed the database.
- You need to create a `.env` file at the root level of your project directory, containing the following variables:
  ```sh
  PGHOST='127.0.0.1'
  PGPORT=5432 (default Postgres port number)
  PGDATABASE='property_service'
  PGUSER='{username for your Postgres install}'
  PGPASSWORD='{password for your Postgres user}'
  API_URL='http://localhost:3005'
  PORT=3005
  S3_URL='https://listing-service-images.s3-us-west-1.amazonaws.com' (or other location for your image hosting service)
  ```
 
<br>

### Development

The instructions below will set up a dev environment for continued work on the system. For a production build, use the appropriate scripts included in the `package.json` file to start the production server and build the client app.

#### 1. **Install Dependencies**

After cloning the repo to your local machine, from within the root directory:

```sh
npm install
```

#### 2. **Seed Database**

Though the production version of this project used 10M primary records, the sample seeding script included with this version will seed the database with 1M records. That should be plenty for demo purposes. If you need more, feel free to tweak the scripts.

MORE TK

#### 3. **Start Server**

MORE TK

#### 4. **Build Client**

MORE TK


<br>


## Related Projects

  - [Host Info service](https://github.com/RPT20-FEC/host-service-SDC)
  - [Photo Service](https://github.com/RPT20-FEC/photo-service)
  - [Similar Properties service](https://github.com/RPT20-FEC/similarprops-service-SDC)
  - [Proxy server](https://github.com/RPT20-FEC/sdc-justin-proxy)
 
<br>


## API

Once you have the service up and running, the following API endpoints will be available at the server url.

**Endpoints:**

`GET /:id`
- Responds with an HTML page displaying listing details for the property with matching `listingId: ${id}` or `headline: ${id}`

`POST /listings/add/new`
- Adds a single new property listing or multiple new listings. Data payload should be in the request body.
- Throws error if listing with matching `listingId` or `headline` property already exists in table

`GET /listings/:id`
- Responds with JSON object containing listing data for the single listing matching `listingId: ${id}` or `headline: ${id}`
- Ex: `GET listings/1001` or `GET listings/Bright%20and%20Airy%20in%20Highland%20Park`

`GET /listings/all`
- Actually this is a pretty bad idea for a DB with 10M records, isn't it?

`PUT /listings/:id/update`
- Updates a single property listing matching `listingId: ${id}` or `headline: ${id}`. Data payload should be in request body.

`DELETE /listings/:id/delete`
- Deletes a single property listing matching `listingId: ${id}` or `headline: ${id}`
