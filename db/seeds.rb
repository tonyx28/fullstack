# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: "Jack", password: "password")
User.create(username: "James", password: "password")
User.create(username: "Julie", password: "password")
User.create(username: "Jon", password: "password")
User.create(username: "Jake", password: "password")

Friend.create(name: "Jason", user_id: 1)
Friend.create(name: "Jacky", user_id: 1)
Friend.create(name: "Vincent", user_id: 1)
Friend.create(name: "Vincent", user_id: 2)
Friend.create(name: "Vinson", user_id: 1)
Friend.create(name: "Mike", user_id: 3)
Friend.create(name: "Justin", user_id: 4)
Friend.create(name: "Joan", user_id: 3)
Friend.create(name: "Stacy", user_id: 5)
Friend.create(name: "Michael", user_id: 5)


Bill.create(description: "Tacos", cost: 12.55, friend_id: 1, payer_id: 1, creator_id: 1)
Bill.create(description: "Pizza", cost: 22.00, friend_id: 2, payer_id: 5, creator_id: 2)
