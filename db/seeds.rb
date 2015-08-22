Product.create(:name => "Funky Necklace", :price => 5.00)
Product.create(:name => "B&W Necklace", :price => 1.5)
Product.create(:name => "Circles Necklace", :price => 1.25)

Order.create(:id => 1)
Order.create(:id => 2)
Order.create(:id => 3)

Bead.create(:name => "Polka Dot")
Bead.create(:name => "Striped")
Bead.create(:name => "Solid")
