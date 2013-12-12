TicketPricer.Views.EventPageView = Backbone.View.extend({
  template: JST['event'],

  initialize: function(options){
    this.listenTo(this.model, 'change add remove listing:change', this.render);
  },

  events: {
    'click .chartUpdate' : 'buildListings',
    'click #delButton' : 'deleteListing'
  },

  buildListings: function(event){
    var that = this;
    var eventID = this.model.id
    $.ajax({
      url: "/events/" + eventID + "/buildListings",
      type: "PUT",
      success: function(event) {
        that.model.set(event);
      }
    })
  },

  deleteListing: function(event) {
    debugger
    var listingID = event.currentTarget.getAttribute('data-id');
    var thisListing = this.model.listings().get(listingID);

    thisListing.destroy();
  },

  render: function(){
    var renderedContent = this.template({
      event: this.model
    });
    this.$el.html(renderedContent);

    var ctx = this.$("#priceChart").get(0).getContext("2d");
    var ctx2 = this.$("#ticketChart").get(0).getContext('2d');

    var dateHash = {};
    this.model.listings().forEach( function(listing) {
      if (dateHash[listing.get('date')] == undefined) {
        dateHash[listing.get('date')] = [listing.get('price')];
      } else {
        dateHash[listing.get('date')].push(listing.get('price'));
      }
    });

    var dates = _.uniq(this.model.listings().pluck('date').sort());

    var priceData = [];
    var numTicketsData = [];
    dates.forEach( function(date) {
      priceData.push(_.reduce(dateHash[date], function(memo, num){ return memo + num; }, 0) / dateHash[date].length)
      numTicketsData.push(dateHash[date].length);
    });

    var data = {
      labels : dates,
      datasets : [
        {
          fillColor : "rgba(151,187,205,0.5)",
          strokeColor : "rgba(151,187,205,1)",
          pointColor : "rgba(151,187,205,1)",
          pointStrokeColor : "#fff",
          data : priceData
        }
      ]
    }
    var ticketData = {
      labels : dates,
      datasets : [
        {
          fillColor : "rgba(151,187,205,0.5)",
          strokeColor : "rgba(151,187,205,1)",
          pointColor : "rgba(151,187,205,1)",
          pointStrokeColor : "#fff",
          data : numTicketsData
        }
      ]
    }

    var myNewChart = new Chart(ctx).Line(data, { scaleLineColor : "#FFFFFF", scaleFontColor: "#FFFFFF" } );
    var ticketChart = new Chart(ctx2).Line(ticketData, { scaleLineColor : "#FFFFFF", scaleFontColor: "#FFFFFF" } );

    return this;
  }
})