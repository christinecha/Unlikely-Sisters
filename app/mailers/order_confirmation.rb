class OrderConfirmation < ApplicationMailer
  default from: 'michakajewelry@gmail.com'

  def orderconfirmation_email(user)
    @user = user
    @url  = 'http://example.com/login'
    mail(to: @user.email, subject: 'Welcome to My Awesome Site')
  end
end
