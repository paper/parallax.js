
$('.pages').parallax({
  direction: 'vertical', 	// horizontal (ˮƽ��ҳ)
  swipeAnim: 'default', 	// cover (�л�Ч��)
  drag:      true,		// �Ƿ�������ק (�� false ��ֻ���� touchend ֮��Żᷭҳ)
  loading:   true,		// ���޼���ҳ
  indicator: true,		// ����ָʾ��
  arrow:     true,		// ����ָʾ��ͷ
  
  width : parallaxWidth,
  height : parallaxHeight,
  
  /*
   * ��ҳ������ִ��
   * {int} 		index: �ڼ�ҳ
   * {DOMElement} element: ��ǰҳ�ڵ�
   * {String}		directation: forward(ǰ��)��backward(��)��stay(����ԭҳ)
   */
  onchange: function(index, element, direction) {
    // code here...
    // console.log(index, element, direction);
  },
  /*
   * ���������
   * {String}		orientation: landscape��protrait
   */
  orientationchange: function(orientation) {
    // console.log(orientation);
  }
});