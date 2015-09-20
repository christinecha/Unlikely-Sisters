class OrdersController < ApplicationController

  def index
    @orders = Order.all
    @orderitems = OrderItem.all
    @products = Product.all
  end

end
