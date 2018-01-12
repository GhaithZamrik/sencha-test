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
//   headers: { Authorization: "eyJraWQiOiIwdDFFdzY5N1JZOUFFTFwvRUVzNVhaV3hKY2JNQ01VS1psSGNxMytnWTVjaz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJmNTczOGRhZC1lOTc1LTQyZmMtYjcxNy1mODE3YzhjMWM4NDIiLCJhdWQiOiI1MmdkdjAwcjM5dmJtdWY4OWpjYzRqNzB0ayIsImV2ZW50X2lkIjoiNGI1ZTVhNjQtZjZjZS0xMWU3LTg1MzQtZjllZDBiN2Y2OTNiIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE1MTU2NzUxNTQsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS1jZW50cmFsLTEuYW1hem9uYXdzLmNvbVwvZXUtY2VudHJhbC0xX01PUllkWEpnbCIsImNvZ25pdG86dXNlcm5hbWUiOiJ0ZXN0MDAxIiwiZXhwIjoxNTE1Njc4NzU0LCJpYXQiOjE1MTU2NzUxNTR9.dzK2XWBmJSol169V_5tjWi9qoyfV3vA-g1ogYQMrlFqxkf5WXdoWioTIAk9tPx6rs0ESi87gegDa7BHZWQblj1LECL9OkHOvqWzhkBUmw2axbQ5en0J7MR8YyVdmXSmC7UYjvSePaJayHiw5mSNucNY4y8H99VOkMq2rM-HrXuGO7TrKuE6IkH-JS93nV1T0xlixKduiX7kwqGW6T-CxGp_9KTQ8GxndOxJ25FjTzbwoqFMozTc1nQb2wCfcaA1KqLCxWsoQf4h62MyMX1d-cUgvpUoWjvW8aisAPpHrYrdcM7bw8D9Qqtq3bq9e4mNSqbCADikEwPr6AKrXBFmJKA" },
//   type: 'rest',
//   timeout: 300000,
//   noCache: false,
//   pageParam: '',
//   startParam: '',
//   limitParam: '',
//   url : 'https://device-management-service-dev.connectedelevation.com/devices',
//   reader: {
//       type: 'json',
//       rootProperty: 'data.devices',
//       method: 'GET'
//   }
// },


