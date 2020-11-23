class Server {
    public static void main(String args[]) {
        //set up server
        //int[][] maze, int rows, int cols, String wall, String open
        //change string wall, open to sm else or eliminate them altogether. 
        Search searcher = BFS(maze, rows, cols, '#', '.', "@");
        //String[][] maze, int rows, int cols, String wall, String open, String visited
    }
    public static String pairToId(Pair<int, int> pair) {
        return Integer.toString(pair.first) + " " + Integer.toString(pair.second);
    }
    //convert text file to 2d array maze of integers.
    //or could have it as an array of strings: would save some work. 
    public static String[][] textToMaze() {

    }
}