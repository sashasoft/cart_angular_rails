class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  skip_before_filter :verify_authenticity_token
 
  #respond_to :json
  #Точка входа в программу
  def index
  end
end
