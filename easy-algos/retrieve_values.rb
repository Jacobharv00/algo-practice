# Write a method retrieve_values that takes in two hashes and a key. The method should return an array containing the values from the two hashes that correspond with the given key.

def retrieve_values(hash1, hash2, key)

  # Solution without loops
  # val1 = hash1[key]
  # val2 = hash2[key]  
  # return [val1, val2]

  result = []
  
#   loop over both hashs
  hash1.each do |k,v|
    # check if key is equal to key passed as argument and if so shovel into result
    if k == key
      result << v
    end
  end
  
  hash2.each do |k,v|
    if k == key
      result << v
    end
  end
	return result
end


dog1 = {"name"=>"Fido", "color"=>"brown"}
dog2 = {"name"=>"Spot", "color"=> "white"}

print retrieve_values(dog1, dog2, "name") #=> ["Fido", "Spot"]
puts
print retrieve_values(dog1, dog2, "color") #=> ["brown", "white"]
puts