#adding of data
puts "🌱seeding counties..."
    county_047 = County.create(name: "Nairobi", country: "Kenya", population: "4000000", county_number:"047")
    county_001 = County.create(name: "Mombasa", country: "Kenya", population: "30000000", county_number:"001")
puts "✅Done seeding counties."

