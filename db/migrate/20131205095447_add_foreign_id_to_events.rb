class AddForeignIdToEvents < ActiveRecord::Migration
  def change
    add_column :events, :venue_id, :integer
    add_column :events, :artist_id, :integer
  end
end
