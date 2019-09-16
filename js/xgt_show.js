var charsr = ['a','b','c','d','e','f'];
var charsr_nub = 0;

/**
 * 图片头数据加载就绪事件 - 更快获取图片尺寸
 * @version	2011.05.27
 * @author	TangBin
 * @see		http://www.planeart.cn/?p=1121
 * @param	{String}	图片路径
 * @param	{Function}	尺寸就绪
 * @param	{Function}	加载完毕 (可选)
 * @param	{Function}	加载错误 (可选)
 * @example imgReady('http://www.google.com.hk/intl/zh-CN/images/logo_cn.png', function () {
		alert('size ready: width=' + this.width + '; height=' + this.height);
	});
 */
var imgReady = (function () {
    var list = [], intervalId = null,

        // 用来执行队列
        tick = function () {
            var i = 0;
            for (; i < list.length; i++) {
                list[i].end ? list.splice(i--, 1) : list[i]();
            };
            !list.length && stop();
        },

        // 停止所有定时器队列
        stop = function () {
            clearInterval(intervalId);
            intervalId = null;
        };

    return function (url, ready, load, error) {
        var onready, width, height, newWidth, newHeight,
            img = new Image();

        img.src = url;

        // 如果图片被缓存，则直接返回缓存数据
        if (img.complete) {
            ready.call(img);
            load && load.call(img);
            return;
        };

        width = img.width;
        height = img.height;

        // 加载错误后的事件
        img.onerror = function () {
            error && error.call(img);
            onready.end = true;
            img = img.onload = img.onerror = null;
        };

        // 图片尺寸就绪
        onready = function () {
            newWidth = img.width;
            newHeight = img.height;
            if (newWidth !== width || newHeight !== height ||
                // 如果图片已经在其他地方加载可使用面积检测
                newWidth * newHeight > 1024
            ) {
                ready.call(img);
                onready.end = true;
            };
        };
        onready();

        // 完全加载完毕的事件
        img.onload = function () {
            // onload在定时器时间差范围内可能比onready快
            // 这里进行检查并保证onready优先执行
            !onready.end && onready();

            load && load.call(img);

            // IE gif动画会循环执行onload，置空onload即可
            img = img.onload = img.onerror = null;
        };

        // 加入队列中定期执行
        if (!onready.end) {
            list.push(onready);
            // 无论何时只允许出现一个定时器，减少浏览器性能损耗
            if (intervalId === null) intervalId = setInterval(tick, 40);
        };
    };
})();


