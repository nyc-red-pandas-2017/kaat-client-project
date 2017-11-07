class Recipe < ApplicationRecord
  validates :name, :ingredients, :directions, :difficulty, :prep_time, presence: true

  belongs_to :category
  belongs_to :user

  has_many :comments
  has_many :ratings
end
