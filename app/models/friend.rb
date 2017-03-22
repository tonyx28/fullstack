# == Schema Information
#
# Table name: friends
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  email       :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  user_id     :integer
#  owed_amt    :float
#  paid_amt    :float
#  net_balance :float
#

class Friend < ApplicationRecord
  validates :name, presence: true;

  belongs_to :user
end
