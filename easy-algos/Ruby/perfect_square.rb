# Write a method perfect_square? that takes in a number and returns a boolean indicating whether it is a perfect square. A perfect square is a number that results from multiplying a number by itself. For example, 9 is a perfect square because 3  3 = 9, 25 is a perfect square because 5  5 = 25.

# One Liner
def perfect_square?(num)
  return (Math.sqrt(num) % 1).zero?
end

# Long Way
def perfect_square?(num)
  (1..num).each do |i|
    if i * i == num
      return true
    end
  end
  return false
end


puts perfect_square?(5)   #=> false
puts perfect_square?(12)  #=> false
puts perfect_square?(30)  #=> false
puts perfect_square?(9)   #=> true
puts perfect_square?(25)  #=> true