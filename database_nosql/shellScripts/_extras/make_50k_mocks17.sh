now=$(date)
echo "Creating 17th batch of Listings. Start time is: $now"
npm run db:mockListings 800001 825000 --wait
npm run db:mockListings 825001 850000 --wait
now=$(date)
echo "Created 50k more Listings. Stop time is: $now"