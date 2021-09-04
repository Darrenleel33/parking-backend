class Ticket < ApplicationRecord
    belongs_to :cars
    belongs_to :tickets
end
