class CreateDebts < ActiveRecord::Migration[5.0]
  def change
    create_table :debts do |t|
      t.integer :friend_id, null: false
      t.integer :bill_id, null: false
      t.float :paid_share, null: false
      t.float :owed_share, null: false
      t.float :net_balance, null: false
      t.timestamps
    end
  end
end
