class ListingsController < ApplicationController
  respond_to :json

  def index
    @listings = Listing.all
    render :json => @listings
  end
end
