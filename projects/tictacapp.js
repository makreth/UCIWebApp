(function(){
    const tableElem = document.createElement("table");
    tableElem.id="board";
    const msgElem = document.createElement("p"); 
    msgElem.id="msg";
    let contentElem = document.getElementById("content");
    contentElem.appendChild(msgElem);
    contentElem.appendChild(tableElem);


    var turn = "X";
    const player = "X";
    var piecesPlaced = 0;

    const winComb = [
        [{"x":0,"y":0}, {"x":1,"y":0}, {"x":2,"y":0}],
        [{"x":0,"y":1}, {"x":1,"y":1}, {"x":2,"y":1}],
        [{"x":0,"y":2}, {"x":1,"y":2}, {"x":2,"y":2}],
        [{"x":0,"y":0}, {"x":0,"y":1}, {"x":0,"y":2}],
        [{"x":1,"y":0}, {"x":1,"y":1}, {"x":1,"y":2}],
        [{"x":2,"y":0}, {"x":2,"y":1}, {"x":2,"y":2}],
        [{"x":0,"y":2}, {"x":1,"y":1}, {"x":2,"y":0}],
        [{"x":0,"y":0}, {"x":1,"y":1}, {"x":2,"y":2}]
    ];

    function clickedSquare(){
        if(turn == "reset"){
            reset();
            return;
        }
        if(turn != player){
            return;
        }

        var square = event.target;
        if (square.innerHTML == ""){
            if(placePiece(square)){
                return;
            }
            writeMessage("The computer is thinking...");
            setTimeout(aiMove,Math.floor(Math.random() * 300)+250);
        }
    }

    function findVictorySquare(){
        targetSquare = false;
        winComb.forEach(function(row){
            for(let i = 0; i < 3; i ++){
                currSquare = getCell(row[i]["x"], row[i]["y"]);
                if(currSquare.innerHTML == ""){
                    match = row.filter((square, index) => index != i && getCell(square["x"], square["y"]).innerHTML != "")
                    if(match.length == 2 && getCell(match[0]["x"], match[0]["y"]).innerHTML === getCell(match[1]["x"], match[1]["y"]).innerHTML){
                        targetSquare = currSquare;
                    }
                }
            }
        });
        return targetSquare;
    }

    function recurse(n1,n2,res){
        if(n1 == 3){
            return res;
        }
        if(n2 == 3){
            n1+= 1;
            n2 = 0;
        }
        else{
            if(getCell(n1,n2).innerHTML == "")
                res.push([n1, n2]);
            n2+=1;
        }         
        return recurse(n1,n2,res);
    }

    function aiMove(){
        targetSquare = findVictorySquare();
        if(targetSquare === false){
            combinations = recurse(0,0, []);
            coord = combinations[Math.floor(Math.random() * combinations.length)];
            targetSquare = getCell(coord[0], coord[1]);
        }
        writeMessage("The computer placed a piece. Your turn."); 
        placePiece(targetSquare);
    }

    function placePiece(squareElem){
        squareElem.innerHTML = turn;
        squareElem.style.backgroundColor = "rgba(255,255,255,0.5)";
        piecesPlaced+=1;
        if(checkWin()){
            writeMessage(turn + " WON!");
            turn = "reset";
            return true;
        }
        if(piecesPlaced == 9){
            writeMessage("Scratched board!");
            turn = "reset";
            return true;
        }
        turn == "X" ? turn = "O" : turn = "X";
        return false;
    }

    function writeMessage(string){
    msgElem.innerHTML = string;
    }

    function reset(){
        for(var i = 0; i < 3; i++){
            for(var j = 0; j < 3; j++){
                getCell(i,j).innerHTML = "";
                getCell(i,j).style.backgroundColor = "";
            }
        }
        piecesPlaced = 0;
        chance = Math.round(Math.random());
        if (chance == 0){
            turn = "X";
            writeMessage("You go first.")
        }
        else{
            turn = "O";
            aiMove();
        }
    }

    function checkWin(){
        for(var i = 0; i < winComb.length; i++){
            var symb = "";
            for(var j = 0; j < winComb[i].length; j++){
                var curr = getCell(winComb[i][j]["x"],winComb[i][j]["y"]);
                if(curr.innerHTML == ""){
                    break;
                }
                if(symb == ""){
                    symb = curr.innerHTML;
                }
                else if(symb != curr.innerHTML){
                    break;
                }
                else if(j==2){
                    return true;
                }
            }
        }
        return false;
    }

    function getCell(x, y){
        return document.getElementById(x + "," + y);
    }

    function createTable(){
        for(var i = 2; i >= 0; i--){
            var rowElem = document.createElement("tr");
            for(var j = 0; j < 3; j++){
                var detailElem = document.createElement("td");
                detailElem.id = j + "," + i;
                detailElem.onclick = clickedSquare;
                rowElem.appendChild(detailElem);
            }
            tableElem.appendChild(rowElem);
        }
    }
    createTable();
    writeMessage("Game start! Your turn to go!");
})();