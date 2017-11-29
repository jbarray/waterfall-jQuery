//获取数据
// var main=document.getElementById('main');
//  var boxArr=$('.box');
// var picArr=document.getElementsByClassName('pic');
 var newPicture={"data":[{'src':"1.jpg"},{'src':"2.jpg"},{'src':"3.jpg"}]};
//下一行的图片跟在这行高度值最小的图片后面
function changePosition() {
    var heightArr = [];//创建一个数组,来存放每一列的图片高度.
    var $box=$('.box');
    $box.each(function(index,value){
        var h=$box.eq(index).outerHeight();
        if(index<6){
            heightArr[index]=h;
         }
        else{
           var min=Math.min.apply(null,heightArr);
           var minIndex=$.inArray(min,heightArr);//求最小高度图片的索引
            //value是一个dom对象,不能使用jquery的功能,需要转化成jquery形式
           $(value).css({
               'position':'absolute',
               'top':min+'px',
               'left':minIndex*202+'px'
            });
            heightArr[minIndex]=heightArr[minIndex]+h;
        }
    });
}
//添加图片
function check(){
    var $lastBox=$('#main').find('>div').last();
    var lastBoxDis=$lastBox.offset().top+Math.floor($lastBox.outerHeight()/2);
    var scroll=$(window).scrollTop();
    var documentH=$(window).height();
    return (lastBoxDis < scroll + documentH);
}
function scroll(){
    changePosition();
    //监听滚动事件
    $(window).scroll(function(){
        if(check){
            $.each(newPicture.data,function(key,value){
                var oBox=$('<div>').addClass('box').appendTo($('#main'));
                var oPic=$('<div>').addClass('pic').appendTo($(oBox));
                $('<img>').attr('src','img/'+$(value).attr('src')).appendTo($(oPic));
            });
            changePosition();
        }
    })
}
scroll();