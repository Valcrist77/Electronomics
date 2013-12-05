TicketPricer.Views.EventIndexView = Backbone.View.extend({
  template: JST['eindex'],

  events: {
    'submit form' : 'createEvent'
  },

  initialize: function(options) {
    this.listenTo(TicketPricer.events, 'change', this.render);
  },

  render: function(){
    var renderedContent = this.template({
      events: this.collection
    });
    this.$el.html(renderedContent);
    return this;
  },

  createEvent: function(event) {
    event.preventDefault();

    var payload = $('form').serializeJSON();

    var newEvent = new TicketPricer.Models.Event(payload.event, { parse: true });

    newEvent.save({}, {
      success: function(){
        TicketPricer.events.add(newEvent);
      }
    });
  }
})