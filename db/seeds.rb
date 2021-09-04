# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first);asdja;sdl


require 'faker'

puts "Clearing old data..."
Car.destroy_all
Car.reset_pk_sequence


puts "Seeding users..."

20.times do
    carmake = Faker::Vehicle.make
    Car.create(
        Owner: Faker::Name.name,
        vehicleMake: carmake,
        vehicleModel: Faker::Vehicle.model(make_of_model:carmake),
        color: Faker::Vehicle.color
        )
end
