class CreateRecipes < ActiveRecord::Migration[5.1]
  def change
    create_table :recipes do |t|
      t.string :name, null: false
      t.string :ingredients, null: false
      t.string :directions, null: false
      t.integer :difficulty, null: false
      t.integer :prep_time, null: false
      t.references :category, foreign_key: true
      t.references :user, foreign_key: true

      t.timestamps(null: false)
    end
  end
end
