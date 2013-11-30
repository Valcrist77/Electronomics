class EventsController < ApplicationController
  respond_to :json

  def create
    @event = Event.new(params[:event])

    @event.buildListings

    if @event.save
      render :json => @event, :include => :listings
    else
      render :json => @event.errors.full_messages
    end
  end

  def index
    @events = Event.all
    render :json => @events, :include => :listings
  end

  def show
    @event = Event.find(params[:id])
    render :json => @event
  end

end
