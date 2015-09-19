class AddBead10ToProducts < ActiveRecord::Migration
  def change
    add_column :products, :bead10, :string
  end
end
