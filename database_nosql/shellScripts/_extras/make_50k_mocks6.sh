now=$(date)
echo "Creating 6th batch of Listings. Start time is: $now"
npm run db:mockListings 250001 275000 --wait
npm run db:mockListings 275001 300000 --wait
now=$(date)
echo "Created 50k more Listings. Stop time is: $now"