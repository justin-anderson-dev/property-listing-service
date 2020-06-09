# Project Name

> NotReallyAirBnB Property Listing Service

## Related Projects

  - https://github.com/RPT20-FEC/tbd
  - https://github.com/RPT20-FEC/tbd
  - https://github.com/RPT20-FEC/tbd
  - https://github.com/RPT20-FEC/tbd

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#requirements)
3. [Development](#development)

## Usage

> API Endpoints:
GET /:id
- Responds with an HTML page displaying listing details for the property with matching `listingId: ${id}` or `headline: ${id}`

POST /listings/add/new
- Adds a single new property listing or multiple new listings. Data payload should be in the request body.
- Throws error if listing with matching `listingId` or `headline` property already exists in table

GET /listings/:id
- Responds with JSON object containing listing data for the single listing matching `listingId: ${id}` or `headline: ${id}`
- Ex: `GET listings/1001` or `GET listings/Bright%20and%20Airy%20in%20Highland%20Park`

GET /listings/all
- Actually this is a pretty bad idea for a DB with 10M records, isn't it?

PUT /listings/:id
- Updates a single property listing matching `listingId: ${id}` or `headline: ${id}`. Data payload should be in request body.

DELETE /listings/:id
- Deletes a single property listing matching `listingId: ${id}` or `headline: ${id}`


## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 12.16.2
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

