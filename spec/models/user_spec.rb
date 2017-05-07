require 'rails_helper'

RSpec.describe User, type: :model do
  let!(:user) { User.create!(username:'Andrew', password:'password') }
  let!(:user) { create(:user) }

  describe 'validation' do
    it { should validate_presence_of(:username) }
    it { should validate_presence_of(:session_token) }
    it { should validate_presence_of(:password_digest) }
    it { should validate_uniqueness_of(:username) }
    it { should validate_length_of(:password).is_at_least(6) }
  end

  describe 'associations' do
    it { should have_many(:friends) }
    it { should have_many(:bills) }
  end


end
