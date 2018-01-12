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
  //     headers: { Authorization: "eyJraWQiOiIwdDFFdzY5N1JZOUFFTFwvRUVzNVhaV3hKY2JNQ01VS1psSGNxMytnWTVjaz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJmNTczOGRhZC1lOTc1LTQyZmMtYjcxNy1mODE3YzhjMWM4NDIiLCJhdWQiOiI1MmdkdjAwcjM5dmJtdWY4OWpjYzRqNzB0ayIsImV2ZW50X2lkIjoiZmVkNDIzYzktZjc5Ni0xMWU3LWIxMzAtY2IyMTNlYTZlMDMwIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE1MTU3NjEzNTUsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS1jZW50cmFsLTEuYW1hem9uYXdzLmNvbVwvZXUtY2VudHJhbC0xX01PUllkWEpnbCIsImNvZ25pdG86dXNlcm5hbWUiOiJ0ZXN0MDAxIiwiZXhwIjoxNTE1NzY0OTU1LCJpYXQiOjE1MTU3NjEzNTV9.gIOAoM6FeHDJDbPYpC2Hmzfi6FC8Q9RlgZGwS2ZpnellBYcp8Hj-hILt4pCr099KWV4bh7iXNj1y_fKcZK7wbvbHEG83Nwkm8y0Nu_HWWVXTs5S38s66V0oWWJ72waoph3n4GWDP_NSqwePHrUKvFQkx_HveheBJ1axnzqYEW7alhbeVALGNYCrXBSTKkXl2mMCvmnHIhVwcEKROiAfPZrmfQJY9vMeLda5aM6X9boQqwveqqWhzzNuB9vE7H9iK-M8UPwSjgk__mNlGTVlFtHmaGOxoMN_pgOV3bXv4aIsTcdtc8f1n8Ni5JsYgz_nTnFw9sbTZqoduUbZUPpQubg" },
  //     type: 'rest',
  //     noCache: false,
  //     pageParam: '',
  //     startParam: '',
  //     limitParam: '',
  //     url : 'https://device-management-service-dev.connectedelevation.com/devices',
  //     reader: {
  //         type: 'json',
  //         rootProperty: 'data.devices',
  //         method: 'GET'
  //     }
  // },
});