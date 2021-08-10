class Form{
    constructor(){}

    display(){
        let title = createElement('h1')
        title.html("Multiplayer Car Racing")
        title.position(130, 0)

        let input = createInput('Nickname')
        let button = createButton("Join!")
        let greeting = createElement("h3")

        input.position(130, 160)
        button.position(250, 200)
        button.mousePressed(function(){
            input.hide()
            button.hide()
            let name = input.value()
            playerCount += 1
            player.update(name)
            player.updateCount(playerCount)

            greeting.html("Hello " + name + "!")
            greeting.position(130, 160)
        })
    }
}