TicketPricer.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    '' : 'showMainPage',
    'events/:id' : 'showEventPage',
    'events' : 'showEventIndexPage'
  },

  showMainPage: function(){
    var mainPageView = new TicketPricer.Views.MainPageView();

    this._swapView(mainPageView);
  },

  showEventPage: function(id){
    var eventPageView = new TicketPricer.Views.EventPageView({
      model: TicketPricer.events.get(id)
    });

    this._swapView(eventPageView);
  },

  showEventIndexPage: function(){
    var eventIndexView = new TicketPricer.Views.EventIndexView({
      collection: TicketPricer.events
    });

    this._swapView(eventIndexView);
  },

  _swapView: function(newView){
    if (this._prevView){
      this._prevView.remove();
    }

    this._prevView = newView;
    this._prevView.render();
    $(".content").html(this._prevView.$el);
  }
})