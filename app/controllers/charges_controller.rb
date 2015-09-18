class ChargesController < ApplicationController
  protect_from_forgery :except => :webhook

  def new
  end

  def create
    customer = Stripe::Customer.create(
      :card  => params[:stripeToken],
      :email => params[:stripeEmail]
    )

    charge = Stripe::Charge.create(
      :customer    => customer.id,
      :amount      => Integer(current_order.subtotal_cents),
      :description => "Order ##{current_order.id}",
      :currency    => 'usd',
      :receipt_email => customer.email
    )

    rescue Stripe::CardError => e
      flash[:error] = e.message
      redirect_to charges_path

  end



end