var com = (function (win, doc) {
    var com = {};
    //冒泡阻止
    com.prevent = function (e) {
        e && e.stopPropagation ? e.stopPropagation() : win.event.cancelBubble = true;
    };
    //阻止浏览器的默认行为 
    com.stopDefault = function (e) {
        e && e.preventDefault ? e.preventDefault() : win.event.returnValue = false;
        return false;
    };
    com.mouseEvent = function (obj, Fn) {//鼠标滚轮事件
        if (obj.addEventListener) {
            obj.onmousewheel === undefined ? obj.addEventListener('DOMMouseScroll', Fn, false) : obj.addEventListener('mousewheel', Fn, false);
        }
        else {
            obj.attachEvent('onmousewheel', Fn);
        }
    };
    //cookie
    com.setCookie = function (name, value) {//设置cookie
        document.cookie = name + '=' + value;
    };
    com.getCookie = function (c_name) {//获得cookie值
        if (document.cookie.length > 0) {
            c_start = document.cookie.indexOf(c_name + "=")
            if (c_start != -1) {
                c_start = c_start + c_name.length + 1
                c_end = document.cookie.indexOf(";", c_start)
                if (c_end == -1) c_end = document.cookie.length
                return unescape(document.cookie.substring(c_start, c_end))
            }
        }
        return ""
    };
    return com;
})(window, document);
function Drag(opt) { return new Drag.prototype.init(opt); };  //拖动的函数
Drag.prototype = {
    init: function (opt) {
        this.downEle = opt.downEle || opt.obj;
        this.moveEle = opt.moveEle || opt.downEle;
        this.type = opt.type || false;
        this.down();
    },
    down: function () {
        var _this = this;
        this.downEle.onmousedown = function (e) {
            var e = e || event;
            com.prevent(e);
            _this.x = e.clientX - _this.moveEle.offsetLeft, _this.y = e.clientY - _this.moveEle.offsetTop;
            if (this.setCapture) {
                this.onmousemove = function (e) {
                    _this.move(e);
                };
                this.setCapture();
                this.onmouseup = _this.up;
            }
            else {
                document.onmousemove = function (e) {
                    _this.move(e);
                };
                document.onmouseup = _this.up;
            }
            return false;
        };
    },
    move: function (e) {
        var e = e || event, l = e.clientX - this.x, t = e.clientY - this.y;
        if (this.type) {
            var w = document.documentElement.clientWidth, h = document.documentElement.clientHeight;
            l = l < 0 ? 0 : l > w - this.moveEle.offsetWidth ? w - this.moveEle.offsetWidth : l;
            t = t < 0 ? 0 : t > h - this.moveEle.offsetHeight ? h - this.moveEle.offsetHeight : t;
        }
        this.moveEle.style.left = l + 'px';
        this.moveEle.style.top = t + 'px';
    },
    up: function () {
        this.onmouseup = null;
        this.onmousemove = null;
        if (this.releaseCapture) {
            this.releaseCapture();
        }
    }
};
Drag.prototype.init.prototype = Drag.prototype;
function ScrollBar(opt) { return new ScrollBar.prototype.init(opt) };
ScrollBar.prototype = {
    init: function (opt) {
        this.container = opt.container;
        this.target = opt.target;
        this.gap = opt.gap || 20;
        this.ifNewScrollBar();
    },
    createScrollBar: function () {//创建滚动条
        this.scroll_outer = document.createElement('div');
        this.scroll_bar = document.createElement('div');
        this.scroll_outer.className = 'custom_scroll';
        this.scroll_bar.className = 'custom_scroll_bar';
        $(".container")[0].appendChild(this.scroll_outer);
        this.scroll_outer.appendChild(this.scroll_bar);

        this.container.appendChild(this.scroll_outer);
        this.scroll_outer.appendChild(this.scroll_bar);
    },
    scrollDrag: function () {//添加滚动条拖拽
        var _this = this;
        function barDrag() { };
        barDrag.prototype = new Drag({ downEle: this.scroll_bar });
        barDrag.prototype.move = function (e) {
            var e = e || event;
            var t = e.clientY - this.y;
            _this.setTop(t);
        };
    },
    setTop: function (t) {//移动的位置
        var h = this.scroll_outer.offsetHeight - this.scroll_bar.offsetHeight;
        t = t < 0 ? 0 : t > h ? h : t;
        var scale = t / h;
        this.scroll_bar.style.top = t + 'px';
        this.scroll_bar.style.bottom = 'auto';
        this.target.style.bottom = 'auto';
        this.target.style.top = (this.scroll_outer.offsetHeight - this.target.offsetHeight) * scale + 'px';
    },
    mouseEvent: function (obj, Fn) {//鼠标滚轮事件
        if (obj.addEventListener) {
            obj.onmousewheel === undefined ? obj.addEventListener('DOMMouseScroll', Fn, false) : obj.addEventListener('mousewheel', Fn, false);
        }
        else {
            obj.attachEvent('onmousewheel', Fn);
        }
        //DOMMouseScroll 火狐
        //mousewheel     谷歌 
        //onmousewheel   IE
    },
    mouseScroll: function () {//鼠标滚轮功能
        var _this = this;
        var t = 100;
        this.mouseEvent(this.container, function (e) {
            com.stopDefault(e);
            var val = e.wheelDelta || e.detail;//e.detail只有火狐识别,  e.wheelDelta除了火狐都能识别
            if (val == 120 || val == -3) {//向上
                _this.setTop(_this.scroll_bar.offsetTop - _this.gap);
            }
            else {//向下
                _this.setTop(_this.scroll_bar.offsetTop + _this.gap);
            }
        });
    },
    clickScroll: function () {
        var _this = this;
        this.scroll_outer.onmousedown = function (e) {
            var e = e || event, gap = _this.container.offsetTop - (document.body.scrollTop || document.documentElement.scrollTop), t = e.clientY - (gap < 0 ? 0 : gap);
            _this.setTop(t);
            com.prevent(e);
        };
    },
    ifNewScrollBar: function () {//是否需要创建滚动条
        var ch = this.container.offsetHeight;
        var sh = this.target.offsetHeight;
        if (sh > ch) {
            this.createScrollBar();
            this.scrollDrag();
            this.mouseScroll();
            this.clickScroll();
            this.target.style.top = "0";
            this.scroll_bar.style.cssText = "top:0;height:" + ch / sh * 100 + "%";
        }
    }
};
ScrollBar.prototype.init.prototype = ScrollBar.prototype;
function Picture() { };
Picture.prototype = {
    setSomes: function () {
        this.box = $(".container");
        this.imgCon = $(".img_content");
        this.imgBox = $(".img_box");
        this.thumbDiv = $(".img_list");
        this.list = $(".list");
        this.imgTag = $(".img_div_tag");
        this.imgDiv = $(".img_div");
        this.rightBar = $(".right_part");
        this.marqueeCon = $(".marquee_con");
        this.leftArrow = $("#left_Arrow");
        this.rightArrow = $("#right_Arrow");
        this.num = 0;
        this.albumIndex = 0;
        this.timer = null;
        this.thumbCur = null; //生成例表后再指定
        this.listWidth = 100;
        this.imgDefSize = {};
        this.albumSw = false;
        this.albumScrollSw = false;
        this.crumbs = $("#fine_n");
        this.mode = mode || "thumb";
        this.imgCon.addClass("init");
        this.collectid = 0;
        this.imgBox[0].onmousedown = function () { return false; };
        if (!window.XMLHttpRequest) {//fuck IE6
            this.imgTag.hover(function () { $(".btn").show() ;}, function () { $(".btn").hide();});
        };

        return this;
    },

    setAlbumIndex: function(index){
        this.albumIndex = index;
        return this;
    },
    //图片大小
    imgSize: function (imgW, imgH, divW, divH) {
        var scale = imgW / imgH, scale2 = divW / divH, w, h;
        scale > scale2 ? (w = divW, h = divW / scale) : (w = scale * divH, h = divH);
        return {
            w: w > imgW ? imgW : w,
            h: h > imgH ? imgH : h
        }
    },
    //自适应
    picAdapt: function (boole) {
        var _this = this, h = $(window).height(), conH = h - 45 - 40, imgBoxH = conH - 95  + this.num;
        this.imgCon.height(conH);
        this.imgBox.height (imgBoxH );
        if (boole) return this;
        var imgSize = this.imgSize(this.imgDefSize.width, this.imgDefSize.height, this.imgDiv[0].offsetWidth, imgBoxH);
        this.img[0].style.cssText = "width:" + imgSize.w + "px;height:" + imgSize.h + "px;";
        this.imgTag[0].style.cssText = "width:" + imgSize.w + "px;height:" + imgSize.h + "px;top:" + (imgBoxH - imgSize.h) / 2 + "px;";
        return this;
    },
    //拖动窗口时
    windowChange: function () {
        var _this = this;
        $(window).resize(function(){
            _this.picAdapt();
            clearTimeout(_this.timer);
            _this.timer = setTimeout(function () {
                if (_this.thumbCur == undefined) return;
                _this.thumbMediate(_this.thumbCur);
            },500);
        });
        return this;
    },

    rightScroll: function () {
        ScrollBar({
            container: $(".right_content")[0],
            target: $(".right_part")[0],
            gap: 50
        });
        if (!window.XMLHttpRequest) $(".custom_scroll").height($(".container")[0].offsetHeight);
        return this;
    },

    createThumbList: function (dataImg, index, sortid) {
        var arr = [];
        var sortid = sortid ? sortid : 0;
        for (var i = 0, tLen = dataImg.length; i < tLen; i++) {
            var albumCon = {};
            if (dataImg[i].album) {
                var albumList = [];
                for (var j = 0, aLen = dataImg[i].album.length; j < aLen; j++) {
                    var pos = imgPos(dataImg[i].album[j].l.w, dataImg[i].album[j].l.h);
                    albumList[j] = "<div class=\"" + (j!=sortid ? "album_thumb" : "album_thumb select") + "\">"
                        + "<a><img  data-src=\""+getpicDomain(dataImg[i].album[j].l.ss,'s')+"\" /></a>"
                        + "<span class=\"album_info\" >" + (j + 1) + "/ " + aLen + "</span>"
                        + "</div>";
                };
                albumCon.html = "<div class=\"album\">"
                    + "<div class=\"album_con\">"
                    + "<div class=\"album_list\" style=\"width:" + aLen * 70 + "px;\">"
                    + albumList.join("")
                    + "</div>"
                    + "</div>"
                    + "<b class=\"album_prev album_btn_style \"><span></span></b>"
                    + "<b class=\"album_next album_btn_style\"><span></span></b>"
                    + "</div>";
                try{
                    arr[i] = "<div class=\"thumb img_set\" id=\"pn_"+dataImg[i].id+"\"><a class=\"thumb_con\"><img  src=\"" + getpicDomain(dataImg[i].album[0].l.ss,'s') + "\" alt=\"" + dataImg[i].album[0].l.t + "\" /></a><span class=\"thumb_info\">" + aLen + "</span>" + albumCon.html + "</div>";

                }catch(e){
                    arr[i] = "<div class=\"thumb img_set\" id=\"pn_"+dataImg[i].id+"\"><a class=\"thumb_con\"><img  src=\"//www.zx123.cn/templates/zx123cs/orange/img/chucuole.jpg\" alt=\"出错了！\" /></a><span class=\"thumb_info\">" + aLen + "</span>" + albumCon.html + "</div>";
                }
            }else {
                var pos = imgPos(dataImg[i].l.w, dataImg[i].l.h);
                arr[i] = "<div class=\"thumb\"id=\"pn_"+dataImg[i].l.id+"\"><a class=\"thumb_con\"><img  src=\"" + getpicDomain(dataImg[i].l.ss,'s') + "\" alt=\"" + dataImg[i].l.t + "\" /></a></div>";

            }

        };
        this.listWidth = 1400;
        this.list.html(arr.join("")).width(this.listWidth);
        this.thumbCur = $(".thumb").eq(index).addClass("on_cur");
        this.thumbMediate(this.thumbCur);
        this.albumChangeSrc(this.thumbCur);
        function imgPos(imgW, imgH) {
            var scale = imgW / imgH, w, h, l,c = (60 * scale).toFixed(2);
            scale > 0 ? (w = c, h = 60) : (w = 60, h = c);
            return {
                w: w,
                h: h,
                l: -((w - 60) / 2).toFixed(2)
            };
        };
        return this;
    },
    createThumb:function (dataImg){
        var albumList =[],albumCon={},arrstr;
        if(this.mode =="album"){
            for (var j = 0, aLen = dataImg.album.length; j < aLen; j++) {
                var pos = this.imgPos(dataImg.album[j].l.w, dataImg.album[j].l.h);
                albumList[j] = "<div class=\"" + (j ? "album_thumb" : "album_thumb select") + "\">"
                    + "<a><img style=\"width:" + pos.w + "px;height:" + pos.h + "px;margin-left:" + pos.l + "px;\"  data-src=\""+getpicDomain(dataImg.album[j].l.ss,'s')+"\" /></a>"
                    + "<span class=\"album_info\" >" + (j + 1) + "/ " + aLen + "</span>"
                    + "</div>";
            };
            albumCon.html = "<div class=\"album\">"
                + "<div class=\"album_con\">"
                + "<div class=\"album_list\" style=\"width:" + aLen * 70 + "px;\">"
                + albumList.join("")
                + "</div>"
                + "</div>"
                + "<b class=\"album_prev album_btn_style \"><span></span></b>"
                + "<b class=\"album_next album_btn_style\"><span></span></b>"
                + "</div>";
            arrstr = "<div class=\"thumb img_set\" id=\"pn_"+dataImg.id+"\"><a class=\"thumb_con\"><img style=\"width:" + pos.w + "px;height:" + pos.h + "px;margin-left:" + pos.l + "px;\" src=\"" + getpicDomain(dataImg.album[0].l.ss,'s') + "\" alt=\"" + dataImg.album[0].l.t + "\" /></a><span class=\"thumb_info\">" + aLen + "张</span>" + albumCon.html + "</div>";
        }else if (this.mode ="thumb")
        {
            var pos = this.imgPos(dataImg.l.w, dataImg.l.h);
            arrstr  = "<div id=\"pn_"+dataImg.l.id+"\" class=\"thumb\"><a class=\"thumb_con\"><img alt=\""+dataImg.l.t+"\" src=\""+getpicDomain(dataImg.l.ss,'s')+"\"  ></a></div>";
        }
        return arrstr;
    },
    imgPos:function (imgW, imgH) {
        var scale = imgW / imgH, w, h, l,c = (60 * scale).toFixed(2);
        scale > 0 ? (w = c, h = 60) : (w = 60, h = c);
        return {
            w: w,
            h: h,
            l: -((w - 60) / 2).toFixed(2)
        }
    },
    //缩略图点击
    thumbClick: function () {
        var _this = this, curW = _this.list[0].offsetWidth, w,meadiu=10,i,mod;
        this.list.bind("click", function (e) {
            var that = e.target, thumb = $(that).parents(".thumb"), name = thumb[0].className;
            if (name == "thumb" && name !== "img_set") {//单张点击
                _this.createBigImg(dataImg[thumb.index()],1);
                if(thumb.index() !=meadiu){
                    if(thumb.index()>meadiu ){
                        mod ='next';
                        var pushlen = thumb.index()-meadiu;
                        for(i=0;i<pushlen;i++)
                        {
                            if( nextarr.length>0){
                                _this.dataNext();
                            }else{
                                break;
                            }
                        }
                    }

                    if(thumb.index()<meadiu){
                        mod='prev';
                        var pushlen = meadiu-thumb.index();
                        for(i=0;i<pushlen;i++)
                        {
                            if( prearr.length>0){
                                _this.dataPrev();
                            }else{
                                break;
                            }
                        }
                    }
                    var offlen = (thumb.index()>meadiu) ? thumb.index()-i : thumb.index()+i;
                    _this.createThumbList(dataImg,offlen);
                }else
                {
                    _this.thumbActive(thumb, _this.thumbCur, "on_cur");
                    _this.thumbMediate(thumb);
                    _this.albumIndex = 0;
                }

            }
            if (name == "thumb img_set") {//套图展开

                //alert(thumb.index());
                _this.createBigImg(dataImg[thumb.index()].album[0],1);

                if(thumb.index() !=meadiu){
                    if(thumb.index()>meadiu ){
                        mod ='next';
                        var pushlen = thumb.index()-meadiu;
                        for(i=0;i<pushlen;i++)
                        {
                            if( nextarr.length>0){
                                _this.dataNext();
                            }else{
                                break;
                            }
                        }
                    }

                    if(thumb.index()<meadiu){
                        mod='prev';
                        var pushlen = meadiu-thumb.index();
                        for(i=0;i<pushlen;i++)
                        {
                            if( prearr.length>0){
                                _this.dataPrev();
                            }else{
                                break;
                            }
                        }
                    }
                    var offlen = (thumb.index()>meadiu) ? thumb.index()-i : thumb.index()+i;
                    _this.createThumbList(dataImg,offlen);
                }else{
                    _this.thumbActive(thumb, _this.thumbCur, "on_cur");
                    _this.thumbMediate(thumb);
                    thumb.find(".album_thumb").eq(0).addClass("select").siblings().removeClass("select");
                    _this.albumScrollSw = true;
                    // _this.albumSw = true;
                }
            }
            if (name == "thumb img_set on_cur") {//套图点击
                var album = $(that).parents(".album_thumb"), aList = thumb.find(".album_list");
                if ($(that).parent().hasClass("album_next")) {
                    _this.bigImgSwitch(true);
                }
                else if ( $(that).parent().hasClass("album_prev")) {
                    _this.bigImgSwitch();
                }
                else {
                    _this.createBigImg(dataImg[thumb.index()].album[album.index()],1);
                    _this.albumMediate(album);
                }
            }
            return false;
        });
        return this;
    },
    //缩略图数据向前滚动
    dataPrev:function(){
        var header;
        if(prearr.length>0)
        {
            header = prearr.pop();
            dataImg.unshift(header);
            nextarr.unshift(dataImg.pop());
        }
        return header;
    },
    //缩略图数据向后滚动
    dataNext:function(){
        var tail;
        if(nextarr.length>0){
            tail = nextarr.shift();
            dataImg.push(tail);
            prearr.push(dataImg.shift());
            if(nextarr.length ==0){
                flashNext();
            }
        }
        return tail;
    },
    thumbMouseScroll: function (obj) {
        var _this = this;
        this.mouseScrollTimer = null;
        com.mouseEvent(obj, function (e) {
            com.stopDefault(e);
            var curLeft = _this.list[0].offsetLeft, val = e.wheelDelta || e.detail, listW = _this.list[0].offsetWidth, left = 0;
            clearTimeout(_this.mouseScrollTimer);
            _this.mouseScrollTimer = setTimeout(function () {
                if (listW < _this.marqueeCon[0].offsetWidth) return;
                if (val == 120 || val == -3) {//向上
                    left = curLeft >= -70 ? 0 : curLeft + 70;
                    _this.thumbBtnState();
                }
                else {//向下                    
                    listW - _this.marqueeCon[0].offsetWidth <= -curLeft + 70 ? (left = _this.marqueeCon[0].offsetWidth - listW, _this.thumbBtnState(true)) : left = curLeft - 70;
                }
                _this.list[0].style.left = left + "px";
            }, 50);
        });
        return this;
    },
    //缩略图 套图 通用居中
    mediate: function (list, con, curObj, endFn) {
        var w = con[0].offsetWidth / 2, listW = list[0].offsetWidth, left = 0;
        if (listW < con[0].offsetWidth) return;
        else if (curObj.get(0).offsetLeft > w - curObj.get(0).offsetWidth / 2) {
            left = -(curObj[0].offsetLeft - w + curObj[0].offsetWidth / 2);
        }
        if (listW - con[0].offsetWidth < -left) {
            left = w * 2 - list[0].offsetWidth;
            endFn ? endFn() : null;
        }
        list.stop(true, true).animate({ "left": left });
    },
    //缩略图居中
    thumbMediate: function (thumb) {
        var _this = this;
        var clName = thumb.attr('class');
        this.list[0].style.width = ((  clName == "thumb img_set") || (clName == "thumb img_set on_cur") ? this.listWidth + 300 : this.listWidth) + "px";
        this.thumbCur = thumb;
        getbigimgcac(thumb.next().find('img').attr('src')); //缓存下一张的大图
        this.mediate(this.list, this.marqueeCon, thumb, function () {
            _this.thumbBtnState(true);
        });
        return this;
    },
    //套图更换src
    albumChangeSrc: function (thumb) {
        if (thumb[0].state) return;
        var imgs = thumb.find("img"), imgLen = imgs.length;
        for (var i = 0; i < imgLen; i++) {
            imgs.eq(i).attr("src", imgs.eq(i).attr("data-src"));
        };
        thumb[0].state = true;
        return this;
    },
    //套图点击后居中
    albumMediate: function (album) {
        var list = album.parent(), con = list.parent(), prev = $(".album_prev");
        this.mediate(list, con, album);
        //zlist[0].offsetLeft < 0 ? prev.removeClass("not") : prev.addClass("not");
        album.addClass("select").siblings().removeClass("select");
    },
    //缩略图添加选中状态
    thumbActive: function (obj, prevObj, className) {
        obj.addClass(className);
        prevObj.removeClass(className);
        prevObj = obj;
    },
    //缩略图两侧按钮点击
    thumbBtnFn: function () {
        var _this = this;
        this.leftArrow.bind("click", function () {
            _this.bigImgSwitch();
        });
        this.rightArrow.bind("click", function () {
            _this.bigImgSwitch(true);
        });

        return this;
    },
    //缩略图两侧按钮状态
    thumbBtnState: function (boole) {
        boole ? (this.leftArrow.removeClass("not"), this.rightArrow.addClass("not")) : (this.leftArrow.addClass("not"), this.rightArrow.removeClass("not"));
    },
    //套图两侧按钮点击
    albumSwitch: function (list, boole) {
        var _this = this, len = list.find(".album_thumb").length;
        boole ? next() : prev();
        function next() {
            _this.albumIndex++;
            _this.albumIndex == len - 3 ? $(".album_prev").addClass("not") : $(".album_prev").removeClass("not");
        };
        function prev() {
            _this.albumIndex <= 1 ? (_this.albumIndex = 0, $(".album_prev").addClass("not")) : _this.albumIndex--;
        };
        this.albumIndex %= len - 3;
        list.animate({ "left": -this.albumIndex * 70 }, 300);
    },
    //大图生成,并调整位置
    createBigImg: function (imgObj,ski) {
        var  cachestr = $('#imgids').attr('aids');
        var cacheaids = [cachestr];
        if((typeof(cachestr) == 'string')&&(cachestr.indexOf(',')!=-1)){
            cacheaids = cachestr.split(',');
        }
        this.collectids = cacheaids ;
        var iscollect = '';
        if($.inArray(imgObj.l.aid, this.collectids)!== -1){
            iscollect = ' yet';
        }

        var _this = this,
            imgSrc = getpicDomain(imgObj.l.s),
            imgW = imgObj.l.w,
            imgH = imgObj.l.h,
            imgAlt = imgObj.l.t,
            imgoldaid = imgObj.l.aid,
            imgxihuan = imgObj.l.xihuan,
            imgoldcid = (imgObj.l.cid !=undefined) ?imgObj.l.cid:'';
        imgSize = this.imgSize(imgW, imgH, this.imgDiv[0].offsetWidth, this.imgBox[0].offsetHeight),
            html = "<img src=\"" + getpicDomain(imgObj.l.ss,'s') + "\" width=\"" + imgSize.w + "px;\" height=\"" + imgSize.h + "px;\" id=\"thumbPic\" />"
                + "<img src=\"" + imgSrc + "\" id=\"bigImg\" alt=\"" + imgAlt + "\" width=\"" + imgSize.w + "px;\" height=\"" + imgSize.h + "px;\""+ ' data-h="'+imgH+ '" data-oid="'+imgoldaid + '" data-w="'+imgW+"\" />"
                + "<div class=\"btn\">"
                + "<a href=\"javascript:;\" class=\"design\" data-oid="+imgoldaid+" id=\"xihuan_btn\" onclick=\"Pic.designCollect(this)\" >"+imgxihuan+"</a>"
                + "<a href=\"javascript:;\" class=\"collect"+iscollect+"\" id=\"shoucang_btn\" onclick=\"Pic.designCollect(this)\"></a>"
                +"</div> "
                +"<div class=\"prev btn_style\" ><span></span></div>"
                +"<div class=\"next btn_style\" ><span></span></div>";
        //报价
        htmler = "<div class=\"itemlist\" onclick=\"Pic.designCollect(this)\"> "
            +"	<div class=\"itemlister "+charsr[charsr_nub++]+"\"> "
            +"	<div class=\"itemltop\"> "
            +"		<img src=\"//www.zx123.cn/templates/zx123cs/theme-2017/img/tunmf2.png\"> "
            +"	</div> "
            +"	<div class=\"itemlcon\"> "
            +"		<p>这样装修需要多少钱<br>？</p> "
            +"	</div> "
            +"	<div class=\"itemldow\"> "
            +"		<img src=\"//www.zx123.cn/templates/zx123cs/theme-2017/img/tunmf.png\"> "
            +"	</div> "
            +"	</div> "
            +"</div> ";

        if(charsr_nub==5){charsr_nub=0;}

        this.imgTag.html(html+htmler);
        this.imgTag.attr("id", imgoldcid);
        //getCv(imgoldaid);
        this.img = $("#bigImg");
        this.img[0].onload = function () {
            $("#thumbPic").remove();
        };
        this.imgTag[0].style.cssText = "width:" + imgSize.w + "px;height:" + imgSize.h + "px;top:" + (this.imgBox[0].offsetHeight - imgSize.h) / 2 + "px;";
        this.imgDefSize.width = imgW;
        this.imgDefSize.height = imgH;
        this.crumbs[0].innerHTML = imgAlt;
        sharetext= imgAlt;
        sharepicurl = imgSrc;
        $("#org_img").attr({'href':imgSrc,'alt':imgAlt});
        $('#show_img').attr({'filename':imgSrc, 'width':imgW, 'height':imgH,'oldaid':imgoldaid,'oldcid':imgoldcid,'title':imgAlt});

        get_pic_big_tag(imgoldaid);

        if(this.thumbCur !=null)
        {
            document.title = imgAlt+'_装修123效果图';
        }

        if(window._bd_share_config != undefined){
            window._bd_share_config.common.onBeforeClick();
        }

        //加载本图集后两张的大图。如果存在的话
        var thisurl = '/' + imgObj.l.urlid;
        
		var ss_ton_href = document.location.href;
       //切换地址
        if(ski ==1){
            var hrs = historyState.pushState({ pageIndex: 1 }, imgAlt,thisurl);
            if(!hrs){ return this; }
        }
        typeof ss_ton == 'object' && ss_ton.new_record(ss_ton_href);//统计
         //统计PV
        page_view(thisurl);

        return this;
    },
    listPop:function(){
        var push,pushhtml;  //前出后进

        if(nextarr.length>0){
            this.list.find('.thumb').first().stop(true, true).animate({width:0}).remove();
            push = this.dataNext();
            pushhtml = this.createThumb(push);
            this.list.append(pushhtml);
            if(nextarr.length ==0){
                flashNext();
            }
        }
    },
    listShift:function(){
        var shift,shifthtml;
        if(prearr.length>0){
            this.list.find('.thumb').last().stop(true, true).animate({width:0}).remove();
            shift = this.dataPrev();
            shifthtml = this.createThumb(shift);
            this.list.prepend(shifthtml);
        }
    },
    //大图切换  滚动切换的同时，也需要把元素给加进去。这时的方式是把头部元素拿掉。尾部再加进一个元素
    bigImgSwitch: function (boole) {
        var _this = this, thumb = boole ? this.thumbCur.next() : this.thumbCur.prev();
        if (this.mode == "album") {//套图
            var album = boole ? this.thumbCur.find(".select").next() : this.thumbCur.find(".select").prev();
            exitAlbum(dataImg[this.thumbCur.index()].album[album.index()],boole);
        }
        else {//单张
            alike(dataImg[thumb.index()],boole);
        }
        function exitAlbum(data,boole) {
            if (!album.length) {
                if(thumb.index() >=0)
                {
                    var datatag =  boole ?0: dataImg[thumb.index()].album.length -1;
                    alike(dataImg[thumb.index()].album[datatag],boole);
                    _this.albumChangeSrc(_this.thumbCur);
                    _this.albumSw = false;
                    _this.albumScrollSw = false;
                }
            }
            else {
                _this.createBigImg(data,1);
                _this.albumMediate(album);
            }
        };

        function alike(data,flag) {   //第二个参数接收是来自于向前还是，向后滚动 true 表示向后看,
            _this.thumbActive(thumb, _this.thumbCur, "on_cur");
            if(flag &&(thumb.index() ==11) )
            {
                _this.listPop();
            }else if(thumb.index() ==9 ){
                _this.listShift();
            }
            if(data){
                _this.createBigImg(data,1);
                _this.thumbMediate(thumb);
            }

        };
    },
    //大图滚动切换  及增加键盘左右滚动切换
    bigImgScroll: function (obj) {
        var _this = this;
        this.bigImgScrollTimer = null;
        com.mouseEvent(obj, function (e) {
            var val = e.wheelDelta || e.detail;
            com.stopDefault(e);
            clearTimeout(_this.bigImgScrollTimer);
            _this.bigImgScrollTimer = setTimeout(function () {
                if (val == 120 || val == -3) {//向上
                    _this.bigImgSwitch();
                }
                else {//向下
                    _this.bigImgSwitch(true);

                }
            }, 300);
        });
        document.onkeydown=function(e)
        {
            var e=   arguments[0]|| window.event;
            var key = window.event ? e.keyCode:e.which;
            if(key ==37)
            {
                _this.bigImgSwitch();
            }
            if(key ==39)
            {
                _this.bigImgSwitch(true);
            }
        }
        return this;
    },
    //图片左右两侧点击处理
    picClick: function () {
        var _this = this;
        this.imgDiv.on("click", function (e) {
            //console.log("________"+e.target.parentNode.className);
            if (e.target.className == "design" || e.target.className == "collect" || e.target.className == "collect yet")return;
            if (e.target.parentNode.className == "itemlist" || e.target.parentNode.className == "itemltop" || e.target.parentNode.className == "itemlcon" || e.target.parentNode.className == "itemldow")return;
            //if (e.target.className == "itemlist" || e.target.className == "itemltop" || e.target.className == "itemlcon" || e.target.className == "itemldow")return;

            var e = e || event, disX = e.clientX - 40, imgDivW = _this.imgDiv[0].offsetWidth / 2;
            disX < imgDivW ? _this.bigImgSwitch(false) : _this.bigImgSwitch(true);
        });
        return this;
    },
    //帮我设计and收藏
    designCollect: function (obj) {
        if (obj.className == "design") {
            //点击喜欢
            var showid = $(obj).attr("data-oid");
            if(showid!=""){
                $.get("//www.zx123.cn/mobile/xgt_tool.php?ajax=100&aid="+showid);
                $(obj).html(parseInt($(obj).html())+1);
                $(obj).attr("data-oid","");
            }
        }else if (obj.className == "itemlist") {
            //装修报价
            hidesdhow(dfh);
        }else{
            //收藏
            open_choucang();
            var this_imgs=$(".img_div_tag");
            set_select(this_imgs.find("img").attr("src"),this_imgs.find("img").attr("alt"),this_imgs.attr("id"));
        }

    }

};
window.Pic = new Picture();

