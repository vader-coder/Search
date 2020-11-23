//only bfs uses a deque instead of a stack.
class BFS extends Search {
    BFS(String[][] maze, int rows, int cols, String wall, String open, String visited) {//queue vs stack
        super(maze, rows, cols, wall, open);
        frontier = new Deque<MazeNode>();//queue
    }
    public void refresh() {
        frontier = new Deque<MazeNode>();//queue
    }
}