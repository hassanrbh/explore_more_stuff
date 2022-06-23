Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do 
    namespace :v1 do
      resources :contacts, only: [:index]
    end
    put "/update_me", to: "sessions#update"
    delete "/logout", to: "sessions#destroy"
    post "/login", to: "sessions#create"
    post "/sign_up", to: "users#create"
    get "/auth", to: "users#show"
  end
end
