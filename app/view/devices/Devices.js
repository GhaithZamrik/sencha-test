let token;
let data = {}

const store = Ext.create('Ext.data.Store', {
  model: 'MyApp.model.Device',
});



Ext.onReady(function(){
  Ext.Ajax.request({
    url: 'AUTHURL',
    method: 'POST',
    cors: true,
    headers: { 'Content-Type': 'application/json' },
    params: Ext.JSON.encode({ user: {username: "user", password: "psw"}}),
    success: function(conn, response) {
      const authResponse = JSON.parse(conn.responseText)
      token = authResponse.user.authenticationToken
    },
    failure: function(conn, response) {
      console.log(conn, 'conn fail')
      console.log(response, 'response fail')

  }
  }).then(() => {
    Ext.Ajax.disableCaching = false;
    Ext.Ajax.request({
      url: 'DATAURL',
      method: 'GET',
      cors: true,
      disableCaching: false,
      headers: { Authorization: token },
      success: function(conn, response) {
        console.log(conn, 'dms conn')
        const DMSResponse = JSON.parse(conn.responseText)
        data = DMSResponse
        console.log(DMSResponse)
        store.loadData(data.devices); 
      },
      failure: function(conn, response) {
        console.log(conn, 'dms fail conn')
        console.log(response, 'dms fail response')
      }
    })
  })
});

Ext.define('MyApp.view.devices.Devices', {
  extend: 'Ext.Panel',
  xtype: 'devices',

  requires: [
    'Ext.grid.Grid',
    'Ext.grid.column.Date',
    'Ext.layout.Fit',
    'Ext.grid.plugin.MultiSelection'
  ],

  href: '#devices',
  layout: 'fit',

  items: [{
    xtype: 'grid',
    store: store,

    columns: [{
      text: 'Commission Id',
      dataIndex: 'commissionId',
      }, {
      text: 'Device Type Name',
      dataIndex: 'deviceTypeName',
      flex: 1,
      cell: {
        encodeHtml: false
      },
      renderer: function(value) {
        return '<a href="#charts">' + value + '</a>'
      }
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
        flex: 1,
        cell: {
          encodeHtml: false
        },
        renderer: function(value) {
          return `<a href="#device/${value}">` + value + '</a>'
        }
      }
  ]
}]
});