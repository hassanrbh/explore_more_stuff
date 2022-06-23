# == Schema Information
#
# Table name: contacts
#
#  id         :integer          not null, primary key
#  email      :string           not null
#  friends    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer
#
class Contact < ApplicationRecord
    validates :email,:friends, presence: true
    belongs_to :user
end
