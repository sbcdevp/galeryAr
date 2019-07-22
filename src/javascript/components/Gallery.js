//IMPORTS
import * as THREE from 'three';
import { DeviceOrientationControls } from 'three/examples/jsm/controls/DeviceOrientationControls.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
window.gallery = window.gallery || {};
window.gallery.images = {
    init: function () {
        'use strict';
        this.container = document.querySelector('.js-container');
        this.camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 8000);
		this.scene = new THREE.Scene();
        this.initGeometry();
        this.animate();
    },
    initGeometry: function () {
        'use strict';
        this.materials = [];
        this.helperGeometry = new THREE.BoxBufferGeometry( 120, 120, 120, 1, 4, 4 );
        this.helperMaterial = new THREE.MeshBasicMaterial( { color: 0xff00ff, wireframe: true } );
        this.helper = new THREE.Mesh( this.helperGeometry, this.helperMaterial );
        this.createVerticalCubes();
        this.createHorizontalCubes();
        this.createFaceCubes();
        this.render();
    },
    createVerticalCubes: function() {
        var modulo,
            randomPosX,
            randomPosY,
            randomPosZ,
            i;
        for (i = 0; i < 12; i++) {
            modulo = i % 2;
            randomPosX = -60 + (i * 10);
            randomPosZ = modulo === 0 ? 30 : -50;
            randomPosY = Math.round(Math.random() * 80 - 40);
            this.materials.push(this.material = new THREE.MeshBasicMaterial( {
                        map: new THREE.TextureLoader().load( 'images/img_'+ i +'.jpg', this.displayVerticalImg.bind(this, i, randomPosX, randomPosY, randomPosZ, modulo) ),
                        side: THREE.DoubleSide
                } ));
        }
    },
    displayVerticalImg: function(i, x, y, z, modulo) {
        var imgWidth = this.materials[i].map.image.width / 42,
            imgHeight = this.materials[i].map.image.height / 42,
            geometry = new THREE.PlaneGeometry( imgWidth, imgHeight, 10 );
        this.verticalCube = new THREE.Mesh( geometry, this.materials[i] );
        this.verticalCube.position.set( x, y, z + i * 3);
        if (modulo === 0) {
            this.verticalCube.rotation.y = 3.15;
            if (x > 45) {
                this.verticalCube.rotation.y = -30.5;
            } else if (x < -45) {
                this.verticalCube.rotation.y = 30.5;
            }
        }
        if (modulo === 1) {
            if (x > 45) {
                this.verticalCube.rotation.y = 30.5;
            } else if (x < -45) {
                this.verticalCube.rotation.y = -30.5;
            }
        }
        this.verticalCube.scale.set(0.8, 0.8, 0.8)
        this.scene.add(this.verticalCube, this.helper);
    },
    createHorizontalCubes: function () {
        var modulo,
            randomPosX,
            randomPosY,
            randomPosZ;
        for (var i = 12; i < 24; i++) {
            modulo = i % 2;
            randomPosX = -60 + (i * 10)- 120;
            randomPosZ = Math.round(Math.random() * 120 - 60);
            randomPosY = modulo === 0 ? 40 : -40;
            this.materials.push(this.material = new THREE.MeshBasicMaterial( {
                        map: new THREE.TextureLoader().load( 'images/img_'+ i +'.jpg', this.displayHorizontalImg.bind(this, i, randomPosX, randomPosY, randomPosZ, modulo)),
                        side: THREE.DoubleSide
                } ));
        }
    },
    displayHorizontalImg: function(i, x, y, z, modulo) {
        var imgWidth = this.materials[i].map.image.width / 42,
            imgHeight = this.materials[i].map.image.height / 42,
            geometry = new THREE.PlaneGeometry( imgWidth, imgHeight, 10 );
        this.horizontalCube = new THREE.Mesh( geometry, this.materials[i] );
        this.horizontalCube.position.set( x, y + i / 4, z);
        if (z < 0) {
            this.horizontalCube.rotation.z = 59.7;
        }
        this.horizontalCube.rotation.x = 29.85;
        this.horizontalCube.scale.set(0.8, 0.8, 0.8)
        this.scene.add(this.horizontalCube);
    },
    createFaceCubes: function () {
        var modulo,
            randomPosX,
            randomPosY,
            randomPosZ;
        for (var i = 24; i < 36; i++) {
            modulo = i % 2;
            randomPosX = modulo === 0 ? 60 : -60;
            randomPosZ = Math.round(Math.random() * 120 - 60);
            randomPosY = -60 + (i * 10) - 240;
            this.materials.push(this.material = new THREE.MeshBasicMaterial( {
                        map: new THREE.TextureLoader().load( 'images/img_'+ i +'.jpg', this.displayFaceImg.bind(this, i, randomPosX, randomPosY, randomPosZ) ),
                        side: THREE.DoubleSide
                } ));
        }
    },
    displayFaceImg: function(i, x, y, z) {
        var imgWidth = this.materials[i].map.image.width / 42,
            imgHeight = this.materials[i].map.image.height / 42;
        var geometry = new THREE.PlaneGeometry( imgWidth, imgHeight, 10 );
        this.faceCube = new THREE.Mesh( geometry, this.materials[i] );
        this.faceCube.position.set( x, y, z);
        this.faceCube.rotation.y = 29.85;
        if (x < 0) {
            this.faceCube.rotation.y = 1.6
        }
        this.faceCube.scale.set(0.8, 0.8, 0.8)
        this.scene.add(this.faceCube);
    },
    render: function () {
        this.renderer = new THREE.WebGLRenderer( { antialias: true } );
        this.controls = new OrbitControls( this.camera, this.renderer.domElement);
        this.renderer.setPixelRatio( window.devicePixelRatio );
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        this.container.appendChild( this.renderer.domElement );
        this.camera.position.set( 0, 20, 100 );
        this.controls.update();
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
