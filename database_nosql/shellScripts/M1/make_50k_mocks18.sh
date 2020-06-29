now=$(date)
echo "Creating 18th batch of Listings. Start time is: $now"
npm run db:mockListings 850001 875000 --wait
npm run db:mockListings 875001 900000 --wait
now=$(date)
echo "Created 50k more Listings. Stop time is: $now"