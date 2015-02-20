
Ext.onReady(function(){

    Ext.tip.QuickTipManager.init();

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
            {"num":"1", "name":"SATA", "info": "Information about SATA."},
            {"num":"2", "name":"SAS", "info": "Information about SAS."},
            {"num":"3", "name":"SSD", "info": "Information about SSD."}
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
                // console.log(newValue);
                // console.log(mainViewport.getComponent('westReg').getComponent('navigContainerVirtServ'));
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

Ext.define('numberSliderNDD', {
    extend: 'Ext.container.Container',
    alias:'widget.numbersliderHDD',
        config: {
                    numberField: 'sliderfield1',
                    sliderField: 'numberfield1'

        },

        xtype: 'numberslider',
    initComponent: function() {
    Ext.apply(this, {   
                layout:'hbox',
                width: 520,
                items:[
                    {
                        xtype: 'sliderfield',
                        numberField:this.numberField,
                        itemId:this.sliderField,
                        fieldLabel: 'HDD, Gb',
                        // increment: 50,
                        // minValue: 50,
                        // maxValue: 1000,
                        increment: 1,
                        minValue: 0,
                        maxValue: 19,
                        width: 380,
                        margin: '0 15 0 15',
                        labelWidth: 60,
                        dataVal1:[50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000],
                        dataVal2:[20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200],
                        listeners: {
                                change: function (slider,newValue, thumb,eOpts,editMode){
                                    // TODO через setMax/MinValue менять слайдер и поле
                                    dataVal1 = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000];
                                    dataVal2 = [20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200];
                                    if(slider.numberField){
                                        if (mainViewport.getComponent('centerReg').getComponent('virtServContainer').getComponent('createForm').getComponent('diskContainer').getComponent('diskCombo').getValue() < 3 )
                                            this.ownerCt.getComponent(this.numberField).setValue(dataVal1[newValue])
                                        else this.ownerCt.getComponent(this.numberField).setValue(dataVal2[newValue])
                                    }

                                }   
                        },
                        //////////
                        tipText: function(thumb){
                            // console.log(this)
                            if(mainViewport.getComponent('centerReg').getComponent('virtServContainer').getComponent('createForm').getComponent('diskContainer').getComponent('diskCombo').getValue() < 3 ){
                                return thumb.slider.dataVal1[thumb.value]
                            }
                            else {
                                return thumb.slider.dataVal2[thumb.value]
                            }
                            
                        }


            },{
                        xtype:'numberfield',
                        width: 100,
                        sliderField:this.sliderField,
                        itemId:this.numberField,
                        minValue: 50,
                        maxValue: 1000,
                        listeners: {
                                change: function (numberfield,newValue){
                                if(this.sliderField){
                                    // TODO сцепить слайдер и поле. как в RAM
                                    // if (mainViewport.getComponent('centerReg').getComponent('virtServContainer').getComponent('createForm').getComponent('diskContainer').getComponent('diskCombo').getValue() < 3 )
                                    //     this.ownerCt.getComponent(this.sliderField).setValue(dataVal1[newValue])
                                    // else this.ownerCt.getComponent(this.sliderField).setValue(dataVal2[newValue])
                                }

                        }

                        }
            }]

    });
    this.callParent();
        }
    });

Ext.define('numberSliderVCPU', {
    extend: 'Ext.container.Container',
    alias:'widget.numbersliderVCPU',
        config: {
                    numberField: 'sliderfield1',
                    sliderField: 'numberfield1'

        },

        xtype: 'numberslider',
    initComponent: function() {
    Ext.apply(this, {   
                layout:'hbox',
                width: 520,
                items:[
                    {
                        xtype: 'sliderfield',
                        numberField:this.numberField,
                        itemId:this.sliderField,
                        fieldLabel: 'vCPU',
                        increment: 1,
                        width: 380,
                        minValue: 1,
                        maxValue: 12,
                        //margin: '0 0 0 0',
                        labelWidth: 100,
                        listeners: {
                                change: function (slider,newValue, thumb,eOpts,editMode){
                                    if(slider.numberField){
                                            // console.log("look!", this.ownerCt);
                                            this.ownerCt.getComponent(this.numberField).setValue(newValue);
                                    }

                                }   
                        }

                    },{
                        xtype:'numberfield',
                        width: 100,
                        sliderField:this.sliderField,
                        itemId:this.numberField,
                        minValue: 1,
                        maxValue: 12,
                        margin: '0 0 0 15',
                        listeners: {
                                change: function (numberfield,newValue){
                                if(this.sliderField){
                                        this.ownerCt.getComponent(this.sliderField).setValue(newValue);
                                        // console.log('HHH');
                                }

                        }

                        }
                        }
                ]

    });
    this.callParent();
        }
    });

Ext.define('numberSliderBand', {
    extend: 'Ext.container.Container',
    alias:'widget.numbersliderBand',
        config: {
                    numberField: 'sliderfield1',
                    sliderField: 'numberfield1'

        },

        xtype: 'numberslider',
    initComponent: function() {
    Ext.apply(this, {   
                layout:'hbox',
                width: 520,
                items:[
                    {
                        xtype: 'sliderfield',
                        numberField:this.numberField,
                        itemId:this.sliderField,
                        fieldLabel: 'Bandwidth, Mbps',
                        increment: 1,
                        width: 380,
                        minValue: 1,
                        maxValue: 100,
                        //margin: '0 0 0 0',
                        labelWidth: 100,
                        listeners: {
                                change: function (slider,newValue, thumb,eOpts,editMode){
                                    if(slider.numberField){
                                            // console.log("look!", this.ownerCt);
                                            this.ownerCt.getComponent(this.numberField).setValue(newValue);
                                    }

                                }   
                        }

                    },{
                        xtype:'numberfield',
                        width: 100,
                        sliderField:this.sliderField,
                        itemId:this.numberField,
                        minValue: 1,
                        maxValue: 100,
                        margin: '0 0 0 15',
                        listeners: {
                                change: function (numberfield,newValue){
                                if(this.sliderField){
                                        this.ownerCt.getComponent(this.sliderField).setValue(newValue);
                                        // console.log('HHH');
                                }

                        }

                        }
                        }
                ]

    });
    this.callParent();
        }
    });



Ext.define('numberSliderRAM', {
    extend: 'Ext.container.Container',
    alias:'widget.numbersliderRAM',
        config: {
                    numberField: 'sliderfield1',
                    sliderField: 'numberfield1'

        },

        xtype: 'numberslider',
    initComponent: function() {
    Ext.apply(this, {   
                layout:'hbox',
                width: 520,
                items:[
                    {
                        xtype: 'sliderfield',
                        numberField:this.numberField,
                        itemId:this.sliderField,
                        fieldLabel: 'RAM, Mb',
                        increment: 1,
                        width: 380,
                        minValue: 0,
                        maxValue: 16,
                        decimalPrecision: 1,
                        dataVal:[512, 2048, 4096, 6144, 8192, 10240, 12288, 14336, 16384, 18432, 20480, 22528, 24576, 26624, 28672, 30720, 32768],
                        labelWidth: 100,
                        tipText: function(thumb){

                            return thumb.slider.dataVal[thumb.value];

                        },
                        listeners: {
                                change: function (slider,newValue, thumb,eOpts,editMode){
                                    if(slider.numberField){
                                            // console.log("look!", this.ownerCt);
                                            // this.ownerCt.getComponent(this.numberField).setValue(newValue);
                                            this.ownerCt.getComponent(this.numberField).setRawValue(thumb.slider.dataVal[thumb.value]);
                                    }

                                }   
                        }

                    },{
                        xtype:'numberfield',
                        width: 100,
                        sliderField:this.sliderField,
                        itemId:this.numberField,
                        minValue: 512,
                        maxValue: 32768,
                        step: 512,
                        margin: '0 0 0 15',
                        listeners: {
                        change: function (numberfield,newValue,oldValue){
                                    dataVal = [512, 2048, 4096, 6144, 8192, 10240, 12288, 14336, 16384, 18432, 20480, 22528, 24576, 26624, 28672, 30720, 32768];
                                    console.log(newValue, Math.floor(newValue / 2048), dataVal[Math.floor(newValue / 2048)]);
                                    // if (oldValue < newValue) {
                                    //     numberfield.setValue(dataVal[Math.ceil(newValue / 2048)]);
                                    // } else if (oldValue > newValue) {
                                    //     numberfield.setValue(dataVal[Math.floor(newValue / 2048)]);
                                    // }
                                    // TODO у поля плохой инкремент
                                    if(this.sliderField){
                                        var slider = this.ownerCt.getComponent(this.sliderField);
                                        // slider.suspendEvents();
                                        slider.setValue(Math.floor(newValue / 2048));
                                        // slider.resumeEvents();
                                            // console.log('HHH');
                                    }
                                }

                        }
                        }
                ]

    });
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

    var price = 123;

    createForm = Ext.create('Ext.form.Panel', {
        hidden: true,
        title: 'Creation Form',
        itemId: 'createForm',
        scrollable: true,
        autoScroll: true,
        bodyPadding: 5,
        width: 800,
        height: 620,
        defaultType: 'textfield',
        items: [{
            fieldLabel: 'Name',
            width: 500,
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
            width: 500,
            queryMode: 'local',
            displayField: 'name',
            valueField: 'num',
            allowBlank: false
        },{
            xtype: 'numbersliderVCPU'
            // xtype: 'slider',
            // fieldLabel: 'vCPU',
            // width: 500,
            // increment: 1,
            // minValue: 0,
            // maxValue: 12,
        },{
            xtype: 'numbersliderRAM'
            // xtype: 'slider',
            // decimalPrecision: 1,
            // width: 500,
            // fieldLabel: 'RAM, MB',
            // increment: 1,
            // minValue: 0,
            // maxValue: 16,
            // dataVal:[512, 2048, 4096, 6144, 8192, 10240, 12288, 14336, 16384, 18432, 20480, 22528, 24576, 26624, 28672, 30720, 32768],
            // tipText: function(thumb){
            //     // if(thumb.value>0){
            //     //  thumb.slider.setFieldLabel('RAM, GB');
            //     // }
            //     // else {
            //     //     thumb.slider.setFieldLabel('RAM, MB');
            //     // }
            //     return thumb.slider.dataVal[thumb.value];

            // }
        },{
                xtype: 'fieldcontainer',
                itemId: 'diskContainer',
                layout: 'hbox',
                width: 700,
                items:
                [{
                    xtype: 'combobox',
                    itemId: 'diskCombo',
                    fieldLabel: 'Disk type',
                    store: disksStore,
                    width: 150, 
                    queryMode: 'local',
                    displayField: 'name',
                    valueField: 'num',
                    allowBlank: false,
                    flex: 0.6,
                    listConfig: {
                        getInnerTpl: function() {
                            return '{name} <span data-qtip="{info}"><font color="#f2654a">?</font></span>';
                        }
                    }
                },{
                    xtype: 'numbersliderHDD'
                }]
        },{
            xtype: 'container',
            layout: 'anchor',
            itemId: 'emptyContainer',
            width: 700,
        },{
            xtype: 'button',
            text: '+ HDD',
            margin: '0, 0, 0, 700',
            handler: function() {
              var t = Ext.create('Ext.form.FieldContainer', {
                    layout: 'hbox',
                    width: 732,
                    items:
                    [{
                        xtype: 'combobox',
                        fieldLabel: 'Disk type',
                        store: disksStore,
                        queryMode: 'local',
                        displayField: 'name',
                        valueField: 'num',
                        allowBlank: false,
                        flex: 0.6,
                        listConfig: {
                            getInnerTpl: function() {
                                return '{name} <span data-qtip="{info}"><font color="#f2654a">?</font></span>';
                            }
                        }
                    },{
                        xtype: 'numbersliderHDD'
                        // xtype: 'slider',
                        // fieldLabel: 'HDD, Gb',
                        // increment: 50,
                        // minValue: 50,
                        // maxValue: 1000,
                        // flex: 1.4,
                        // padding: '0, 0, 0, 20',
                        // labelWidth: 60
                    },{
                        xtype: 'button',
                        text: '-',
                        margin: '0, 0, 0, 10',
                        handler: function() {
                            this.up().destroy()
                        }
                    }]
                })
                 createForm.getComponent('emptyContainer').insert(t);
                


            }
        },{
            xtype: 'numbersliderBand'
            // xtype: 'slider',
            // fieldLabel: 'Bandwidth, Mbps',
            // width: 500,
            // increment: 1,
            // minValue: 1,
            // maxValue: 100,
        },{
            xtype: 'form',
            width: 300,
            items:[
                {
                    xtype: 'container',
                    layout: 'hbox',
                    defaultType: 'checkboxfield',
                    items: [
                        {
                            boxLabel  : 'Public IPv4',
                            name      : 'ip',
                            checked   : true,
                            inputValue: '1',
                            id        : 'checkbox1',
                            disabled: true,
                        }, {
                            boxLabel  : 'Public IPv6',
                            name      : 'ip',
                            inputValue: '2',
                            id        : 'checkbox2',
                            padding: '0 0 0 30'

                        }
                    ]
                }
            ]
        },{
            xtype: 'container',
            layout: 'hbox',
            items: [softwareSelect,
            {
                xtype: 'container',
                border: 2,
                style: {
                    borderColor: '#f2654a',
                    borderStyle: 'solid'
                },
                html: '<font size="4">'+price+' €</font><br><font size="2">monthly</font>',
                margin: '100, 100, 50, 250',
                padding: '10, 10, 10, 10'
            }]
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
            // layout: {
            //     type: 'absolute',
            //     // align: 'center'
            // },
            layout: 'fit',
            scrollable: true,
            width: 800,
            renderTo: Ext.getBody(),
            border: 1,
            items: [
            {
                xtype: 'container',
                layout: 'hbox',
                margin: '0, 0, 10, 0',
                items:[
                {
                    xtype: 'button',
                    margin: '10 0 0 10',
                    text: 'Create',
                    handler: function() {
                        //alert('You clicked the button!');
                        mainViewport.getComponent('centerReg').getComponent('virtServContainer').getComponent('createForm').show();

                    }
                },{
                    xtype: 'button',
                    margin: '10 0 0 10',
                    text: 'Power-off',
                    handler: function() {
                        alert('You clicked the button!');
                    }
                },{
                    xtype: 'button',
                    margin: '10 0 0 10',
                    text: 'Suspend',
                    handler: function() {
                        alert('You clicked the button!');
                    }
                },{
                    xtype: 'button',
                    margin: '10 0 0 10',
                    text: 'Restart',
                    handler: function() {
                        alert('You clicked the button!');
                    }
                },{
                    xtype: 'button',
                    margin: '10 0 0 10',
                    text: 'Console',
                    handler: function() {
                        alert('You clicked the button!');
                    }
                },{
                    xtype: 'button',
                    margin: '10 0 0 10',
                    text: 'Reconfig',
                    handler: function() {
                        alert('You clicked the button!');
                    }
                },{
                    xtype: 'button',
                    margin: '10 0 0 309',
                    text: 'Destroy',
                    handler: function() {
                        alert('You clicked the button!');
                    }
                }]
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
            scrollable: true,
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
