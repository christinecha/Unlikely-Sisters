class BeadsController < ApplicationController
  before_action :set_bead, only: [:show, :edit, :update, :destroy]

  def index
    @beads = Bead.all
  end

  def show
  end

  def new
    @bead = Bead.new
  end

  def edit
  end

  def create
    @bead = Bead.new(bead_params)

    respond_to do |format|
      if @bead.save
        format.html { redirect_to @bead, notice: 'Bead was successfully created.' }
        format.json { render :show, status: :created, location: @bead }
      else
        format.html { render :new }
        format.json { render json: @bead.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /beads/1
  # PATCH/PUT /beads/1.json
  def update
    respond_to do |format|
      if @bead.update(bead_params)
        format.html { redirect_to @bead, notice: 'Bead was successfully updated.' }
        format.json { render :show, status: :ok, location: @bead }
      else
        format.html { render :edit }
        format.json { render json: @bead.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /beads/1
  # DELETE /beads/1.json
  def destroy
    @bead.destroy
    respond_to do |format|
      format.html { redirect_to beads_url, notice: 'Bead was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_bead
      @bead = Bead.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def bead_params
      params.require(:bead).permit(:name, :image, :description, :shape)
    end
end
