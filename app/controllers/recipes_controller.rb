class RecipesController < ApplicationController
  def show
    @recipe = Recipe.find(params[:id])
    @comments = Comment.all
    @ratings = Rating.all
  end

  def new
    @recipe = Recipe.new
  end

  def create
    @recipe = Recipe.new(recipe_params)
    if @recipe.save
      redirect_to @recipe
    else
      render "new"
    end
  end

  private
  def recipe_params
    params.require(:recipe).permit(:name, :ingredients, :directions, :difficulty, :prep_time, :category_id, :user_id)
  end


end
