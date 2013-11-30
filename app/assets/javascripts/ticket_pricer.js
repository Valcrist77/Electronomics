window.TicketPricer = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    TicketPricer.events = new TicketPricer.Collections.Events();
    TicketPricer.events.fetch({
      success: function(){
        new TicketPricer.Routers.AppRouter();
        Backbone.history.start();
      }
    });
  }
};

$(document).ready(function(){
  TicketPricer.initialize();
});
