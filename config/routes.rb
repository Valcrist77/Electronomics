TicketPricer::Application.routes.draw do
  resources :events, only: [:create, :index]

  root :to => 'roots#root'
end
