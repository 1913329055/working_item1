$(function(){
    // 导航
    $('.nav li').on('mouseenter',function(){
        $(this).addClass('nav-show').siblings().removeClass();
    })
    // 分页
    $("#page").Page({
        totalPages: 3,//分页总数
        liNums: 3,//分页的数字按钮数(建议取奇数)
        activeClass: 'activP', //active 类样式定义
        callBack : function(page){
          $('.content-wz-y').find('ul').eq(page-1).addClass('show').siblings().removeClass();
        }
    });
    // 侧边二维码
    var a=1;
    var b=2;
    $('.fx-yx-er').on('mouseenter',function(){
        if(a%2 == 0){
            $(this).attr("src", './img/yixin-logo.png');
            $(this).css("left",0+'px');
            $(this).css("z-index",2);                  
            a++;
            console.log('bbb----'+'-1--'+a);  
        }else if(a%2 == 1){
            $(this).attr("src", './img/fx-yx-er.png');
            $('.fx-wx-er').attr("src", './img/weixin-logo.png').css({"left":50+'px',"z-index":2});
            $(this).css({"left":-5+'px',"z-index":1});
            b++;
            a++;
            console.log('aaa----'+'-1--'+a);    
        };      
    });
    $('.fx-wx-er').on('mouseenter',function(){
        if(b%2 == 0){
            $(this).attr("src", './img/weixin-logo.png');
            $(this).css({"left":50+'px',"z-index":2});           
            b++;                       
            console.log('cccc----'+'-2--'+b); 
        }else if(b%2 == 1){
            $(this).attr("src", './img/fx-wx-er.png');
            $(this).css({"left":5+'px',"z-index":1});
            $('.fx-yx-er').attr("src", './img/yixin-logo.png').css({"left":0+'px',"z-index":2});
            a++;
            b++;    
            console.log('dddd----'+'-2--'+b);                        
        }
    })    
})