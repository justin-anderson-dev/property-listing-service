now=$(date)
echo "Creating 5th batch of Listings. Start time is: $now"
npm run db:mockListings 100001 125000
now=$(date)
echo "Stop time is: $now"