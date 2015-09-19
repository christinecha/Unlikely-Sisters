Rails.application.routes.draw do
  get 'order_items/create'
  get 'order_items/update'
  get 'order_items/destroy'
  get 'carts/show'
  get 'about/orderconfirmation'
  get 'about/makers'

  resources :charges
  resources :products do
    post :create
  end

  resources :about
  resources :orders
  resource :cart, only: [:show]
  resources :order_items, only: [:create, :update, :destroy]
  devise_for :users

  root to: 'products#index'

end
