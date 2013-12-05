class Venue < ActiveRecord::Base
  attr_accessible :name, :address

  has_many :events
end
