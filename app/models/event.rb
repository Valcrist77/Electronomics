class Event < ActiveRecord::Base
  require 'open-uri'
  attr_accessible :name, :event_date, :location, :keywords, :base_price, :artist_id, :venue_id

  has_many :listings
  belongs_to :artist
  belongs_to :venue

  def buildListings
    eventStr = self.name.split(" ").join("+")

    url = "http://sfbay.craigslist.org/search/?sort=rel&areaID=1&subAreaID=&query=" + eventStr + "&catAbb=sss"

    doc = Nokogiri::HTML(open(url))

    price_avg = 0
    counter = 0
    doc.css('.row').each do |listing|
      date = Date.strptime(listing.at_css('.pl .date').text, '%b %e')
      title = listing.at_css('.pl a').text
      if (listing.at_css('.l2 .price') == nil)
        next
      end
      price = listing.at_css('.l2 .price').text.delete("$").to_i

      price_avg += price
      counter += 1
      clListing = Listing.create(title: title, price: price, date: date, event_id: self.id)
    end
  end

end
