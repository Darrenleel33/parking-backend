class CarSerializer < ActiveModel::Serializer
  attributes :id, :Owner, :vehicleMake, :vehicleModel, :color
end
