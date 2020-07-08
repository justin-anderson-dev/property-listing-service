start=$(date)
echo "GET one listing from dynamodb. Start time is: $start"
aws dynamodb get-item --table-name listings --key {'"listing_id"':{'"N"':'"9876543"'}} --endpoint http://127.0.0.1:8000
end=$(date)
echo "Stop time is: $end."
