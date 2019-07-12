//IMPORTS
import './vendors/Tween.js';
import './components/Gallery.js';

/*global window, document */
 document.addEventListener("DOMContentLoaded", function(event) {
    window.gallery.images.init();
 });

 // function preloader() {
 //     this.containerImg = document.querySelector('.container-images')
 // 	if (document.images) {
 //        var i = 0;
 //        for (i = 0; i <= 10; i++) {
 //            var img = "img" + i;
 //            img = new Image();
 //            img.src = "images/img_"+ i + ".jpg"
 //            console.log(img)
 //            this.containerImg.append(img)
 //        }
 //
 // 	}
 // }
 // function addLoadEvent(func) {
 // 	var oldonload = window.onload;
 // 	if (typeof window.onload != 'function') {
 // 		window.onload = func;
 // 	} else {
 // 		window.onload = function() {
 // 			if (oldonload) {
 // 				oldonload();
 //                window.gallery.images.init();
 // 			}
 // 			func();
 // 		}
 // 	}
 // }
 // addLoadEvent(preloader);
