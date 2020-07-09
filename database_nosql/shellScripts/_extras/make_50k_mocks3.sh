now=$(date)
echo "Creating 3rd batch of Listings. Start time is: $now"
npm run db:mockListings 100001 125000 --wait
npm run db:mockListings 125001 150000 --wait
now=$(date)
echo "Created 50k more Listings. Stop time is: $now"