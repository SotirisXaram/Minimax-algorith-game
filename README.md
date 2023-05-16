# MINIMAX ALGORITHM GAME USING JAVASCRIPT

### description

A program that will play against a player the following game of two players taking turns, the rules of which are given below:

-	On a table there are initially M identical cubes (M is a parameter of the program, e.g. M=20).
-	Each player must remove either 1, 2, or K cubes from the table. K (2<K<M) is also a program parameter, e.g. K=4. That is, each player has at most three alternative actions at a time (and cannot remove a number of cubes other than 1, 2, K).
-	The winner is the player who will remove the last cube from the table.
-	Assume that 'player MAX' = program, 'player MIN' = opponent and that MAX plays first.

Whenever the MAX is to be played, the MINIMAX algorithm is run (no pruning) with the root of the current state to find the optimal move of the MAX. 


