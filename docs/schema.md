# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## bills
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
description | string    | not null
amount      | text      | not null
creator_id  | integer   | not null, foreign key (references users), indexed
paid_by_id  | integer   | not null
friend_ids  | array     | not null
settled     | boolean   | not null, default: false
owed_amt    | integer   |
owe_amt     | integer   |


## friends
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null
