/**
 * Created by Administrator on 14-9-11.
 */
Ext.define("NotesApp.controller.Notes",{
    extend:"Ext.app.Controller",
    lanuch:function(){
        this.callParent(arguments);
        Ext.getStore("Notes").load();
        console.log("launch");
    },
    init:function(){
        this.callParent(arguments);
        console.log("init");
    },
    config:{
        refs:{
            //newNoteBtn:"#new-note-btn"
            noteslistcontainer:"noteslistcontainer"
        },
        control:{
//            newNoteBtn:{
//                tap:"onNewNote"
//            }
            noteslistcontainer:{
                newNoteCommand:"onNewNoteCommand",
                editNoteCommand:"onEditNoteCommand"
            }
        }
    },
//    onNewNote:function(){
//        console.log("onNewNote");
//    }
    onNewNoteCommand:function(){
        console.log("onNewNoteCommand");
    },
    onEditNoteCommand:function(list, record){
        console.log("noEditNoteCommand");
    }
})