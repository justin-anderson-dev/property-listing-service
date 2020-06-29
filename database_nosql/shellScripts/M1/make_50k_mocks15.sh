now=$(date)
echo "Creating 15th batch of Listings. Start time is: $now"
npm run db:mockListings 700001 725000 --wait
npm run db:mockListings 725001 750000 --wait
now=$(date)
echo "Created 50k more Listings. Stop time is: $now"