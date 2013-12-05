class Listing < ActiveRecord::Base
  attr_accessible :title, :price, :date, :event_id
  validates :title, uniqueness: true

  belongs_to :event
end
