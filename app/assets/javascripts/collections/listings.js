TicketPricer.Collections.Listings = Backbone.Collection.extend({
  model: TicketPricer.Models.Listing,
  url: 'listings',
  comparator: function(listing){
    return listing.get('date');
  }
})