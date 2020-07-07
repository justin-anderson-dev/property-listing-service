now=$(date)
echo "Creating fifth 1M Listings in batches of 25k. Start time is: $now"
npm run db:mockListings 4000001 4025000 --wait
npm run db:mockListings 4025001 4050000 --wait
npm run db:mockListings 4050001 4075000 --wait
npm run db:mockListings 4075001 4100000 --wait
npm run db:mockListings 4100001 4125000 --wait
npm run db:mockListings 4125001 4150000 --wait
npm run db:mockListings 4150001 4175000 --wait
npm run db:mockListings 4175001 4200000 --wait
npm run db:mockListings 4200001 4225000 --wait
npm run db:mockListings 4225001 4250000 --wait
npm run db:mockListings 4250001 4275000 --wait
npm run db:mockListings 4275001 4300000 --wait
npm run db:mockListings 4300001 4325000 --wait
npm run db:mockListings 4325001 4350000 --wait
npm run db:mockListings 4350001 4375000 --wait
npm run db:mockListings 4375001 4400000 --wait
npm run db:mockListings 4400001 4425000 --wait
npm run db:mockListings 4425001 4450000 --wait
npm run db:mockListings 4450001 4475000 --wait
npm run db:mockListings 4475001 4500000 --wait
npm run db:mockListings 4500001 4525000 --wait
npm run db:mockListings 4525001 4550000 --wait
npm run db:mockListings 4550001 4575000 --wait
npm run db:mockListings 4575001 4600000 --wait
npm run db:mockListings 4600001 4625000 --wait
npm run db:mockListings 4625001 4650000 --wait
npm run db:mockListings 4650001 4675000 --wait
npm run db:mockListings 4675001 4700000 --wait
npm run db:mockListings 4700001 4725000 --wait
npm run db:mockListings 4725001 4750000 --wait
npm run db:mockListings 4750001 4775000 --wait
npm run db:mockListings 4775001 4800000 --wait
npm run db:mockListings 4800001 4825000 --wait
npm run db:mockListings 4825001 4850000 --wait
npm run db:mockListings 4850001 4875000 --wait
npm run db:mockListings 4875001 4900000 --wait
npm run db:mockListings 4900001 4925000 --wait
npm run db:mockListings 4925001 4950000 --wait
npm run db:mockListings 4950001 4975000 --wait
npm run db:mockListings 4975001 5000000 --wait
now=$(date)
echo "And that's the fifth 1M Listings. Stop time is: $now"
