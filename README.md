parallax.js
===========

![Up邀请函](https://raw.githubusercontent.com/hahnzhu/parallax.js/master/assets/gif/invitation.gif)&nbsp;&nbsp;&nbsp;![Tesla](https://raw.githubusercontent.com/hahnzhu/parallax.js/master/assets/gif/tesla.gif)

目前移动端涌现了很多滚动视差效果的案例，多应用于企业招聘、活动邀请及产品宣传中，形式新颖，让人印象深刻。不过细细观察，就能发现虽然细节都有小创新，但实现原理殊途同归的。基于此，为满足快速实现并提升效率的目的，开发了这个移动端的视察滚动插件。

我把视差滚动效果归于两类，第一类是基于鼠标滚轮/手指触摸的逐帧动画，第二类是分屏动画（即一屏一屏翻阅）。前者动画细节丰富，互动性强，但是容易让用户感觉疲劳失去耐性，同时效果不易把控；后者分屏翻阅可以快速浏览内容，实现起来也相对简单。考虑到移动端屏幕尺寸以及操作媒介（手指）不同，分屏动画是最理想的，此插件也仅专注于此。

---

### 使用

#### 1、HTML ####

```html

<!-- 这里的每个标签和每个类都是必须的 -->
<div class="wrapper">
	<div class="pages">
		
		<!-- 第一屏 -->
		<div class="page">
		   	
		   	// anything you want....

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
<script src="{your path}/zepto.min.js"></script>
<script src="{your path}/parallax.js"></script>
<script>
  $('.pages').parallax();
</script>
```

### 定制
```js
<script>

// 下面的都是默认属性
$('.pages').parallax({
	direction: 'vertical', 	// horizontal
	swipeAnim: 'default', 	// cover
	drag:      true,		// 是否允许拖拽
	loading:   true,		// 有无加载页
	indicator: false,		// 有无指示点
	arrow:     false,		// 有无指示箭头
	onchange: function(index, element, direction) {
		// index: 第几页
		// element: 当前页 DOM 节点
		// direction: forward(前翻)、backward(后翻)、stay(保持原页)
	},
	orientationchange: function(orientation) {
		// orientation: landscape / protrait
	}

});

</script>
```

### DOM 接口

```html
<div class="wrapper">

	// 初始化后自动添加 direction、swipeAnim、direction 类
	<div class="pages vertical/horizontal  default/cover  forward/backward(翻页的过程才会添加)">
		
		// 为 page 添加 data-id，当前 page 会自动添加 current 类
		<section data-id="1">
			...
		</section>


		<section data-id="2">
			...
		</section>
	</div>
</div>
		
```



## License

Parallax.js is released under the [the MIT license](opensource.org/licenses/mit-license.php).
