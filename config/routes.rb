Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'main#index'

  # Main Pages
  get "/vision" => "main#vision"
  get "/initiatives" => "main#initiatives"
  get "/about" => "main#about"
  get "/get_involved" => "main#get_involved"
  get "/news" => "main#news"
end
