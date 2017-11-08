require "rails_helper"

RSpec.describe "Routing to category and the nested routes", :type => :routing do
  it "routes GET /categories to categories#index" do
    expect(:get => "/categories").to route_to("categories#index")
  end

   it "routes GET /categories/2 to categories#show" do
     expect(:get => "/categories/2").to route_to("categories#show", :id => "2")
   end

  it "routes POST /categories/1/recipes to recipes#create" do
    expect(:post => "/categories/1/recipes").to route_to("recipes#create", :category_id => "1")
  end

  it "routes GET /categories/2/recipes/2 to recipes#show" do
    expect(:get => "categories/2/recipes/2").to route_to("recipes#show", :category_id => "2", :id => "2")
  end
end
