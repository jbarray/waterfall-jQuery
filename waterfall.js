//获取数据
var main=document.getElementById('main');
var boxArr=document.getElementsByClassName('box');
// var picArr=document.getElementsByClassName('pic');
var newPicture={"data":[{'src':"1.jpg"},{'src':"2.jpg"},{'src':"3.jpg"}]};
//下一行的图片跟在这行高度值最小的图片后面
function changePosition(){
    var heightArr=[];//创建一个数组,来存放每一列的图片高度.
    for(var i=0;i<boxArr.length;i++){
        if(i<6){
            heightArr.push(boxArr[i].offsetHeight);
            // var minHeight=Math.min(heightArr);
        }
        else{
            var minH=Math.min.apply(null,heightArr);
            var MinHIndex=getMinHIndex(heightArr,minH);
            boxArr[i].style.position='absolute';
            boxArr[i].style.top=minH+'px';
            boxArr[i].style.left=MinHIndex*202+'px';
            heightArr[MinHIndex]=boxArr[i].offsetHeight+heightArr[MinHIndex];//将最小高度变为原来的高度加新添加的图片的高度
        }
    }
}
//获得最小高度的索引值
function  getMinHIndex(arr,val) {
    for(var i=0;i<arr.length;i++){
        if(arr[i]===val){
            return i;
        }
    }
}
changePosition();

//滚动条下拉的时候,屏幕底部开始加载图片
//检测是否具备加载数据块的条件
function  checkScroll(){
    var picHeight=Math.floor(boxArr[boxArr.length-1].offsetHeight/2)+boxArr[boxArr.length-1].offsetTop;
    var screenHeight=document.body.clientHeight+document.body.scrollTop;
    return (picHeight < screenHeight);
}
    window.onscroll=function (){
        if(checkScroll){
            for(var i=0;i<newPicture.data.length;i++){
                var newBox=document.createElement('div');
                newBox.className='box';
                main.appendChild(newBox);
                var newPic=document.createElement('div');
                newPic.className='pic';
                newBox.appendChild(newPic);
                var newImg=document.createElement('img');
                newImg.src="img/"+newPicture.data[i].src;
                newPic.appendChild(newImg);
            }
            changePosition();//让后来加入的图片也能顺应瀑布流的效果
        }
    };


