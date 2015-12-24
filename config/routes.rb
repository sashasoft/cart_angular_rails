Rails.application.routes.draw do
  namespace :api, :defaults => {format: :json} do
    namespace :v1 do
      resources :products#
    end
  end
  
  resources :products, :defaults => {format: :json}
  root 'application#index'
  
end
