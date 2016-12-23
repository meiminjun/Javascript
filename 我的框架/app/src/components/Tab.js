define(['zepto'], function($) {
	'use strict'

	function Tab() {}

	Tab.prototype = {
		init: function(opt) {
			var me = this;
			var arr = this.arr = opt.items;
			var $ele = this.$ele = $('#' + opt.ele),
				ulDom = this.ulDom = $('<ul class="tabs" id="tabs"></ul>'),
				liDom = '<li _idx={#_idx#} >{#text#}</li>',
				html = '';
			if (!opt.ele && Array.isArray(arr)) {
				alert("参数传递错误！");
				return;
			}
			arr.forEach(function(item, index) {
				item._idx = index;
				var liItemDom = formateString(liDom, item);
				html += liItemDom;
			});
			ulDom.append(html);
			$ele.prepend(ulDom);

			// 容器部分
			$ele.find('div').each(function(index) {
				var contentHeight = arr[index].contentHeight;
				$(this).hide();
				$(this).css({
					height: contentHeight || '720px'
				});
				if (index == "0") {
					$ele.find("#" + arr[index].targetDomId).show();
					$ele.find("#" + arr[index].targetDomId).css({
						'border': '1px #ff3f61 solid'
					});
				}
			});
			$(ulDom).find('li').first().addClass("active");
			$(ulDom).find('li').each(function(index) {
				$(this).bind('click', function(e) {
					debugger;
					me.removeClass(); // 隐藏其他激活按钮样式
					$(this).addClass("active"); // 显示当前激活样式
					me.hideAllPanel(); // 隐藏所有容器
					me.showPanel(index); // 显示对应的容器
					arr[index].handler && arr[index].handler(this, e);
				})
			});
		},
		/**
		 * 隐藏其他激活按钮样式
		 * @return {[type]} [description]
		 */
		removeClass: function() {
			debugger;
			var me = this;
			$(me.ulDom).find('li').each(function(index) {
				$(this).removeClass("active");
			});
		},
		/**
		 * 隐藏所有容器
		 * @return {[type]} [description]
		 */
		hideAllPanel: function() {
			var me = this;
			me.$ele.find('div').each(function(index) {
				$(this).hide();
			});
			return this;
		},
		/**
		 * 显示对应的容器
		 * @param  {[type]} index [description]
		 * @return {[type]}       [description]
		 */
		showPanel: function(index) {
			var me = this;
			me.$ele.find("#" + me.arr[index].targetDomId).show();
			me.$ele.find("#" + me.arr[index].targetDomId).css({
				'border': '1px #ff3f61 solid'
			});
			return this;
		}
	}

	// 格式化字符串方法
	function formateString(str, data) {
		return str.replace(/\{#(\w+)#\}/g, function(match, key) {
			return typeof data[key] == undefined ? '' : data[key]
		});
	}
	return {
		Tab: Tab
	}
});