#1. Determine who are the 5 oldest users

SELECT * 
FROM users
ORDER BY created_at
LIMIT 5;