# == Schema Information
#
# Table name: debts
#
#  id          :integer          not null, primary key
#  friend_id   :integer          not null
#  bill_id     :integer          not null
#  paid_share  :float            default("0.0"), not null
#  owed_share  :float            default("0.0"), not null
#  net_balance :float            default("0.0"), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class DebtTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
