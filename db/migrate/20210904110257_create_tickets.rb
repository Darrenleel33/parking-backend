class CreateTickets < ActiveRecord::Migration[6.1]
  def change
    create_table :tickets do |t|
      t.integer :car_id
      t.integer :price_id
      t.datetime :Date
      t.time :check_in
      t.boolean :paid

      t.timestamps
    end
  end
end
