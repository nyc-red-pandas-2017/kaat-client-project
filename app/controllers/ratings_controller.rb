class RatingsController < ApplicationController
  def new
    @rating = Rating.new
  end

  def create
    @rating = Rating.new(rating_params)
    if @rating.save
      redirect_to @recipe
    else
      render "new"
    end
  end

  private
  def rating_params
    params.require(:rating).permit(:votes, :recipe_id, :user_id)
  end
end
