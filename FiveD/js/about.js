let clk = "off"; 

$(".logo_click").click(function () {

    if(clk=="on") {
        console.log(this);
        $(this).css('background-image', 'url(' + 'images/logo_click.png' + ')');
        $(this).css({"left": "38.75%"});

        $('.about1').animate({"top": "28%", "left": "12%"})
                    .css({"opacity": "1"});
        $('.about2').animate({"top": "65%", "left": "25%"})
                    .css({"opacity": "1"});
        $('.about3').animate({"top": "8%", "left": "35%"})
                    .css({"opacity": "1"});
        $('.about4').animate({"top": "66%", "left": "62%"})
                    .css({"opacity": "1"});
        $('.about5').animate({"top": "22%", "left": "68%"})
                    .css({"opacity": "1"});
        
        clk = "off";

    } else {
        console.log(this);
        $(this).css('background-image', 'url(' + 'images/r-logo.png' + ')');
        $(this).css({"left":"37.5%"});

        $('.about1').animate({"top": "40%", "left": "41%"})
                    .css({"opacity": "0"});                    
        $('.about2').animate({"top": "40%", "left": "41%"})
                    .css({"opacity": "0"});                    
        $('.about3').animate({"top": "40%", "left": "41%"})
                    .css({"opacity": "0"});                    
        $('.about4').animate({"top": "40%", "left": "41%"})
                    .css({"opacity": "0"});                    
        $('.about5').animate({"top": "40%", "left": "41%"})
                    .css({"opacity": "0"});

        clk = "on";

    }
});