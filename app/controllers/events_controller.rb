class EventsController < ApplicationController

  def create
    @event = Event.new(params[:event])

    @event.buildListings

    if @event.save
      render :json => @event
    else
      render :json => @event.errors.full_messages
    end
  end

  def index
    @events = Event.all
    render :json => @events
  end
  
end
