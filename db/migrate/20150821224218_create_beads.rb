class CreateBeads < ActiveRecord::Migration
  def change
    create_table :beads do |t|
      t.string :title
      t.string :image
      t.text :description
      t.string :shape

      t.timestamps null: false
    end
  end
end
