class CreateListings < ActiveRecord::Migration
  def change
    create_table :listings do |t|
      t.integer :price, null: false
      t.string :title, null: false
      t.date :date, null: false
      t.integer :event_id, null: false

      t.timestamps
    end

    add_index :listings, :event_id
  end
end
