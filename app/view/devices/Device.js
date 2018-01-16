Ext.define('MyApp.view.devices.Device', {
  extend: 'Ext.tab.Panel',
  xtype: 'device',
  href: '#device/:id',
  routeId: 'device/:id',
  viewType: 'device',

  items: [
      {
          xtype: 'panel',
          title: 'Home',
          html: '<a href="#devices">devices</a>',
          items: {
              xtype: 'button',
              text: 'home',
              handler: function() {
                  console.log(window.location.href)
              }
          }
      }]
})