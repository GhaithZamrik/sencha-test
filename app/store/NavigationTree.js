Ext.define('MyApp.store.NavigationTree', {
  extend: 'Ext.data.TreeStore',

  storeId: 'NavigationTree',

  fields: [{
      name: 'text'
  }],

  root: {
      expanded: true,
      children: [
          {
              text: 'Dashboard',
              iconCls: 'x-fa fa-desktop',
              rowCls: 'nav-tree-badge nav-tree-badge-new',
              viewType: 'admindashboard',
              routeId: 'dashboard', // routeId defaults to viewType
              leaf: true
          },
          {
              text: 'Devices',
              iconCls: 'x-fa fa-terminal',
              rowCls: 'nav-tree-badge nav-tree-badge-hot',
              viewType: 'devices',
              leaf: true
          },
        //   {
        //       text: 'Search results',
        //       iconCls: 'x-fa fa-search',
        //       viewType: 'searchresults',
        //       leaf: true
        //   },
          {
              text: 'Pages',
              iconCls: 'x-fa fa-leanpub',
              expanded: false,
              selectable: false,
              //routeId: 'pages-parent',
              //id: 'pages-parent',

              children: [
                  {
                      text: '404 Error',
                      iconCls: 'x-fa fa-exclamation-triangle',
                      viewType: 'page404',
                      leaf: true
                  },
                  {
                      text: '500 Error',
                      iconCls: 'x-fa fa-times-circle',
                      viewType: 'page500',
                      leaf: true
                  },
                  {
                      text: 'Login',
                      iconCls: 'x-fa fa-check',
                      viewType: 'login',
                      leaf: true
                  },
                  {
                      text: 'Password Reset',
                      iconCls: 'x-fa fa-lightbulb-o',
                      viewType: 'passwordreset',
                      leaf: true
                  },
                  {
                      text: 'device',
                      viewType: 'device',
                      routeId: 'device',
                      leaf: true
                  }
              ]
          },
          {
              text: 'Charts',
              iconCls: 'x-fa fa-pie-chart',
              viewType: 'charts',
              leaf: true
          }
      ]
  }
});