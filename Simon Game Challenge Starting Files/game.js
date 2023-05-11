var colo=["green","red","yellow","blue"];
var sequence=[];
var userchoice=[];
var level=1;
var start=false;
$(document).keypress(function()
{
    if(!start)
{
    $("#level-title").text("level "+level);
    start=true;
    nextsequence();
}
});

function nextsequence()
{
    userchoice=[];
    $("#level-title").text("level "+level);
    var rd=colo[Math.floor((Math.random()*4))];
    sequence.push(rd)
    playtime(rd);
    anima(rd);
}
$(".btn").click(function(){
    var selceted=$(this).attr("id");
    userchoice.push(selceted);
    playtime(selceted);
    anima(selceted);
    check(userchoice.length-1);
});
function check(l)
{
    if(userchoice[l]==sequence[l])
    {
        if(l+1==sequence.length)
        {
            level+=1;
            setTimeout(function(){
                nextsequence();}
                ,1000);

        }
    }
    else
    {
        $("body").addClass("gameover");
        setTimeout(function(){
            $("body").removeClass("gameover");
        },200);
        $("#level-title").text("Game over,press any key to continue");
        start=false;
        level=1;
        sequence=[];
    }
}
function playtime(rd)
{
    var audio=new Audio("sounds/"+rd+".mp3");
    audio.play();
}

function anima(rd)
{
    $("#"+rd).addClass("pressed");
    setTimeout(function(){
        $("#"+rd).removeClass("pressed");
    },100);
}