class AddtoCommentsTable < ActiveRecord::Migration[5.0]
  def change
    add_column :comments, :bill_id, :integer
  end
end
