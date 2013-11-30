TicketPricer.Collections.Events = Backbone.Collection.extend({
  model: TicketPricer.Models.Event,
  url: '/events'
})