// 定义一个图片存储变量列表
var arrSrc=[
    "imgs/img01.jpg",
    "imgs/img02.jpg",
    "imgs/img03.jpg",
    "imgs/img04.jpg",
    "imgs/img02.jpg",
    "imgs/img01.jpg",
    "imgs/img03.jpg"
];
//获取img变量对象
var imgS=document.getElementById("imgs");

//给li元素绑定click事件
$("li").click(function(){
    //获取当前DOM元素的内容
    var index = $(this).html();
    //修改图片的src
    imgS.src=arrSrc[index-1];
    //给当前元素添加class值，把当前元素兄弟元素的“focus“去掉
    $(this).addClass("focus").siblings().removeClass("focus");
});

