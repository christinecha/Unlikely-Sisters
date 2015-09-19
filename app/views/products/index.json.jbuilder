json.array!(@products) do |product|
  json.extract! product, :id, :name, :bead1, :bead2, :bead3, :bead4, :bead5, :bead6, :bead7, :bead8, :bead9, :bead10, :bead11, :strand, :length, :price
  json.url product_url(product, format: :json)
end
