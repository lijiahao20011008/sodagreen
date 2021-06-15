$(document).ready(function() {
    $(".shopcar").click(function() {
        $(".things").stop().slideToggle(500);
    })
    $(".car").click(function() {
        let index = $(this).parent().parent().index();
        $(".things li").eq(index).children(".box").children(".amount").val(1);
        $(".things li").eq(index).css("display", "block");
        getNum();
    })
    $(".checkall").change(function() {
        $(".things li").each(function() {
            if ($(this).css("display") == 'block') {
                $(this).children(".scheck").prop("checked", $(".checkall").prop("checked"));
            }
        })
        getSum();
    })
    $(".scheck").change(function() {
        var num = 0;
        $(".things li").each(function() {
            if ($(this).css("display") == 'block') {
                num++;
            }
        })
        if ($(".scheck:checked").length == num) {
            $(".checkall").prop("checked", true);
        } else {
            $(".checkall").prop("checked", false);
        }
        getSum();
    })
    $(".on").click(function() {
        let n = $(this).siblings(".amount").val();
        $(this).siblings(".amount").val(++n);
        getSum();
    })
    $(".down").click(function() {
        let n = $(this).siblings(".amount").val();
        $(this).siblings(".amount").val(--n);
        if (n == 0) {
            $(this).parent().parent().css("display", "none");
            $(this).parent().siblings(".scheck").prop("checked", false);
        }
        getSum();
        getNum();
    })
    var prices = [88, 100, 29, 49, 32, 22, 19, 99, 10, 249, 25, 43, 63, 10];

    function getSum() {
        var sum = 0;
        $(".things li").each(function() {
            if ($(this).children(".scheck").prop("checked")) {
                sum += $(this).children(".box").children(".amount").val() * prices[$(this).index()]
            }
        })
        $(".cost").val(sum);
    }

    function getNum() {
        var Num = 0;
        $(".things li").each(function() {
            if ($(this).css("display") == 'block') {
                Num++;
            }
        })
        if (Num == 0) {
            $(".checkall").prop("checked", false);
        }
        $(".kinds").val(Num);
    }
    $(".buy").click(function() {
        $(".mask").fadeIn(500);
        $(".information").fadeIn(500);
        $(".inum").val(1);
        var index = $(this).parent().parent().index();
        getPay(index);
    })
    $(".increase").click(function() {
        let paid = $(this).siblings(".inum").val();
        var payment = $(".pay").val() / $(this).siblings(".inum").val();
        $(this).siblings(".inum").val(++paid);
        $(".pay").val(paid * payment);
    })
    $(".decrease").click(function() {
        let paid = $(this).siblings(".inum").val();
        var payment = $(".pay").val() / $(this).siblings(".inum").val();
        if (paid > 1) {
            $(this).siblings(".inum").val(--paid);
        }
        $(".pay").val(paid * payment);
    })
    $(".mask").click(function() {
        $(this).fadeOut(500);
        $(".information").fadeOut(500);
        $(".buybox").children("button").css("display", "inline-block");
        $(".buybox").children(".inum").css("display", "inline-block");
    })

    function getPay(index) {
        var payment = $(".inum").val() * prices[index];
        $(".pay").val(payment);
    }
    $(".end").click(function() {
        $(".mask").fadeIn(500);
        $(".information").fadeIn(500);
        $(".buybox").children("button").css("display", "none");
        $(".buybox").children(".inum").css("display", "none");
        $(".pay").val($(".cost").val());
    })
})