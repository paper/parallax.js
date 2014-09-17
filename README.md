parallax.js
===========

![Up邀请函](https://raw.githubusercontent.com/hahnzhu/parallax.js/master/assets/gif/invitation.gif)&nbsp;&nbsp;&nbsp;![Tesla](https://raw.githubusercontent.com/hahnzhu/parallax.js/master/assets/gif/ttxd.gif)

目前移动端涌现了很多滚动视差效果的案例，多应用于企业招聘、活动邀请及产品宣传中，形式新颖，让人印象深刻。不过细细观察，就能发现虽然细节都有小创新，但实现原理殊途同归的。基于此，为满足快速实现并提升效率的目的，开发了这个移动端的视察滚动插件。

我把视差滚动效果归于两类，第一类是基于鼠标滚轮/手指触摸的逐帧动画，第二类是分屏动画（即一屏一屏翻阅）。前者动画细节丰富，互动性强，但是容易让用户感觉疲劳失去耐性，同时效果不易把控；后者分屏翻阅可以快速浏览内容，实现起来也相对简单。考虑到移动端屏幕尺寸以及操作媒介（手指）不同，分屏动画是最理想的，此插件也仅专注于此。

---

### 一、使用

#### 1、HTML ####

```html

<!-- 这里的每个标签和每个类都是必须的 -->
<div class="wrapper">
	<div class="pages">
		
		<!-- 第一屏 -->
		<div class="page">
		   	<!-- anything you want.... -->
		</div>
	
		<!-- 第二屏 -->
		<div class="page">
		</div>
	
		<!-- 第三屏 -->
		<div class="page">
		</div>

		...

	</div>
</div>
```

CSS 引用：
```css
<style rel="stylesheet" href="{your path}/parallax.css"></style>

/* 如果需要使用内置动画，需要引用下面的内容 */
<style rel="stylesheet" href="{your path}/parallax-animation.css"></style>
```

JS 引用：
```js
<script src="{your path}/zepto.min.js"><\/script>
<script src="{your path}/parallax.js"><\/script>
<script>
  $('.pages').parallax();
</script>
```

### 二、定制
```js
<script>

// 下面的都是默认属性
$('.pages').parallax({
	direction: 'vertical', 	// horizontal (水平翻页)
	swipeAnim: 'default', 	// cover (切换效果)
	drag:      true,		// 是否允许拖拽 (若 false 则只有在 touchend 之后才会翻页)
	loading:   false,		// 有无加载页
	indicator: false,		// 有无指示点
	arrow:     false,		// 有无指示箭头
	/*
	 * 翻页后立即执行
	 * {int} 		index: 第几页
	 * {DOMElement} element: 当前页节点
	 * {String}		directation: forward(前翻)、backward(后翻)、stay(保持原页)
	 */
	onchange: function(index, element, direction) {
		// code here...
	},
	/*
	 * 横竖屏检测
	 * {String}		orientation: landscape / protrait
	 */
	orientationchange: function(orientation) {
		
	}

});

</script>
```

#### 具体参数演示





### 三、DOM 接口

```html
<div class="wrapper">

	<!-- 初始化后自动添加 direction、swipeAnim、direction 类，其中 direction 在翻页的过程中才会添加。 -->
	<div class="pages vertical/horizontal  default/cover  forward/backward">
		
		<!-- 为 page 添加 data-id，当前 page 会自动添加 current 类(翻页后立即添加) -->
		<section data-id="1">
			...
		</section>

		<section data-id="2">
			...
		</section>
	</div>
</div>
		
```


### 四、内置动画
有四种内置动画，分别是 `slideToTop/Bottom/Left/Right`、`fadeInToTop/Bottom/Left/Right`、`followSlide` 和 `fadeIn/Out`，动画参数可通过 `data-animation`、`data-duration`、`data-delay` 和 `data-timing-function` 进行配置。

可看以下实例：
```html
<div class="wrapper">
	<div class="pages">

		<!-- 第一屏 -->
		<section class="page">
			<div class="box1" data-animation="slideToBottom" data-timing-function="ease-in"></div>
			<div class="box2" data-animation="slideToTop" data-delay="300" data-timing-function="ease-out"></div>
			<div class="box3" data-animation="slideToRight" data-delay="600" data-timing-function="linear"></div>
			<div class="box4" data-animation="slideToLeft" data-delay="900" data-timing-function="cubic-bezier(.12,.73,.62,1.38)"></div>
		</section>

        <!-- 第二屏 -->
		<section class="page">
			<div class="box1" data-animation="followSlide" data-duration="1000"></div>
			<div class="box2" data-animation="followSlide" data-delay="200" data-duration="1000"></div>
			<div class="box3" data-animation="followSlide" data-delay="400" data-duration="1000"></div>
			<div class="box4" data-animation="followSlide" data-delay="600" data-duration="1000"></div>
		</section>

        <!-- 第三屏 -->
		<section class="page">
			<div class="box1" data-animation="fadeInToBottom"></div>
			<div class="box2" data-animation="fadeInToTop" data-delay="200"></div>
			<div class="box3" data-animation="fadeInToLeft" data-delay="400"></div>
			<div class="box4" data-animation="fadeInToRight" data-delay="600"></div>
		</section>

		<!-- 第四屏 -->
		<section class="page">
			<div class="box1" data-animation="fadeIn"></div>
			<div class="box2" data-animation="fadeOut" data-delay="800"></div>
		</section>

	</div>
</div>
```

CSS：
```css
/* custom */
section[data-id="1"] {
	background-color: #3498db;
}
section[data-id="2"] {
	background-color: #40d47e;
}
section[data-id="3"] {
	background-color: #ff8c81;
}
section[data-id="4"] {
	background-color: #3498db;
}
.box1 {
	width: 100px;
	height: 200px;
	background-color: #ecf0f1;
	position: absolute;
	left: 160px; top: 126px;
}
.box2 {
	width: 200px;
	height: 100px;
	background-color: #8e44ad;
	position: absolute;
	left: 60px; top: 226px;
}
.box3 {
	width: 100px;
	height: 100px;
	background-color: #34495e;
	position: absolute;
	left: 160px; top: 226px;
}
.box4 {
	width: 50px;
	height: 50px;
	background-color: #e74c3c;
	position: absolute;
	left: 185px; top: 250px;
}
```




## License

Parallax.js is released under the [the MIT license](opensource.org/licenses/mit-license.php).
