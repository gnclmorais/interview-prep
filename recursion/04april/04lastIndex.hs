lastIndexOf :: Int -> [Int] -> (Int, Int) -> Int
lastIndexOf _ [] (i, mx) = mx
lastIndexOf n (x:xs) (i, mx)
  | n == x    = lastIndexOf n xs (i + 1, i)
  | otherwise = lastIndexOf n xs (i + 1, mx)
