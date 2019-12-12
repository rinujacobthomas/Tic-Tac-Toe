var game;                       //no of games
var player1won=0;               //no of games player 1 won
var player2won=0;               //no of games player 2 won
var winner;                      // winner name
var moves=9;                        // no of moves for tie
function myMove() {                 // for starting animation
  game=$('#numberOfGames').val();
  console.log(game);
  game=game;
var elem = document.getElementById("myPlayer1");   
var elem1 = document.getElementById("myPlayer2");
var pos = 675;
var id = setInterval(frame, 10);
function frame() {                  //opening animation
  if(pos==700)
  {
    document.getElementById("buttondiv").style.display="none";
    document.getElementById("countdown").style.display="block";
    document.getElementById("countdown").innerHTML="3";
  }
  if(pos==750)
  {
    document.getElementById("countdown").innerHTML="2";             //countdown
  }
  if(pos==800)
  {
    document.getElementById("countdown").innerHTML="1";
  }
  if(pos==850)
  {
    document.getElementById("countdown").innerHTML="START";
  }
  if (pos == 900) {                                                     //setting playing board
      document.getElementById("gameNumber").style.display="none";
      document.getElementById("game").style.display="block";
      document.getElementById("player1won").innerHTML=player1won;
      document.getElementById("player2won").innerHTML=player2won;
    clearInterval(id);                                                    // clearing animation timing id
  } else {
    pos++; 
     elem1.style.right = pos + 'px'; 
    elem.style.left = pos + 'px'; 
  }
}
}
var check=0;                                    // flag to determine O and X
function display(div)                               //function to  set X and O
{
if(check==0&&div.innerHTML!="X"&&div.innerHTML!="O")    //condition for setting x
{
  div.innerHTML="X";                                // setting X
  check=1;                                                  // changing flag value
}
else if(check==1&&div.innerHTML!="X"&&div.innerHTML!="O")   //condition for O
{
div.innerHTML="O";
check=0;                                        //changing flag
}
moves--;
status();                                   // calling status for checking winner conditions
}

var win;
    function status()
    {
        var div1=document.getElementById("div1").innerHTML,             //getting values for checking
        div2=document.getElementById("div2").innerHTML,
        div3=document.getElementById("div3").innerHTML,
        div4=document.getElementById("div4").innerHTML,
        div5=document.getElementById("div5").innerHTML,
        div6=document.getElementById("div6").innerHTML,
        div7=document.getElementById("div7").innerHTML,
        div8=document.getElementById("div8").innerHTML,
        div9=document.getElementById("div9").innerHTML;

        if((div1===div2&&div1===div3)&&(div1==="X"||div1==="O"))        // first row condition
        {
            cross(div1,"firsthor");                  // calling cross method with value and id for checking conditions for deciding winner
        }
        else if((div4===div5&&div5===div6)&&(div4==="X"||div4==="O"))       //second row condition
        {
            cross(div4,"sechor");
        }
        else if((div7===div8&&div8===div9)&&(div7==="X"||div7==="O"))       //third row condition
        {
            cross(div7,"thirdhor");
        }
        else if((div1===div5&&div5===div9)&&(div1==="X"||div1==="O"))           //diagonal
        {
            cross(div1,"lefttopdia");
        }
        else if((div3===div5&&div5===div7)&&(div3==="X"||div3==="O"))               //diagonal
        {
            cross(div3,"righttopdia");
        }
        else if((div3===div6&&div6===div9)&&(div3==="X"||div3==="O"))           //first coloumn
        {
            cross(div3,"thirdver");
        }
        else if((div1===div4&&div4===div7)&&(div1==="X"||div1==="O"))           //second coloumn
        {
            cross(div1,"firstver");
        }
        else if((div2===div5&&div5===div8)&&(div2==="X"||div2==="O"))           //third coloumn
        {
            cross(div2,"secver");
        }
        else                                        //if it is draw
        {
        win="";                                   
        if(moves==0)                            //draw
        {
            game--;                             //reducing one match
            if(game==0)             //if matches is  equal to zero
            {
                resultfunction();             //method to display result
            }
            else
            {
            setTimeout(clearAll, 2000);             // clear the player board
            }
        }
        }
        document.getElementById("player1won").innerHTML=player1won;
        document.getElementById("player2won").innerHTML=player2won;
    }

                function clearAll()                         // method for clearing board
                {
                    moves=9;
                    var clr=document.querySelectorAll(".clr")       //clearing lines
                    for (i = 0; i < clr.length; i++) {
                    clr[i].style.display="none";
                    }
                    var clr1=document.querySelectorAll(".col")      //clearing X and O 
                    for (i = 0; i < clr1.length; i++) {
                    clr1[i].innerHTML="";
                    }
                }
            function cross(div,id)                              //function for setting games won by each player 
            {
                console.log(div);
                game--;
                console.log(game);
                win=div;
                document.getElementById(id).style.display="block";
                if(win=="X")
                {
                player2won++;  
                }
                else if(win=="O")
                {
                player1won++;
                }
                if(game==0)
                {
                    resultfunction();
                }
                else                            //clear board if matches remain
                {
                setTimeout(clearAll, 2000);
                }
                
            }
            function resultfunction()             // function to show result
            {
                var status;
                if(player1won>player2won)               //checking winner
                {
                    winner=document.getElementById("player1").value;
                    document.getElementById("modal-content").style.backgroundImage="url('images/crackers.gif')";
                    status="Winner";
                }
                else if(player1won<player2won)
                {
                    winner=document.getElementById("player2").value;  
                    document.getElementById("modal-content").style.backgroundImage="url('images/crackers.gif')";
                    status="Winner";
                }
                else                            //draw
                {
                    winner="";
                    status ="Game Tie";
                    
                }
                console.log(player1won);
                console.log(player2won);
                console.log(winner);
                                                                            //displaying 
                var modal = document.getElementById("myModal");
                document.getElementById("winPlayer").innerHTML=winner;
                document.getElementById("winner").innerHTML=status;
                modal.style.display="block";
            }