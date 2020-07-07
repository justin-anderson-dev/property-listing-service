now=$(date)
echo "Creating sixth 1M Listings in batches of 25k. Start time is: $now"
npm run db:mockListings 5000001 5025000 --wait
npm run db:mockListings 5025001 5050000 --wait
npm run db:mockListings 5050001 5075000 --wait
npm run db:mockListings 5075001 5100000 --wait
npm run db:mockListings 5100001 5125000 --wait
npm run db:mockListings 5125001 5150000 --wait
npm run db:mockListings 5150001 5175000 --wait
npm run db:mockListings 5175001 5200000 --wait
npm run db:mockListings 5200001 5225000 --wait
npm run db:mockListings 5225001 5250000 --wait
npm run db:mockListings 5250001 5275000 --wait
npm run db:mockListings 5275001 5300000 --wait
npm run db:mockListings 5300001 5325000 --wait
npm run db:mockListings 5325001 550000 --wait
npm run db:mockListings 5350001 5375000 --wait
npm run db:mockListings 5375001 5400000 --wait
npm run db:mockListings 5400001 5425000 --wait
npm run db:mockListings 5425001 5450000 --wait
npm run db:mockListings 5450001 5475000 --wait
npm run db:mockListings 5475001 5500000 --wait
npm run db:mockListings 5500001 5525000 --wait
npm run db:mockListings 5525001 5550000 --wait
npm run db:mockListings 5550001 5575000 --wait
npm run db:mockListings 5575001 5600000 --wait
npm run db:mockListings 5600001 5625000 --wait
npm run db:mockListings 5625001 5650000 --wait
npm run db:mockListings 5650001 5675000 --wait
npm run db:mockListings 5675001 5700000 --wait
npm run db:mockListings 5700001 5725000 --wait
npm run db:mockListings 5725001 5750000 --wait
npm run db:mockListings 5750001 5775000 --wait
npm run db:mockListings 5775001 5800000 --wait
npm run db:mockListings 5800001 5825000 --wait
npm run db:mockListings 5825001 5850000 --wait
npm run db:mockListings 5850001 5875000 --wait
npm run db:mockListings 5875001 5900000 --wait
npm run db:mockListings 5900001 5925000 --wait
npm run db:mockListings 5925001 5950000 --wait
npm run db:mockListings 5950001 5975000 --wait
npm run db:mockListings 5975001 6000000 --wait
now=$(date)
echo "And that's the sixth 1M Listings. Stop time is: $now"
