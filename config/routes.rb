Rails.application.routes.draw do
  root 'posts#index'
  #resources :posts

  namespace :api, defaults: {format: :json} do
    resources :posts
  end
  get '/*path', to: 'posts#index'
end
