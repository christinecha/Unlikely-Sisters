json.array!(@products) do |product|
  json.extract! product, :id, :name, :description, :image, :bead1, :bead2, :bead3, :string, :bead4, :bead5, :bead6, :bead7, :bead8, :bead9, :rope, :clasp, :length, :price
  json.url product_url(product, format: :json)
end
