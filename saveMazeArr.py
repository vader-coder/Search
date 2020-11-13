import json
def binToArr(binFileName):
    rows = open(binFileName, 'r').read().split("\n")
    for row in range(len(rows)):
        rows[row] = list(rows[row])#split chars into list
        rows[row] = [int(i) for i in rows[row]]#convert from string to num
    return rows

def dictToJSON(arr):
    fileName = open('mazes.json', 'w')
    json.dump(arr, fileName)


mazeDict = {"bigMap": binToArr('bigMapBin.txt'), "bigMap2": binToArr('bigMapBin.txt'), 
    "bigMap3": binToArr('bigMapBin.txt') }

dictToJSON(mazeDict)
