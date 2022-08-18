class RemoveTimeframeFromMeows < ActiveRecord::Migration[7.0]
  def change
    remove_column :meows, :timeframe, :datetime
  end
end
