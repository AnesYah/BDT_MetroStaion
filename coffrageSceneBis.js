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
						console.log(this.interval);

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



 

/*

      var changeMaterial= function(obj,newMaterial)
				{
					{

						obj.material=newMaterial;

					}

				}


      var MESH1 = {

      stairBlink : function (obj,delay,box)
       {
					var Toggle=true
						setInterval(function()
							{

								if(Toggle)
									changeMaterial(obj,box);
								else
									{
										changeMaterial(obj,OriginalStairMaterial);
									}

								Toggle=!Toggle;
							}

						, delay);

					},


      stairStopBlink : function(obj,duration)
       {

      setTimeout(function()
						{
							obj.material=oldMaterial;

									clearInterval(stairBlink);
				


						},duration);

        }
        };
    //here is the use of an var object with param & methods
*/

var changeMaterial= function(obj,newMaterial)
				{
					{

						obj.material=newMaterial;

					}

				}


/*

class Meshes 
	{

		blink(){};
		stopBlink(){};



	}

class Stair extends Meshes 
	{
		constructor(stairMesh,stairOldMaterial)
			{
       			super();
       			this.stairMesh=stairMesh;
       			this.stairOldMaterial=stairOldMaterial;

      			 //this.interval=null;
      			 //this.blink=this.blink.bind(this);
     			// this.stopBlink=this.stopBlink.bind(this);
			}

    	blink(obj,delay,box,duration)
			{
    

			//var oldMaterial=obj.material;


   		 		interval=(function()
					{
						var Toggle=true
							return setInterval(function()
								{

									if(Toggle)
										changeMaterial(obj,box);
									else
										{
											changeMaterial(obj,stairOldMaterial);
										}

									Toggle=!Toggle;
								}
							, delay);
					})();

			}

		stopBlink(obj,duration)
			{
				
				setTimeout(function()
						{
							obj.material=stairOldMaterial;

									clearInterval(interval);
						},duration);
						

			}	


	}


class Fan extends Meshes 
	{
		constructor(fan1Mesh,OriginalFanMaterial)
			{
       			super();
       			this.fan1Mesh=fan1Mesh;
       			this.OriginalFanMaterial=OriginalFanMaterial;

      			// this.interval=null;
      			 this.blink=this.blink.bind(this);
     		     this.stopBlink=this.stopBlink.bind(this);
			}

    	blink(obj,delay,box,duration)
			{
				
    		
				

			//var oldMaterial=obj.material;
			

   		 		interval2=(function()
					{
						var Toggle=true
							return setInterval(function()
								{

									if(Toggle)
										this.changeMaterial(obj,box);
									else
										{
											changeMaterial(obj,OriginalFanMaterial);
										}

									Toggle=!Toggle;
								}
							, delay);
					})();
			}

		stopBlink(obj,duration)
			{
				
				setTimeout(function()
						{
							obj.material=OriginalFanMaterial;

									clearInterval(interval2);
						},duration);
						

			}	


	}

*/