var historyState = {
    checkCanPush: function () {
        if (window.history.pushState && ie_is()>8)
            return true;
        return false;
    },
    pushState: function (data,title,url) {
        if(ie_is()>8){
            if (historyState.checkCanPush()) {
                window.history.pushState(data, title, url);
                return true;
            }else{
                window.location.href=url;
                return false;
            }
        }
        return false;
    }
}


//图片预加载函数

function getbigimgcac(surl){
    if((surl !=undefined) && (surl !='')){
        var burl = sc_img_load(surl) ;
        imgReady( burl,function(){}) ;
    }
}

function sc_img_load(source_src){
    var img_url = source_src.replace(/smallcase/ig,'case');
    img_url = img_url.replace( /_s./ig ,'.');
    return img_url;
};
function getpicDomain( filename ,type){
//  var i = filename.indexOf('/');
//  if( i == 0 ){
//  	filename = filename.substr(1);
//  }
//  i = filename.indexOf('uploadfile');
//  if( i < 0 ){
//  	filename = 'uploadfile/' + filename;
//  }
    return filename;
}


function checkBrowser(){
    var u = window.navigator.userAgent.toLocaleLowerCase(),
        msie = /(msie) ([\d.]+)/,
        chrome = /(chrome)\/([\d.]+)/,
        firefox = /(firefox)\/([\d.]+)/,
        safari = /(safari)\/([\d.]+)/,
        opera = /(opera)\/([\d.]+)/,
        ie11 = /(trident)\/([\d.]+)/,
        b = u.match(msie)||u.match(chrome)||u.match(firefox)||u.match(safari)||u.match(opera)||u.match(ie11);
    return {name: b[1], version: parseInt(b[2])};

}

