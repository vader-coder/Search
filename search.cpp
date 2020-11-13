List<Position*>* Maze::solve(OrderedCollection<Position*>* exploration) {
    Position* current;
    this->positions[0][0]->setVisited();  //mark as visited
    List<Position*>* neighbors;
    OrderedCollection<Position*>* frontier = exploration;//set frontier equal to pointer.
    List<Position*>* path = new STLList<Position*>();//new list to track path
    frontier->insert(this->positions[0][0]);
    while (frontier->getSize() > 0) {
        current = frontier->remove();
        if (isGoal(current, this)) {  //current is goal
            path->insertFirst(current);
            while (current->getPrevious()) {
                current = current->getPrevious();
                path->insertFirst(current);
            }
            //delete neighbors;
            delete frontier;
            return path;
        } else {
            neighbors = this->getNeighbors(current);  //returns a list
            while (!neighbors->isEmpty()) {           //for each neighbor of current
                Position* neighbor = neighbors->removeLast();
                if (!neighbor->isVisited()) {
                    neighbor->setVisited();          //mark as visited
                    neighbor->setPrevious(current);  //set neighbor's previous to current
                    frontier->insert(neighbor);        //neighbor to stack keeping track of frontier
                }
            }
            delete neighbors;
            neighbors = nullptr;
        }
    }
    delete frontier;
    delete path;
    return nullptr;
}
