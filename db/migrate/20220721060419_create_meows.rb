class CreateMeows < ActiveRecord::Migration[7.0]
  def change
    create_table :meows do |t|
      t.datetime :timeframe

      t.timestamps
    end
  end
end
