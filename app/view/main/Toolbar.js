Ext.define('MyApp.view.main.Toolbar', {
  extend: 'Ext.Toolbar',
  xtype: 'maintoolbar',

  requires: [
      'Ext.SegmentedButton'
  ],

  items: [
      {
          xtype: 'component',
          reference: 'logo',
          userCls: 'main-logo',
          html: 'Vestner'
      },
      {
          xtype: 'button',
          ui: 'header',
          iconCls: 'x-fa fa-bars',
          margin: '0 0 0 10',
          listeners: {
              tap: 'onToggleNavigationSize'
          }
      },
      '->',
      {
          xtype: 'segmentedbutton',
          margin: '0 16 0 0',
          //defaultUI: 'header',

          platformConfig: {
              phone: {
                  hidden: true
              }
          },
        }
  ]
});
