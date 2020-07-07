now=$(date)
echo "Creating first 1M Listings in batches of 25k. Start time is: $now"
npm run db:mockListings 1 25000 --wait
npm run db:mockListings 25001 50000 --wait
npm run db:mockListings 50001 75000 --wait
npm run db:mockListings 75001 100000 --wait
npm run db:mockListings 100001 125000 --wait
npm run db:mockListings 125001 150000 --wait
npm run db:mockListings 150001 175000 --wait
npm run db:mockListings 175001 200000 --wait
npm run db:mockListings 200001 225000 --wait
npm run db:mockListings 225001 250000 --wait
npm run db:mockListings 250001 275000 --wait
npm run db:mockListings 275001 300000 --wait
npm run db:mockListings 300001 325000 --wait
npm run db:mockListings 325001 350000 --wait
npm run db:mockListings 350001 375000 --wait
npm run db:mockListings 375001 400000 --wait
npm run db:mockListings 400001 425000 --wait
npm run db:mockListings 425001 450000 --wait
npm run db:mockListings 450001 475000 --wait
npm run db:mockListings 475001 500000 --wait
npm run db:mockListings 500001 525000 --wait
npm run db:mockListings 525001 550000 --wait
npm run db:mockListings 550001 575000 --wait
npm run db:mockListings 575001 600000 --wait
npm run db:mockListings 600001 625000 --wait
npm run db:mockListings 625001 650000 --wait
npm run db:mockListings 650001 675000 --wait
npm run db:mockListings 675001 700000 --wait
npm run db:mockListings 700001 725000 --wait
npm run db:mockListings 725001 750000 --wait
npm run db:mockListings 750001 775000 --wait
npm run db:mockListings 775001 800000 --wait
npm run db:mockListings 800001 825000 --wait
npm run db:mockListings 825001 850000 --wait
npm run db:mockListings 850001 875000 --wait
npm run db:mockListings 875001 900000 --wait
npm run db:mockListings 900001 925000 --wait
npm run db:mockListings 925001 950000 --wait
npm run db:mockListings 950001 975000 --wait
npm run db:mockListings 975001 1000000 --wait
now=$(date)
echo "And that's the first 1M Listings. Stop time is: $now"
