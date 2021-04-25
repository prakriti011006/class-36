class Player{

    constructor(){

    }
    getcount(){
       var playerref = database.ref('playercount');
       playerref.on("value",function(data){
           playercount = data.val()
       })
    }
    setcount(count){
database.ref('/').update({
    playercount : count
})
    }
    update(name){
        var playerindex = 'player'+playercount;
        database.ref(playerindex).set({
            name:name
        })
    }
}