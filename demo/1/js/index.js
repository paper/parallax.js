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
    var w = parseInt( $(this).css("width"), 10 );
    var newW = w * widthScale;
    
    $(this).css("width", newW + "px");
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


$('.pages').parallax({
  direction: 'vertical', 	// horizontal (水平翻页)
  swipeAnim: 'default', 	// cover (切换效果)
  drag:      true,		// 是否允许拖拽 (若 false 则只有在 touchend 之后才会翻页)
  loading:   true,		// 有无加载页
  indicator: true,		// 有无指示点
  arrow:     true,		// 有无指示箭头
  
  width : parallaxWidth,
  height : parallaxHeight,
  
  /*
   * 翻页后立即执行
   * {int} 		index: 第几页
   * {DOMElement} element: 当前页节点
   * {String}		directation: forward(前翻)、backward(后翻)、stay(保持原页)
   */
  onchange: function(index, element, direction) {
    // code here...
    // console.log(index, element, direction);
  },
  /*
   * 横竖屏检测
   * {String}		orientation: landscape、protrait
   */
  orientationchange: function(orientation) {
    // console.log(orientation);
  }
});