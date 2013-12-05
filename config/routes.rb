TicketPricer::Application.routes.draw do
  resources :events, only: [:create, :index] do
    member do
      put 'buildListings'
    end
  end
  resources :listings

  root :to => 'roots#root'
end
