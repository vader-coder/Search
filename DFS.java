
class DFS extends Search {
    DFS(int[][] maze, int rows, int cols, String wall, String open) {//queue vs stack
        super(maze, rows, cols, wall, open);
        frontier = new Stack<MazeNode>();//stack
    }
    public void refresh() {
        frontier = new Stack<MazeNode>();//stack
    }
}