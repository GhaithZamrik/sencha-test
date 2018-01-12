Ext.define('MyApp.view.chart.Charts', {
  extend: 'Ext.tab.Panel',
  xtype: 'charts',
  alias: 'charts',

  requires: [
    'Ext.chart.interactions.PanZoom',
    'Ext.chart.CartesianChart',
    'Ext.layout.Fit',
    'Ext.chart.axis.Category',
    'Ext.chart.axis.Numeric',
    'Ext.chart.series.Line',
    'Ext.chart.interactions.ItemInfo',
    'Ext.chart.interactions.CrossZoom',
    'Ext.chart.interactions.ItemHighlight'
  ],

  layout: 'fit',


  items: testChart //how to load it into the paner
});

var testChart = Ext.create('Ext.chart.CartesianChart', {
  width: 600,
  height: 400,
  store: {
      fields: ['name', 'g1', 'g2'],
      data: [
          {"name": "Item-0", "g1": 18.34,"g2": 0.04},
          {"name": "Item-1", "g1": 2.67, "g2": 14.87},
          {"name": "Item-2", "g1": 1.90, "g2": 5.72},
          {"name": "Item-3", "g1": 21.37,"g2": 2.13},
          {"name": "Item-4", "g1": 2.67, "g2": 8.53},
          {"name": "Item-5", "g1": 18.22,"g2": 4.62},
          {"name": "Item-6", "g1": 28.51, "g2": 12.43},
          {"name": "Item-7", "g1": 34.43, "g2": 4.40},
          {"name": "Item-8", "g1": 21.65, "g2": 13.87},
          {"name": "Item-9", "g1": 12.98, "g2": 35.44},
          {"name": "Item-10", "g1": 22.96, "g2": 38.70},
          {"name": "Item-11", "g1": 0.49, "g2": 51.90},
          {"name": "Item-12", "g1": 20.87, "g2": 62.07},
          {"name": "Item-13", "g1": 25.10, "g2": 78.46},
          {"name": "Item-14", "g1": 16.87, "g2": 56.80}
      ]
  },
  interactions: ['crosszoom', {
      type: 'iteminfo',
      listeners: {
          show: function(me, item, panel) {
              panel.setHtml('Data: ' + item.record.get('g1'))
          }
      }
  }],

  legend: {
    position: 'bottom'
  },

  //define x and y axis.
  axes: [{
      type: 'numeric',
      position: 'left'
  }, {
      type: 'category',
      visibleRange: [0, 1],
      position: 'bottom'
  }],

  //define the actual series
  series: [{
      type: 'line',
      xField: 'name',
      yField: 'g1',
      title: 'Normal',
      style: {
          fill: "#115fa6",
          stroke: "#115fa6",
          fillOpacity: 0.6,
          miterLimit: 3,
          lineCap: 'miter',
          lineWidth: 2
      },
      tooltip: {
          trackMouse: true,
          style: 'background: #fff',
          renderer: function(me, storeItem, item) {
              console.log(item, 'item')
              console.log(storeItem, 'storeItem')
              var title = item.series;
              me.setHtml('Axes' + item.series._title + ' Point ' + item.record.data.name + ' details: ' + item.record.data.g1 + ' , ' + item.record.data.g2);
            }
      }
  }, {
      type: 'line',
      xField: 'name',
      yField: 'g2',
      title: 'Smooth',
      style: {
          smooth: true,
          stroke: "#94ae0a",
          fillOpacity: 0.6,
          miterLimit: 3,
          lineCap: 'miter',
          lineWidth: 2
      }
  }]
});