# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  body       :text             not null
#  username   :text
#  date       :date             default("2017-03-23")
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  bill_id    :integer
#

class Comment < ApplicationRecord
  validates :body, :username, presence: true

  belongs_to :bill
end
