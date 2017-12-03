INSERT INTO transfer (amount, source, destination, created_dt, updated_dt, status)
VALUES (1000, 'VTB24', 'Sberbank', NOW(), NOW(), 'SUCCESS');

INSERT INTO transfer (amount, source, destination, created_dt, updated_dt, status)
VALUES (3000, 'Sberbank', 'Sberbank', NOW(), NOW(), 'SUCCESS');

INSERT INTO transfer (amount, source, destination, created_dt, updated_dt, status)
VALUES (1000, 'Home Credit Bank', 'Sberbank', NOW(), NOW(), 'PROCESSING');
