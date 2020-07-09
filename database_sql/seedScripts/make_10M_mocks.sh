now=$(date)
echo "Creating Listings. Start time is: $now"
node --max-old-space-size=8192 database_sql/mockMaker.js 1 200000
node --max-old-space-size=8192 database_sql/mockMaker.js 200001 400000
node --max-old-space-size=8192 database_sql/mockMaker.js 400001 600000
node --max-old-space-size=8192 database_sql/mockMaker.js 600001 800000
node --max-old-space-size=8192 database_sql/mockMaker.js 800001 1000000

node --max-old-space-size=8192 database_sql/mockMaker.js 1000001 1200000
node --max-old-space-size=8192 database_sql/mockMaker.js 1200001 1400000
node --max-old-space-size=8192 database_sql/mockMaker.js 1400001 1600000
node --max-old-space-size=8192 database_sql/mockMaker.js 1600001 1800000
node --max-old-space-size=8192 database_sql/mockMaker.js 1800001 2000000

node --max-old-space-size=8192 database_sql/mockMaker.js 2000001 2200000
node --max-old-space-size=8192 database_sql/mockMaker.js 2200001 2400000
node --max-old-space-size=8192 database_sql/mockMaker.js 2400001 2600000
node --max-old-space-size=8192 database_sql/mockMaker.js 2600001 2800000
node --max-old-space-size=8192 database_sql/mockMaker.js 2800001 3000000

node --max-old-space-size=8192 database_sql/mockMaker.js 3000001 3200000
node --max-old-space-size=8192 database_sql/mockMaker.js 3200001 3400000
node --max-old-space-size=8192 database_sql/mockMaker.js 3400001 3600000
node --max-old-space-size=8192 database_sql/mockMaker.js 3600001 3800000
node --max-old-space-size=8192 database_sql/mockMaker.js 3800001 4000000

node --max-old-space-size=8192 database_sql/mockMaker.js 4000001 4200000
node --max-old-space-size=8192 database_sql/mockMaker.js 4200001 4400000
node --max-old-space-size=8192 database_sql/mockMaker.js 4400001 4600000
node --max-old-space-size=8192 database_sql/mockMaker.js 4600001 4800000
node --max-old-space-size=8192 database_sql/mockMaker.js 4800001 5000000

node --max-old-space-size=8192 database_sql/mockMaker.js 5000001 5200000
node --max-old-space-size=8192 database_sql/mockMaker.js 5200001 5400000
node --max-old-space-size=8192 database_sql/mockMaker.js 5400001 5600000
node --max-old-space-size=8192 database_sql/mockMaker.js 5600001 5800000
node --max-old-space-size=8192 database_sql/mockMaker.js 5800001 6000000

node --max-old-space-size=8192 database_sql/mockMaker.js 6000001 6200000
node --max-old-space-size=8192 database_sql/mockMaker.js 6200001 6400000
node --max-old-space-size=8192 database_sql/mockMaker.js 6400001 6600000
node --max-old-space-size=8192 database_sql/mockMaker.js 6600001 6800000
node --max-old-space-size=8192 database_sql/mockMaker.js 6800001 7000000

node --max-old-space-size=8192 database_sql/mockMaker.js 7000001 7200000
node --max-old-space-size=8192 database_sql/mockMaker.js 7200001 7400000
node --max-old-space-size=8192 database_sql/mockMaker.js 7400001 7600000
node --max-old-space-size=8192 database_sql/mockMaker.js 7600001 7800000
node --max-old-space-size=8192 database_sql/mockMaker.js 7800001 8000000

node --max-old-space-size=8192 database_sql/mockMaker.js 8000001 8200000
node --max-old-space-size=8192 database_sql/mockMaker.js 8200001 8400000
node --max-old-space-size=8192 database_sql/mockMaker.js 8400001 8600000
node --max-old-space-size=8192 database_sql/mockMaker.js 8600001 8800000
node --max-old-space-size=8192 database_sql/mockMaker.js 8800001 9000000

node --max-old-space-size=8192 database_sql/mockMaker.js 9000001 9200000
node --max-old-space-size=8192 database_sql/mockMaker.js 9200001 9400000
node --max-old-space-size=8192 database_sql/mockMaker.js 9400001 9600000
node --max-old-space-size=8192 database_sql/mockMaker.js 9600001 9800000
node --max-old-space-size=8192 database_sql/mockMaker.js 9800001 10000000

now=$(date)
echo "Stop time is: $now"
