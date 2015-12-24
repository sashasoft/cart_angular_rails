class ProductsController < InheritedResources::Base
#  #skip_before_filter :verify_authenticity_token
  respond_to :html, :xml, :json
  
  private
    def permitted_params
      params.permit(:product => [:name, :description, :price])
    end
end

