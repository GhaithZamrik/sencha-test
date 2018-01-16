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
    }]
});