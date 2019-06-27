var engine, scene;
var camera1, camera2;
var boxMaterial;



var InitCamera= function(){
 camera1 =  new BABYLON.ArcRotateCamera("Camera",0.5, 1, 10, new BABYLON.Vector3.Zero(), scene);
 


 activeCamera="StandardCamera";
 scene.activeCamera=camera1;
 camera1.attachControl(canvas,false);
}







var CreateScene=function(){
        canvas = document.getElementById("renderCanvas"); // Get the canvas element 
        engine = new BABYLON.Engine(canvas, true); 
        scene= new BABYLON.Scene(engine);
        BABYLON.SceneLoader.Append("/babylonTest/EM/", "EM.babylon", scene,function(scene){
                    scene.clearColor = new BABYLON.Color3(0.1, 1, 1);// modifier la couleur de background 
                    
                    stairMesh = scene.getMeshByName("group_5.001");
                    boxMaterial = new BABYLON.StandardMaterial("material", scene);
                    boxMaterial.diffuseColor = new BABYLON.Color3(1,0,0);
                    stairMesh.material=boxMaterial;
                    /*
                    fan1Mesh = scene.getMeshByName("instance_2.020");
                    fan2Mesh = scene.getMeshByName("instance_2.046");
                    fan3Mesh = scene.getMeshByName("instance_2.023");
                    OriginalStairMaterial = scene.getMaterialByID("coffrage_ventilateur._0040_Peru");
                    OriginalFanMaterial=scene.getMaterialByID("coffrage_ventilateur._0132_LightGray.001")
                    boxMaterial[0] = new BABYLON.StandardMaterial("material", scene);
                    boxMaterial[1] = new BABYLON.StandardMaterial("material", scene);
                    boxMaterial[2] = new BABYLON.StandardMaterial("material", scene);
                    boxMaterial[0].diffuseColor= new BABYLON.Color3(1,0,0);
                    boxMaterial[1].diffuseColor= new BABYLON.Color3(0,1,0);
                    boxMaterial[2].diffuseColor= new BABYLON.Color3(0,0,1);
                    */

                    //var light = new BABYLON.HemisphericLight("HemiLight", new BABYLON.Vector3(4, 6, 1), scene);// ajouter de light
                })
        InitCamera();
      
        return scene
}

    var scene = CreateScene();

engine.runRenderLoop(function(){
  
        if ((camera1.beta< 0.1) || (camera2.beta<0.1))
                  {
                        camera1.beta=0.1;
                        camera2.beta=0.1;
                    }
                else if((camera1.beta >0.95*Math.PI/2) || (camera2.beta >0.95*Math.PI/2))
                {
                    camera1.beta = 0.95*Math.PI/2;
                    camera2.beta = 0.95*Math.PI/2;
                 }

    scene.render();

});

    window.addEventListener("resize", function () {

                engine.resize();

            });