'use strict';

// You are given a game map and a number of mines in it. In the game map ? represents closed cells and cells with numbers
// represent how many mines are around this cell. Mines marked with x. Example:
// ? ? ? ? ?
// 0 0 0 0 0
// 0 1 1 1 0
// 0 1 x 1 0
// 0 1 1 1 0
// 0 0 0 0 0
// ? ? ? ? ?
// To start the process some cells will be open initially. You have a preloaded function open(row,column) which will return
// the number of mines around the cell (this open function does not update map, you should do it yourself). You should be
// very careful and do not open cells with mines.The task of cata is to return the same game map without any ? on it. Mines
// should be marked with x and all other cells should have a number of mines around the cell.
