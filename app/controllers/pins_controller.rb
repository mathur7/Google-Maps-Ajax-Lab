class PinsController < ApplicationController

def index
  @pins = Pin.all
  @pin = Pin.new
  @current_user = current_user
  respond_to do |f|
    f.html
    f.json {render :json => @pins, :only => [:longitude, :latitude, :email]}
  end
end

def new
  @pin = Pin.new
end

def create
  @pin = Pin.create pin_params
    if @pin.save  
    respond_to do |f|
      f.html
      f.json {render :json => @pin, :only => [:longitude, :latitude, :email]}
    end
  end
end

private
def pin_params
  params.require(:pin).permit(:longitude, :latitude, :email)
end

end
