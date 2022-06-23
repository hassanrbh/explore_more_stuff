json.array!(@contacts) do |contact|
    json.extract! contact, :id, :email, :friends
end

# @contacts.each do |contact|
#     json.id contact.id do 
#         json.(contact, :id, :email, :friends)
#     end
# end