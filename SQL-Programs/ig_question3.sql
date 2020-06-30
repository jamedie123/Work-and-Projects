#3. Find the Inactive Users, i.e. users with no photos

SELECT username
FROM users
LEFT JOIN photos
    ON users.id = photos.user_id
WHERE photos.id IS NULL;