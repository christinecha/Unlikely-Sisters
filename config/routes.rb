Rails.application.routes.draw do
  get 'order_items/create'
  get 'order_items/update'
  get 'order_items/destroy'
  get 'carts/show'
  get 'static/orderconfirmation'

  resources :charges
  resources :beads
  resources :products
  resources :strands
  resources :clasps
  resources :static
  resource :cart, only: [:show]
  resources :order_items, only: [:create, :update, :destroy]
  devise_for :users

  root to: 'products#index'

end
