Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  devise_for :users
    resources :categories, only: [:index, :show] do
      resources :recipes, only: [:show, :new, :create]
    end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
