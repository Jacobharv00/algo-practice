# Write a method last_index that takes in a string and a character. The method should return the last index where the character can be found in the string.

def last_index(str, char)
  last_letter_index = str.length - 1
  
  while last_letter_index >= 0
    if str[last_letter_index] == char
      return last_letter_index
    end
    last_letter_index -= 1
  end
end

puts last_index("abca", "a")       #=> 3
puts last_index("mississipi", "i") #=> 9
puts last_index("octagon", "o")    #=> 5
puts last_index("programming", "m")#=> 7