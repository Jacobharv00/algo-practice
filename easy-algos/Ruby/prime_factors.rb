# Write a method prime_factors that takes in a number and returns an array containing all of the prime factors of the given number.

def prime_factors(num)
	prime_factors = []
  
  (1..num).each do |i|
    if num % i == 0 && prime?(i)
      prime_factors << i
    end
  end
  return prime_factors
end

def prime?(n)
  if n < 2
    return false
  end

  (2...n).each do |i|
    if n % i == 0
      return false
    end
  end
  return true
end

print prime_factors(24) #=> [2, 3]
puts
print prime_factors(60) #=> [2, 3, 5]
puts