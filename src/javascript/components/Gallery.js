//IMPORTS
window.gallery = window.gallery || {};
window.gallery.images = {
    init: function () {
        'use strict';
        this.container = document.querySelector('.js-container');
        this.navigation = this.container.querySelector('.js-navigation');
        this.cursor= this.navigation.querySelector('.js-cursor');
        console.log(this.cursor)
        this.container.addEventListener('mousemove', this.cursorMove.bind(this));

    },
    cursorMove: function (event) {
        'use strict';
        this.mouseX = event.pageX;
        this.mouseY = event.pageY;
        this.animation = new TimelineMax();
        this.animation.add(
        TweenMax.to(this.cursor, 0.5, {x: this.mouseX, y: this.mouseY}));
    },
    invoke: function () {
        'use strict';
        return {
            init: this.init.bind(this),
        };
    }
}.invoke();
