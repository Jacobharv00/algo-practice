# A name is valid is if satisfies all of the following:
# - contains at least a first name and last name, separated by spaces
# - each part of the name should be capitalized (First Character of name)

def is_valid_name(str)
  names_arr = str.split(" ")
  
  if names_arr.length < 2
    return false
  end

  names_arr.each do |name|
    if !is_capitalized(name)
      return false
    end
  end

  return true
end

def is_capitalized(word)
  if word[0] == word[0].upcase && word[1..-1] == word[1..-1].downcase
    return true
  else
    return false
  end
end

puts is_valid_name("Kush Patel")       # => true
puts is_valid_name("Daniel")           # => false
puts is_valid_name("Robert Downey Jr") # => true
puts is_valid_name("ROBERT DOWNEY JR") # => false