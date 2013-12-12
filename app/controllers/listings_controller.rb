class ListingsController < ApplicationController
  respond_to :json

  def index
    @listings = Listing.all
    render :json => @listings
  end

  def destroy
    @listing = Listing.find(params[:id])
    @listing.destroy
    render :json => {}
  end
end
