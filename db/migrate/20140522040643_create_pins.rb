class CreatePins < ActiveRecord::Migration
  def change
    create_table :pins do |t|
      t.references :email, index: true
      t.float :longitude
      t.float :latitude

      t.timestamps
    end
  end
end