$(document).ready(function() 
   {
       $("#btn0").click(function()
	    	{
	      // UseCamera1();
	     	UseCamera1();

	    	}); 

   		$("#btn1").click(function()
        	{
        		  //  var y=document.getElementsByClassName("station-group");
				//	y[0].hidden=true;
			//		x[0].hidden=false;

        		var stair = new Mesh(stairMesh,stairOldMaterial);
        		if(Toggle[0])
        			{
    			 		ToStairPos = new BABYLON.Vector3(-2.65258,2,-0.331641);
       			 		//UseCamera2();
       			 		if(activeCamera==="StandardCamera")
       			 			{
       			 				camera1.target= new BABYLON.Vector3(-4.29174, 1.10086, -0.313598); 
       			 				var MyCurve= MyPath(camera1.position,ToStairPos);
       			 				MoveCameraThrough(scene, camera1, MyCurve);
       			 				stair.blink(stairMesh,100,boxMaterial[0]);

       			 			}
       			 			if(activeCamera==="UniversalCamera")
       			 				{
       			 				camera3.target= new BABYLON.Vector3(-4.29174, 1.10086, -0.313598); 
       			 				var MyCurve= MyPath(camera3.position,ToStairPos);
       			 				MoveCameraThrough(scene, camera3, MyCurve);
       			 				stair.blink(stairMesh,100,boxMaterial[0]);
       			 			}


       			 		
        				
        		 		
                		
   					}	
   				else 
  					{

    					stair.stopBlink(stairMesh,500);
    				}
   				Toggle[0]=!Toggle[0];    
    		});


    
   		$("#btn2").click(function()
        	{
        		var fan1= new Mesh(fan1Mesh,OriginalFanMaterial)
        		if(Toggle[1])
    				{
    					ToFan1 = new BABYLON.Vector3(-5.3,1.3,0.19);
       					UseCamera2();
        				camera2.target= new BABYLON.Vector3(-4.90454,0.973809,0.19355); 
        				var MyCurve= MyPath(camera1.position,ToFan1);
        				MoveCameraThrough(scene, camera2, MyCurve);
        				fan1.blink(fan1Mesh,100,boxMaterial[2]);
    				}
    			else 
    				{
    	    			fan1.stopBlink(fan1Mesh,500);


   					}
   					Toggle[1]=!Toggle[1];

         }); 


  
	    $("#btn3").click(function()
	       {
		       	var fan2= new Mesh(fan2Mesh,OriginalFanMaterial);
		       	if(Toggle[2])
		       		{

				    	ToFan2 = new BABYLON.Vector3(-6.3,1.20,-0.8);
				        UseCamera2();
				        camera2.target= new BABYLON.Vector3(-6.2,0.861,-1.136); 
				        var MyCurve= MyPath(camera1.position,ToFan2);
				        MoveCameraThrough(scene, camera2, MyCurve);
				        fan2.blink(fan2Mesh,100,boxMaterial[1]);
			    	}
			    else 
			    	{
						fan2.stopBlink(fan2Mesh,500);
			    	}
			    Toggle[2]=!Toggle[2];

	         }); 


   
	    $("#btn4").click(function()
	       {
	       	var fan3=new Mesh(fan3Mesh,OriginalFanMaterial);
	       	if(Toggle[3])
	       		{
			    	ToFan3 = new BABYLON.Vector3(5.8,1.6,0.08);
			        UseCamera2();
			        camera2.target= new BABYLON.Vector3(5.3,1.03,0.08); 
			        var MyCurve= MyPath(camera1.position,ToFan3);
			        MoveCameraThrough(scene, camera2, MyCurve);
			        //fan3Mesh.material=boxMaterial[0];
			        fan3.blink(fan3Mesh,100,boxMaterial[0]);
		    	}
		    else
		    	{
					fan3.stopBlink(fan3Mesh,500);
	         	}

			Toggle[3]=!Toggle[3];

	         
		    });

		$("#btn5").click(function()
	       {
	       	var fan4=new Mesh(fan4Mesh,OriginalFanMaterial);
	       	if(Toggle[4])
	       		{
			    	ToFan4 = new BABYLON.Vector3(6.6,1.6,0.5);
			        UseCamera2();
			        camera2.target= new BABYLON.Vector3(6.08,1.03,1.05); 
			        var MyCurve= MyPath(camera1.position,ToFan4);
			        MoveCameraThrough(scene, camera2, MyCurve);
			        //fan4Mesh.material=boxMaterial[0];
			        fan4.blink(fan4Mesh,100,boxMaterial[2]);
		    	}
		    else
		    	{
					fan4.stopBlink(fan4Mesh,500);
	         	}

			Toggle[4]=!Toggle[4];

	         
		    });

		 $("#btn8").click(function()
	    	{
	    		if( activeCamera==="UniversalCamera")
	    			{
	    				activeCamera="StandardCamera";
	    				camera3.detachControl(canvas);		
	    				scene.activeCamera=camera1;
	    				camera1.attachControl(canvas, false);
	    			}

	    	});

		 $("#btn9").click(function()
	    	{
	    			if( activeCamera==="StandardCamera")
	    			{
	    				activeCamera="UniversalCamera";
	    				camera1.detachControl(canvas);		
	    				scene.activeCamera=camera3;
	    				camera3.attachControl(canvas, false);
	    			}
	    			camera3.setTarget(new BABYLON.Vector3.Zero());
	  

	    	});



	   

});

/*
function blink (obj,delay,box)
{
	var changeMaterial= function(obj,newMaterial)
		{
			{

				obj.material=newMaterial;

			}

		}

	oldMaterial=obj.material;


    interval=(function()
	{
 
		var Toggle=true
		return setInterval(function()
		{

			if(Toggle)
			changeMaterial(obj,box);
			else
			{
				changeMaterial(obj,OriginalStairMaterial);
			}

			Toggle=!Toggle;
		}

	, delay);

	})();

}
*/
	


//initialiser les caméras
var InitCamera= function(){
 camera1 =  new BABYLON.ArcRotateCamera("camera",0, 0, 10, new BABYLON.Vector3.Zero(), scene);
 camera3 = new BABYLON.UniversalCamera("camera",new BABYLON.Vector3(0,10,0),scene);
 camera2 =  new BABYLON.ArcRotateCamera("Camera",0, 0, 10, new BABYLON.Vector3.Zero(), scene);
 camera2.minZ=.01;

 activeCamera="StandardCamera";
 scene.activeCamera=camera1;
 camera1.attachControl(canvas,false);
}


var UseCamera1=function(){

    if(activeCamera==="UniversalCamera"){
        scene.beginAnimation(camera3, 200, 0, false);
    }

   if (activeCamera==="StandardCamera")
   	        scene.beginAnimation(camera1, 200, 0, false);

   // stairMesh.material=OriginalStairMaterial;
   // fan1Mesh.material=OriginalFanMaterial;
  //  fan2Mesh.material=OriginalFanMaterial;


    }



var UseCamera2=function(){

    if(activeCamera==="StandardCamera"){
    activeCamera="SecondCamera";
    camera1.detachControl(canvas);
    }
    scene.activeCamera=camera2;
    //camera2.target= new BABYLON.Vector3();
    camera2.attachControl(canvas, false);
    

    }







//---------------------------------------------------------------------------------------------------------------------------------------------------------//

var CreateScene=function(){
        canvas = document.getElementById("renderCanvas"); // Get the canvas element 
        engine = new BABYLON.Engine(canvas, true); 
        scene= new BABYLON.Scene(engine);
        BABYLON.SceneLoader.Append("/babylonTest/", "coffrage_ventilateur.babylon", scene,function(scene){
                    scene.clearColor = new BABYLON.Color3(1, 1, 1);// modifier la couleur de background 
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
