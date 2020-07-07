now=$(date)
echo "Creating fourth 1M Listings in batches of 25k. Start time is: $now"
npm run db:mockListings 3000001 3025000 --wait
npm run db:mockListings 3025001 3050000 --wait
npm run db:mockListings 3050001 3075000 --wait
npm run db:mockListings 3075001 3100000 --wait
npm run db:mockListings 3100001 3125000 --wait
npm run db:mockListings 3125001 3150000 --wait
npm run db:mockListings 3150001 3175000 --wait
npm run db:mockListings 3175001 3200000 --wait
npm run db:mockListings 3200001 3225000 --wait
npm run db:mockListings 3225001 3250000 --wait
npm run db:mockListings 3250001 3275000 --wait
npm run db:mockListings 3275001 3300000 --wait
npm run db:mockListings 3300001 3325000 --wait
npm run db:mockListings 3325001 3350000 --wait
npm run db:mockListings 3350001 3375000 --wait
npm run db:mockListings 3375001 3400000 --wait
npm run db:mockListings 3400001 3425000 --wait
npm run db:mockListings 3425001 3450000 --wait
npm run db:mockListings 3450001 3475000 --wait
npm run db:mockListings 3475001 3500000 --wait
npm run db:mockListings 3500001 3525000 --wait
npm run db:mockListings 3525001 3550000 --wait
npm run db:mockListings 3550001 3575000 --wait
npm run db:mockListings 3575001 3600000 --wait
npm run db:mockListings 3600001 3625000 --wait
npm run db:mockListings 3625001 3650000 --wait
npm run db:mockListings 3650001 3675000 --wait
npm run db:mockListings 3675001 3700000 --wait
npm run db:mockListings 3700001 3725000 --wait
npm run db:mockListings 3725001 3750000 --wait
npm run db:mockListings 3750001 3775000 --wait
npm run db:mockListings 3775001 3800000 --wait
npm run db:mockListings 3800001 3825000 --wait
npm run db:mockListings 3825001 3850000 --wait
npm run db:mockListings 3850001 3875000 --wait
npm run db:mockListings 3875001 3900000 --wait
npm run db:mockListings 3900001 3925000 --wait
npm run db:mockListings 3925001 3950000 --wait
npm run db:mockListings 3950001 3975000 --wait
npm run db:mockListings 3975001 4000000 --wait
now=$(date)
echo "And that's the fourth 1M Listings. Stop time is: $now"
