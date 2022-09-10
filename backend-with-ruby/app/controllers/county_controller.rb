#This is where routes are defined
class CountyController < Sinatra::Base
    set :default_content_type, 'application/json'
    get '/counties' do
        County.all.to_json
    end
    post '/counties/add/:name/:country/:population/:county_number' do
        name = params[:name]
        country = params[:country]
        population = params[:population].to_i
        county_number = params[:county_number].to_i
        County.create(name: name, country: country, population: population, county_number: county_number)
        "You have successfully added the county to the database."
    end
    patch "/counties/:id" do
        county = County.find(params[:id])
         #county = County.update(name: params[:name], country: params[:country],population: params[:population],county_number: params[:county_number])    
        county.to_json
    end
    delete "/counties/:id" do
        county = County.find(params[:id])
        county.destroy
        county.to_json
      end

end

