class CarsController < ApplicationController
    def index
        render json: Car.all
    end

    def show
        car = find_car
        render json: car
    end
    
    
    def destroy
        car = find_car
        car.destroy
        if car.destroy
            render json: "Car removed"
        else
            render json: { error: "Car is not found"}, status: :not_found
        end
    end

    private

    def find_car
        Car.find_by(id: params[:id])
    end

end
