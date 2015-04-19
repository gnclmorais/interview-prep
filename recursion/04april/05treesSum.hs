data Tree a
  = Empty
  | Node a (Tree a) (Tree a)
  deriving (Show)

-- Example tree number 1
tree1 :: Tree Int
tree1 =
  Node 1
    (Node 2
      (Node 3 Empty Empty)
      (Node 4 Empty Empty)
    )
    (Node 5
      (Node 6 Empty Empty)
      (Node 7 Empty Empty)
    )

-- Example tree number 2
tree2 :: Tree Int
tree2 =
  Node 1
    (Node 2
      (Node 3 Empty Empty)
      Empty
    )
    (Node 4 Empty Empty)

-- Sum of a single binary tree
treeSum :: Tree Int -> Int
treeSum Empty = 0
treeSum (Node x l r) = x + treeSum l + treeSum r

-- Sums two binary trees together
binarySum :: Tree Int -> Tree Int -> Int
binarySum a b = treeSum a + treeSum b

-- Prints a binary tree by depth
-- Example: tree1 would be 1, 2, 3, 4, 5, 6, 7
printByDepth :: Tree Int -> String
printByDepth Empty = ""
printByDepth (Node x l r) = show x ++ printByDepth l ++ printByDepth r

-- Prints a binary tree by level
-- Example: tree1 would be 1, 2, 5, 3, 4, 6, 7
printByLevel :: Tree Int -> String
printByLevel (Node x Empty Empty) = show x
printByLevel (Node x (Node y ll lr) (Node z rl rr)) =
  concat $ map show [x, y, z] ++ map printByLevel [ll, lr, rl, rr]


--
-- Other problems:

-- Size of the staircase (in steps) and the length of the steps you can take
staircase :: Int -> [Int] -> Int
staircase n m
  | n < 0     = 0
  | n == 0    = 1
  | otherwise = sum $ map (\x -> staircase (n - x) m) m

-- Matrix size (x and y)
taxis :: Int -> Int -> Int
taxis x y
  | x < 1 || y < 1 = 1
  | otherwise      = (taxis (x - 1) y) + (taxis x (y - 1))
