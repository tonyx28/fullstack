class CreateBills < ActiveRecord::Migration[5.0]
  def change
    create_table :bills do |t|
      t.string :description, null: false
      t.float :cost, null: false
      t.date :date
      t.integer :creator_id
      t.integer :payer_id, null: false
      t.integer :friend_id, null: false
      t.boolean :settled, default: false
      t.float :owed_amt
      t.float :paid_amt
      t.timestamps
    end
  end
end
