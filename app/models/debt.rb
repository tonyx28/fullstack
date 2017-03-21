# == Schema Information
#
# Table name: debts
#
#  id          :integer          not null, primary key
#  friend_id   :integer          not null
#  bill_id     :integer          not null
#  paid_share  :float            not null
#  owed_share  :float            not null
#  net_balance :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Debt < ApplicationRecord
  
end
