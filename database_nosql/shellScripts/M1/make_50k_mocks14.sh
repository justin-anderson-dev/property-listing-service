now=$(date)
echo "Creating 14th batch of Listings. Start time is: $now"
npm run db:mockListings 650001 675000 --wait
npm run db:mockListings 675001 700000 --wait
now=$(date)
echo "Created 50k more Listings. Stop time is: $now"