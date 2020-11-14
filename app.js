//next: add lots of elements (25x25)

var mazeDict;//maze dicitonary
var editMode = true;//by default, not editing. 
var startId = null;
var endId = null;
function toggleCell () {
    $(this).toggleClass("white");
    $(this).toggleClass("black");
}
function toggleEditMode() {//toggle edit mode
    editMode = !(editMode);
}
//set mouse over up for white and black cells
function setMouseOver(canEdit) {
    if (canEdit) {//if can edit .mouseover
        $("button.cell").on("mouseover", function () {
            $(this).toggleClass("white");
            $(this).toggleClass("black");
        });
    }
    else {
        $("button.cell").off("mouseover");//turn off event handlers for button.cell
        //$("button.cell").unbind("mouseover");
    }
}

//display a maze represented by a 2d array of 1s and 0s
function displayMaze(maze) {
    let gridHTML = ""
    for (let row = 0; row<maze.length; row++) {
        let rowHTML = computeRow(maze[row], row);
        gridHTML+=rowHTML;
    }
    $(".grid").html(gridHTML);
}
//compute html for one row of cells
//each row contains a 1 for black and a 0 for white.
function computeRow(row, rowNum) {
    let rowHTML = "";
    let rowStr = rowNum.toString();
    let id = rowStr + "_";
    for (let col = 0; col < row.length; col++) {
        if (row[col] == 0) {//add white cell
            id += col.toString();
            rowHTML += '<button id="' + id + '" class="cell white"></button>\n';
        }
        else if (row[col] == 1) {//add black cell
            id += col.toString();
            rowHTML += '<button id="' + id + '" class="cell black"></button>\n';
        }
        id = rowStr + "_";
    }
    return rowHTML;
}

//show the default white maze
function displayBlankMaze() {
    let gridHTML = ""
    for (let row = 0; row < 39; row++) {
        let rowHTML = computeBlankRow(row);
        gridHTML += rowHTML;
    }
    $(".grid").html(gridHTML);
}
//compute default blank row of white cells
function computeBlankRow(rowNum) {
    let rowHTML = "";
    let rowStr = rowNum.toString();
    let id = rowStr + "_";
    for (let col = 0; col < 81; col++) {
        id += col.toString();
        rowHTML += '<button id="' + id + '" class="cell white"></button>\n';
        id = rowStr + "_";
    }
    return rowHTML;
}

$(document).ready(function () {
    //set cell to white background when black cell is clicked
    displayBlankMaze();
    $.getJSON("https://vader-coder.github.io/Search/mazes.json", function(mazes) {
        console.log(mazes.bigMap);
        console.log(mazes.bigMap2);
        console.log(mazes.bigMap3);
        mazeDict = mazes;
    });
    $("button.bigMap").click(function() {
        let maze = mazeDict.bigMap;
        displayMaze(maze);
        setMouseOver(editMode);
    });
    $("button.bigMap2").click(function () {
        let maze = mazeDict.bigMap2;
        displayMaze(maze);
        setMouseOver(editMode);
    });
    $("button.bigMap3").click(function () {
        let maze = mazeDict.bigMap3;
        displayMaze(maze);
        setMouseOver(editMode);
    });
    //if can't get this to work, can always switch to red and green.
    $("#target").click(function() {
        setMouseOver(false);//turn of editing
        if (endId != null) {//end has never been made
            $('#'+endId).empty();//set html of previous id to nothing
        }
        endId = $(this).attr('id');//save id of current
        $('#toggleEdit').prop("checked", false);
        $("button.white").click(function () {
            let text = `
            <span class="icon is-flex is-vertical-center" style="z-index: 10; color:#ff3860">
                <span class="fa-stack">
                    <i class="fas fa-bullseye fa-xs"></i>
                </span>
            </span>
            `;
            $(this).html(text);
        });
    });
    $("#start").click(function () {
        setMouseOver(false);//turn of editing
        $('#toggleEdit').prop("checked", false);
        $("button.white").click(function () {
            let text = `
            <span class="icon is-flex is-vertical-center" style="z-index: 10; color:#00d1b2">
                <span class="fa-stack">
                    <i class="fas fa-play fa-xs"></i>
                </span>
            </span>
            `;
            $(this).html(text);
        });
    });
    $("button.is-black").click(function () {
        $(this).toggleClass("is-black");
        $(this).toggleClass("is-ghost");
        /*$(this).attr("class", "is-white");
        $(this).removeClass("is-black");
        $(this).addClass("is-white");*/
    });
    //set cell to black background when white cell is clicked
    $("button.is-ghost").click(function () {
        $(this).toggleClass("is-black");
        $(this).toggleClass("is-ghost");
        /*$(this).attr("class", "is-black");
        $(this).removeClass("is-white");
        $(this).addClass("is-black");*/
    });
    //when checkbox clicked, toggle edit mode.
    $('#toggleEdit').click(function () {
        let checked = $(this).prop("checked");
        if (checked) {//can edit
            editMode = true;
        }
        else {//can't edit
            editMode = false;
        }
        setMouseOver(editMode);
    });
    setMouseOver(editMode);
    $("#BFS, #DFS").click(function() {
        ids = ['0_0', '0_1', '0_2', '0_3', '0_4', '0_5', '0_6', '1_0', '1_1', '1_2', '1_3', '1_4', '1_5', '1_6', '2_0', '2_1', '2_2', '2_3', '2_4', '2_5', '2_6', '3_0', '3_1', '3_2', '3_3', '3_4', '3_5', '3_6', '4_0', '4_1', '4_2', '4_3', '4_4', '4_5', '4_6', '5_0', '5_1', '5_2', '5_3', '5_4', '5_5', '5_6', '6_0', '6_1', '6_2', '6_3', '6_4', '6_5', '6_6'];
        current = 0
        let classStr;
        array = [[]];
        for (let i = 0; i<ids.length; i++) {
            let id = ids[i];
            let row = parseInt(id[0]);
            if (row <= 6) {
                if (row != current) {
                    array.push([]);
                    current++;
                    classStr = $("#" + id).attr('class');
                    array[current].push(classToArrItem(classStr));
                }
                else {
                    classStr = $("#" + id).attr('class');
                    array[current].push(classToArrItem(classStr));
                }
            }
            else {
                break;
            }
        }
        console.log(array)
    });
});
//could have 0 or 1 be a class each time & extract it. 
function classToArrItem(classStr) {
    if (classStr.contains('is-ghost')) {
        return 0;
    }
    else if (classStr.contains('is-black')) {
        return 1;
    }
}
function mkRed(id) {
    let cell = $('#'+id)
    cell.toggleClass("is-ghost");
    cell.toggleClass("is-danger");
}
function mkGreen(id) {
    let cell = $('#' + id)
    cell.toggleClass("is-ghost");
    cell.toggleClass("is-primary");
}
//generate some maze in terms of the cells that exist. 
//maybe use examples from lab.
function mkMaze() {

}