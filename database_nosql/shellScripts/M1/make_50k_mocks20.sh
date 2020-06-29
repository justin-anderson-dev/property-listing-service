now=$(date)
echo "Creating 20th batch of Listings. Start time is: $now"
npm run db:mockListings 950001 975000 --wait
npm run db:mockListings 975001 1000000 --wait
now=$(date)
echo "And that's 1M Listings. Stop time is: $now"