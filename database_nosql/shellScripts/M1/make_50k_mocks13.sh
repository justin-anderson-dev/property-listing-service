now=$(date)
echo "Creating 13th batch of Listings. Start time is: $now"
npm run db:mockListings 600001 625000 --wait
npm run db:mockListings 625001 650000 --wait
now=$(date)
echo "Created 50k more Listings. Stop time is: $now"