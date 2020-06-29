now=$(date)
echo "Creating 4th batch of Listings. Start time is: $now"
npm run db:mockListings 75001 100000
now=$(date)
echo "Stop time is: $now"