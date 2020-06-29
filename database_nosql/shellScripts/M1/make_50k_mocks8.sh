now=$(date)
echo "Creating 8th batch of Listings. Start time is: $now"
npm run db:mockListings 350001 375000 --wait
npm run db:mockListings 375001 400000 --wait
now=$(date)
echo "Created 50k more Listings. Stop time is: $now"