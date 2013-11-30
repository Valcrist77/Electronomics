TicketPricer::Application.routes.draw do
  resources :events, only: [:create, :index]
  resources :listings

  root :to => 'roots#root'
end
