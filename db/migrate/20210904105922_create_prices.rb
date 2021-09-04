class CreatePrices < ActiveRecord::Migration[6.1]
  def change
    create_table :prices do |t|
      t.integer :hourly
      t.integer :wholeDay

      t.timestamps
    end
  end
end
