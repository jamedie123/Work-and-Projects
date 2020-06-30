#5. Calculate the Avg. number of photos posted per user

SELECT (SELECT Count(*) 
FROM   photos) / (SELECT Count(*) 
FROM   users) AS avg; 