function checkHover(e, target) {
    if (getEvent(e).type == "mouseover") {
        return !contains(target, getEvent(e).relatedTarget
            || getEvent(e).fromElement)
            && !((getEvent(e).relatedTarget || getEvent(e).fromElement) === target);
    } else {
        return !contains(target, getEvent(e).relatedTarget
            || getEvent(e).toElement)
            && !((getEvent(e).relatedTarget || getEvent(e).toElement) === target);
    }
}

function contains(parentNode, childNode) {
    if (parentNode.contains) {
        return parentNode != childNode && parentNode.contains(childNode);
    } else {
        return !!(parentNode.compareDocumentPosition(childNode) & 16);
    }
}
function getEvent(e) {
    return e || window.event;
}

function change_tag(aid){
    $.post('/get_tag_info.php', {aid: aid}, function(rs){
        $("#ftag").text(rs.name);
        $("#ftag").attr('href', rs.url);
    },'json');
}


function page_view(url){
    referer_url = location.href;
    _czc.push(["_trackPageview",url,referer_url]);
    _czc.push(["_trackPageview",url+"?test",referer_url]);
    _hmt.push(['_trackPageview', url]);
}

/**
 * 获取当前图片大类
 */
function get_pic_big_tag(aid){
    $.get("//www.zx123.cn/get_tag_info.php?ajax=100&aid="+aid,function(data){
        var ob=eval("("+ data +")");
        if(ob.status==1 && ob.bigtag_list.length > 0){
            $("#zxfg").html(ob.bigtag_list[0].tagname+"<font></font>");
            $("#zxfg").attr('href', ob.bigtag_list[0].tagurl);
            var str='';
            for(var i=0;i<ob.bigtag_list.length;i++){
                str+='<span><a href="'+ ob.bigtag_list[i].tagurl +'">'+ ob.bigtag_list[i].tagname +'</a></span>';
            }
            $(".liajdies").html(str);
        }
        if(ob.shejishi!=""&&ob.uid!=""&&ob.uid!=undefined){
            $(".scdsa").show();
            $(".scdsb").show();
            $(".scdsb").html("<a href='"+ob.company_url+"'>"+ob.shejishi+"</a>");
        }else{
            $(".scdsa").hide();
            $(".scdsb").hide();
        }
    });
}


