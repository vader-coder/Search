
mazeStr1 = 1
mazeStr2 = 3
mazeStr3 = 4

def convertMazeToArray(fileName, outputFileName):
    file = open(fileName, 'r')
    mazeStr = file.read()
    mazeStr = mazeStr.replace(".", "0")
    mazeStr = mazeStr.replace("#", "1")
    output = open(outputFileName, 'w')
    output.write(mazeStr)
    return mazeStr


mazeStr1 = convertMazeToArray('bigMap.txt', 'bigMapBin.txt')
mazeStr2 = convertMazeToArray('bigMap2.txt', 'bigMapBin2.txt')
mazeStr3 = convertMazeToArray('bigMap3.txt', 'bigMapBin3.txt')

if (mazeStr1 == mazeStr2):
    print("12")
if (mazeStr1 == mazeStr3):
    print("13")
if (mazeStr2 == mazeStr3):
    print("23")

