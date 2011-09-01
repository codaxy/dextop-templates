Ext.define('Mvc.views.user.Panel', {
	extend: 'Dextop.Panel',

	title: 'Users',
	border: false,
	alias: 'widget.userspanel',
	closable: true,

	initComponent: function () {
		var grid = Ext.create('Dextop.ux.SwissArmyGrid', {
			remote: this.remote,
			paging: true,
			border: false,
			editing: 'row',
			tbar: ['add', 'edit', 'remove'],
			storeOptions: {
				pageSize: 10,
				autoLoad: true,
				autoSync: true
			},
			editingOptions: {
				clicksToEdit: 1
			}
		});

		Ext.apply(this, {
			layout: 'fit',
			items: grid
		});

		this.callParent(arguments);
	}
});