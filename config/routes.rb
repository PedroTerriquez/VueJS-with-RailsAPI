Rails.application.routes.draw do
  root 'posts#index'

  namespace :api, defaults: { format: :json } do
    resources :posts
    resources :users
    post 'login' => 'users#login'
  end

  get '/*path', to: 'posts#index'
end
