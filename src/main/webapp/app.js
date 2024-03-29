/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

Ext.application({
    name: 'NotesApp',

//    requires: [
//        'Ext.MessageBox'
//    ],
//
    models:['Note'],

    stores:['Notes'],

    views: [
        'NotesListContainer',
        'NotesList'
    ],

    controllers:["Notes"],

//
//    icon: {
//        '57': 'resources/icons/Icon.png',
//        '72': 'resources/icons/Icon~ipad.png',
//        '114': 'resources/icons/Icon@2x.png',
//        '144': 'resources/icons/Icon~ipad@2x.png'
//    },
//
//    isIconPrecomposed: true,
//
//    startupImage: {
//        '320x460': 'resources/startup/320x460.jpg',
//        '640x920': 'resources/startup/640x920.png',
//        '768x1004': 'resources/startup/768x1004.png',
//        '748x1024': 'resources/startup/748x1024.png',
//        '1536x2008': 'resources/startup/1536x2008.png',
//        '1496x2048': 'resources/startup/1496x2048.png'
//    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        //Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        //Ext.Viewport.add(Ext.create('helloworld.view.Main'));

        //var notesListContainer = Ext.create("NotesApp.view.NotesListContainer");
        var notesListContainer = {
            xtype:"noteslistcontainer"
        };

//        var noteEditor = new Ext.form.Panel({
//
//        });

        var noteEditorTopToolbar = Ext.create("Ext.Toolbar", {
            dock:"top",
            title:"Edit Note",
            items:[
                {
                    text:"Home",
                    ui:"back",
                    handler:function(){

                    }
                },{
                    xtype:"spacer"
                },{
                    text:"Save",
                    ui:"action",
                    handler:function(){

                    }
                }
            ]
        });

        var noteEditorBottomToolbar = Ext.create("Ext.Toolbar", {
            dock:"bottom",
            items:[
                {xtype:"spacer"},
                {
                    iconCls:"trash",
                    iconMask:true,
                    handler:function(){

                    }
                }
            ]
        });

        var noteEditor = Ext.create('Ext.form.Panel',{
            id:"noteEditor",
            items:[{
                xtype:"textfield",
                name:"title",
                label:"Title",
                required:true
            },{
                xtype:"textareafield",
                name:"narrative",
                label:"Narrative"
            }]
        });
        noteEditor.add([noteEditorTopToolbar, noteEditorBottomToolbar]);

        NotesApp.notesList = notesListContainer;
        NotesApp.notesEditor = noteEditor;

        Ext.Viewport = new Ext.Panel({
            layout:{
                type:'card',
                animation:{
                    type:'slide',
                    direction:'left'
                }
            },
            fullscreen:true,
            items:[notesListContainer, noteEditor]
//            fullscreen:true,
//            layout:"card",
//            cardAnimation:"slide",
//            items:[noteEditor]
        })

        //Ext.Viewport.add(notesListContainer);
        //console.log("App launch");
    }

//    onUpdated: function() {
//        Ext.Msg.confirm(
//            "Application Update",
//            "This application has just successfully been updated to the latest version. Reload now?",
//            function(buttonId) {
//                if (buttonId === 'yes') {
//                    window.location.reload();
//                }
//            }
//        );
//    }
});
