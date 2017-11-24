//获取数据
var boxArr=document.getElementsByClassName('box');
// var picArr=document.getElementsByClassName('pic');

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