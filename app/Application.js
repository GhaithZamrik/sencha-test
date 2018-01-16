Ext.define('MyApp.Application', {
  extend: 'Ext.app.Application',

  mainView: 'MyApp.view.main.Main',
  stores: [
    'NavigationTree'
  ],

  defaultToken: 'home'
});