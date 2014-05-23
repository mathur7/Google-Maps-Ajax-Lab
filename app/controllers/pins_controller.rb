class PinsController < ApplicationController
def new
  @pin = Pin.new
end

def index
  @pins = Pin.all
  respond_to do |f|
    f.html
    f.json {render :json => @pins, :only => [:longitude, :latitude]}
  end
end

def create
  @pin = current_user.email.pins.new pin_params
  if @pin.save
  respond_to do |f|
    f.html
    f.json {render :json => @pin, :only => [:longitude, :latitude]}
  end
end

private
def pin_params
  params.require(:pin).permit(:longitude, :latitude)
end

end
