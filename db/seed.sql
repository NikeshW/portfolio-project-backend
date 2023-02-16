\c items_db;

INSERT INTO items (item_name, pick_up_instructions,is_available)
VALUES ('laptop','available for pick up on Feb 14 after 5pm.', true),('iphone','pick up on feb 15 after 6pm', true),('ear-pods','pick up on feb 16 after 7pm', true);

INSERT INTO claims (user_name,email,phone_number,claim_note,item_id) VALUES ('nikesh','nikesh@gmail.com',2012012023,'i like this item',1);