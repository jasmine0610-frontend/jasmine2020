'use strict;'

$(".s-option").click(
    function () {
        if ($(".s-top-fadein").hasClass("s-fadein")) {
            $(".s-top-fadein").addClass("s-fadeout").removeClass("s-fadein")
            $(".s-top-fadein").hide()
        }
        else {
            $(".s-top-fadein").addClass("s-fadein").removeClass("s-fadeout")
            $(".s-top-fadein").fadeIn(1500)
        };

        if ($(".s-bottom-fadeout").hasClass("s-fadein")) {
            $(".s-bottom-fadeout").addClass("s-fadeout").removeClass("s-fadein")
            $(".s-bottom-fadeout").hide()
        }
        else {
            $(".s-bottom-fadeout").addClass("s-fadein").removeClass("s-fadeout")
            $(".s-bottom-fadeout").fadeIn(1500)
        };
        //置換服務主題-淡出動畫 end

        if ($(".s-infor-top").hasClass("s-fadein")) {
            $(".s-infor-top").addClass("s-fadeout").removeClass("s-fadein")
            $(".s-infor-top").hide()
        }
        else {
            $(".s-infor-top").addClass("s-fadein").removeClass("s-fadeout")
            $(".s-infor-top").fadeIn(1500)
        };

        if ($(".s-infor-bottom").hasClass("s-fadein")) {
            $(".s-infor-bottom").addClass("s-fadeout").removeClass("s-fadein")
            $(".s-infor-bottom").hide()
        }
        else {
            $(".s-infor-bottom").addClass("s-fadein").removeClass("s-fadeout")
            $(".s-infor-bottom").fadeIn(1500)
        };

        //置換服務內容資訊及作品連結-淡出動畫 end

        console.log("test")
        $(".s-option").removeClass("s-select-active")
        $(".s-option").find("span").removeClass("s-select-active-text")
        $(this).addClass("s-select-active")
        $(this).find("span").addClass("s-select-active-text")
        // $(".s-content-theme ")
    }
);

$(".s-infor-brandImage").click(
    function () {

        console.log("brandImage");
        $(".s-infor-box .s-text").text(" 品牌形象-青山依舊在，幾度夕陽紅。慣看秋月春風。一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付青山依舊在，幾度夕陽紅。");
        console.log($(".s-infor-brandImage>.s-works-btn>a").attr("href"));
        $(".s-infor-box>.s-works-btn>a ").attr("href", $(".s-infor-brandImage>.s-works-btn>a").attr("href"))
        console.log($(".s-content-image-brandImage").attr("style"));
        $(".s-content-image").attr("style", $(".s-content-image-brandImage").attr("style"));
        $(".s-content-theme p").text("品牌形象");
    }
)
// brandimage end////////////////////////////////////////

$(".s-infor-webDesign").click(
    function () {

        console.log("webDesign")
        $(".s-infor-box .s-text").text(" 網站設計-青山依舊在，幾度夕陽紅。慣看秋月春風。一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，都付青山依舊在，幾度夕陽紅。");
        console.log($(".s-infor-webDesign>.s-works-btn>a").attr("href"));
        $(".s-infor-box>.s-works-btn>a ").attr("href", $(".s-infor-webDesign>.s-works-btn>a").attr("href"))
        console.log($(".s-content-image-webDesign").attr("style"));
        $(".s-content-image").attr("style", $(".s-content-image-webDesign").attr("style"));
        $(".s-content-theme p").text("網站設計");
    }
)
// webDesign end////////////////////////////////////////

$(".s-infor-graphicDesign").click(
    function () {

        console.log("graphicDesign")
        $(".s-infor-box .s-text").text("  平面設計-青山依舊在，幾度夕陽紅。慣看秋月春風。一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，古今多少事，都付青山依舊在，幾度夕陽紅。");
        console.log($(".s-infor-graphicDesign>.s-works-btn>a").attr("href"));
        $(".s-infor-box>.s-works-btn>a ").attr("href", $(".s-infor-graphicDesign>.s-works-btn>a").attr("href"));
        console.log($(".s-content-image-graphicDesign").attr("style"));
        $(".s-content-image").attr("style", $(".s-content-image-graphicDesign").attr("style"));
        $(".s-content-theme p").text("平面設計");
    }
)
// graphicDesign end//

$(".s-infor-seoPromote").click(
    function () {
        console.log("seoPromote")
        $(".s-infor-box .s-text").text("SEO優化-青山依舊在。一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，古今多少事，都付青山依舊在，幾度夕陽紅。");
        console.log($(".s-infor-seoPromote>.s-works-btn>a").attr("href"));
        $(".s-infor-box>.s-works-btn>a ").attr("href", $(".s-infor-seoPromote>.s-works-btn>a").attr("href"));
        console.log($(".s-content-image-seoPromote").attr("style"));
        $(".s-content-image").attr("style", $(".s-content-image-seoPromote").attr("style"));
        $(".s-content-theme p").text("SEO優化");
    }
)