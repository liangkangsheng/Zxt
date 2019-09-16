$(".banner_zxrj.guanbi").eq(2).hide();
var thisCityUrl = "//" + window.location.host;
addCookie("mycity", thisCityUrl, 30);
$(function() {
  var swiper_banner = banner();
  function banner() {
    var swipers = new Swiper(".swiper_banner", {
      direction: "horizontal",
      loop: true,
      autoplay: 5000,
      clickable :true,
      pagination: ".swiper-pagination",
      nextButton: ".swiper-button-next",
      prevButton: ".swiper-button-prev",
      setWrapperSize: true
    });
    return swipers;
  }
  var decoration_slide = decorationSlide();
  function decorationSlide() {
    var swipers = new Swiper(".decoration_slide", {
      direction: "horizontal",
      loop: true,
      autoplay: 6000,
      setWrapperSize: true,
      width:348,
      pagination: ".swiper-pagination",
    });
    return swipers;
  }
  $(".banle_uy span.sk span.jk").html(
    "<font>0</font><font>1</font><font>2</font><font>3</font><font>4</font><font>5</font><font>6</font><font>7</font><font>8</font><font>9</font><font>0</font>"
  );
  $(".banle_uy span.sk").each(function(i) {
    var sums = $(this).attr("date_s");
    if (sums == 0) {
      sums = 10;
    }
    sums = sums * 36 * -1;
    if (ie_is() < 8) {
      sums = sums - 4;
    }
    timeout = 1400 + 160 * i;
    $(this)
      .find(".jk")
      .animate({ marginTop: sums }, timeout);
  });
  var swiper_jrtt = jrtt();
  function jrtt() {
    var swipers = new Swiper(".swiper_jrtt", {
      direction: "vertical",
      autoplay: 3000,
      loop: true,
      setWrapperSize: true,
      calculateHeight: true,
      calculateWidth: true,
      paginationClickable: true,
      autoplayDisableOnInteraction: true,
      keyboardControl: false,
      noSwiping: true
    });
    return swipers;
  }
//$(".swiper_jrtt").hover(
//  function(e) {
//    $(".swiper_jrtt .swiper-slide").addClass("swiper-no-swiping");
//    swiper_jrtt.stopAutoplay();
//  },
//  function(e) {
//    $(".swiper_jrtt .swiper-slide").removeClass("swiper-no-swiping");
//    swiper_jrtt.startAutoplay();
//  }
//);
  $("a.fwliucss").click(function() {
    $("div.fwliucs").show();
    $("div.fwliucs").addClass("open");
  });
  $("div.fwliucs").click(function() {
    $("div.fwliucs").removeClass("open");
    setTimeout(function() {
      $("div.fwliucs").hide();
    }, 500);
  });
  $(".information-header-nav li").on("click", function() {
    var activeIndex = $(this).index();
    var viewId = $(this).parent().data("id");
    $(this)
      .addClass("information-active")
      .siblings("li")
	  .removeClass("information-active");
    $("#" + viewId + ">.information-tabs")
      .eq(activeIndex)
      .addClass("information-tabs-active")
      .siblings()
      .removeClass("information-tabs-active");
  });
  var swiper_comp = comp();
  function comp() {
    var swipers = new Swiper(".swiper_comp", {
      direction: "horizontal",
      autoplay: 4000,
      loop: true,
      pagination: ".swiper-pagination",
      setWrapperSize: true,
      calculateHeight: true,
      calculateWidth: true,
      paginationClickable: true,
      autoplayDisableOnInteraction: true,
      keyboardControl: false,
      noSwiping: true
    });
    return swipers;
  }
  var swiper_liuyan = liuyan();
  function liuyan() {
    var swipers = new Swiper(".swiper_liuyan", {
      direction: "vertical",
      autoplay: 5000,
      loop: true,
      setWrapperSize: true,
      calculateHeight: true,
      calculateWidth: true,
      paginationClickable: true,
      autoplayDisableOnInteraction: true,
      keyboardControl: false,
      noSwiping: true
    });
    return swipers;
  }
  $(".swiper_liuyan").hover(
    function(e) {
      $(".swiper_liuyan .swiper-slide").addClass("swiper-no-swiping");
      swiper_liuyan.stopAutoplay();
    },
    function(e) {
      $(".swiper_liuyan .swiper-slide").removeClass("swiper-no-swiping");
      swiper_liuyan.startAutoplay();
    }
  );
  var swiper_zxzxyi = zxzxyi();
  function zxzxyi() {
    var swipers = new Swiper(".swiper_zxzxyi", {
      direction: "horizontal",
      autoplay: 5000,
      loop: true,
      pagination: ".swiper-pagination",
      setWrapperSize: true,
      calculateHeight: true,
      calculateWidth: true,
      paginationClickable: true,
      autoplayDisableOnInteraction: true,
      keyboardControl: false,
      noSwiping: true
    });
    return swipers;
  }
//$(".swiper_zxzxyi").hover(
//  function(e) {
//    $(".swiper_zxzxyi .swiper-slide").addClass("swiper-no-swiping");
//    swiper_zxzxyi.stopAutoplay();
//  },
//  function(e) {
//    $(".swiper_zxzxyi .swiper-slide").removeClass("swiper-no-swiping");
//    swiper_zxzxyi.startAutoplay();
//  }
//);
  var swiper_zxzxer = zxzx();
  function zxzx() {
    var swipers = new Swiper(".swiper_zxzxer", {
      direction: "horizontal",
      autoplay: 5000,
      loop: true,
      pagination: ".swiper-pagination",
      setWrapperSize: true,
      calculateHeight: true,
      calculateWidth: true,
      paginationClickable: true,
      autoplayDisableOnInteraction: true,
      keyboardControl: false,
      noSwiping: true
    });
    return swipers;
  }
  $(".swiper_zxzxer").hover(
    function(e) {
      $(".swiper_zxzxer .swiper-slide").addClass("swiper-no-swiping");
      swiper_zxzxer.stopAutoplay();
    },
    function(e) {
      $(".swiper_zxzxer .swiper-slide").removeClass("swiper-no-swiping");
      swiper_zxzxer.startAutoplay();
    }
  );
  
  $(".pcmain4_rl_lb .pcmain4_title span").click(function() {
    var demo = $(this)
      .parents(".pcmain4_title")
      .find("span");
    var ind = demo.index(this);
    demo.removeClass("title_tb");
    $(this).addClass("title_tb");
    $(this)
      .parents(".pcmain4_rl_lb")
      .find(".pcmain4_news .pcmain4_list")
      .hide();
    $(this)
      .parents(".pcmain4_rl_lb")
      .find(".pcmain4_news .pcmain4_list")
      .eq(ind)
      .show();
  });
  var xgt_ind = 0;
  var objs = $(".pcmina7 .pcmain7_lb .pcmain7_img")
    .eq(0)
    .find("li.hover");
  $("#gd_xgt").attr("href", objs.find("a").attr("hrefs"));
  $("#gd_xgt span").html(objs.find("a span").html());
  $("#gd_xgt").show();
  $(".pcmina7 .lb_title li").hover(function() {
    var ind = (xgt_ind = $(".pcmina7 .lb_title li").index(this));
    $(".pcmina7 .lb_title li").removeClass("xhx");
    $(this).addClass("xhx");
    $(".pcmina7 .pcmain7_lb .pcmain7_img").hide();
    $(".pcmina7 .pcmain7_lb .pcmain7_img")
      .eq(ind)
      .show();
  });
  $(".pcmina7 .pcmain7_lb .pcmain7_img li").click(function() {
    var ind = $(".pcmina7 .pcmain7_lb .pcmain7_img")
      .eq(xgt_ind)
      .find("li")
      .index(this);
    if (ind != 9) {
      $(".pcmina7 .pcmain7_lb .pcmain7_img")
        .eq(xgt_ind)
        .find("li")
        .removeClass("hover ");
      $(this).addClass("hover");
      $(".pcmain7_list .xgt_list_").hide();
      $(".pcmain7_list .xgt_list_")
        .eq(xgt_ind * 9 + ind)
        .show();
      $("#gd_xgt").attr(
        "href",
        $(this)
          .find("a")
          .attr("hrefs")
      );
      $("#gd_xgt span").html(
        $(this)
          .find("a span")
          .html()
      );
    }
  });
  $(".pcmain9_lt .pcmain4_title span").click(function() {
    var demo = $(this)
      .parents(".pcmain4_title")
      .find("span");
    var ind = demo.index(this);
    demo.removeClass("title_tb");
    $(this).addClass("title_tb");
    $(this)
      .parents(".pcmain9_lt")
      .find(".pcmain4_news .pcmain4_hot_rl")
      .hide();
    $(this)
      .parents(".pcmain9_lt")
      .find(".pcmain4_news .pcmain4_hot_rl")
      .eq(ind)
      .show();
  });
  !(function() {
    var html = $(".ndd_com .ndd_com_text").html();
    if (window.document.location.href.indexOf("//ty.zx123.cn/") != -1) {
      $(".ndd_cleft ul li a")
        .eq(0)
        .attr("href", "//www.zx123.cn/about/ty_zx123.html");
      $(".ndd_cleft ul li a")
        .eq(1)
        .text("联系我们");
      $(".ndd_cleft ul li a")
        .eq(1)
        .attr("href", "//www.zx123.cn/about/ty_zx123_lx.html");
      $(".ndd_com .ndd_com_text").html(
        html + "<br>晋中优装优饰网络科技有限公司是太原区域的唯一授权代理"
      );
    }
    if (window.document.location.href.indexOf("//dezhou.zx123.cn/") != -1) {
      $(".ndd_cleft ul li a")
        .eq(0)
        .attr("href", "//www.zx123.cn/about/dezhou_zx123.html");
      $(".ndd_cleft ul li a")
        .eq(1)
        .text("联系我们");
      $(".ndd_cleft ul li a")
        .eq(1)
        .attr("href", "//www.zx123.cn/about/dezhou_zx123_lx.html");
      $(".ndd_com .ndd_com_text").html(
        html + "<br>德州市经济开发区华景设计工作室德州区域的唯一授权代理"
      );
    }
    if (
      false &&
      window.document.location.href.indexOf("//xa.zx123.cn/") != -1
    ) {
      $(".ndd_cleft ul li a")
        .eq(0)
        .attr("href", "//www.zx123.cn/about/xa_zx123.html");
      $(".ndd_cleft ul li a")
        .eq(1)
        .text("联系我们");
      $(".ndd_cleft ul li a")
        .eq(1)
        .attr("href", "//www.zx123.cn/about/xa_zx123_lx.html");
      $(".ndd_com .ndd_com_text").html(
        html + "<br>西安艺设艺得网络科技有限公司西安区域的唯一授权代理"
      );
    }
    $(".ndd_cleft ul li a")
      .eq(11)
      .attr("href", "//www.zx123.cn/about/baoxian.html");
    $(".ndd_cleft ul li a")
      .eq(11)
      .text("装修保障");
  })();
});
