FactoryGirl.define do
  factory :bill do
    description "Pizza!"
    cost {22}
    friend_id {2}

    # Child of :post factory, since it's in the `factory :post` block
    # factory :published_post do
    #   published true
    # end
  end
