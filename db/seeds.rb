# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Category.destroy_all
Recipe.destroy_all
Comment.destroy_all
Rating.destroy_all
AdminUser.destroy_all

AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') if Rails.env.development?


require 'faker'


5.times do |number|
  User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: "#{number}@email.com", password: "password")
end

@appetizer = Category.create(name:'Appetizer')
@salad = Category.create(name:'Salad')
@main_course = Category.create(name:'Main Course')
@dessert = Category.create(name:'Dessert')

categories = [@appetizer, @salad, @main_course, @dessert]

# 15.times do
#   Recipe.create(name: Faker::Food.dish, ingredients: Faker::Food.ingredient, directions: "Please read manual",
#   difficulty: Faker::Number.between(1, 5), prep_time: Faker::Number.digit, category_id: categories.sample.id,
#   user_id: 1)
# end
#
# 15.times do
#   Comment.create(text: "Excellent recipe", recipe_id: Recipe.all.sample.id, user_id: 1)
# end
#
# 15.times do
#   Rating.create(votes: Faker::Number.digit, recipe_id: Recipe.all.sample.id, user_id: 1)
# end

# Category 1: Appetizers
Recipe.create(name: "Dessert Crepes", ingredients: Faker::Food.ingredient, directions: "Please read manual",
   difficulty: Faker::Number.between(1, 5), prep_time: Faker::Number.digit, category_id: 1,
   user_id: 1)
 Recipe.create(name: Faker::Food.dish, ingredients: Faker::Food.ingredient, directions: "Please read manual",
    difficulty: Faker::Number.between(1, 5), prep_time: Faker::Number.digit, category_id: 1,
    user_id: 1)
Recipe.create(name: Faker::Food.dish, ingredients: Faker::Food.ingredient, directions: "Please read manual",
   difficulty: Faker::Number.between(1, 5), prep_time: Faker::Number.digit, category_id: 1,
   user_id: 1)

# Category 2: Salads
Recipe.create(name: Faker::Food.dish, ingredients: Faker::Food.ingredient, directions: "Please read manual",
  difficulty: Faker::Number.between(1, 5), prep_time: Faker::Number.digit, category_id: 2,
  user_id: 1)
Recipe.create(name: Faker::Food.dish, ingredients: Faker::Food.ingredient, directions: "Please read manual",
   difficulty: Faker::Number.between(1, 5), prep_time: Faker::Number.digit, category_id: 2,
   user_id: 1)
Recipe.create(name: Faker::Food.dish, ingredients: Faker::Food.ingredient, directions: "Please read manual",
  difficulty: Faker::Number.between(1, 5), prep_time: Faker::Number.digit, category_id: 2,
  user_id: 1)
































