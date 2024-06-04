const EventEmitter = require('events');
const emitter = new EventEmitter();

//register emitter 
emitter.on("messageLog", function(args){
    console.log("shape dragged on positions: ", args);
})

emitter.emit("messageLog", { "x":23 , "y":-23});