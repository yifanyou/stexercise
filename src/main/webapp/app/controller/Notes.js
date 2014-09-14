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
        //Ext.viewport.setActiveItem(1);
        //Ext.viewport.setActiveIndex(1);
        Ext.Viewport.setActiveItem(1);
        var now = new Date();
        var noteId = now.getTime();
        var note = new Ext.create("NotesApp.model.Note",{
            id:noteId,
            date:now,
            title:"hi,title",
            narrative:"你好"
        });

        NotesApp.noteEditor.myForm.setRecord(note);
        console.log("onNewNoteCommand");
    },
    onEditNoteCommand:function(list, record){
        console.log("noEditNoteCommand");
    }
})