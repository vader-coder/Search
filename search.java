//solves maze, can use any kind of linked list
class Search {
    private String [][] maze;//array of ints
    private int rows;
    private int cols;
    private String visited;//int for visiited
    private String wall;//int for closed
    private String open;//int for open
    private Pair<int, int> start;//start index pair
    private Pair<int, int> goal;//end index pair in 2d array
    private List frontier;//use a child class to extend and use a queue or a list.
    Search(String[][] maze, int rows, int cols, String wall, String open, String visited) {
        this.maze = maze;
        this.rows = rows;
        this.cols = cols;
        this.wall = wall;
        this.open = open;
        this.visited = visited;
    }
    //we probably want a new maze each time we solve since we are changing the goal
    //give type of deque to return once you decide on it.
    public void solve (Pair<int, int> start, Pair<int, int> goal) {
        //mark start node as visited
        this.start = start;
        this.goal = goal;
        MazeNode current;
        Stack<MazeNode> neighbors;
        setVisited(start.first, start.second);
        Stack<Pair<int, int>> path = new Stack<Pair<int, int>>();//create list to track path
        //make sure frontier is an empty LinkedList
        MazeNode startNode = new MazeNode(start);
        frontier.add(startNode);
        while(!frontier.isEmpty()) {
            current = frontier.remove();
            if (isGoal(current)) {//if current is goal, return path
                path.add(current.position);//add goal to stack path->insertFirst()
                //could keep track of goal, have each point to next.
                while (current.previous() != null) {//start has null
                    current = current.previous();
                    path.add(current.position);//add current to stack
                    //path->insertFirst(current);
                }
                /* c++ version had an array of nodes, each of which knowing 
                the previous node in the path.
                we would like to add to path as we go along */
                return path;
            }
            else {//not at goal.
                //change current to a node. make more node based.
                neighbors = neighbors(current);
                while (!neighbors.isEmpty()) {           //for each neighbor of current
                    MazeNode neighbor = neighbors.removeLast();
                    if (!neighbor.wasVisited()) {
                        neighbor.setVisited();          //mark as visited
                        neighbor.setPrevious(current);//neighbor.setPrevious(current);  //set neighbor's previous to current
                        frontier.add(neighor);        //neighbor to stack keeping track of frontier
                    }
                }
            }
        }
    }
    public boolean isGoal(MazeNode node) {
        Pair<int, int> position = node.position;
        if (position == goal) {//check if we can compare pairs like this.
            return true;
        }
        return false;
    }
    public setVisited(int rowIndex, int colIndex) {
        maze[rowIndex][colIndex] = visited;
    }
    //implement getNeighbors. return list of pairs
    public Stack<MazeNode> neighbors(Pair<int,int> position) {
        int row = position.first;
        int col = position.second;
        //<row-1, col-1>, <row-1, col>, <row-1, col+1>
        //<row, col-1> <row, col+1> 
        //<row+1, col-1>, <row+1, col>, <row+1, col+1>
        //I want diagonal ones to be considered neighbors as well.
        Stack<Pair<int, int>> neighbors = new Stack<MazeNode>();
        int neighborCanidates = 8;
        //find indeces of all possible neighbors and iterate through them.
        Pair<int, int> canidates[] = {Pair<int, int>(row-1, col-1), 
            Pair<int, int>(row, col-1), Pair<int, int>(row+1, col-1),
            Pair<int, int>(row-1, col), Pair<int, int>(row+1, col), 
            Pair<int, int>(row-1, col+1), Pair<int, int>(row, col+1), 
            Pair<int, int>(row+1, col+1)};
        for (int i=0; i<neighborCanidates; i++) {
            int rowIndex = canidates[i].first;
            int colIndex = canidates[i].second;
            if (isNeighbor(rowIndex, colIndex) {
                neighbors.add(new MazeNode(new Pair<int><int>(rowIndex, colIndex)));
            }
        }
        //add neighbors here.
        return neighbors;
    }
    private boolean isNeighbor(int rowIndex, int colIndex) {
        if (exists(rowIndex, colIndex)) {
            if (maze[rowIndex][colIndex] != wall) {
                return true;
            }
            return false;
        }
        return false;
    }
    //<= lastRow same as < rows. if == rows then still outside.
    private boolean exists(int rowIndex, int colIndex) {
        if (rowIndex >= 0 && rowIndex < rows && colIndex >= 0 && colIndex < cols) {
            return true;
        }
        return false;
    }
}