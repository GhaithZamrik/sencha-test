Ext.define('MyApp.view.devices.Devices', {
  extend: 'Ext.Panel',
  xtype: 'devices',

  requires: [
    'Ext.grid.Grid',
    'Ext.grid.column.Date',
    'Ext.layout.Fit'
  ],

  layout: 'fit',

  items: [{
    xtype: 'grid',

    store: {
      type: 'devices'
    },

    columns: [{
      text: 'Commission Id',
      dataIndex: 'commissionId'
      }, {
      text: 'Device Type Name',
      dataIndex: 'deviceTypeName',
      flex: 1
      }, {
      text: 'Edgebox Id',
      dataIndex: 'edgeboxId',
      flex: 1
      }, {
        text: 'Environment Name',
        dataIndex: 'environmentName',
        flex: 1
      }, {
        text: 'Version',
        dataIndex: 'version',
        flex: 1
      }, {
        text: 'Device Id',
        dataIndex: 'deviceId',
        flex: 1
      }
  ]
}]
});