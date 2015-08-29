class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name
      t.string :bead1
      t.string :bead2
      t.string :bead3
      t.string :bead4
      t.string :bead5
      t.string :bead6
      t.string :bead7
      t.string :bead8
      t.string :bead9
      t.string :strand
      t.integer :length
      t.decimal :price, precision: 10, scale: 2
      t.boolean :active

      t.timestamps null: false
    end
  end
end
