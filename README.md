# kata_ts_mars_rover

##1️⃣ Setting the Scene
You have been asked to create a program to move rovers around the surface of Mars! ✨
The surface of Mars is represented by a Plateau. You can make the assumption that the Plateau is a square/rectangular grid for the purpose of this task.
Rovers navigate the Plateau so they can use their special cameras 📷 and robot arms 🦾 to collect samples back to Planet Earth 🌏

##2️⃣ Your Task
👉
Choose an approach
that you feel comfortable with to receive input into your program:

1. feeding input values into unit tests 👍
2. input via a console application; 🔥
3. supplying input via a file; 🔥
   👉 Note that options 2 & 3 are a little trickier, as you have to account for external user input, which could be anything! 👀
   There are some important notes on handling potential user input below!
   👉 Create a program which implements the rules for the Mars Rover, which can be found at the end of this brief.
   ⚠️ IMPORTANT: Imagine that this isn’t simply a little kata, but instead the starting point of a whole app!
   Structure your code and files in such a way that it can scale as more features are added in future. We will assess how well you achieve this!
   👉 Apply Test-Driven Development (TDD) to test-drive your solution as you build it.
   👉 Create production-quality code. This means you have thought carefully about your code design and that your code is clean and well-tested.

###⌨️ Inputs into the Program
**First Line of Input to the Program**
The first line inputted into the program represents the upper-right coordinates of the Plateau.
5 5
This Plateau has maximum (x, y) co-ordinates of (5, 5).
N.B. Assume that the lower-left coordinate is (0, 0).

Subsequent Lines of Input into the Program - Input to Rovers
This represents the instructions to move the rovers.
Each rover receives **two lines of input.**
**First Line of Input to a Rover**
The Rover’s position is represented by two integers representing the X and Y coordinates and a letter representing where the Rover is facing (its orientation).
1 2 N
**Second Line of Input to a Rover**
A string of letters representing the instructions to move the Rover around the Plateau.

**📏 Movement Rules**
Rovers move sequentially, this means that the first Rover needs to finish moving first before the next one can move.

###➡️ Output
For each Rover, the output represents its final position (final coordinates and where it is facing).

###Example Test Case
Lines of Input to the Program:
5 5
1 2 N
LMLMLMLMM
