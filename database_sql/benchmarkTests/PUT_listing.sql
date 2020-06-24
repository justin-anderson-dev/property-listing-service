UPDATE listings
SET (headline, superhost) = ROW('You call that a headline, punk?', true)
WHERE listing_id = 9456789
RETURNING *;