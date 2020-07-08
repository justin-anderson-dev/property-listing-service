now=$(date)
echo "Creating 3rd batch of Listings. Start time is: $now"
npm run db:mockListings 50001 75000
now=$(date)
echo "Stop time is: $now"