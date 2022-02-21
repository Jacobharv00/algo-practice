#Write a method hand_score that takes in a string representing a hand of cards and returns it's total score. You can assume the letters in the string are only A, K, Q, J. A is worth 4 points, K is 3 points, Q is 2 points, and J is 1 point. The letters of the input string not necessarily uppercase.

# First Way
# def hand_score(hand)
# #   Ace = 4 points
# #   King = 3 points
# #   Queen = 2 points
# #   Jack = 1 point
  
# 	points = 0
  
#   hand.each_char do |char|
    
#     if char == 'A' || char == 'a'
#       points += 4
#     end
    
#     if char == 'K' || char == 'k'
#       points += 3
#     end
    
#     if char == 'Q' || char == 'q'
#       points += 2
#     end
    
#     if char == 'J' || char == 'j'
#       points += 1
#     end  
#   end
#   return points
# end

puts hand_score("AQAJ") #=> 11
puts hand_score("jJka") #=> 9

# Refactored Way
def hand_score(hand)
  points = {
    "A" => 4,
    "K" => 3,
    "Q" => 2,
    "J" => 1
  }

  score = 0
  
  hand.each_char { |char| score += points[char.upcase] }
  return score
end

puts hand_score("AQAJ") #=> 11
puts hand_score("jJka") #=> 9