Ext.define('MyApp.model.Device', {
  extend: 'Ext.data.Model',

  fields: [{
    name: 'comissionId',
    type: 'string'
    }, {
    name: 'deviceTypeName',
    type: 'string'
    }, {
    name: 'edgeboxId',
    type: 'string'
    }, {
    name: 'deviceId',
    type: 'string'
    }, {
    name: 'environmentName',
    type: 'string'
    }],

  //   proxy: {
  //     headers: { Authorization: token },
  //     type: 'rest',
  //     noCache: false,
  //     pageParam: '',
  //     startParam: '',
  //     limitParam: '',
  //     url : 'DATAurl',
  //     reader: {
  //         type: 'json',
  //         rootProperty: 'data.devices',
  //         method: 'GET'
  //     }
  // },
});