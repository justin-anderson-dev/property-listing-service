now=$(date)
echo "Creating 2nd batch of Listings. Start time is: $now"
npm run db:mockListings 50001 75000 --wait
npm run db:mockListings 75001 100000 --wait
now=$(date)
echo "Created 50k more Listings. Stop time is: $now"