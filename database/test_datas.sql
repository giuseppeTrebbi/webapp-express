LOCK TABLES `movies` WRITE;
INSERT INTO `movies` VALUES (1,'Inception','Christopher Nolan','Science Fiction',2010,'A skilled thief is given a chance at redemption if he can successfully perform inception.','inception.jpg','2024-11-29 10:40:13','2024-11-29 10:40:13'),(2,'The Godfather','Francis Ford Coppola','Crime',1972,'The story of a powerful Italian-American crime family and their struggles.','the_godfather.jpg','2024-11-29 10:40:13','2024-11-29 10:40:13'),(3,'Titanic','James Cameron','Romance',1997,'A romantic story set against the tragic sinking of the RMS Titanic.','titanic.jpg','2024-11-29 10:40:13','2024-11-29 10:40:13'),(4,'The Matrix','The Wachowskis','Action',1999,'A hacker discovers the truth about his reality and his role in the war against its controllers.','matrix.jpg','2024-11-29 10:40:13','2024-11-29 10:40:13'),(5,'Interstellar','Christopher Nolan','Science Fiction',2014,'A team of explorers travels through a wormhole in space to save humanity.','interstellar.jpg','2024-11-29 10:40:13','2024-11-29 10:40:13');
UNLOCK TABLES;


LOCK TABLES `reviews` WRITE;
INSERT INTO `reviews` VALUES (1,1,'Alice',5,'A mind-bending masterpiece.','2024-11-29 10:40:13','2024-11-29 10:40:13'),(2,1,'Bob',4,'Great visuals and a compelling story.','2024-11-29 10:40:13','2024-11-29 10:40:13'),(3,1,'Charlie',3,'Confusing at times, but worth watching.','2024-11-29 10:40:13','2024-11-29 10:40:13'),(4,2,'Diana',5,'The best crime movie ever made.','2024-11-29 10:40:13','2024-11-29 10:40:13'),(5,2,'Eve',5,'A cinematic classic that never gets old.','2024-11-29 10:40:13','2024-11-29 10:40:13'),(6,2,'Frank',4,'A bit slow-paced but very impactful.','2024-11-29 10:40:13','2024-11-29 10:40:13'),(7,3,'Grace',5,'A heartbreaking love story.','2024-11-29 10:40:13','2024-11-29 10:40:13'),(8,3,'Hank',4,'Beautiful visuals and a moving plot.','2024-11-29 10:40:13','2024-11-29 10:40:13'),(9,3,'Ivy',3,'A bit too melodramatic for my taste.','2024-11-29 10:40:13','2024-11-29 10:40:13'),(10,4,'Jack',5,'A revolutionary film in every sense.','2024-11-29 10:40:13','2024-11-29 10:40:13'),(11,4,'Karen',4,'Great action and a thought-provoking plot.','2024-11-29 10:40:13','2024-11-29 10:40:13'),(12,4,'Liam',4,'A unique take on reality and perception.','2024-11-29 10:40:13','2024-11-29 10:40:13'),(13,5,'Mia',5,'Visually stunning and emotionally resonant.','2024-11-29 10:40:13','2024-11-29 10:40:13'),(14,5,'Noah',3,'Interesting ideas but too long.','2024-11-29 10:40:13','2024-11-29 10:40:13'),(15,5,'Olivia',4,'A beautiful story about love and survival.','2024-11-29 10:40:13','2024-11-29 10:40:13');
UNLOCK TABLES;


UPDATE `movies_db`.`movies` SET `slug` = 'inception' WHERE (`id` = '1');
UPDATE `movies_db`.`movies` SET `slug` = 'the-godfather' WHERE (`id` = '2');
UPDATE `movies_db`.`movies` SET `slug` = 'titanic' WHERE (`id` = '3');
UPDATE `movies_db`.`movies` SET `slug` = 'the-matrix' WHERE (`id` = '4');
UPDATE `movies_db`.`movies` SET `slug` = 'interstellar' WHERE (`id` = '5');






