class OrdersController < ApplicationController

  def index
    @orders = Order.all
    @order_items = OrderItems.all
    @products = Products.all
  end


end
