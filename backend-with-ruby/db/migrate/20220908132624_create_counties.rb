class CreateCounties < ActiveRecord::Migration[7.0]
  def change
    create_table :counties do |t|
      t.string :name
      t.string :country
      t.integer :population
      t.integer :county_number
    end
  end
end
