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

require 'test_helper'

class BillTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
