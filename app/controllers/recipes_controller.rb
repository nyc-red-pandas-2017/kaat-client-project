class RecipesController < ApplicationController
  def show
    @recipe = Recipe.find(params[:id])
    @comments = @recipe.comments
    @ratings = @recipe.ratings
    render json: {recipe: @recipe, comments: @comments, ratings: @ratings}
  end

  def new
    @recipe = Recipe.new
  end

  def create
    @recipe = Recipe.new(recipe_params)
    # binding.pry
    if @recipe.save
      render json: @recipe
    else
      render json: {status: 422, errors: @recipe.errors}
    end
  end

  private
  def recipe_params
    params.require(:recipe).permit(:name, :ingredients, :directions, :difficulty, :prep_time, :category_id, :user_id)
  end


end
