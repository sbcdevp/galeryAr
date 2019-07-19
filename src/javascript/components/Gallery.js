//IMPORTS
import * as THREE from 'three';
import { DeviceOrientationControls } from 'three/examples/jsm/controls/DeviceOrientationControls.js';
window.gallery = window.gallery || {};
window.gallery.images = {
    init: function () {
        'use strict';
        this.container = document.querySelector('.js-container');
        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1100);
        this.controls = new DeviceOrientationControls( this.camera );
		this.scene = new THREE.Scene();
        this.initGeometry();
        this.animate();
    },
    initGeometry: function () {
        'use strict';

        this.geometry = new THREE.SphereBufferGeometry( 500, 60, 40 );
        this.geometry.scale( - 1, 1, 1 );
        this.material = new THREE.MeshBasicMaterial( {
					map: new THREE.TextureLoader().load( 'images/img_0.jpg' )
				} );
		this.mesh = new THREE.Mesh( this.geometry, this.material );
		this.helperGeometry = new THREE.BoxBufferGeometry( 100, 100, 100, 4, 4, 4 );
		this.helperMaterial = new THREE.MeshBasicMaterial( { color: 0xff00ff, wireframe: true } );
		this.helper = new THREE.Mesh( this.helperGeometry, this.helperMaterial );
        this.scene.add(this.mesh, this.helper);
        this.renderer = new THREE.WebGLRenderer( { antialias: true } );
		this.renderer.setPixelRatio( window.devicePixelRatio );
		this.renderer.setSize( window.innerWidth, window.innerHeight );
		this.container.appendChild( this.renderer.domElement );
    },
    animate: function () {
        window.requestAnimationFrame(this.animate.bind(this));
        this.controls.update();
        this.renderer.render(this.scene, this.camera)
    },
    invoke: function () {
        'use strict';
        return {
            init: this.init.bind(this)
        };
    }
}.invoke();
