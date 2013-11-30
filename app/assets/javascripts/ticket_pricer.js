window.TicketPricer = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new TicketPricer.Routers.AppRouter();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  TicketPricer.initialize();
});
