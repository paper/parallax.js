// iphone6 plus 414 * 736
// 后续设计要按照 iphone6Plus 来设计图纸
var iphone6p = {
  width : 414,
  height : 736
}

var curPageWidth = document.documentElement.clientWidth;
var curPageHeight = document.documentElement.clientHeight;

var parallaxWidth = curPageWidth;
var parallaxHeight = curPageHeight;

var wrapperMargintop = 0;

if( curPageWidth > iphone6p.width ){

  parallaxWidth = iphone6p.width;
  parallaxHeight = iphone6p.height;
  
  if( curPageHeight < iphone6p.height ){
    
    parallaxHeight = curPageHeight;
    parallaxWidth = parallaxHeight * iphone6p.width / iphone6p.height;
    
  }else{
    
    wrapperMargintop = (curPageHeight - iphone6p.height)/2;
    
  }
  
  $('.wrapper').css({
    width : parallaxWidth + "px",
    height : parallaxHeight + "px",
    margin: "0 auto",
    transform : 'translateY('+ wrapperMargintop +'px)',
    webKitTransform : 'translateY('+ wrapperMargintop +'px)'
  });
  
}else if(curPageWidth < iphone6p.width){
  
  if( curPageHeight > iphone6p.height ){
    
    parallaxWidth = curPageWidth;
    parallaxHeight = Math.floor(parallaxWidth * iphone6p.height / iphone6p.width);
    
    wrapperMargintop = (curPageHeight - parallaxHeight)/2;
    
    $('.wrapper').css({
      width : parallaxWidth + "px",
      height : parallaxHeight + "px",
      transform : 'translateY('+ wrapperMargintop +'px)',
      webKitTransform : 'translateY('+ wrapperMargintop +'px)'
    });
    
  }
  
}





if( curPageWidth == iphone6p.width && curPageHeight == iphone6p.height ){
  
}else{
  
  //修改宽度比例
  var widthScale = parallaxWidth/iphone6p.width;
  var heightScale = parallaxHeight/iphone6p.height;
  
  var xw = parallaxWidth - iphone6p.width;
  var xh = parallaxHeight - iphone6p.height;
  
  var $itemIn = $(".item-in");
  $itemIn.each(function(v){
    if( $(this).css("width").indexOf("%") == -1 ){
      var w = parseInt( $(this).css("width"), 10 );
      var newW = w * widthScale;
    
      $(this).css("width", newW + "px");
    }
  });
  
  // 重新定位
  var $item = $(".item");
  $item.each(function(v){
    var t = parseInt( $(this).css("top"), 10 );
    var l = parseInt( $(this).css("left"), 10 );
    
    var newT = t * heightScale;
    var newL = l * widthScale;
    
    $(this).css("top", newT + "px");
    $(this).css("left", newL + "px");
  });
  
}