# == Schema Information
#
# Table name: bills
#
#  id          :integer          not null, primary key
#  description :string           not null
#  cost        :float            not null
#  date        :date
#  creator_id  :integer
#  payer_id    :integer          not null
#  friend_id   :integer          not null
#  settled     :boolean          default("false")
#  owed_amt    :float
#  paid_amt    :float
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Bill < ApplicationRecord
  validates :description, :cost, :payer_id, :friend_id, presence: true

  belongs_to :creator,
  class_name: "User",
  primary_key: :id,
  foreign_key: :creator_id

  has_many :comments
end
