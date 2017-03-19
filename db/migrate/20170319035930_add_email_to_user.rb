class AddEmailToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :email, :string
    add_column :friends, :user_id, :integer
    add_column :friends, :balance, :string
  end
end
