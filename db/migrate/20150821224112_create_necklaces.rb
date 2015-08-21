class CreateNecklaces < ActiveRecord::Migration
  def change
    create_table :necklaces do |t|
      t.string :bead1
      t.string :bead2
      t.string :bead3
      t.string :string
      t.string :bead4
      t.string :bead5
      t.string :bead6
      t.string :bead7
      t.string :bead8
      t.string :bead9
      t.string :rope
      t.string :clasp
      t.string :length
      t.money :price

      t.timestamps null: false
    end
  end
end
