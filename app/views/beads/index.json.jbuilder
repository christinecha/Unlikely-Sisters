json.array!(@beads) do |bead|
  json.extract! bead, :id, :name, :image, :description, :shape
  json.url bead_url(bead, format: :json)
end
