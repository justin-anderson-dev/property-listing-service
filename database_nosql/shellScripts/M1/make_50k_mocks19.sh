now=$(date)
echo "Creating 19th batch of Listings. Start time is: $now"
npm run db:mockListings 900001 925000 --wait
npm run db:mockListings 925001 950000 --wait
now=$(date)
echo "Created 50k more Listings. Stop time is: $now"