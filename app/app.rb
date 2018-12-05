require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/activerecord'

set :database, "sqlite3:database.db"

class Product < ActiveRecord::Base
end

get '/' do
	erb :index
end