
//dfs uses a stack to store frontier
class DFS extends Search {
    DFS(String[][] maze, int rows, int cols, String wall, String open, String visited) {//queue vs stack
        super(maze, rows, cols, wall, open);
        frontier = new Stack<MazeNode>();//stack
    }
    public void refresh() {
        frontier = new Stack<MazeNode>();//stack
    }
}