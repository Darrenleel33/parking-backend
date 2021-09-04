class CarsController < ApplicationController
    def index
        render json: Car.all
    end

    def show
        car = find_car
        render json: car
    end

    

    private

    def find_art
        Car.find_by(id: params[:id])
    end

end
