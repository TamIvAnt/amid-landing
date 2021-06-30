$(document).ready(function(){
    $('.header_burger').click(function(event) {
        $('.header_burger, .header_menu').toggleClass('active');
        $('body').toggleClass('lock');
    })

    $('.logo').hide().fadeIn(1100);
    $('#logo').hide().fadeIn(1100);
    $('.header_list').hide().fadeIn(1200);
    $('.header_burger').hide().fadeIn(1200);
});

var isScrolling = false;
 
window.addEventListener("scroll", throttleScroll, false);

function throttleScroll(e) {
    if (isScrolling == false) {
    window.requestAnimationFrame(function() {
        scrolling(e);
        isScrolling = false;
    });
    }
    isScrolling = true;
}

document.addEventListener("DOMContentLoaded", scrolling, false);

var firstHead = document.querySelector("#h1");
var first_p = document.querySelector(".p_content");
var first_line_btn = document.querySelector(".first-section_link_button");
var gapPL = document.querySelector("#gapPL");
var gapHL = document.querySelector("#gapHL");
var containerBlur = document.querySelector(".container-blur");
var firm_box = document.querySelectorAll(".firm-box");
var gapPR = document.querySelector(".gap_container_text_right");
var srvcItem = document.querySelectorAll(".servise_item");
var aschP = document.querySelector("#aschP");
var aschH = document.querySelector("#aschH");
var ascpItem = document.querySelectorAll(".achievements_section_content_people_item");
var jib1 = document.querySelector("#JobImgBlock1");
var jib2 = document.querySelector("#JobImgBlock2");
var bsc = document.querySelector(".blog_section_content");
var bciI1 = document.querySelector("#I1");
var bciI2 = document.querySelector("#I2");
var ssc = document.querySelector(".subscribe_section_container");
var fP = document.querySelector("#fP");
var iB = document.querySelector(".icon_block");
var fsImg = document.querySelector(".f_s_img");


function scrolling(e) {
    for (var i = 0; i < firm_box.length; i++) {
        var listItem = firm_box[i];
    
        if (isPartiallyVisible(listItem)) {
          listItem.classList.add("active");
        } else {
          listItem.classList.remove("active");
        }
    }
    for (var i = 0; i < srvcItem.length; i++) {
        var listItemS = srvcItem[i];
    
        if (isPartiallyVisible(listItemS)) {
          listItemS.classList.add("active");
        } else {
          listItemS.classList.remove("active");
        }
    }
    for (var i = 0; i < ascpItem.length; i++) {
        var listItemA = ascpItem[i];
    
        if (isPartiallyVisible(listItemA)) {
          listItemA.classList.add("active");
        } else {
          listItemA.classList.remove("active");
        }
    }

    if (isFullyVisible(firstHead)) {
        firstHead.classList.add("active");
    }

    if (isFullyVisible(first_p)) {
        first_p.classList.add("active");
    }
    if (isFullyVisible(first_line_btn)) {
        first_line_btn.classList.add("active");
    }

    if (isFullyVisible(gapPL)) {
        gapPL.classList.add("active");
    }
    if (isFullyVisible(gapHL)) {
        gapHL.classList.add("active");
    }
    if (isPartiallyVisible(containerBlur)) {
        containerBlur.classList.add("active");
    }
    if (isPartiallyVisible(gapPR)) {
        gapPR.classList.add("active");
    }
    if (isFullyVisible(aschP)) {
        aschP.classList.add("active");
    }
    if (isFullyVisible(aschH)) {
        aschH.classList.add("active");
    }
    if (isPartiallyVisible(jib1)) {
        jib1.classList.add("active");
    }
    if (isPartiallyVisible(jib2)) {
        jib2.classList.add("active");
    }
    if (isPartiallyVisible(bsc)) {
        bsc.classList.add("active");
    }
    if (isPartiallyVisible(bciI1)) {
        bciI1.classList.add("active");
    }
    if (isPartiallyVisible(bciI2)) {
        bciI2.classList.add("active");
    }
    if (isPartiallyVisible(ssc)) {
        ssc.classList.add("active");
    }
    if (isPartiallyVisible(fP)) {
        fP.classList.add("active");
    }
    if (isPartiallyVisible(iB)) {
        iB.classList.add("active");
    }
    if (isPartiallyVisible(fsImg)) {
        fsImg.classList.add("active");
    }
}

function isPartiallyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;
    var height = elementBoundary.height;

    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

function isFullyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;

    return ((top >= 0) && (bottom <= window.innerHeight));
}
