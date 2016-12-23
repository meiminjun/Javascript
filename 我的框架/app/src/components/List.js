define(['zepto'], function($) {
	'use strict'

	function List() {}

	List.prototype = {
		init: function(opt) {
			var items = opt.items,
				$ele = this.$ele = $('#' + opt.ele),
				if (!option.ele && Array.isArray(items)) {
					return;
				}


		}
	}


	return {
		List: List
	}
});