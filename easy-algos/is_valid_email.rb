# For simplicity, we'll consider an email valid when it satisfies all of the following:
# - contains exactly one @ symbol
# - contains only lowercase alphabetic letters before the @
# - contains exactly one . after the @

def is_valid_email(str)
  letters_arr = str.split("@")

  if letters_arr.length != 2
    return false
  end

  first = letters_arr[0]
  second = letters_arr[1]
  alphabet = "abcdefghijklmnopqrstuvwxyz"

  first.each_char do |char|
    if !alphabet.include?(char)
      return false
    end
  end

  if second.split('.').length >= 2
    return true
  else
    return false
  end
end





puts is_valid_email("abc@xy.z")         # => true
puts is_valid_email("jdoe@gmail.com")   # => true
puts is_valid_email("jdoe@g@mail.com")  # => false
puts is_valid_email("jdoe42@gmail.com") # => false
puts is_valid_email("jdoegmail.com")    # => false
puts is_valid_email("az@email")         # => false