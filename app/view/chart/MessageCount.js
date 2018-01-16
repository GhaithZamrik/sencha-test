Ext.define('MyApp.view.chart.MessageCount', {
    extend: 'Ext.chart.CartesianChart',
    xtype: 'messagecount',

    requires: [
        'Ext.Button',
        'Ext.field.Text',
        'Ext.chart.interactions.CrossZoom',
        'Ext.chart.interactions.ItemInfo',
        'Ext.chart.axis.Numeric',
        'Ext.chart.axis.Category',
        'Ext.chart.series.Line',
        'Ext.chart.interactions.ItemHighlight',
        'Ext.chart.axis.Time'
    ],
    
    items: {
        xtype: 'cartesian',
        width: 600,
        height: 900,
        store: {
            fields: ['name', 'g1'],
            data: [{
                    "name": 3602,
                    "g1": new Date('2017-12-07T15:52:00').getTime(),
                },
                {
                    "name": 3624,
                    "g1": new Date('2017-12-07T15:54:00').getTime(),
                },
                {
                    "name": 3722,
                    "g1": new Date('2017-12-07T15:56:00').getTime()
                },
                {
                    "name": 3730,
                    "g1": new Date('2017-12-07T15:58:00').getTime()
                },
                {
                    "name": 3690,
                    "g1": new Date('2017-12-07T16:00:00').getTime()
                }
            ]
        },
        interactions: ['crosszoom', {
            type: 'iteminfo',
            listeners: {
                show: function (me, item, panel) {
                    panel.setHtml('Data: ' + item.record.get('g1'))
                }
            }
        }],

        legend: {
            position: 'bottom'
        },

        axes: [{
            type: 'time',
            position: 'bottom',
            fromDate: new Date('2017-12-07T15:52:00'),
            toDate: new Date('2017-12-07T15:53:45:00')
        }, {
            type: 'numeric',
            visibleRange: [3602, 3730],
            position: 'left'
        }],

        series: [{
            type: 'line',
            xField: 'g1',
            yField: 'name',
            title: 'Normal',
            style: {
                fill: "#115fa6",
                stroke: "#115fa6",
                fillOpacity: 1,
                miterLimit: 3,
                lineCap: 'miter',
                lineWidth: 2
            },
            tooltip: {
                trackMouse: true,
                style: 'background: #fff',
                renderer: function (me, storeItem, item) {
                    console.log(item, 'item')
                    console.log(storeItem, 'storeItem')
                    var title = item.series;
                    me.setHtml('Axes' + item.series._title + ' Point ' + item.record.data.name + ' details: ' + item.record.data.g1 + ' , ' + item.record.data.g2);
                }
            }
        }]
    }
});