CREATE DATABASE PD_DB DEFAULT CHARACTER SET utf8;

CREATE TABLE collection (
  id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  PRIMARY KEY (id)
) DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;


CREATE TABLE disc (
  id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  year int(4) NOT NULL,
  PRIMARY KEY (id)
) DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

CREATE TABLE collection_discs (
  collection_id int(11) NOT NULL,
  disc_id int(11) NOT NULL,
  PRIMARY KEY (collection_id, disc_id)
) DEFAULT CHARSET=utf8 ;

ALTER TABLE collection_discs ADD CONSTRAINT fk_collection_id
FOREIGN KEY (collection_id)
REFERENCES collection (id)
ON DELETE CASCADE ;

ALTER TABLE collection_discs ADD CONSTRAINT fk_disc_id
FOREIGN KEY (disc_id)
REFERENCES disc (id)
ON DELETE CASCADE ;