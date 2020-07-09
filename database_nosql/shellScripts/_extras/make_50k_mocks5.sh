now=$(date)
echo "Creating 5th batch of Listings. Start time is: $now"
npm run db:mockListings 200001 225000 --wait
npm run db:mockListings 225001 250000 --wait
now=$(date)
echo "Created 50k more Listings. Stop time is: $now"