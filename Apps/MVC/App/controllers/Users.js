Ext.define('Mvc.controller.Users', {
	extend: 'Ext.app.Controller',

	refs: [{
		ref: 'panel',
		selector: 'userspanel'
	}],

	init: function () {
		console.log('Initialized Users! This happens before the Application launch function is called');

		this.control({
			'userspanel': {
				render: function (panel) {
					if (panel.id != this.getPanel().id)
						console.log('we need a better ref selector');
					console.log('userspanel ' + this.getPanel().id + ' rendered');
				},
				beforeclose: function () {
					if (!confirm('Are you sure?'))
						return false;
				}
			},
			'userspanel > swissarmygrid': {
				render: function () {
					console.log('userspanel grid rendered');
				}
			}
		});
	}
});