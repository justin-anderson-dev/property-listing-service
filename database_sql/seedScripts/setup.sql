CREATE TABLE features (
id_string varchar(50) PRIMARY KEY,
feature_title varchar(50) NOT NULL,
feature_descr varchar(120) NULL,
icon_url varchar(255) NOT NULL
);

CREATE TABLE listings (
listing_id int PRIMARY KEY,
host_id int NOT NULL,
headline varchar(255) UNIQUE,
price int NOT NULL,
type_of_room varchar(50) NOT NULL,
stars float,
reviews int,
superhost boolean,
sleep_arrangements jsonb,
location varchar(80) NOT NULL,
total_beds int,
guest_capacity int,
total_bedrooms int,
total_baths int,
description_text text,
top_features jsonb,
key_amenities jsonb,
all_amenities jsonb
);
