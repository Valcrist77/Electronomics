class Event < ActiveRecord::Base
  # attr_accessible :title, :body

  def self.FindByName(event_name)
     puts Stubhub::Event.search(event_name)
  end
end
