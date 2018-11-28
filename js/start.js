/* The start script */

jQuery(document).ready(function($) {
            $("#navbar").css("display","none");
            $("#a").text("[ START ]");
            setTimeout(function() {
                $('.trans--grow').addClass('grow');
            }, 275);
        });


setTimeout(function () {
    $("#a").click(function () {
        $("#hr1").removeClass('hr1');
        $("#hr1").addClass('hr3');
        $("#hr2").removeClass('hr2');
        $("#hr2").addClass('hr4');
        loader();
    });
}, 1000);


/* A.K.A Functions */
let x = 0;
function timer() {
    if (x == 5) {
        setTimeout(() => {
            $("#a").remove();
            $("#viewbox").remove();    
            $("body").css("align-items", "baseline");
            $("#hr1").remove();
            $(".container").css("height","-webkit-fill-available");
            $("#navbar").css("display","");
            /*Showing up BOTTOM line*/
            $("#hr2").removeClass("hr4");
            $("$hr2").addClass("hr1");
            $("trans--grow").addClass("bot_line");
        }, 1000);

    } else {
        x++;
        setTimeout(() => {
            $("#g" + x).remove();
            timer();
        }, 200);
    }
}
let y=1;
function loader(){
    if(y>100){
        $("#a").text("Loaded 100%");
        timer();
    }else {
        y*=2;
        setTimeout(() => {
            $("#a").text(y+"%");
            loader();
        },100);
    }
}