now=$(date)
echo "Creating Listings. Start time is: $now"

node --max-old-space-size=8192 database_sql/mockMaker.js 1 1000000

now=$(date)
echo "Stop time is: $now"