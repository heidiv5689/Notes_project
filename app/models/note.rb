class Note < ApplicationRecord
  belongs_to :user

  validates :subject, :body, presence: true
end
