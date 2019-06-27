        var canvas = document.getElementById("renderCanvas"); // Get the canvas element 
        var engine = new BABYLON.Engine(canvas, true); 
        var x=true;

        var createScene1=function()
       	    {

                 var scene =new BABYLON.Scene(engine); // créer la scene
                 camera1 = new BABYLON.ArcRotateCamera("Camera",0, 0, 10, new BABYLON.Vector3(0, 0, 0), scene);// définir la caméra utiliser dans cette scene 
                 camera1.attachControl(canvas, true);

                 // ajouter la coffrage niveau1 Bjrh Tennis à notre scene "append" si tu veux rajouter des lights, couleurs, .. c'est à l'interieur de function(scene)
                 BABYLON.SceneLoader.Append("/babylonTest/", "coffrageLight.babylon", scene, function(scene){
                                             scene.clearColor = new BABYLON.Color3(1, 1, 1);// modifier la couleur de background 
                                            // var light = new BABYLON.HemisphericLight("HemiLight", new BABYLON.Vector3(4, 6, 1), scene);// ajouter de light
                                              });
                 return scene;
            };


          //};


        var createScene2 = function () 
            {
                var scene = new BABYLON.Scene(engine);
                var MyGoal = new BABYLON.Vector3(5,1,0);
                camera2 = new BABYLON.ArcRotateCamera("Camera2", 0, 0, 10, new BABYLON.Vector3(0,0,0), scene);
                camera2.attachControl(canvas, true);
                BABYLON.SceneLoader.Append("/babylonTest/", "coffrageLight.babylon", scene,function(scene){
                    scene.clearColor = new BABYLON.Color3(1, 1, 1);// modifier la couleur de background 
                    //var light = new BABYLON.HemisphericLight("HemiLight", new BABYLON.Vector3(4, 6, 1), scene);// ajouter de light
                })
                var MyCurve= MyPath(camera2.position,MyGoal);
                MoveCameraThrough(scene, camera2, MyCurve);
                return scene;
            };

        var scene1 = createScene1();
        var scene2=createScene2();

                   engine.runRenderLoop(function() {
                    console.log("hellooolo");
              if ((camera1.beta< 0.1) || (camera2.beta  <0.1))
                  {
                    camera1.beta=0.1;
                  camera2.beta=0.1;
                    }
                else if((camera1.beta >0.95*Math.PI/2) || (camera2.beta >0.95*Math.PI/2))
                {
                    camera1.beta = 0.95*Math.PI/2;
                    camera2.beta = 0.95*Math.PI/2;
                 }
                 if(x==true)
                {
                scene1.render();

                }
            else 
            {
                scene2.render();
                }
              
            });

            window.addEventListener("resize", function () {
                engine.resize();
            });


        

        