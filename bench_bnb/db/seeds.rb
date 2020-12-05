# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bench.destroy_all

Bench.create!(description: 'Near the most beautiful market', lat: 37.776862, lng: -122.415989)
Bench.create!(description: 'So comfortable you would not believe it', lat: 37.779100, lng: -122.426975)
Bench.create!(description: 'Outside the best place in SF: COSTCO', lat: 37.770281, lng: -122.410539)
Bench.create!(description: 'LOVE this bench', lat: 37.77248, lng: -122.412964)
Bench.create!(description: 'Made of reclaimed Oak', lat: 37.771519, lng: -122.420645)
Bench.create!(description: 'Big enough for a family of four', lat: 37.770740, lng: -122.423819)
Bench.create!(description: 'Never had a better one', lat: 37.768556, lng: -122.422832) 
Bench.create!(description: 'Best view in SF', lat: 37.77050, lng: -122.424241)
Bench.create!(description: 'Short walk to McDonalds', lat: 37.765192, lng: -122.408179)
Bench.create!(description: 'Great transportation nearby', lat: 37.771320, lng: -122.428400)
Bench.create!(description: 'Lots of sunlight', lat: 37.772111, lng: -122.429048)