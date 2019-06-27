var camera1;
var camera2;
var camera3;
var scene;
var canvas;
var engine;
var activeCamera;
var boxMaterial=[];
var stairMesh;
var fan1Mesh
var fan2Mesh;
var fan3Mesh;
var OriginalStairMaterial;
var ToStairPos;
var Toggle = [true, true, true, true, true];

var interval, interval2;

var changeMaterial= function(obj,newMaterial)
				{
					{

						obj.material=newMaterial;

					}

				}

function Mesh(name,material)
	{

		this.name=name;
		this.material=material;
		this.interval=null;
		this.blink=this.blink.bind(this);
		this.stopBlink=this.stopBlink.bind(this);
	}


Mesh.prototype.blink = function(obj,delay,box,duration) 
	{
		var material=this.material;
		

				this.interval=(function()
						{
							var Toggle=true
								return setInterval(function()
									{

										if(Toggle)
											changeMaterial(obj,box);
										else
											{
												changeMaterial(obj,material);
											}

										Toggle=!Toggle;
									}
								, delay);
						})();

	}


Mesh.prototype.stopBlink=function(obj,duration)
	{
		var material=this.material;
		var self = this;

		setTimeout(function()
							{
								obj.material=material;
								clearInterval(self.interval);
							},duration);
	}


var InitCamera= function()
	{
 		camera1 =  new BABYLON.ArcRotateCamera("Camera",0, 0, 10, new BABYLON.Vector3.Zero(), scene);
 		camera2 =  new BABYLON.ArcRotateCamera("Camera",0, 0, 10, new BABYLON.Vector3.Zero(), scene);
 		camera2.minZ=.01;

 		activeCamera="StandardCamera";
 		scene.activeCamera=camera1;
 		camera1.attachControl(canvas,false);
	}

var UseCamera1=function()
	{

	    if(activeCamera==="SecondCamera")
	    	{
	        	scene.beginAnimation(camera2, 200, 0, false);
	        	activeCamera="StandardCamera";
	        	camera2.detachControl(canvas);
	    	}
	    		scene.activeCamera=camera1;
	    		camera1.attachControl(canvas, false);
	   // stairMesh.material=OriginalStairMaterial;
	   // fan1Mesh.material=OriginalFanMaterial;
	  //  fan2Mesh.material=OriginalFanMaterial;
    }


var UseCamera2=function()
	{
	    if(activeCamera==="StandardCamera"){
	    activeCamera="SecondCamera";
	    camera1.detachControl(canvas);
	    }
	    scene.activeCamera=camera2;
	    //camera2.target= new BABYLON.Vector3();
	    camera2.attachControl(canvas, false);
    }



var CreateScene=function()
	{
        canvas = document.getElementById("renderCanvas"); // Get the canvas element 
        engine = new BABYLON.Engine(canvas, true); 
        scene= new BABYLON.Scene(engine);
        BABYLON.SceneLoader.Append("/babylonTest/station_BDT/", "station.babylon", scene,function(scene){
                    scene.clearColor = new BABYLON.Color3(1, 1, 1);// modifier la couleur de background 
                    /*
                    stairMesh = scene.getMeshByName("group_75");
                    fan1Mesh = scene.getMeshByName("instance_2.020");
                    fan2Mesh = scene.getMeshByName("instance_2.046");
                    fan3Mesh = scene.getMeshByName("instance_2.041");
                    fan4Mesh = scene.getMeshByName("instance_3.023");
                    //OriginalStairMaterial = scene.getMaterialByID("coffrage_ventilateur._0040_Peru");
                    stairOldMaterial=stairMesh.material;
                    //OriginalFanMaterial=scene.getMaterialByID("coffrage_ventilateur._0132_LightGray.001")
                    OriginalFanMaterial=fan1Mesh.material;
                    boxMaterial[0] = new BABYLON.StandardMaterial("material", scene);
                    boxMaterial[1] = new BABYLON.StandardMaterial("material", scene);
                    boxMaterial[2] = new BABYLON.StandardMaterial("material", scene);
                    boxMaterial[0].diffuseColor= new BABYLON.Color3.Red();
                    boxMaterial[0].specularColor= new BABYLON.Color3.Black();

                    boxMaterial[1].diffuseColor= new BABYLON.Color3.Green();
                    boxMaterial[1].specularColor= new BABYLON.Color3.Black();

                    boxMaterial[2].diffuseColor= new BABYLON.Color3.Blue();
                    boxMaterial[2].specularColor=new BABYLON.Color3.Black();
                    */

                    var light = new BABYLON.HemisphericLight("HemiLight", new BABYLON.Vector3(4, 6, 1), scene);// ajouter de light
                })
        InitCamera();
      
        return scene
	}




var scene = CreateScene();


engine.runRenderLoop(function()
	{
  
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



window.addEventListener("resize", function () 
	{
		engine.resize();
	});
