-- Simple Fibonacii
fib :: Int -> Int
fib x
    | x < 3     = 1
    | otherwise = fib (x - 1) + fib (x - 2)
