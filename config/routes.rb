Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :cars, only: [:index, :show, :create, :update, :destroy]
  resources :prices, only: [:index]
  resources :tickets, only: [:index, :show, :create, :destroy]
  

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
