# == Schema Information
#
# Table name: bills
#
#  id             :integer          not null, primary key
#  description    :string           not null
#  cost           :float            not null
#  date           :date
#  friend_id      :integer          not null
#  settled        :boolean          default("false")
#  owed_amt       :float
#  paid_amt       :float
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  user_id        :integer          not null
#  paid_by_friend :boolean          default("false")
#  payment        :boolean          default("false")
#

class Bill < ApplicationRecord
  validates :description, :cost, :user_id, :friend_id, presence: true

  belongs_to :user

  has_many :comments
end
