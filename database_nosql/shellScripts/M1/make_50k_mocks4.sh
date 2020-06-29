now=$(date)
echo "Creating 4th batch of Listings. Start time is: $now"
npm run db:mockListings 150001 175000 --wait
npm run db:mockListings 175001 200000 --wait
now=$(date)
echo "Created 50k more Listings. Stop time is: $now"