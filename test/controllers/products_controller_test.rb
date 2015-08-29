require 'test_helper'

class productsControllerTest < ActionController::TestCase
  setup do
    @product = products(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:products)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create product" do
    assert_difference('product.count') do
      post :create, product: { bead1: @product.bead1, bead2: @product.bead2, bead3: @product.bead3, bead4: @product.bead4, bead5: @product.bead5, bead6: @product.bead6, bead7: @product.bead7, bead8: @product.bead8, bead9: @product.bead9, clasp: @product.clasp, length: @product.length, price: @product.price, strand: @product.strand, string: @product.string }
    end

    assert_redirected_to product_path(assigns(:product))
  end

  test "should show product" do
    get :show, id: @product
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @product
    assert_response :success
  end

  test "should update product" do
    patch :update, id: @product, product: { bead1: @product.bead1, bead2: @product.bead2, bead3: @product.bead3, bead4: @product.bead4, bead5: @product.bead5, bead6: @product.bead6, bead7: @product.bead7, bead8: @product.bead8, bead9: @product.bead9, clasp: @product.clasp, length: @product.length, price: @product.price, strand: @product.strand, string: @product.string }
    assert_redirected_to product_path(assigns(:product))
  end

  test "should destroy product" do
    assert_difference('product.count', -1) do
      delete :destroy, id: @product
    end

    assert_redirected_to products_path
  end
end
