# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  body       :text             not null
#  username   :text
#  date       :date             default("2017-03-22")
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  bill_id    :integer
#

require 'test_helper'

class CommentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
