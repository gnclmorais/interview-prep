-- Generate all the re-orderings of a set of letters. (permutations)
--reorderings :: String -> [String]
--reorderings []     = []
--reorderings l@(x:xs) = map (\y -> map ([l !! y] ++) (reorderings xs)) idx
--  where idx = [0..length l - 1]

import Data.List

dropByIndex :: Int -> String -> String
dropByIndex i l@(x:xs)
  | i < 0         = l
  | i >= length l = l
  | otherwise     =
