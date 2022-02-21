#Write a method frequent_letters that takes in a string and returns an array containing the characters that appeared more than TWICE in the string.

def frequent_letters(string)
	result = []
	count_hash = Hash.new(0)
	string.each_char { |char| count_hash[char] += 1 }
  
  count_hash.each do |k,v|
# if value of key is more than 2 then shovel key into result & return result array
    if v > 2
      result << k
    end
  end
  return result
end

print frequent_letters('mississippi') #=> ["i", "s"]
puts
print frequent_letters('bootcamp') #=> []
puts