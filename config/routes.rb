Rails.application.routes.draw do
  get 'order_items/create'
  get 'order_items/update'
  get 'order_items/destroy'
  get 'carts/show'

  resources :charges
  resources :beads
  resources :products
  resources :strands
  resources :clasps
  resource :cart, only: [:show]
  resources :order_items, only: [:create, :update, :destroy]
  devise_for :users

  root to: 'products#index'

end
