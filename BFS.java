class BFS extends Search {
    BFS(int[][] maze, int rows, int cols, String wall, String open) {//queue vs stack
        super(maze, rows, cols, wall, open);
        frontier = new Deque<MazeNode>();//queue
    }
    public void refresh() {
        frontier = new Deque<MazeNode>();//queue
    }
}