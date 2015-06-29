$(function () {

	var $tables = $('table');

	$tables.each(function (i) {

		var $table = $tables.eq(i);

		$table.find('tr:even td').css({
			'background' : '#fbfbfb'
		})

	})

})