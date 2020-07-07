now=$(date)
echo "Creating seventh 1M Listings in batches of 25k. Start time is: $now"
npm run db:mockListings 6000001 6025000 --wait
npm run db:mockListings 6025001 6050000 --wait
npm run db:mockListings 6050001 6075000 --wait
npm run db:mockListings 6075001 6100000 --wait
npm run db:mockListings 6100001 6125000 --wait
npm run db:mockListings 6125001 6150000 --wait
npm run db:mockListings 6150001 6175000 --wait
npm run db:mockListings 6175001 6200000 --wait
npm run db:mockListings 6200001 6225000 --wait
npm run db:mockListings 6225001 6250000 --wait
npm run db:mockListings 6250001 6275000 --wait
npm run db:mockListings 6275001 6300000 --wait
npm run db:mockListings 6300001 6325000 --wait
npm run db:mockListings 6325001 650000 --wait
npm run db:mockListings 6350001 6375000 --wait
npm run db:mockListings 6375001 6400000 --wait
npm run db:mockListings 6400001 6425000 --wait
npm run db:mockListings 6425001 6450000 --wait
npm run db:mockListings 6450001 6475000 --wait
npm run db:mockListings 6475001 6500000 --wait
npm run db:mockListings 6500001 6525000 --wait
npm run db:mockListings 6525001 6550000 --wait
npm run db:mockListings 6550001 6575000 --wait
npm run db:mockListings 6575001 6600000 --wait
npm run db:mockListings 6600001 6625000 --wait
npm run db:mockListings 6625001 6650000 --wait
npm run db:mockListings 6650001 6675000 --wait
npm run db:mockListings 6675001 6700000 --wait
npm run db:mockListings 6700001 6725000 --wait
npm run db:mockListings 6725001 6750000 --wait
npm run db:mockListings 6750001 6775000 --wait
npm run db:mockListings 6775001 6800000 --wait
npm run db:mockListings 6800001 6825000 --wait
npm run db:mockListings 6825001 6850000 --wait
npm run db:mockListings 6850001 6875000 --wait
npm run db:mockListings 6875001 6900000 --wait
npm run db:mockListings 6900001 6925000 --wait
npm run db:mockListings 6925001 6950000 --wait
npm run db:mockListings 6950001 6975000 --wait
npm run db:mockListings 6975001 7000000 --wait
now=$(date)
echo "And that's the seventh 1M Listings. Stop time is: $now"
