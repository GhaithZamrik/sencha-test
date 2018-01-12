let token;
let data = {}

this.store = Ext.define('MyApp.store.Devices', {
  extend: 'Ext.data.Store',
  alias: 'store.devices',
  model: 'MyApp.model.Device',
  data: data.devices, //? how to update the store when the data is received
});



// Ext.onReady(function(){
//   Ext.Ajax.request({
//     url: 'authenticateURL',
//     method: 'POST',
//     cors: true,
//     headers: { 'Content-Type': 'application/json' },
//     params: Ext.JSON.encode({ user: {username: "user", password: "password"}}),
//     success: function(conn, response) {
//       const authResponse = JSON.parse(conn.responseText)
//       token = authResponse.user.authenticationToken
//     },
//     failure: function(conn, response) {
//       console.log(conn, 'conn fail')
//       console.log(response, 'response fail')

//   }
//   }).then(() => {
//     Ext.Ajax.disableCaching = false;
//     Ext.Ajax.request({
//       url: 'DATAurl',
//       method: 'GET',
//       cors: true,
//       disableCaching: false,
//       headers: { Authorization: token },
//       success: function(conn, response) {
//         console.log(conn, 'dms conn')
//         const DMSResponse = JSON.parse(conn.responseText)
//         data = DMSResponse
//         console.log(DMSResponse)
//         this.store.loadRecords(data.devices); ؟
//       },
//       failure: function(conn, response) {
//         console.log(conn, 'dms fail conn')
//         console.log(response, 'dms fail response')
//       }
//     })
//   })
// });


// rest store
// this.store = Ext.define('MyApp.store.Devices', {
//   extend: 'Ext.data.Store',
//   alias: 'store.devices',
//   model: 'MyApp.model.Device',
// proxy: {
//   headers: { Authorization: token },
//   type: 'rest',
//   timeout: 300000,
//   noCache: false,
//   pageParam: '',
//   startParam: '',
//   limitParam: '',
//   url : 'DATAurl',
//   reader: {
//       type: 'json',
//       rootProperty: 'data.devices',
//       method: 'GET'
//   }
// },


