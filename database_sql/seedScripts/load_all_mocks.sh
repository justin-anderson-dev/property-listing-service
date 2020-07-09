now=$(date)
echo "Loading csv files to listings table. Start time is: $now"
psql property_service -f database_sql/seedScripts/copy.sql
now=$(date)
echo "Stop time is: $now"
