class MazeNode {
    private  Pair<int, int> position;
    private boolean visited = false;
    private MazeNode previous = null;
    public MazeNode (Pair<int, int> position) {
        this.position = position;
    }
    public void setVisited() {
        visited = true;
    }
    public void wasVisited() {
        return visited;
    }
    public void setPrevious (MazeNode node) {
        previous = node;
    }
    public Pair<int,int> position() {
        return position;
    }
}