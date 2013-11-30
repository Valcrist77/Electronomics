TicketPricer.Models.Event = Backbone.Model.extend({
  urlRoot: '/events',

  listings: function(){
    if (!this._listings){
      this._listings = new TicketPricer.Collections.Listings([], { event: this });
    }
    return this._listings;
  },

  parse: function(serverAttributes, options) {
    this.listings().reset(serverAttributes.listings);

    delete serverAttributes.listings;
    return serverAttributes;
  }
})