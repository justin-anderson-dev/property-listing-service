// this file connects to an existing PostgresQL instance and creates the database 'property_service' with tables 'listings' and 'features' as defined below
const sql = require('./db.js');

/**
 * 'features' table definition:
 * CREATE TABLE features (
 * "idString" varchar(50) PRIMARY KEY,
 * "featureTitle" varchar(50) NOT NULL,
 * "featureDescr" varchar(80) NULL,
 * "iconUrl" varchar(140) NOT NULL
 * );
 */

/**
 * CREATE TABLE listings (
 * "listingId" int PRIMARY KEY,
 * "hostId" int NOT NULL,
 * "price" int NOT NULL,
 * "typeOfRoom" varchar(50) NOT NULL,
 * "headline" varchar(255) UNIQUE,
 * "stars" int,
 * "reviews" int,
 * "superHost" boolean,
 * "location" varchar(80) NOT NULL,
 * "guestCapacity" int,
 * "totalBedrooms" int,
 * "totalBeds" int,
 * "totalBaths" int,
 * "descriptionText" text,
 * "topFeatures" jsonb,
 * "keyAmenities" jsonb,
 * "allAmenities" jsonb,
 * "sleepArrangements" jsonb
 * );
 */