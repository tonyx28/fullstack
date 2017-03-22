class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.text :body, null: false
      t.text :username
      t.date :date, default: Date.today
      t.timestamps
    end
  end
end
