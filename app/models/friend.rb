# == Schema Information
#
# Table name: friends
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  email      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Friend < ApplicationRecord
  validates :name, presence: true;

end