//------------------------------------------------------


function getRecommendPicP(parseurl,id)
{
    var mytag = $('.mytag').text();
    var recdata,wh =$("#show_img").attr('data-where');
    var where = (wh==undefined) ?'':wh;
    $.ajax({
        url:"//www.zx123.cn/xiaoguotu/getxgtjson.php",
        data:"aid=" + id + "&etype=" + etype + "&where=" + where +"&sortid=" + order+"&save_tag="+ mytag,
        async:false,
        dataType:'json',
        success: function(data){
            recdata = data;
            $("#show_img").attr('data-where',data.where);
        } })
    return recdata;
}

var ref_url = document.referrer;
//pageId = window.location.pathname.match(/\d+/g)[0];


//获取当前url中的ID
pic_id = window.location.pathname.match(/[\d|_]+/g)[0];
var parseurl = '';
var prearr=[],nextarr=[],where,picType=1;
var data = getRecommendPicP(parseurl,pageId);

var dataImg = data.dataImg;
if(etype == 'pic'){
    var mode = "thumb",
        index = 0,
        bigImg= dataImg[0];
    var pic_url = "xiaoguotu/" + pic_id + ".html";
    for (var i in dataImg) {
        if(dataImg[i].l.urlid == pic_url)
        {
            index = i;
            bigImg =dataImg[i];
        }
    };
    Pic.setSomes().createBigImg(bigImg).createThumbList(dataImg,index).rightScroll().picAdapt().thumbClick().thumbMouseScroll($(".marquee_con")[0]).bigImgScroll($(".img_box")[0]).thumbBtnFn().windowChange().picClick();
}else{
    var mode = "album",
        index = 0,
        bigImg= dataImg[0].album[0];
    for (var i in dataImg) {
        if(dataImg[i].cid == pageId)
        {
            index = i;
            //bigImg =dataImg[i].album[order]; //原有

            //以下代码避免产生断序号套图页面无法显示大图
            for(var ab=0;ab<dataImg[i].album.length;ab++){
                var trueorder=parseInt(order)+1;
                if(dataImg[i].album[ab].l.sortid==trueorder){
                    bigImg =dataImg[i].album[ab];
                    break;
                }
            }
        }
    };
    Pic.setSomes().createBigImg(bigImg).createThumbList(dataImg,index).rightScroll().picAdapt().thumbClick().thumbMouseScroll($(".marquee_con")[0]).bigImgScroll($(".img_box")[0]).thumbBtnFn().windowChange().picClick();
    Pic.albumMediate($(".on_cur .album_thumb").eq(order));
}
var data2 = getRecommendPicP();
nextarr = data2.dataImg;

