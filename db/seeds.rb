20.times do
    contact = Contact.new(
        :email => Faker::Internet.email,
        :friends => rand(200)
    )
    contact.save
end