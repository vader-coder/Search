class Pair<K, V> {
    private K first;
    private V second;
    Pair(K one, V two) {
        first = one;
        second = two;
    }
    //check if two pairs equal each other
    public boolean equals(Pair<K, V> pair2) {
        if (this.first == pair2.first && this.second == pair2.second) {
            return true;
        }
        return false;
    }
}