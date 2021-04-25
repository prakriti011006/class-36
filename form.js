class Form{
    constructor(){

    }
    display(){
        var title = createElement("h2")
        title.html("car racing game")
        title.posititon (130,0)
        var input = createInput("NAME")
        input.position(130,160)
        var button = createButton("PLAY")
        button.position(250,200)
        var greetings = createElemnt("h3")
        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name = input.value()
            playercount = playercount+1;
            player.update(name)
            player.setcount(playercount)
            greetings.html("welcome "+name)
            greetings.position(130,160)

        }
    
        )

    }
}