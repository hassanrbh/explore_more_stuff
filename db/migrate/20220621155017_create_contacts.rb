class CreateContacts < ActiveRecord::Migration[7.0]
  def change
    create_table :contacts do |t|
      t.string :email, :null => false, :unique => true
      t.integer :friends, :null => false
      
      t.timestamps
    end
  end
end
