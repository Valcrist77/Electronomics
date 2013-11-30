TicketPricer.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    '' : 'showMainPage'
  },

  showMainPage: function(){
    var mainPageView = new TicketPricer.Views.MainPageView();

    this._swapView(mainPageView);
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