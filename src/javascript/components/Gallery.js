//IMPORTS
window.gallery = window.gallery || {};
window.gallery.images = {
    init: function () {
        'use strict';
        this.container = document.querySelector('.js-container');
        this.navigation = this.container.querySelector('.js-navigation');
        this.nameContainer = this.container.querySelector('.js-names');
        this.leftContainer = this.navigation.querySelector('.js-left');
        this.rightContainer = this.navigation.querySelector('.js-right');
        this.cursor = this.container.querySelector('.js-cursor');
        this.images = this.container.querySelectorAll('.container-images img');
        this.imageName = this.container.querySelector('.js-image-name')
        this.indexLength = this.images.length;
        this.index = 0;
        this.images[0].classList.add('active');
        this.initListeners();

    },
    cursorMove: function (event) {
        'use strict';
        this.mouseX = event.pageX;
        this.mouseY = event.pageY;
        this.animation = new TimelineMax();
        this.animation.add(
        TweenMax.to(this.cursor, 1, {x: this.mouseX, y: this.mouseY}));
    },
    initListeners: function () {
        'use strict';
        this.container.addEventListener('mousemove', this.cursorMove.bind(this));
        this.nameContainer.addEventListener('mouseenter', this.nameHover.bind(this));
        this.nameContainer.addEventListener('mouseleave', this.nameHover.bind(this));
        this.leftContainer.addEventListener('mousemove', this.nextCursor.bind(this, false));
        this.leftContainer.addEventListener('click', this.displayImages.bind(this, false));
        this.rightContainer.addEventListener('mousemove', this.nextCursor.bind(this, true));
        this.rightContainer.addEventListener('click', this.displayImages.bind(this, true));
        this.clicked = false;
    },
    nameHover: function (event) {
        'use strict';
        if (event.type === 'mouseenter') {
            this.cursor.classList.add('hidden');
            this.container.style.cursor = '';
        } else {
            this.cursor.classList.remove('hidden');
        }

    },
    displayImages: function (sens) {
        'use strict';
        this.newIndex = sens ? this.index + 1 : this.index - 1;
        this.yMove = sens ? "20" : '-20'
        if (this.newIndex < 0) {
          this.newIndex = this.indexLength - 1;
        }
        if (this.newIndex === this.indexLength) {
          this.newIndex = 0
        }
        this.images[this.newIndex].getAttribute('data-name');
        // console.log(this.images[newIndex].getAttribute('data-name'));
        var timeline = new TimelineMax();
        if (this.clicked === false) {
            this.clicked = true;
            console.log('event fired')
            this.animation.add(
            TweenMax.to(this.imageName, 0.2, {y: this.yMove, opacity: 0}))
            .add(
            TweenMax.to(this.imageName, 0.1, {y: -this.yMove, opacity: 0, onComplete: this.changeName.bind(this, sens)}))
            .add(
            TweenMax.to(this.imageName, 0.5, {y: 0, opacity: 1}));
        }

        console.log('cfez');
    },
    changeName: function (sens) {
        'use strict';
        this.clicked = false;
        this.images[this.index].classList.remove("active");
        this.images[this.newIndex].classList.add("active");
        this.index = this.newIndex;
        this.imageName.innerHTML = this.images[this.newIndex].getAttribute('data-name');
        this.nextCursor(sens);
    },
    nextCursor: function (sens) {
        'use strict';
        var indexCursor = sens ? this.index + 1 : this.index - 1;
        this.nextImage = indexCursor;
        if (indexCursor < 0) {
          this.nextImage = this.indexLength - 1;
        }
        if (indexCursor === this.indexLength) {
          this.nextImage = 0;
        }
        this.cursor.style.backgroundImage = "url('../images/img_"+ this.nextImage + ".jpg')";
    },
    invoke: function () {
        'use strict';
        return {
            init: this.init.bind(this)
        };
    }
}.invoke();
