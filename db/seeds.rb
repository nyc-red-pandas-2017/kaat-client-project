# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') if Rails.env.development?


require 'faker'

User.destroy_all
Category.destroy_all
Recipe.destroy_all
Comment.destroy_all
Rating.destroy_all

5.times do |number|
  User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: "#{number}@email.com", password: "password")
end

@appetizer = Category.create(name:'Appetizer')
@salad = Category.create(name:'Salad')
@main_course = Category.create(name:'Main Course')
@dessert = Category.create(name:'Dessert')

15.times do
  Recipe.create(name: Faker::Food.dish, ingredients: Faker::Food.ingredient, directions: "Please read manual", difficulty: Faker::Number.between(1, 10), prep_time: Faker::Number.digit, category_id: categories.sample, user_id: users.sample)
end

15.times do
  Comment.create(text: "Excellent recipe", recipe_id: recipes.sample, used_id: users.sample)
end

15.times do
  Rating.create(votes: Faker::Number.digit, recipe_id: recipes.sample, user_id: users.sample)
end

