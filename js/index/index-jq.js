$(document).ready(function() {
    $(".header li").click(function() {
            $(this).css("background", "#274E7D");
            $(this).children("a").css("color", "#fff");
            $(this).siblings("li").css("background", "#2b303f");
            $(this).siblings("li").children("a").css("color", "#ccc");
            let index = $(this).index() - 1;
            $(".fssnav li").eq(index).click();
        })
        // $(".header li").eq(1).click();
    $(".partner li").mouseenter(function() {
        $(this).css("width", "300px");
        $(this).siblings().css("width", "200px");
    })
    $(".partner li").eq(0).mouseenter();
    $(".music").mouseenter(function() {
        $(this).children(".pin").children().addClass("rotate");
        $(this).css("transform", "translateX(0px)");
    })
    $(".music").mouseleave(function() {
        $(this).children(".pin").children().removeClass("rotate");
        $(this).css("transform", "translateX(-350px)");
    })
    $(".album li").mouseenter(function() {
        let index = $(this).index();
        $(this).css("transform", "scale(1.4) translateY(-30px)");
        $(this).children().css("transform", "scale(1.2)");
        if (index != 0) {
            $(this).siblings().eq(index - 1).css("transform", "scale(1.2) translateY(-20px)");
        }
        $(this).siblings().eq(index).css("transform", "scale(1.2) translateY(-20px)"); //兄弟中不包含自己，所以index不用+1
    })
    $(".album li").mouseleave(function() {
        $(this).css("transform", "scale(1)");
        $(this).siblings().css("transform", "scale(1)");
        $(this).siblings().css("transform", "scale(1)");
        $(this).children().css("transform", "scale(1)");
    })
    $(".album li").click(function() {
        let index = $(this).index();
        $(".dcp div").eq(index).css("display", "block");
        $(".dcp div").eq(index).siblings().css("display", "none");
    })
    $(".album li").eq(0).click();
    $(".show li .act").fadeOut(0);
    $(".show li").mouseenter(function() {
        $(this).children("div").css("transform", "scale(300)");
        $(this).children(".mask").css("transform", "scale(1.1)");
        $(this).children(".act").stop().fadeIn(300);
        $(this).children("p").css("transform", "translateY(-80px)");
    })
    $(".show li").mouseleave(function() {
        $(this).children("div").css("transform", "scale(0)");
        $(this).children(".mask").css("transform", "scale(1)");
        $(this).children(".act").stop().fadeOut(300);
        $(this).children("p").css("transform", "translateY(50px)");
    })
    var Srcs = ["video/小情歌.mp4", "video/故事.mp4", "video/无与伦比的美丽.mp4", "video/蝉想.mp4", "video/对杀人狂指控.mp4"];
    $(".show li").click(function() {
        $(".music li").each(function() {
            $(this).children("audio").attr("src", " ");
        })
        let index = $(this).index();
        if (index != 5) {
            $(".videos").fadeIn(500);
            $(".videos li").eq(index).children("video").attr('src', Srcs[index]);
            $(".videos li").eq(index).css("display", "block");
            $(".videos li").eq(index).fadeIn(500);
            $(".videos li").eq(index).children()[0].play();
        }
    })
    $(".close").click(function() {
        $(".videos").fadeOut(500);
        $(".videos li").each(function() {
            $(this).fadeOut(500);
            $(this).children().attr("src", " ");
        })
    })
    for (let i = 0; i < $(".music li").length; i++) {
        if (i % 2 == 0) {
            $(".music li").eq(i).css("background", "-webkit-linear-gradient( left, #0A64A4,transparent)");
        } else {
            $(".music li").eq(i).css("background", "-webkit-linear-gradient( left, #03406A,transparent)");
        }
    }
});