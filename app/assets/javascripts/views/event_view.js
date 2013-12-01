TicketPricer.Views.EventPageView = Backbone.View.extend({
  template: JST['event'],

  render: function(){
    var renderedContent = this.template({
      event: this.model
    });
    this.$el.html(renderedContent);

    var ctx = this.$("#priceChart").get(0).getContext("2d");

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
    dates.forEach( function(date) {
      priceData.push(_.reduce(dateHash[date], function(memo, num){ return memo + num; }, 0) / dateHash[date].length)
    });

    debugger

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

    var myNewChart = new Chart(ctx).Line(data);

    return this;
  }
})