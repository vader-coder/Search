//class to represent a node in a maze
class MazeNode {
    private  Pair<int, int> position;//pair to represent position in a graph
    private boolean visited = false;//has been visited
    private MazeNode previous = null;//previous node in the path
    public MazeNode (Pair<int, int> position) {
        this.position = position;
    }
    public void setVisited() {
        visited = true;
    }
    public boolean wasVisited() {
        return visited;
    }
    public void setPrevious (MazeNode node) {
        previous = node;
    }
    public Pair<int,int> position() {
        return position;
    }
}