class AddBasePriceToEvents < ActiveRecord::Migration
  def change
    add_column :events, :base_price, :integer
  end
end
