now=$(date)
echo "Creating ninth 1M Listings in batches of 25k. Start time is: $now"
npm run db:mockListings 8000001 8025000 --wait
npm run db:mockListings 8025001 8050000 --wait
npm run db:mockListings 8050001 8075000 --wait
npm run db:mockListings 8075001 8100000 --wait
npm run db:mockListings 8100001 8125000 --wait
npm run db:mockListings 8125001 8150000 --wait
npm run db:mockListings 8150001 8175000 --wait
npm run db:mockListings 8175001 8200000 --wait
npm run db:mockListings 8200001 8225000 --wait
npm run db:mockListings 8225001 8250000 --wait
npm run db:mockListings 8250001 8275000 --wait
npm run db:mockListings 8275001 8300000 --wait
npm run db:mockListings 8300001 8325000 --wait
npm run db:mockListings 8325001 850000 --wait
npm run db:mockListings 8350001 8375000 --wait
npm run db:mockListings 8375001 8400000 --wait
npm run db:mockListings 8400001 8425000 --wait
npm run db:mockListings 8425001 8450000 --wait
npm run db:mockListings 8450001 8475000 --wait
npm run db:mockListings 8475001 8500000 --wait
npm run db:mockListings 8500001 8525000 --wait
npm run db:mockListings 8525001 8550000 --wait
npm run db:mockListings 8550001 8575000 --wait
npm run db:mockListings 8575001 8600000 --wait
npm run db:mockListings 8600001 8625000 --wait
npm run db:mockListings 8625001 8650000 --wait
npm run db:mockListings 8650001 8675000 --wait
npm run db:mockListings 8675001 8700000 --wait
npm run db:mockListings 8700001 8725000 --wait
npm run db:mockListings 8725001 8750000 --wait
npm run db:mockListings 8750001 8775000 --wait
npm run db:mockListings 8775001 8800000 --wait
npm run db:mockListings 8800001 8825000 --wait
npm run db:mockListings 8825001 8850000 --wait
npm run db:mockListings 8850001 8875000 --wait
npm run db:mockListings 8875001 8900000 --wait
npm run db:mockListings 8900001 8925000 --wait
npm run db:mockListings 8925001 8950000 --wait
npm run db:mockListings 8950001 8975000 --wait
npm run db:mockListings 8975001 9000000 --wait
now=$(date)
echo "And that's the ninth 1M Listings. Stop time is: $now"
