class Ticket < ApplicationRecord
    belongs_to :cars
    belongs_to :prices
end
