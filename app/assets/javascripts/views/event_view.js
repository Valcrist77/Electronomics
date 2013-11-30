TicketPricer.Views.EventPageView = Backbone.View.extend({
  template: JST['event'],

  render: function(){
    var renderedContent = this.template({
      event: this.model
    });
    this.$el.html(renderedContent);
    return this;
  }
})