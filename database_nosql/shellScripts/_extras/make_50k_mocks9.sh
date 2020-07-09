now=$(date)
echo "Creating 9th batch of Listings. Start time is: $now"
npm run db:mockListings 400001 425000 --wait
npm run db:mockListings 425001 450000 --wait
now=$(date)
echo "Created 50k more Listings. Stop time is: $now"