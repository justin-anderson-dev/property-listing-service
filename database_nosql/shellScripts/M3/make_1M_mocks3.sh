now=$(date)
echo "Creating third 1M Listings in batches of 25k. Start time is: $now"
npm run db:mockListings 2000001 2025000 --wait
npm run db:mockListings 2025001 2050000 --wait
npm run db:mockListings 2050001 2075000 --wait
npm run db:mockListings 2075001 2100000 --wait
npm run db:mockListings 2100001 2125000 --wait
npm run db:mockListings 2125001 2150000 --wait
npm run db:mockListings 2150001 2175000 --wait
npm run db:mockListings 2175001 2200000 --wait
npm run db:mockListings 2200001 2225000 --wait
npm run db:mockListings 2225001 2250000 --wait
npm run db:mockListings 2250001 2275000 --wait
npm run db:mockListings 2275001 2300000 --wait
npm run db:mockListings 2300001 2325000 --wait
npm run db:mockListings 2325001 2350000 --wait
npm run db:mockListings 2350001 2375000 --wait
npm run db:mockListings 2375001 2400000 --wait
npm run db:mockListings 2400001 2425000 --wait
npm run db:mockListings 2425001 2450000 --wait
npm run db:mockListings 2450001 2475000 --wait
npm run db:mockListings 2475001 2500000 --wait
npm run db:mockListings 2500001 2525000 --wait
npm run db:mockListings 2525001 2550000 --wait
npm run db:mockListings 2550001 2575000 --wait
npm run db:mockListings 2575001 2600000 --wait
npm run db:mockListings 2600001 2625000 --wait
npm run db:mockListings 2625001 2650000 --wait
npm run db:mockListings 2650001 2675000 --wait
npm run db:mockListings 2675001 2700000 --wait
npm run db:mockListings 2700001 2725000 --wait
npm run db:mockListings 2725001 2750000 --wait
npm run db:mockListings 2750001 2775000 --wait
npm run db:mockListings 2775001 2800000 --wait
npm run db:mockListings 2800001 2825000 --wait
npm run db:mockListings 2825001 2850000 --wait
npm run db:mockListings 2850001 2875000 --wait
npm run db:mockListings 2875001 2900000 --wait
npm run db:mockListings 2900001 2925000 --wait
npm run db:mockListings 2925001 2950000 --wait
npm run db:mockListings 2950001 2975000 --wait
npm run db:mockListings 2975001 3000000 --wait
now=$(date)
echo "And that's the third 1M Listings. Stop time is: $now"
