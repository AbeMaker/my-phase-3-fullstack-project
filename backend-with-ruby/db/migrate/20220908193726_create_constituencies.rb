class CreateConstituencies < ActiveRecord::Migration[7.0]
  def change
    create_table :constituencies do |t|
      t.string :name
      t.string :ward
      t.integer :number_of_ward
    end
  end
end
