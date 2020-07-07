now=$(date)
echo "Creating tenth 1M Listings in batches of 25k. Start time is: $now"
npm run db:mockListings 9000001 9025000 --wait
npm run db:mockListings 9025001 9050000 --wait
npm run db:mockListings 9050001 9075000 --wait
npm run db:mockListings 9075001 9100000 --wait
npm run db:mockListings 9100001 9125000 --wait
npm run db:mockListings 9125001 9150000 --wait
npm run db:mockListings 9150001 9175000 --wait
npm run db:mockListings 9175001 9200000 --wait
npm run db:mockListings 9200001 9225000 --wait
npm run db:mockListings 9225001 9250000 --wait
npm run db:mockListings 9250001 9275000 --wait
npm run db:mockListings 9275001 9300000 --wait
npm run db:mockListings 9300001 9325000 --wait
npm run db:mockListings 9325001 950000 --wait
npm run db:mockListings 9350001 9375000 --wait
npm run db:mockListings 9375001 9400000 --wait
npm run db:mockListings 9400001 9425000 --wait
npm run db:mockListings 9425001 9450000 --wait
npm run db:mockListings 9450001 9475000 --wait
npm run db:mockListings 9475001 9500000 --wait
npm run db:mockListings 9500001 9525000 --wait
npm run db:mockListings 9525001 9550000 --wait
npm run db:mockListings 9550001 9575000 --wait
npm run db:mockListings 9575001 9600000 --wait
npm run db:mockListings 9600001 9625000 --wait
npm run db:mockListings 9625001 9650000 --wait
npm run db:mockListings 9650001 9675000 --wait
npm run db:mockListings 9675001 9700000 --wait
npm run db:mockListings 9700001 9725000 --wait
npm run db:mockListings 9725001 9750000 --wait
npm run db:mockListings 9750001 9775000 --wait
npm run db:mockListings 9775001 9800000 --wait
npm run db:mockListings 9800001 9825000 --wait
npm run db:mockListings 9825001 9850000 --wait
npm run db:mockListings 9850001 9875000 --wait
npm run db:mockListings 9875001 9900000 --wait
npm run db:mockListings 9900001 9925000 --wait
npm run db:mockListings 9925001 9950000 --wait
npm run db:mockListings 9950001 9975000 --wait
npm run db:mockListings 9975001 10000000 --wait
now=$(date)
echo "And that's the tenth 1M Listings. Stop time is: $now"
