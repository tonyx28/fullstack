class ChangeFriendTable < ActiveRecord::Migration[5.0]
  def change
    remove_column :friends, :balance
    add_column :friends, :owed_amt, :float
    add_column :friends, :paid_amt, :float
    add_column :friends, :net_balance, :float
  end
end