function flashNext(n){
    data2 = getRecommendPicP('',n);
    nextarr = data2.dataImg;
}


$('span.text_in,.asddown').hover(function(){
    $('.asddown').show();
},function(){
    $('.asddown').hide();
});
//选中事件
$(".asddown span").click(function(){
    $('span.text_in b').text($(this).text());
});
$('#myform .xgt_but').click(function(){my_submiter();});
function my_submiter() {
    var inputStr = $.trim($("#myform .xgt_txt").val());
    if (inputStr == "") {
        alert('请输入您要查询的关键字');
        return false;
    }
    var selectVal = $("span.text_in b").text();
    var htmlUrl = "";
    if (selectVal == "效果图") {
        htmlUrl = "//www.zx123.cn/search/entire_search_150605.php?ekeyword=" + inputStr + "&etype=2";
    } else if (selectVal == "文章") {
        htmlUrl = "//www.zx123.cn/search/entire_search_150605.php?ekeyword=" + inputStr + "&etype=1";
    } else if (selectVal == "问答") {
        htmlUrl = "//www.zx123.cn/ask/search.php?keywords=" + inputStr;
    } else if (selectVal == "找公司") {
        htmlUrl = "//www.zx123.cn/search/entire_search_150605.php?ekeyword=" + inputStr + "&etype=3";
    }
    window.location.href = htmlUrl;
}












