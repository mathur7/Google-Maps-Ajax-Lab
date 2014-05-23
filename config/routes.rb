Rails.application.routes.draw do
  devise_for :users
  root 'pins#index'
  resources :pins
end


# Prefix Verb   URI Pattern              Controller#Action
#     root GET    /                        pins#index
#     pins GET    /pins(.:format)          pins#index
#          POST   /pins(.:format)          pins#create
#  new_pin GET    /pins/new(.:format)      pins#new
# edit_pin GET    /pins/:id/edit(.:format) pins#edit
#      pin GET    /pins/:id(.:format)      pins#show
#          PATCH  /pins/:id(.:format)      pins#update
#          PUT    /pins/:id(.:format)      pins#update
#          DELETE /pins/:id(.:format)      pins#destroy