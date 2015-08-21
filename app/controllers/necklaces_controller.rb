class NecklacesController < ApplicationController
  before_action :set_necklace, only: [:show, :edit, :update, :destroy]

  # GET /necklaces
  # GET /necklaces.json
  def index
    @necklaces = Necklace.all
  end

  # GET /necklaces/1
  # GET /necklaces/1.json
  def show
  end

  # GET /necklaces/new
  def new
    @necklace = Necklace.new
  end

  # GET /necklaces/1/edit
  def edit
  end

  # POST /necklaces
  # POST /necklaces.json
  def create
    @necklace = Necklace.new(necklace_params)

    respond_to do |format|
      if @necklace.save
        format.html { redirect_to @necklace, notice: 'Necklace was successfully created.' }
        format.json { render :show, status: :created, location: @necklace }
      else
        format.html { render :new }
        format.json { render json: @necklace.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /necklaces/1
  # PATCH/PUT /necklaces/1.json
  def update
    respond_to do |format|
      if @necklace.update(necklace_params)
        format.html { redirect_to @necklace, notice: 'Necklace was successfully updated.' }
        format.json { render :show, status: :ok, location: @necklace }
      else
        format.html { render :edit }
        format.json { render json: @necklace.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /necklaces/1
  # DELETE /necklaces/1.json
  def destroy
    @necklace.destroy
    respond_to do |format|
      format.html { redirect_to necklaces_url, notice: 'Necklace was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_necklace
      @necklace = Necklace.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def necklace_params
      params.require(:necklace).permit(:bead1, :bead2, :bead3, :string, :bead4, :bead5, :bead6, :bead7, :bead8, :bead9, :rope, :clasp, :length, :price)
    end
end
