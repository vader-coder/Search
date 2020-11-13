//next: add lots of elements (25x25)

$(document).ready(function () {
    //set cell to white background when black cell is clicked
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