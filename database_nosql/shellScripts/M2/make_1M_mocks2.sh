now=$(date)
echo "Creating second 1M Listings in batches of 25k. Start time is: $now"
npm run db:mockListings 1000001 1025000 --wait
npm run db:mockListings 1025001 1050000 --wait
npm run db:mockListings 1050001 1075000 --wait
npm run db:mockListings 1075001 1100000 --wait
npm run db:mockListings 1100001 1125000 --wait
npm run db:mockListings 1125001 1150000 --wait
npm run db:mockListings 1150001 1175000 --wait
npm run db:mockListings 1175001 1200000 --wait
npm run db:mockListings 1200001 1225000 --wait
npm run db:mockListings 1225001 1250000 --wait
npm run db:mockListings 1250001 1275000 --wait
npm run db:mockListings 1275001 1300000 --wait
npm run db:mockListings 1300001 1325000 --wait
npm run db:mockListings 1325001 1350000 --wait
npm run db:mockListings 1350001 1375000 --wait
npm run db:mockListings 1375001 1400000 --wait
npm run db:mockListings 1400001 1425000 --wait
npm run db:mockListings 1425001 1450000 --wait
npm run db:mockListings 1450001 1475000 --wait
npm run db:mockListings 1475001 1500000 --wait
npm run db:mockListings 1500001 1525000 --wait
npm run db:mockListings 1525001 1550000 --wait
npm run db:mockListings 1550001 1575000 --wait
npm run db:mockListings 1575001 1600000 --wait
npm run db:mockListings 1600001 1625000 --wait
npm run db:mockListings 1625001 1650000 --wait
npm run db:mockListings 1650001 1675000 --wait
npm run db:mockListings 1675001 1700000 --wait
npm run db:mockListings 1700001 1725000 --wait
npm run db:mockListings 1725001 1750000 --wait
npm run db:mockListings 1750001 1775000 --wait
npm run db:mockListings 1775001 1800000 --wait
npm run db:mockListings 1800001 1825000 --wait
npm run db:mockListings 1825001 1850000 --wait
npm run db:mockListings 1850001 1875000 --wait
npm run db:mockListings 1875001 1900000 --wait
npm run db:mockListings 1900001 1925000 --wait
npm run db:mockListings 1925001 1950000 --wait
npm run db:mockListings 1950001 1975000 --wait
npm run db:mockListings 1975001 2000000 --wait
now=$(date)
echo "And that's the second 1M Listings. Stop time is: $now"
