Rails.application.routes.draw do
  get 'static/index'
  # devise_for :users
  devise_scope :user do
    get '/users/sign_out' => 'devise/sessions#destroy'
  end
  # devise_for :users, controllers: { sessions: 'users/sessions' }
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  root to: 'static#index'

  devise_for :users
    resources :categories, only: [:index, :show] do
      resources :recipes, only: [:show, :new, :create]
    end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
