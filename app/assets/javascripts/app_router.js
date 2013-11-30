TicketPricer.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    '' : 'showMainPage',
    'events/:id' : 'showEventPage'
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

  _swapView: function(newView){
    if (this._prevView){
      this._prevView.remove();
    }

    this._prevView = newView;
    this._prevView.render();
    $(".content").html(this._prevView.$el);
  }
})