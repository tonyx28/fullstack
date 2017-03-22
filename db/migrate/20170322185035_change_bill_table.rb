class ChangeBillTable < ActiveRecord::Migration[5.0]
  def change
    remove_column :bills, :creator_id
    remove_column :bills, :payer_id
    add_column :bills, :user_id, :integer, :null => false
    add_column :bills, :paid_by_friend, :boolean, :default => false
    add_column :bills, :payment, :boolean, :default => false
    change_column_default :bills, :date, to: Date.today
  end
end
