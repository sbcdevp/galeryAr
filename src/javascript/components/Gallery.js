//IMPORTS
window.gallery = window.gallery || {};
window.gallery.images = {
    init: function () {
        'use strict';
        this.container = document.querySelector('.js-container');
        this.navigation = this.container.querySelector('.js-navigation');
        this.leftContainer = this.navigation.querySelector('.js-left');
        this.rightContainer = this.navigation.querySelector('.js-right');
        this.cursor = this.navigation.querySelector('.js-cursor');
        console.log(this.cursor)
        this.container.addEventListener('mousemove', this.cursorMove.bind(this));
        this.initListeners();

    },
    cursorMove: function (event) {
        'use strict';
        this.mouseX = event.pageX;
        this.mouseY = event.pageY;
        this.animation = new TimelineMax();
        this.animation.add(
        TweenMax.to(this.cursor, 0.5, {x: this.mouseX, y: this.mouseY}));
    },
    initListeners: function () {
        'use strict';
        this.leftContainer.addEventListener('mouseenter', this.displayImages.bind(this, false));
        this.leftContainer.addEventListener('click', this.changeImage.bind(this, false));
        this.rightContainer.addEventListener('mouseenter', this.displayImages.bind(this, true));
        this.rightContainer.addEventListener('click', this.changeImage.bind(this, true));
    },
    displayImages: function (sens) {
        'use strict';
        event.preventDefault();
        var i = 2;
        if (sens === true) {
         i += 1
        } else {
         i -= 1
        }
        this.cursor.style.backgroundImage = "url('../images/img_"+ i + ".jpg')";
        console.log(this.cursor)
    },
    changeImage: function (sens) {
        'use strict';
        console.log("clické", sens)
    },
    invoke: function () {
        'use strict';
        return {
            init: this.init.bind(this)
        };
    }
}.invoke();
