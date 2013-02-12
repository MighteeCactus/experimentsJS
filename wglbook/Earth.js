define( ["three", "sim"], function() {

    var EarthApp = function() {
        Sim.App.call(this);
    }

    EarthApp.prototype = new Sim.App();

    EarthApp.prototype.init = function(param) {
        Sim.App.prototype.init.call(this, param);

        var earth = new Earth();
        earth.init();
        this.addObject(earth);

        var sun = new Sun();
        sun.init();
        this.addObject( sun );
    }

    var Earth = function() {
        Sim.Object.call(this);
    }

    Earth.prototype = new Sim.Object();

    Earth.prototype.init = function (param) {
        var earthmap = "images/earth_surface_2048.jpg";
        var geometry = new THREE.SphereGeometry(1, 32, 32);
        var texture = new THREE.ImageUtils.loadTexture(earthmap);
        var material = new THREE.MeshPhongMaterial({ map: texture });
        var mesh = new THREE.Mesh( geometry, material );

        mesh.rotation.z = Earth.TILT;

        this.setObject3D(mesh);
    }

    Earth.prototype.update = function() {
        this.object3D.rotation.y += Earth.ROTATION_Y;
    }

    Earth.ROTATION_Y = 0.0025;
    Earth.TILT = 0.41;

    var Sun = function() {
        Sim.Object.call(this);
    }

    Sun.prototype = new Sim.Object();

    Sun.prototype.init = function() {
        var light = new THREE.PointLight( 0xffffff, 2, 100 );
        light.position.set( -10, 0, 20 );

        this.setObject3D(light);
    }


    return EarthApp;

});