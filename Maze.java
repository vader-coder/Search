import java.lang.*;
import java.util.*;
import java.io.*;
//class to represent maze. 
//don't 
class Maze {
    public String[][] maze;
    public int rows;
    public int cols;
    Maze (String filename) {
        try {
            File myObj = new File(filename);
            Scanner myReader = new Scanner(myObj);
            String[] dimensions = myReader.nextLine().split(" ");
            rows = Integer.parseInt(dimensions[1]);
            cols = Integer.parseInt(dimensions[0]);
            maze = new String[rows][cols];
            for (int row = 0; row < rows; row++) {
                String data = myReader.nextLine();
                for (int i = 0; i<data.length(); i++) {
                    maze[row][i] = String.valueOf(data.charAt(i));
                }
                System.out.println(data);
            }
            myReader.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    public void print(String filename) {
        String output = "";
        for (int i=0; i<rows; i++) {
            for (int j=0; j<cols; j++) {
                output += maze[i][j];
            }
            if (i != rows-1) {//if not on last row, add newline character
                output+="\n";
            }
        }
        try {
            FileWriter file = new FileWriter(filename);
            file.write(output);
            file.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}