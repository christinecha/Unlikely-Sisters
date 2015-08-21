require 'test_helper'

class NecklacesControllerTest < ActionController::TestCase
  setup do
    @necklace = necklaces(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:necklaces)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create necklace" do
    assert_difference('Necklace.count') do
      post :create, necklace: { bead1: @necklace.bead1, bead2: @necklace.bead2, bead3: @necklace.bead3, bead4: @necklace.bead4, bead5: @necklace.bead5, bead6: @necklace.bead6, bead7: @necklace.bead7, bead8: @necklace.bead8, bead9: @necklace.bead9, clasp: @necklace.clasp, length: @necklace.length, price: @necklace.price, rope: @necklace.rope, string: @necklace.string }
    end

    assert_redirected_to necklace_path(assigns(:necklace))
  end

  test "should show necklace" do
    get :show, id: @necklace
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @necklace
    assert_response :success
  end

  test "should update necklace" do
    patch :update, id: @necklace, necklace: { bead1: @necklace.bead1, bead2: @necklace.bead2, bead3: @necklace.bead3, bead4: @necklace.bead4, bead5: @necklace.bead5, bead6: @necklace.bead6, bead7: @necklace.bead7, bead8: @necklace.bead8, bead9: @necklace.bead9, clasp: @necklace.clasp, length: @necklace.length, price: @necklace.price, rope: @necklace.rope, string: @necklace.string }
    assert_redirected_to necklace_path(assigns(:necklace))
  end

  test "should destroy necklace" do
    assert_difference('Necklace.count', -1) do
      delete :destroy, id: @necklace
    end

    assert_redirected_to necklaces_path
  end
end
