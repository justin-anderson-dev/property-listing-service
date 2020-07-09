now=$(date)
echo "Creating 7th batch of Listings. Start time is: $now"
npm run db:mockListings 300001 325000 --wait
npm run db:mockListings 325001 350000 --wait
now=$(date)
echo "Created 50k more Listings. Stop time is: $now"