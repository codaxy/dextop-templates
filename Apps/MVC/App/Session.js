Ext.define('Mvc.Session', {
	extend: 'Dextop.Session',

	initSession: function () {

		this.tabs = Ext.create('Ext.tab.Panel', {
			border: false,
			region: 'center',
			items: [{
				title: 'Welcome',
				loader: {
					url: 'welcome.htm',
					autoLoad: true
				},
				border: false
			}]
		});		

		this.viewport = Ext.create('Ext.container.Viewport', {
			renderTo: document.body,
			layout: 'border',

			items: [{
				id: 'header',
				region: 'north',
				height: 50,
				xtype: 'container',
				html: '<h1>MVC App Template<h1>'
			}, this.tabs, {
				id: 'footer',
				region: 'south',
				height: 20,
				xtype: 'container',
				html: 'Footer'
			}]
		});		

		this.addPanel('users', {
			activate: false
		});

		this.addPanel('users', {
			activate: false
		});
	},

	addPanel: function (type, options) {
		options = options || {};
		this.remote.Instantiate({ type: type, own: false }, options.serverConfig, {
			scope: this,
			success: function (result) {
				var panel = Dextop.create(result, options.clientConfig);
				this.tabs.add(panel);
				if (options.activate !== false)
					this.tabs.setActiveTab(panel);
			}
		});
	}
});