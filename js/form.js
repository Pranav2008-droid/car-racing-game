class Form{
    constructor(){

    }

    display(){
        var title = createElement('h1');
        title.html('car racing game');
        title.position(width / 2, 60);

        var input = createInput('name');
        var button = createButton('play')
        var greet = createElement('h3');
        input.position(width/ 2, height / 2)
        button.position(width / 2, height - (height / 4));
        button.mousePressed(function() {
            input.hide();
            button.hide();
            var name = input.value();
            playerCount +=  1;
            player.update(name);
            player.updateCount(playerCount);

            greet.html("Hello" + name + " ");
            greet.position(width / 2, height / 2);
        });
    }



}