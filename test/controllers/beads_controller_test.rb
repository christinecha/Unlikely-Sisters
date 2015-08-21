require 'test_helper'

class BeadsControllerTest < ActionController::TestCase
  setup do
    @bead = beads(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:beads)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create bead" do
    assert_difference('Bead.count') do
      post :create, bead: { description: @bead.description, image: @bead.image, shape: @bead.shape, title: @bead.title }
    end

    assert_redirected_to bead_path(assigns(:bead))
  end

  test "should show bead" do
    get :show, id: @bead
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @bead
    assert_response :success
  end

  test "should update bead" do
    patch :update, id: @bead, bead: { description: @bead.description, image: @bead.image, shape: @bead.shape, title: @bead.title }
    assert_redirected_to bead_path(assigns(:bead))
  end

  test "should destroy bead" do
    assert_difference('Bead.count', -1) do
      delete :destroy, id: @bead
    end

    assert_redirected_to beads_path
  end
end
