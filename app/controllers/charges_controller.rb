class ChargesController < ApplicationController

  def new
  end

  def create
    @orders = current_order.order_items.all

    customer = Stripe::Customer.create(
      :email => 'example@stripe.com',
      :card  => params[:stripeToken]
    )

    charge = Stripe::Charge.create(
      :customer    => customer.id,
      :amount      => Integer(current_order.subtotal_cents),
      :description => 'Rails Stripe customer',
      :currency    => 'usd'
    )

    @orders.delete_all

    rescue Stripe::CardError => e
      flash[:error] = e.message
      redirect_to charges_path
  end


end
