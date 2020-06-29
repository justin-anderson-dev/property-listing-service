now=$(date)
echo "Creating 1st batch of Listings. Start time is: $now"
npm run db:mockListings 1 25000 --wait
npm run db:mockListings 25001 50000 --wait
now=$(date)
echo "Created 50k new Listings. Stop time is: $now"