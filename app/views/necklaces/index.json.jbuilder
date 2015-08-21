json.array!(@necklaces) do |necklace|
  json.extract! necklace, :id, :bead1, :bead2, :bead3, :string, :bead4, :bead5, :bead6, :bead7, :bead8, :bead9, :rope, :clasp, :length, :price
  json.url necklace_url(necklace, format: :json)
end
