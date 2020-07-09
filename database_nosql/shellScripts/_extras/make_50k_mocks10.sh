now=$(date)
echo "Creating 10th batch of Listings. Start time is: $now"
npm run db:mockListings 450001 475000 --wait
npm run db:mockListings 475001 500000 --wait
now=$(date)
echo "Created 50k more Listings. Stop time is: $now"