# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170323225912) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bills", force: :cascade do |t|
    t.string   "description",                    null: false
    t.float    "cost",                           null: false
    t.date     "date"
    t.integer  "friend_id",                      null: false
    t.boolean  "settled",        default: false
    t.float    "owed_amt"
    t.float    "paid_amt"
    t.datetime "created_at",                     null: false
    t.datetime "updated_at",                     null: false
    t.integer  "user_id",                        null: false
    t.boolean  "paid_by_friend", default: false
    t.boolean  "payment",        default: false
  end

  create_table "comments", force: :cascade do |t|
    t.text     "body",                              null: false
    t.text     "username"
    t.date     "date",       default: '2017-03-23'
    t.datetime "created_at",                        null: false
    t.datetime "updated_at",                        null: false
    t.integer  "bill_id"
  end

  create_table "debts", force: :cascade do |t|
    t.integer  "friend_id",   null: false
    t.integer  "bill_id",     null: false
    t.float    "paid_share",  null: false
    t.float    "owed_share",  null: false
    t.float    "net_balance", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "friends", force: :cascade do |t|
    t.string   "name",        null: false
    t.string   "email"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.integer  "user_id"
    t.float    "owed_amt"
    t.float    "paid_amt"
    t.float    "net_balance"
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "email"
  end

end
