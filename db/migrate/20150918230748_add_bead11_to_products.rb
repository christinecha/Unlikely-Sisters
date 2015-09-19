class AddBead11ToProducts < ActiveRecord::Migration
  def change
    add_column :products, :bead11, :string
  end
end
