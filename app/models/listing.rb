class Listing < ActiveRecord::Base
  attr_accessible :title, :price, :date, :event_id
end
