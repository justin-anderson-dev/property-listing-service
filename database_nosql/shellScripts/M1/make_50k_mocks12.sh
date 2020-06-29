now=$(date)
echo "Creating 12th batch of Listings. Start time is: $now"
npm run db:mockListings 550001 575000 --wait
npm run db:mockListings 575001 600000 --wait
now=$(date)
echo "Created 50k more Listings. Stop time is: $now"