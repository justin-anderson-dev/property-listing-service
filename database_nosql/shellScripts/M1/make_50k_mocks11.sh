now=$(date)
echo "Creating 11th batch of Listings. Start time is: $now"
npm run db:mockListings 500001 525000 --wait
npm run db:mockListings 525001 550000 --wait
now=$(date)
echo "Created 50k more Listings. Stop time is: $now"