
Ext.onReady(function(){

    var navigStore = Ext.create('Ext.data.Store', {
    fields: ['num', 'name'],
    data : [
        {"num":"1", "name":"Virtual Servers"},
        {"num":"2", "name":"Datacenter X"},
        {"num":"2", "name":"Datacenter Y"},
        {"num":"2", "name":"Datacenter P-Y-G X"}
        ]
    });

    var periodStore = Ext.create('Ext.data.Store', {
        fields: ['num', 'name'],
        data : [
            {"num":"1", "name":"1 mon"},
            {"num":"2", "name":"3 mon"},
            {"num":"3", "name":"6 mon"},
            {"num":"4", "name":"1 year"}
        ]
    });

    var tariffStore = Ext.create('Ext.data.Store', {
        fields: ['num', 'name'],
        data : [
            {"num":"1", "name":"Trial Linux"},
            {"num":"2", "name":"Trial Windows"},
            {"num":"3", "name":"Silver"},
            {"num":"4", "name":"Gold"},
            {"num":"5", "name":"Platinum"},
            {"num":"6", "name":"Custom"}
        ]
    });

    var operSysStore = Ext.create('Ext.data.Store', {
        fields: ['num', 'name'],
        data : [
            {"num":"1", "name":"CentOS 6.x 64bit"},
            {"num":"2", "name":"Ubuntu 12.04 64 bit"},
            {"num":"3", "name":"MS Windows 2008 R2"},
            {"num":"4", "name":"MS Windows 2012 R2"}
        ]
    });

    var disksStore = Ext.create('Ext.data.Store', {
        fields: ['num', 'name'],
        data : [
            {"num":"1", "name":"SATA"},
            {"num":"2", "name":"SAS"},
            {"num":"3", "name":"SSD"}
        ]
    });

    var slaStore = Ext.create('Ext.data.Store', {
        fields: ['num', 'name'],
        data : [
            {"num":"1", "name":"Basic SLA (99,7%)"},
            {"num":"2", "name":"Standart SLA (N%)"},
            {"num":"3", "name":"Premium SLA (N%)"}
        ]
    });

    var softwareStore = Ext.create('Ext.data.Store', {
        fields: ['num', 'name'],
        data : [
            {"num":"1", "name":"Availiable software 1"},
            {"num":"2", "name":"Availiable software 2"},
            {"num":"3", "name":"Availiable software 3"},
            {"num":"4", "name":"Availiable software 4"},
        ]
    });

    var navigCombo = Ext.create('Ext.form.ComboBox', {
        itemId: 'navigCombo',
        store: navigStore,
        queryMode: 'local',
        displayField: 'name',
        valueField: 'num',
        value: 'Virtual Servers',
        width: 280,
        padding: '10 10 10 10',
        renderTo: Ext.getBody(),
        listeners: {
            'change': function(combo, newValue){
                console.log(newValue);
                console.log(mainViewport.getComponent('westReg').getComponent('navigContainerVirtServ'));
                if (newValue == '1'){
                    mainViewport.getComponent('westReg').getComponent('navigContainerVirtServ').show();
                    mainViewport.getComponent('westReg').getComponent('navigContainerDatac').hide();
                }
                else {
                    mainViewport.getComponent('westReg').getComponent('navigContainerVirtServ').hide();
                    mainViewport.getComponent('westReg').getComponent('navigContainerDatac').show();
                }
            }
        }

    });

    var itemsContVirtServ = [{
            xtype: 'button',
            padding: '10 10 10 10',
            margin: '10 0 10 0',
            width: 280,
            text: 'Home page',
            handler: function() {
                // alert('You clicked the button!');
                mainViewport.getComponent('centerReg').getComponent('homeContainer').show();
                mainViewport.getComponent('centerReg').getComponent('virtServContainer').hide();
                mainViewport.getComponent('centerReg').getComponent('virtServContainer').getComponent('createForm').hide();

            }
        },{
            xtype: 'button',
            padding: '10 10 10 10',
            margin: '10 0 10 0',
            width: 280,
            text: 'Virtual servers',
            handler: function() {
                // alert('You clicked the button!');
                mainViewport.getComponent('centerReg').getComponent('homeContainer').hide();
                mainViewport.getComponent('centerReg').getComponent('virtServContainer').show();
                mainViewport.getComponent('centerReg').getComponent('virtServContainer').getComponent('createForm').hide();

            }
        },{
            xtype: 'button',
            padding: '10 10 10 10',
            margin: '10 0 10 0',
            width: 280,
            text: 'Snapshots',
            handler: function() {
                alert('You clicked the button!');
            }
        },{
            xtype: 'button',
            padding: '10 10 10 10',
            margin: '10 0 10 0',
            width: 280,
            text: 'Statistics',
            handler: function() {
                alert('You clicked the button!');
            }
        },{
            xtype: 'button',
            padding: '10 10 10 10',
            margin: '10 0 10 0',
            width: 280,
            text: 'History',
            handler: function() {
                alert('You clicked the button!');
            }
        }
    ];

    var itemsContDatac = [{
            xtype: 'button',
            padding: '10 10 10 10',
            margin: '10 0 10 0',
            width: 280,
            text: 'Home page',
            handler: function() {
                alert('You clicked the button!');
            }
        },{
            xtype: 'button',
            padding: '9 10 9 10',
            margin: '8 0 8 0',
            width: 280,
            text: 'Virtual servers datacenter',
            handler: function() {
                alert('You clicked the button!');
            }
        },{
            xtype: 'button',
            padding: '9 10 9 10',
            margin: '8 0 8 0',
            width: 280,
            text: 'Snapshots',
            handler: function() {
                alert('You clicked the button!');
            }
        },{
            xtype: 'button',
            padding: '9 10 9 10',
            margin: '8 0 8 0',
            width: 280,
            text: 'Private nets (VLANs)',
            handler: function() {
                alert('You clicked the button!');
            }
        },{
            xtype: 'button',
            padding: '9 10 9 10',
            margin: '8 0 8 0',
            width: 280,
            text: 'Load balancers',
            handler: function() {
                alert('You clicked the button!');
            }
        },{
            xtype: 'button',
            padding: '9 10 9 10',
            margin: '8 0 8 0',
            width: 280,
            text: 'VPNs',
            handler: function() {
                alert('You clicked the button!');
            }
        },{
            xtype: 'button',
            padding: '9 10 9 10',
            margin: '8 0 8 0',
            width: 280,
            text: 'Statistics',
            handler: function() {
                alert('You clicked the button!');
            }
        },{
            xtype: 'button',
            padding: '9 10 9 10',
            margin: '8 0 8 0',
            width: 280,
            text: 'History',
            handler: function() {
                alert('You clicked the button!');
            }
        }
    ];

    Ext.define('navigContainer', {
        extend: 'Ext.container.Container',
        config: {
            contItems: itemsContVirtServ
        },
        constructor: function(config) {
            this.callParent(arguments);
        },
        initComponent: function(config){
        Ext.apply(this, {
            layout: {
                type: 'vbox',
                align: 'center'
            },
            width: 300,
            renderTo: Ext.getBody(),
            border: 1,
            items: this.config.contItems
        })
        this.callParent();
    }
    });

    softwareSelect = Ext.create('Ext.container.Container', {
                // extend: 'Ext.container.Container',

                xtype: 'multi-selector',

                requires: [
                    'Ext.view.MultiSelector'
                ],
                width: 400,
                height: 200,
                layout: 'fit',

                items: [{
                    xtype: 'multiselector',
                    title: 'Selected software',

                    fieldName: 'name',

                    viewConfig: {
                        deferEmptyText: false,
                        emptyText: 'No software selected'
                    },

                    search: {
                        field: 'name',

                        store: softwareStore
                    }
                }]
    });

    // softwareSelect = Ext.create('softwareSelect',{
    //     itemId: 'softwareSelect'
    // });


    createForm = Ext.create('Ext.form.Panel', {
        hidden: true,
        title: 'Creation Form',
        itemId: 'createForm',
        bodyPadding: 5,
        width: 800,
        x: 10, y: 50,
        layout: 'form',
        defaultType: 'textfield',
        items: [{
            fieldLabel: 'Name',
            name: 'name',
            allowBlank: false
        },{
            fieldLabel: 'Quantity',
            name: 'quantity',
            allowBlank: false
        },{
            xtype: 'combobox',
            fieldLabel: 'Period',
            store: periodStore,
            queryMode: 'local',
            displayField: 'name',
            valueField: 'num',
            value: '1 mon',
            allowBlank: false
        },{
            xtype: 'combobox',
            fieldLabel: 'Tariff',
            store: tariffStore,
            queryMode: 'local',
            displayField: 'name',
            valueField: 'num',
            allowBlank: false
        },{
            xtype: 'combobox',
            fieldLabel: 'Operating System',
            store: operSysStore,
            queryMode: 'local',
            displayField: 'name',
            valueField: 'num',
            allowBlank: false
        },{
            xtype: 'slider',
            fieldLabel: 'vCPU',
            increment: 1,
            minValue: 0,
            maxValue: 12,
        },{
            xtype: 'slider',
            decimalPrecision: 1,
            fieldLabel: 'RAM, Gb',
            increment: 0.5,
            minValue: 0.5,
            maxValue: 32.0,
        },{
            xtype: 'combobox',
            fieldLabel: 'Disk type',
            store: disksStore,
            queryMode: 'local',
            displayField: 'name',
            valueField: 'num',
            allowBlank: false
        },{
            xtype: 'slider',
            fieldLabel: 'HDD, Gb',
            increment: 50,
            minValue: 50,
            maxValue: 1000,
        },{
            xtype: 'button',
            text: '+ HDD',
            handler: function() {
            }
        },{
            xtype: 'slider',
            fieldLabel: 'Bandwidth, Mbps',
            increment: 1,
            minValue: 1,
            maxValue: 100,
        },{
            xtype: 'form',
            width: 200,
            items:[
                {
                    xtype: 'container',
                    layout: 'hbox',
                    defaultType: 'checkboxfield',
                    items: [
                        {
                            boxLabel  : 'IPv4',
                            name      : 'ip',
                            checked   : true,
                            inputValue: '1',
                            id        : 'checkbox1'
                        }, {
                            boxLabel  : 'IPv6',
                            name      : 'ip',
                            inputValue: '2',
                            checked   : true,
                            id        : 'checkbox2'
                        }, {
                            boxLabel  : 'IPv6',
                            name      : 'ip',
                            inputValue: '3',
                            id        : 'checkbox3'
                        },{
                            boxLabel  : 'IPv6',
                            name      : 'ip',
                            inputValue: '4',
                            id        : 'checkbox4'
                        }
                    ]
                }
            ]
        },{
            xtype: 'container',
            items: [softwareSelect]
        }
        
        
        ],
        buttons: [{
            text: 'Reset',
            handler: function() {
                this.up('form').getForm().reset();
            }
        },{
            text: 'Submit',
            formBind: true, //only enabled once the form is valid
            disabled: true,
            handler: function() {
                // var form = this.up('form').getForm();
                // if (form.isValid()) {
                //     form.submit({
                //         success: function(form, action) {
                //            Ext.Msg.alert('Success', action.result.msg);
                //         },
                //         failure: function(form, action) {
                //             Ext.Msg.alert('Failed', action.result.msg);
                //         }
                //     });
                // }
            }
        }
        ]

    });

    Ext.define('virtServContainer',{
        extend: 'Ext.container.Container',
        initComponent: function(config){
        Ext.apply(this, {
            layout: {
                type: 'absolute',
                // align: 'center'
            },
            width: 1000,
            height: 1000,
            renderTo: Ext.getBody(),
            border: 1,
            items: [{
                xtype: 'button',
                x: 0, y: 0,
                margin: '10 0 0 10',
                text: 'Create',
                handler: function() {
                    //alert('You clicked the button!');
                    mainViewport.getComponent('centerReg').getComponent('virtServContainer').getComponent('createForm').show();

                }
            },{
                xtype: 'button',
                x: 61, y: 0,
                margin: '10 0 0 10',
                text: 'Power-off',
                handler: function() {
                    alert('You clicked the button!');
                }
            },{
                xtype: 'button',
                x: 136, y: 0,
                margin: '10 0 0 10',
                text: 'Suspend',
                handler: function() {
                    alert('You clicked the button!');
                }
            },{
                xtype: 'button',
                x: 208, y: 0,
                margin: '10 0 0 10',
                text: 'Restart',
                handler: function() {
                    alert('You clicked the button!');
                }
            },{
                xtype: 'button',
                x: 272, y: 0,
                margin: '10 0 0 10',
                text: 'Console',
                handler: function() {
                    alert('You clicked the button!');
                }
            },{
                xtype: 'button',
                x: 340, y: 0,
                margin: '10 0 0 10',
                text: 'Reconfig',
                handler: function() {
                    alert('You clicked the button!');
                }
            },
            // {
            //     xtype: 'button',
            //     x: 600, y: 0,
            //     margin: '10 0 0 10',
            //     text: 'Migrate',
            //     handler: function() {
            //         alert('You clicked the button!');
            //     }
            // },
            {
                xtype: 'button',
                x: 740, y: 0,
                margin: '10 0 0 10',
                text: 'Destroy',
                handler: function() {
                    alert('You clicked the button!');
                }
            },
                createForm
            
            ]
        })
        this.callParent();
    }
    });

    Ext.define('homeContainer',{
        extend: 'Ext.container.Container',
        initComponent: function(config){
        Ext.apply(this, {
            layout: {
                type: 'absolute',
            },
            width: 1000,
            height: 1000,
            renderTo: Ext.getBody(),
            border: 1,
            items: [{
                xtype: 'button',
                x: 100, y: 100,
                margin: '10 0 0 10',
                text: 'Help me!!!',
                handler: function() {
                    alert('You clicked the button!');
                }
            },{
                xtype: 'button',
                margin: '10 0 0 10',
                x: 100, y: 200,
                text: 'Create a VM',
                handler: function() {
                    mainViewport.getComponent('centerReg').getComponent('homeContainer').hide();
                    mainViewport.getComponent('centerReg').getComponent('virtServContainer').show();
                    mainViewport.getComponent('centerReg').getComponent('virtServContainer').getComponent('createForm').show();
                    //console.log(mainViewport.getComponent('centerReg').getComponent('virtServContainer'))
                }
            }
            ]
        })
        this.callParent();
    }
    });

    
    navigContainerVirtServ = Ext.create('navigContainer',{
        itemId: 'navigContainerVirtServ'
    });
    navigContainerDatac = Ext.create('navigContainer',{
        itemId: 'navigContainerDatac',
        contItems: itemsContDatac,
        hidden: true
    }) ;  
    homeContainer = Ext.create('homeContainer', {
        itemId: 'homeContainer',
    });
    virtServContainer = Ext.create('virtServContainer', {
        itemId: 'virtServContainer',
        hidden: true
    });
    


    var mainViewport = Ext.create('Ext.container.Viewport', {
        layout: 'border',
        items: [{
            region: 'north',
            html: '<div style="background-color: #424242;border-bottom: 1px solid #121b28; height: 52px; margin: 0px; width: 100%; right: auto; left: 0px; top: 0px;" id="app-header"><div id="app-header-innerCt"  style="width: 100%; height: 51px;"><div id="app-header-targetEl" data-ref="targetEl" class="x-box-target" role="presentation" style="width: 100%;"><div class="x-component  x-box-item x-component-default" id="app-header-logo" style="margin: 0px; right: auto; left: 0px; top: 13px;"></div><div class="x-component  x-box-item x-component-default" id="app-header-title" style="margin: 0px; right: auto; left: 40px; width: 1468px; top: 5px;">Ext JS Kitchen Sink</div><div class="x-container  x-box-item x-container-default x-box-layout-ct" style="margin: 0px; right: auto; left: 1508px; top: 15px;" id="theme-switcher-btn"><div id="theme-switcher-btn-innerCt" data-ref="innerCt" role="presentation" class="x-box-inner" style="width: 27px; height: 22px;"><div id="theme-switcher-btn-targetEl" data-ref="targetEl" class="x-box-target" role="presentation" style="width: 27px;"><div class="x-component  ks-theme-switcher x-box-item x-component-default" style="margin: 0px; right: auto; left: 0px; top: 0px;" id="theme-switcher"></div></div></div></div></div></div></div>',
            border: false,
            margin: '0 0 5 0',
        }, {
            itemId: 'westReg',
            region: 'west',
            collapsible: true,
            title: 'Navigation',
            width: 300,
            items: [navigCombo,  
                navigContainerVirtServ, 
                navigContainerDatac ]
            // could use a TreePanel or AccordionLayout for navigational items
        }, {
            region: 'center',
            itemId: 'centerReg',
            items: [virtServContainer, homeContainer]
        }]
    });




});



// value: 'Basic SLA (99,7%)',
            // xtype: 'combobox',
            // fieldLabel: 'SLA',
            // store: slaStore,
            // queryMode: 'local',
            // displayField: 'name',
            // valueField: 'num',
            // allowBlank: false