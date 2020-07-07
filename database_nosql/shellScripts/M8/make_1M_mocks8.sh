now=$(date)
echo "Creating eighth 1M Listings in batches of 25k. Start time is: $now"
npm run db:mockListings 7000001 7025000 --wait
npm run db:mockListings 7025001 7050000 --wait
npm run db:mockListings 7050001 7075000 --wait
npm run db:mockListings 7075001 7100000 --wait
npm run db:mockListings 7100001 7125000 --wait
npm run db:mockListings 7125001 7150000 --wait
npm run db:mockListings 7150001 7175000 --wait
npm run db:mockListings 7175001 7200000 --wait
npm run db:mockListings 7200001 7225000 --wait
npm run db:mockListings 7225001 7250000 --wait
npm run db:mockListings 7250001 7275000 --wait
npm run db:mockListings 7275001 7300000 --wait
npm run db:mockListings 7300001 7325000 --wait
npm run db:mockListings 7325001 750000 --wait
npm run db:mockListings 7350001 7375000 --wait
npm run db:mockListings 7375001 7400000 --wait
npm run db:mockListings 7400001 7425000 --wait
npm run db:mockListings 7425001 7450000 --wait
npm run db:mockListings 7450001 7475000 --wait
npm run db:mockListings 7475001 7500000 --wait
npm run db:mockListings 7500001 7525000 --wait
npm run db:mockListings 7525001 7550000 --wait
npm run db:mockListings 7550001 7575000 --wait
npm run db:mockListings 7575001 7600000 --wait
npm run db:mockListings 7600001 7625000 --wait
npm run db:mockListings 7625001 7650000 --wait
npm run db:mockListings 7650001 7675000 --wait
npm run db:mockListings 7675001 7700000 --wait
npm run db:mockListings 7700001 7725000 --wait
npm run db:mockListings 7725001 7750000 --wait
npm run db:mockListings 7750001 7775000 --wait
npm run db:mockListings 7775001 7800000 --wait
npm run db:mockListings 7800001 7825000 --wait
npm run db:mockListings 7825001 7850000 --wait
npm run db:mockListings 7850001 7875000 --wait
npm run db:mockListings 7875001 7900000 --wait
npm run db:mockListings 7900001 7925000 --wait
npm run db:mockListings 7925001 7950000 --wait
npm run db:mockListings 7950001 7975000 --wait
npm run db:mockListings 7975001 8000000 --wait
now=$(date)
echo "And that's the eighth 1M Listings. Stop time is: $now"
