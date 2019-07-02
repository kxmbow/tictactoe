$(document).ready(function(){
    var player = 0;
    var count = 0;
    var array = ["A","B","C","D","E","F","G","H"]
    
    $("#player_turn").text("Player 1's turn (X)");
    $(".grid").click(function(){
        var check = parseInt($(this).attr("val"));
        if(player == 0){
            count++;
            
            array.splice(check, 1, "X")
            $(this).text("X");
            $("#player_turn").text("Player 2's turn (O)")
            player = 1;
            status()    
        }
        else {
            count++;
            array.splice(check, 1, "O")
            $(this).text("O");
            $("#player_turn").text("Player 1's turn (X)");
            player = 0;
            status()
        }
    })

    function status(){
        console.log(array)
        if(array[0] === array[1] && array[0] === array[2]|| array[0] === array[3] && array[0] === array[6]|| array[0] === array[4] && array[0] === array[8]){
            alert("Player " + array[0] + " won !");
            reset()
        }
        else if(count == 9){
            alert("Tie!");
            reset()
        }   
    }    
    function reset(){
        setTimeout(() => {
            location.reload() 
        }, 1000);
       
    }
})