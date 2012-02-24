Ext.define('Desktop.App', {
	extend: 'Ext.ux.desktop.App',

	init: function () {
		this.callParent();

		// Now ready...
		Dextop.Logger.info('Application started.');
	
		// Log panel
		var logger = Ext.create('Dextop.logger.Panel', {
			cls: 'semi-transparent',
			docked: true,
			resizable: true,
			width: 600,
			height: 200,
			minWidth: 600,
			minHeight: 200
		});

		// Alternatively:
		/*	
		var win = Ext.create('Ext.window.Window', {
			layout: 'fit',
			width: 600,
			height: 300,
			items: Ext.create('Dextop.logger.Panel', { 
				border: false
			})
		});
		
		win.show();
		*/
	},

	getModules: function () {
		return this.createWindowModules([{
			id: 'grid',
			launcher: {
				text: 'Grid',
				iconCls: 'icon-grid'
			}
		}, {
			id: 'notepad',
			launcher: {
				text: 'Notepad',
				iconCls: 'notepad'
			}
		}]);
	},

	createWindowModules: function (modules) {
		for (var i = 0; i < modules.length; i++)
			modules[i] = Ext.create('Desktop.WindowModule', modules[i]);
		return modules;
	},

	getDesktopConfig: function () {
		var me = this, ret = me.callParent();

		return Ext.apply(ret, {
			//cls: 'ux-desktop-black',

			contextMenuItems: [
			//{ text: 'Change Settings', handler: me.onSettings, scope: me }
            ],

			shortcuts: Ext.create('Ext.data.Store', {
				model: 'Ext.ux.desktop.ShortcutModel',
				data: [
					{ name: 'Grid', iconCls: 'grid-shortcut', module: 'grid' },
					{ name: 'Notepad', iconCls: 'notepad-shortcut', module: 'notepad' }
                ]
			}),

			wallpaper: '/client/lib/ext/examples/desktop/wallpapers/Blue-Sencha.jpg',
			wallpaperStretch: false
		});
	},

	// config for the start menu
	getStartConfig: function () {
		var me = this, ret = me.callParent();

		return Ext.apply(ret, {
			title: 'User',
			iconCls: 'user',
			height: 400,
			toolConfig: {
				width: 100,
				items: [
				//{
				//	text: 'Settings',
				// 	iconCls: 'settings',
				// 	handler: me.onSettings,
				// 	scope: me
				//},
				//'-',
                    {
                    text: 'Logout',
                    iconCls: 'logout',
                    handler: me.onLogout,
                    scope: me
                   }
                ]
			}
		});
	},

	getTaskbarConfig: function () {
		var ret = this.callParent();

		return Ext.apply(ret, {
			quickStart: [
			//{ name: 'Settings', iconCls: 'settings', module: 'settings' },
				{ name: 'Grid', iconCls: 'icon-grid', module: 'grid' },
				{ name: 'Notepad', iconCls: 'icon-grid', module: 'notepad' }
			],
			trayItems: [
                { xtype: 'trayclock', flex: 1 }
            ]
		});
	},

	onLogout: function () {
		Ext.Msg.confirm('Logout', 'Are you sure you want to logout?');
	},

	onSettings: function () {
		//alert('todo');
	}
});
