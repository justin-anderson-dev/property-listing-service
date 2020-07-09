now=$(date)
echo "Creating 16th batch of Listings. Start time is: $now"
npm run db:mockListings 750001 775000 --wait
npm run db:mockListings 775001 800000 --wait
now=$(date)
echo "Created 50k more Listings. Stop time is: $now"