# Category 3: Main courses
Recipe.create(name: "Pork Marsala", 
  ingredients:"1/3 cup all-purpose flour, 
  1/4 teaspoon salt, 
  1/4 teaspoon garlic salt, 
  3/4 teaspoon garlic powder, 
  1/2 teaspoon dried oregano, 
  1 pound boneless pork loin chops pounded thin, 
  3 tablespoons butter, 
  1/4 cup olive oil, 
  2 cups sliced fresh mushrooms, 
  1 teaspoon minced garlic, 
  1 cup Marsala wine ", 
  directions: "1 - Mix flour, salt ,garlic salt, garlic powder, and oregano together in a medium bowl. Add pork chops, and toss until well coated.
  2 - Heat butter and olive oil in a large skillet over medium heat. Place pork in skillet in a single layer, and cook, turning occasionally, until brown on both sides. Add mushrooms and minced garlic; cook and stir briefly.
  3 - Stir in wine, scraping the skillet to loosen any brown bits. Cover and simmer over medium heat until pork is tender and sauce is thickened, about 15 minutes. If sauce is too thick, adjust by stirring in a small amount of wine.",
   difficulty: Faker::Number.between(1, 5), prep_time: 30, category_id: 3,
   user_id: 1)
 Recipe.create(name: "Gouda and Spinach Stuffed Pork Chops", 
  ingredients:
   "4 (6 ounce) thick cut pork chops,
  Center Cut Pork Chops Boneless,
  8 slices smoked Gouda cheese,
  1/2 pound fresh spinach rinsed and torn into bite-size pieces,
  3 tablespoons horseradish mustard,
  1 cup panko crumbs or breadcrumbs Creole-style seasoning to taste", 
  directions: "Preheat the oven to 400 degrees F (200 degrees C). Coat a 9x13 inch baking dish with cooking spray,
    Lay each chop flat on cutting board, and with a sharp knife held parallel to the board, cut a pocket into the pork, leaving three sides intact. Stuff each chop with spinach, and then with cheese,
    Place panko crumbs in a shallow dish. Coat each chop with a thin layer of horseradish, and then roll in crumbs. Arrange chops in prepared baking dish. Sprinkle with Creole seasoning to taste,
    Bake in preheated oven for 45 minutes, or until brown and crispy.",
    difficulty: Faker::Number.between(1, 5), prep_time: 70, category_id: 3,
    user_id: 1)
Recipe.create(name:"Sun-Dried Tomato and Blue Cheese Burgers", 
  ingredients: "3 pounds uncooked lean ground beef,
  1 cup diced sun-dried tomatoes,
  4 ounces blue cheese,
  1/2 cup minced fresh chives,
  1 tablespoon steak sauce,
  1/4 teaspoon hot pepper sauce,
  1/4 tablespoon Worcestershire sauce,
  1 teaspoon coarsely ground black pepper,
  1 1/2 teaspoons salt,
  1 teaspoon dry mustard,
  12 hamburger rolls ", 
  directions: "In a large bowl, mix the ground beef, sun-dried tomatoes, blue cheese, chives, steak sauce, hot pepper sauce, Worcestershire sauce, black pepper, salt, and mustard. Cover and refrigerate for two hours.
Preheat an outdoor grill for high heat. Gently form mixture into twelve equally-sized patties.
Grill burgers for five minutes per side, or to desired doneness. Serve on rolls.",
   difficulty: Faker::Number.between(1, 5), prep_time:80, category_id: 3,
   user_id: 1)
Recipe.create(name:"Ginger Veggie Stir-Fry", 
  ingredients: Faker::Food.ingredient, 
  directions: "n a large bowl, blend cornstarch, garlic, 1 teaspoon ginger, and 2 tablespoons vegetable oil until cornstarch is dissolved. Mix in broccoli, snow peas, carrots, and green beans, tossing to lightly coat.
Heat remaining 2 tablespoons oil in a large skillet or wok over medium heat. Cook vegetables in oil for 2 minutes, stirring constantly to prevent burning. Stir in soy sauce and water. Mix in onion, salt, and remaining 1 teaspoon ginger. Cook until vegetables are tender but still crisp.",
   difficulty: Faker::Number.between(1, 5), prep_time: 40, category_id: 3,
   user_id: 1)

# Category 4: Desserts
Recipe.create(name: Faker::Food.dish, ingredients: Faker::Food.ingredient, directions: "Please read manual",
  difficulty: Faker::Number.between(1, 5), prep_time: Faker::Number.digit, category_id: 4,
  user_id: 1)
Recipe.create(name: Faker::Food.dish, ingredients: Faker::Food.ingredient, directions: "Please read manual",
   difficulty: Faker::Number.between(1, 5), prep_time: Faker::Number.digit, category_id: 4,
   user_id: 1)
Recipe.create(name: Faker::Food.dish, ingredients: Faker::Food.ingredient, directions: "Please read manual",
  difficulty: Faker::Number.between(1, 5), prep_time: Faker::Number.digit, category_id: 4,
  user_id: 1)
