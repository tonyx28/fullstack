# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: "Jack", password: "password")
User.create(username: "Julie", password: "password")
User.create(username: "James", password: "password")
User.create(username: "Jon", password: "password")
User.create(username: "Jake", password: "password")

Friend.create(name: "Jason", user_id: 1, owed_amt: 6.28, paid_amt: 0.00, net_balance: 6.28)
Friend.create(name: "Jacky", user_id: 1, owed_amt: 17.78, paid_amt: 0.00, net_balance: 17.78)
Friend.create(name: "Vincent", user_id: 1, owed_amt: 7.50, paid_amt: 0.00, net_balance: 7.50)
Friend.create(name: "Vincent", user_id: 2, owed_amt: 28.50, paid_amt: 0.00, net_balance: 28.50)
Friend.create(name: "Jarvis", user_id: 2, owed_amt: 27.50, paid_amt: 0, net_balance: 27.50)
# Friend.create(name: "Jarvis", user_id: 1, owed_amt: 0, paid_amt: 0, net_balance: 0)
# Friend.create(name: "Vinson", user_id: 1, owed_amt: 0, paid_amt: 0, net_balance: 0)
Friend.create(name: "Alice", user_id: 1, owed_amt: 2.00, paid_amt: 0, net_balance: 2.00)
# Friend.create(name: "Mary", user_id: 1, owed_amt: 0, paid_amt: 0, net_balance: 0)
# Friend.create(name: "Anthony", user_id: 1, owed_amt: 0, paid_amt: 0, net_balance: 0)
# Friend.create(name: "James", user_id: 1, owed_amt: 0, paid_amt: 0, net_balance: 0)
Friend.create(name: "Mike", user_id: 3)
Friend.create(name: "Justin", user_id: 4)
Friend.create(name: "Joan", user_id: 3)
Friend.create(name: "Stacy", user_id: 5)
Friend.create(name: "Michael", user_id: 5)


Bill.create(description: "Tacos", cost: 12.56, friend_id: 1, user_id: 1, owed_amt: 6.28, date: Date.new(2017,3,02))
Bill.create(description: "Pizza", cost: 22.56, friend_id: 2, user_id: 1, owed_amt: 11.28, date: Date.new(2017,3,11))
Bill.create(description: "Hot Dogs", cost: 15.00, friend_id: 3, user_id: 1, owed_amt: 7.50, date: Date.new(2017,3,12))
Bill.create(description: "Bento Box", cost: 13.00, friend_id: 2, user_id: 1, owed_amt: 6.50, date: Date.new(2017,3,18))
Bill.create(description: "M&Ms", cost: 4.00, friend_id: 8, user_id: 1, owed_amt: 2.00, date: Date.new(2017,4,08))

Bill.create(description: "Pizza", cost: 22.00, friend_id: 4, user_id: 2, owed_amt: 11.00, date: Date.new(2017,2,19))
Bill.create(description: "Wings", cost: 35.00, friend_id: 4, user_id: 2, owed_amt: 17.50, date: Date.new(2016,12,21))
Bill.create(description: "Steak", cost: 55.00, friend_id: 5, user_id: 2, owed_amt: 27.50, date: Date.new(2017,3,15))

Bill.create(description: "Steak", cost: 55.00, friend_id: 7, user_id: 3, owed_amt: 27.50, date: Date.new(2017,3,15))

Comment.create(body: "They were delicious!", username: "Julie", bill_id: 1, date: Date.new(2017,2,19))
Comment.create(body: "Loved it!", username: "Jack", bill_id: 2, date: Date.new(2017,2,19))
Comment.create(body: "Not bad", username: "Julie", bill_id: 3, date: Date.new(2017,2,19))
Comment.create(body: "Had better...", username: "James", bill_id: 4, date: Date.new(2017,2,19))
