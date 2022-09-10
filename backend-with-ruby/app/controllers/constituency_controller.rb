class ConstituencyController < Sinatra::Base
    set :default_content_type, 'application/json'
    get '/constituencies' do
        
            Constituency.all.to_json
    end
end