var camera1;
var camera2;
var camera3;
var scene;
var canvas;
var engine;
var activeCamera;
var boxMaterial=[];
var dp=[];
//var ToEM1;
var Toggle = [true, true, true, true, true];
var interval, interval2;

var direction=0;
var stairMaterial;
var ang = 0;
var angSpeed = .003;
var smallStep=[];
var bigStep=[];
var niv=[];
var niv0,niv1,niv2;
var compteur=false;
var clickedPosition= new BABYLON.Vector3.Zero();
var escalierMecanique;
var cameraOffset=1.1643;




/*
$(document).ready(function() 
   {
      
        $("#btn1").click(function()
            {
                ToStairPos = new BABYLON.Vector3(-2.65258,2,-0.331641);
                UseCamera2();
                camera2.target= new BABYLON.Vector3(-4.29174, 1.10086, -0.313598); 
                var MyCurve= MyPath(camera1.position,ToStairPos);
                MoveCameraThrough(scene, camera2, MyCurve);
                //stair.blink(stairMesh,100,boxMaterial[0]);               
            });

    
        $("#btn2").click(function()
            {
                ToFan1 = new BABYLON.Vector3(-5.3,1.3,0.19);
                UseCamera2();
                camera2.target= new BABYLON.Vector3(-4.90454,0.973809,0.19355); 
                var MyCurve= MyPath(camera1.position,ToFan1);
                MoveCameraThrough(scene, camera2, MyCurve);
            }); 


  
        $("#btn3").click(function()
           {
                ToFan2 = new BABYLON.Vector3(-6.3,1.20,-0.8);
                UseCamera2();
                camera2.target= new BABYLON.Vector3(-6.2,0.861,-1.136); 
                var MyCurve= MyPath(camera1.position,ToFan2);
                MoveCameraThrough(scene, camera2, MyCurve);
                //fan2.blink(fan2Mesh,100,boxMaterial[1]);
            }); 

  
        $("#btn4").click(function()
           {               
                ToFan3 = new BABYLON.Vector3(5.8,1.6,0.08);
                UseCamera2();
                camera2.target= new BABYLON.Vector3(5.3,1.03,0.08); 
                var MyCurve= MyPath(camera1.position,ToFan3);
                MoveCameraThrough(scene, camera2, MyCurve);
                //fan3Mesh.material=boxMaterial[0];
               // fan3.blink(fan3Mesh,100,boxMaterial[0]); 
            });


        $("#btn5").click(function()
           {
                ToFan4 = new BABYLON.Vector3(6.6,1.6,0.5);
                UseCamera2();
                camera2.target= new BABYLON.Vector3(6.08,1.03,1.05); 
                var MyCurve= MyPath(camera1.position,ToFan4);
                MoveCameraThrough(scene, camera2, MyCurve);
                //fan4Mesh.material=boxMaterial[0];
                //fan4.blink(fan4Mesh,100,boxMaterial[2]);         
            });


        $("#btn0").click(function()
            {
          // UseCamera1();
            UseCamera1();

            }); 

});
*/


//var dP; // pour différencier à dp 

//pour contrôler invisibilité 

var hide = function(node, from, to) {
    BABYLON.Animation.CreateAndStartAnimation("hide", node, "visibility", 30, 30, from, to, 0)
}

var show = function(node, from, to) {
    BABYLON.Animation.CreateAndStartAnimation("hide", node, "visibility", 30, 30, to, from, 0)
}

var UniCam =function()
	{ 
		if( activeCamera==="StandardCamera")
	    			{
	    				activeCamera="UniversalCamera";
	    				camera1.detachControl(canvas);		
	    				scene.activeCamera=camera2;
	    				camera2.attachControl(canvas, false);
	    			}

                    camera2.position = camera1.position.clone();
                    camera2.setTarget(camera1.getTarget().clone());
	}

var ArcCam= function()
	{
		if( activeCamera==="UniversalCamera")
			{
				activeCamera="StandardCamera";
				camera2.detachControl(canvas);		
				scene.activeCamera=camera1;
				camera1.attachControl(canvas, false);

			}
            camera1.position = camera2.position.clone();
            camera1.setTarget(camera2.getTarget().clone());

	}


$(document).ready(function() 
   {
       $("#btn0").click(function() 
       		{
       			UseCamera1();
                compteur=false;
       		})
       $("#btn1").click(function() 
       		{
       			if(activeCamera==="StandardCamera")
		            {
		               // camera1.setTarget (new BABYLON.Vector3(-5.72051, 1.254, 0.64568)); //EM1 position
                        //let ToEM1 = new BABYLON.Vector3(-4.2,1,0.6); // to see EM1                                                  à charger
                       // camera1.setTarget (new BABYLON.Vector3(-5.02894,0.90570, 0.73034));// emergency button position 
                       var target = new BABYLON.Vector3(escalierMecanique.position.x,escalierMecanique.position.y,escalierMecanique.position.z);
                       camera1.setTarget(target);
                       let ToEM1 = new BABYLON.Vector3(escalierMecanique.position.x+cameraOffset*Math.cos(-escalierMecanique.rotation.y),escalierMecanique.position.y ,escalierMecanique.position.z+cameraOffset*Math.sin(-escalierMecanique.rotation.y)); // camera position to see emergency button
                        let MyCurve= MyPath(camera1.position,ToEM1);
                        MoveCameraThrough(scene, camera1, MyCurve, false);
                        /*
                        niv0Set.forEach(mesh=>
                            {
                                hide(mesh);
                            }) 
                        
                        niv1Set.forEach(mesh=>
                            {
                                hide(mesh);
                            }) 
                            */
                    if(!compteur)
                       {
                           niv2Set.forEach(mesh=>
                                {
                                    hide(mesh,1,0.2);
                                })
                           compteur=true;
                        }
                       /*
                        niv3Set.forEach(mesh=>
                            {
                                hide(mesh);
                            }) 
                            */

		                

              		
                               
                       
                              
		            }
       		})
       $("#btn2").click(function() 
           {
                if(activeCamera==="StandardCamera")
                        {
                            camera1.setTarget (new BABYLON.Vector3(-5.72051, 1.254, 0.92568)); // EM2 position
                            let ToEM2 = new BABYLON.Vector3(-4.2,1,1.1); // to see EM2
                           // camera1.setTarget (new BABYLON.Vector3(-5.02894,0.90570, 0.82784)); // emergency button position
                          //  let ToEM2 = new BABYLON.Vector3(-4.84679, 1.0 ,0.97525); // camera position to see emergency button
                            let MyCurve= MyPath(camera1.position,ToEM2);
                            MoveCameraThrough(scene, camera1, MyCurve, false);
                            if(!compteur)
                            {
                                niv2Set.forEach(mesh=>
                                    {
                                        hide(mesh,1,0.2);
                                    })
                                compteur=true;
                            }
                        }

           })
       $("#btn3").click(function() 
           {
              if(activeCamera==="StandardCamera")
                        {
                            camera1.setTarget (new BABYLON.Vector3(5.76483, 1.249576, 1.36558)); // EM3 position
                            let ToEM3 = new BABYLON.Vector3(3.4624,1.3,1.7); // to see EM3
                            //camera1.setTarget (new BABYLON.Vector3(4.45554,1.01576,1.10003)); // emergency button position
                            //let ToEM3 = new BABYLON.Vector3(4.22819,0.90002,1.50356); // camera position to see emergency button
                            let MyCurve= MyPath(camera1.position,ToEM3);
                            MoveCameraThrough(scene, camera1, MyCurve, false);
                            if(!compteur)
                            {
                               niv2Set.forEach(mesh=>
                                {
                                    hide(mesh,1,0.1);
                                })
                                niv3Set.forEach(mesh=>
                                {
                                    hide(mesh,1,0.1);
                                })
                                compteur=true;
                            }
                            else
                            {
                                niv3Set.forEach(mesh=>
                                {
                                    hide(mesh,1,0.1);
                                })

                            }
                            
                        }

           })
       $("#btn4").click(function() 
            {
                if(activeCamera==="StandardCamera")
                        {
                            camera1.setTarget (new BABYLON.Vector3(5.76483, 1.249576, 0.263288)); // EM4 position
                            let ToEM4 = new BABYLON.Vector3(3.4624,1.3,-0.2); //to see EM4
                            //camera1.setTarget (new BABYLON.Vector3(4.45554,1.01576,0.43794));
                            //let ToEM4 = new BABYLON.Vector3(4.22819,0.90002,0.03356);
                            let MyCurve= MyPath(camera1.position,ToEM4);
                            MoveCameraThrough(scene, camera1, MyCurve, false);
                            if(!compteur)
                            {
                               niv2Set.forEach(mesh=>
                                {
                                    hide(mesh,1,0.1);
                                })
                                niv3Set.forEach(mesh=>
                                {
                                    hide(mesh,1,0.1);
                                })
                                compteur=true;
                            }
                            else
                            {
                                niv3Set.forEach(mesh=>
                                {
                                    hide(mesh,1,0.1);
                                })

                            }
                           
                        }



            })
       $("#btn5").click(function() {})
       $("#btn6").click(function() {
        direction=1;
       })

      	$("#btn7").click(function() {
            direction=-1;
        })
      	$("#btn8").click(function() 
      		{
      			ArcCam();

      		})
      	$("#btn9").click(function() 
	      	{
	      		UniCam();
	      		


	      	})

        var togggle=false;
        $("#btn10").click(function() 
            {
                if(!togggle)
                {

                let redButtonGoal=new BABYLON.Vector3(0,0,-10);
                let MyRedButtonPath=new MyPath(redButton.position,redButtonGoal);
                MoveButton(scene,redButton,MyRedButtonPath,true);
                redButtonMesh.blink(500, YellowBox, RedBox);
            }
            else if(togggle)
            {
                let redButtonGoal=new BABYLON.Vector3(0,0,-10);
                let MyRedButtonPath=new MyPath(redButtonGoal,redButton.position);
                MoveButton(scene,redButton,MyRedButtonPath,false);
                redButtonMesh.stopBlink(1000, RedBox);

            }
            togggle=!togggle;

            })
      })

function MoveButton(scene,button,myCurve,repeat)
    {
        const path3d=new BABYLON.Path3D(myCurve.getPoints());
        const frameRate= 801;
        const animationPosition=new BABYLON.Animation('AnimPos','position',frameRate, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE)
        const keys=[];
        for(let p=0;p<myCurve.getPoints().length;p++)
        {
            keys.push({
                frame: p,
                value: myCurve.getPoints()[p]
            });
        }
        animationPosition.setKeys(keys);
        button.animations=[animationPosition];
        scene.beginAnimation(button,0,400,repeat);


    }  				

/*
    oaJsApi.dpConnect("EM.EM1:_original.._value",true,
    	{ 
    		success: function(data)
    		 {
    		 	dP=data.value;
    		 	if(dP=='false')
    		 		{
    		 			UseCamera1();
    		 				for(var i=1;i<3;i++)
                    	{
                    		niv[i].setEnabled(true);
                    	}
    		 		}
    		 		else if(dP=='true')
    		 			{
    		 				
    		 				ToEM1 = new BABYLON.Vector3(-4.33515,1,0.76714);
                    		UseCamera2();
                    		camera2.target= new BABYLON.Vector3(-5.67287, 2, 0.82697); 
                    		var MyCurve= MyPath(camera1.position,ToEM1);
                  			MoveCameraThrough(scene, camera2, MyCurve);
                  			for(var i=1;i<3;i++)
                    	{
                    		niv[i].setEnabled(false);
                    	}
    		 			}
               
    		 }




    	}) //Wincc
*/

var changeMaterial= function(obj,newMaterial)
                {
                    {

                        obj.material=newMaterial;

                    }

                }


function Mesh(obj)
    {
        this._obj=obj;
        //this._material=material;
        this.interval=null;
    }


Mesh.prototype.blink = function(delay, YellowBox, RedBox) 
    {        

        this.interval=(()=>
            {
                var Toggle=true;
                    return setInterval(()=>
                        {

                            if(Toggle)
                            {
                    
                               // changeMaterial(this._obj,box);
                                this._obj.material.emissiveColor=YellowBox;
                            }
                            else
                                {
                                    //changeMaterial(this._obj,this._material);
                                    this._obj.material.emissiveColor=RedBox;

                                }

                            Toggle=!Toggle;
                        }
                    , delay);
            })();

    }


Mesh.prototype.stopBlink=function(duration)
    {
        setTimeout(()=>
                        {
                            this._obj.material.emissiveColor = BABYLON.Color3.Black();
                            clearInterval(this.interval);
                        },duration);
    }



function stair(numSteps,stepWidth,stepHeight,stepDepth,stepYrotation, escalierPosition)
	{
		this.numSteps=numSteps;
		this.stepWidth=stepWidth;
		this.stepHeight=stepHeight;
		this.stepDepth=stepDepth;
        this.escalierPosition=escalierPosition;
		var step=BABYLON.MeshBuilder.CreateBox('', {width:this.stepWidth, height:this.stepHeight, depth:this.stepDepth}, scene);
		step.material=stairMaterial;
		var stepss=[];
        var stairs = new BABYLON.TransformNode('stairs', scene);
       // stairs.position=escalierPosition;
        console.log(stairs.position);

		for(var i = 0; i < numSteps; i++)
			{
                var inst = step.createInstance('step'+i);
                inst.parent = stairs;
               // stairs.rotation.y = stepYrotation;
                stepss.push(inst);
			}
		//hide step
        step.isVisible=false;

        
        
        var angBetween = (Math.PI*2)/this.numSteps;
        var distY = this.numSteps*this.stepHeight*.18;
        var distZ = this.numSteps*this.stepDepth*.15;
        var minAng = Math.PI*.27;
        var maxAng = Math.PI*1.73;

		this.stepss=stepss;
        this.angBetween=angBetween;
        this.distY=distY;
        this.distZ=distZ;
        this.minAng=minAng;
        this.maxAng=maxAng;
	} // EM



stair.prototype.DynStair=function(dir,stairYposition,stairXposition,stairZposition,stairYrotation,stairOrientation) 
	{   
			ang += angSpeed;
			for(var i = 0; i < this.numSteps; i++)
		    	{
            		 
                    var step=this.stepss[i];
                	var a = (ang + this.angBetween*i)%(Math.PI*2);
                    	if(a > this.minAng && a < this.maxAng)
                       		{
                            	if(a > (this.minAng + (this.maxAng - this.minAng)*.5))
                                    {
                                        a = this.maxAng;
                                    }
                                        else
                                            {
                                                a = this.minAng;
                                            }
                        	}
		                            
		                        	
            	    step.position.y = stairOrientation*Math.cos(a)*Math.sin(a)*this.distY*dir+stairYposition;
	                step.position.x = Math.sin(a)*this.distZ*dir+stairXposition;
	                step.position.z=stairZposition;
	                step.rotation.y=stairYrotation;
            	}

			                        



	}// animer EM






/*
oaJsApi.dpConnect("stair.:_original.._value",true,
    {

    	success: function(data) 
            {
                dp[0] = data.value;
                var stair = new Stair(stairMesh,stairOldMaterial);

                if(dp[0] == 1)
                    stair.stopBlink(stairMesh,500);
                        else if(dp[0] == 2)
                            {
        		                ToStairPos = new BABYLON.Vector3(-2.65258,2,-0.331641);
                                UseCamera2();
                                camera2.target= new BABYLON.Vector3(-4.29174, 1.10086, -0.313598); 
                                var MyCurve= MyPath(camera1.position,ToStairPos);
                                MoveCameraThrough(scene, camera2, MyCurve);
                                stair.blink(stairMesh,100,boxMaterial[0]);
                            }
            }
    });

oaJsApi.dpConnect("fan1.:_original.._value",true,
    {

        success: function(data) 
            {
                dp[1] = data.value;
                var fan1= new Fan(fan1Mesh,OriginalFanMaterial);

                if(dp[1] == 1)
                    fan1.stopBlink(fan1Mesh,500);
                        else if(dp[1] == 2)
                            {
                                ToFan1 = new BABYLON.Vector3(-5.3,1.3,0.19);
                                UseCamera2();
                                camera2.target= new BABYLON.Vector3(-4.90454,0.973809,0.19355); 
                                var MyCurve= MyPath(camera1.position,ToFan1);
                                MoveCameraThrough(scene, camera2, MyCurve);
                                fan1.blink(fan1Mesh,100,boxMaterial[2]);

                            }
            }
    });

oaJsApi.dpConnect("fan2.:_original.._value",true,
    {

        success: function(data) 
            {
                dp[2] = data.value;
                var fan2= new Fan(fan2Mesh,OriginalFanMaterial);

                if(dp[2] == 1)
                    fan2.stopBlink(fan2Mesh,500);
                        else if(dp[2] == 2)
                            {
             	                ToFan2 = new BABYLON.Vector3(-6.3,1.20,-0.8);
                                UseCamera2();
                                camera2.target= new BABYLON.Vector3(-6.2,0.861,-1.136); 
                                var MyCurve= MyPath(camera1.position,ToFan2);
                                MoveCameraThrough(scene, camera2, MyCurve);
                                fan2.blink(fan2Mesh,100,boxMaterial[1]);
                            }
            }
    });


oaJsApi.dpConnect("fan3.:_original.._value",true,
    {

        success: function(data) 
            {
                dp[3] = data.value;
                var fan3=new Fan(fan3Mesh,OriginalFanMaterial);

                    if(dp[3] == 1)
                        fan3.stopBlink(fan3Mesh,500);
                            else if(dp[3] == 2)
                                {
                                    ToFan3 = new BABYLON.Vector3(5.8,1.6,0.08);
                                    UseCamera2();
                                    camera2.target= new BABYLON.Vector3(5.3,1.03,0.08); 
                                    var MyCurve= MyPath(camera1.position,ToFan3);
                                    MoveCameraThrough(scene, camera2, MyCurve);
                                    fan3.blink(fan3Mesh,100,boxMaterial[0]);

                                }
            }
    });

oaJsApi.dpConnect("fan4.:_original.._value",true,
    {

        success: function(data) 
            {
                dp[4] = data.value;
                var fan4=new Fan(fan4Mesh,OriginalFanMaterial);

                    if(dp[4] == 1)
                        fan4.stopBlink(fan4Mesh,500);
                            else if(dp[4] == 2)
                                {
                                    ToFan4 = new BABYLON.Vector3(6.6,1.6,0.5);
                                    UseCamera2();
                                    camera2.target= new BABYLON.Vector3(6.08,1.03,1.05); 
                                    var MyCurve= MyPath(camera1.position,ToFan4);
                                    MoveCameraThrough(scene, camera2, MyCurve);
                                    fan4.blink(fan4Mesh,100,boxMaterial[2]);

                                }
            }
    });
 */






var InitCamera= function()
	{
		camera1 =  new BABYLON.ArcRotateCamera("Camera",0, 0, 10, new BABYLON.Vector3.Zero(), scene);
		camera2 = new BABYLON.UniversalCamera("Camera", new BABYLON.Vector3(0,10,0),scene);
		camera2.minZ=.01;
		camera1.minZ=.01;
        camera1.wheelPrecision = 200;
        camera2.wheelPrecision = 200;



		 activeCamera="StandardCamera";
		 scene.activeCamera=camera1;
		 camera1.attachControl(canvas,false);
	}


var UseCamera1=function()
    {
   		if (activeCamera==="StandardCamera")
	   		{
                camera1.setTarget(new BABYLON.Vector3.Zero());
                var ToBegining = new BABYLON.Vector3(0,15,-3);
                var MyCurve= MyPath(camera1.position,ToBegining);
                MoveCameraThrough(scene, camera1, MyCurve);

             

                         niv2Set.forEach(mesh=>
                            {
                                show(mesh,1,0);
                            })
                        niv3Set.forEach(mesh=>
                            {
                                show(mesh,1,0);
                            })  
	   		}
	   		

   		 
    }



var CreateScene=function()
	{
        canvas = document.getElementById("renderCanvas"); // Get the canvas element 
        engine = new BABYLON.Engine(canvas, true); 
        scene= new BABYLON.Scene(engine);

        InitCamera();

        BABYLON.SceneLoader.Append("/babylonTest/station_BDT/", "station2.babylon",scene,function(scene)
        	{
             
                   stairMaterial=scene.getMaterialByID("station2.Metal_Steel_Textured_White");
                   

                    escalierMecanique = scene.getMeshByID("EscalierMecanique1");
                    var escalierMecaniquePosition= escalierMecanique.position;
                    niv[0]=scene.getMeshByID("SketchUp.009");
                    niv0=niv[0].getChildMeshes();
                   
                    niv0Set=new Array();
                    niv0.forEach(mesh=>
                                {
                                    if(mesh.sourceMesh == undefined) 
                                        {
                                            niv0Set.push(mesh);
                                        }         
                                });
                    

                    // call level 1 with separate meshes
                    niv[1]=scene.getMeshByID("SketchUp");
                    niv1=niv[1].getChildMeshes();
                    
                    niv1Set = new Array();
                    niv1.forEach(mesh=>
                                {
                                    if(mesh.sourceMesh == undefined) 
                                        {
                                            niv1Set.push(mesh);
                                        }         
                                });
                    
                    // call level 2 with separate meshes
                    niv[2]=scene.getMeshByID("SketchUp.001");
                    niv2=niv[2].getChildMeshes();
                    
                    niv2Set = new Array();
                    niv2.forEach(mesh=>
                                {
                                    if(mesh.sourceMesh == undefined)
                                        {
                                            niv2Set.push(mesh);
                                        }
                                
                                });
                    

                    // call level 3 with separate meshes
                    niv[3]=scene.getMeshByID("SketchUp.002");
                    niv3=niv[3].getChildMeshes();
                    
                    niv3Set = new Array();
                    niv3.forEach(mesh=>
                                {
                                    if(mesh.sourceMesh == undefined)
                                        {
                                            niv3Set.push(mesh);
                                        }
                                
                                });
                    

                    redButton = scene.getMeshByID("RedButton.001");
                    redButtonMaterial = new BABYLON.StandardMaterial("material", scene);
                    redButtonMaterial.diffuseColor = new BABYLON.Color3.Red();
                    redButton.material = redButtonMaterial
                 
             
                   

                    RedBisBox = new BABYLON.Color3(0.1,0,0);
                    RedBox = new BABYLON.Color3.Red();
              





                    //smallStep[1] = new stair(90,.2,.05,.07);
                    smallStep[0] = new stair(90,.2,.05,.07,Math.PI,escalierMecaniquePosition);                
                   // bigStep[0] = new stair(140,.4,.06,.1);
                  //  bigStep[1] = new stair(140,.4,.06,.1);
                    smallStep[0].DynStair(-1,escalierMecanique.position.y,escalierMecanique.position.x,escalierMecanique.position.z,Math.PI/2,-1);               //EM niveau2 --gauche 
                   // smallStep[1].DynStair(-1,1.1,-5.7,0.93,Math.PI/2,-1);          //EM niveau2  --droite
                 //   bigStep[0].DynStair(-1,1.5,6,1.325,Math.PI/2,1);                  //EM niveau3   --gauche
                 //   bigStep[1].DynStair(-1,1.5,6,0.25,Math.PI/2,1); 

                    redButtonMesh=new Mesh(redButton);
                  
                    

                    scene.clearColor = new BABYLON.Color3(.1, 1, 1);// modifier la couleur de background 




            })
        
      				var light = new BABYLON.HemisphericLight("HemiLight", new BABYLON.Vector3(4, 6, 1), scene);// ajouter de light





                    

       				return scene
	}

    var scene = CreateScene();

/*
	scene.registerBeforeRender(function(){

    document.getElementById('btn1').onclick=function(){
    if (camera2.position.x.toFixed(7)==ToStairPos.x && camera2.position.y.toFixed(7)==ToStairPos.y && camera2.position.z.toFixed(7)==ToStairPos.z)
        {
         //camera2.setTarget(new BABYLON.Vector3(-4.21221,1.11102,-0.311767)); // it changes the raduis !
        //camera2.rotation=new BABYLON.Vector3(-792.494*Math.PI/180,270.524*Math.PI/180,180.564*Math.PI/180);
        //camera2.rotation.x=Math.PI/6;
         MyMesh.material=boxMaterial;


        // camera2.radius=10;
    
        };
    
    };
    


});
*/

scene.registerBeforeRender(function()
	{
		if(direction!=0)
			{
			  	//smallStep[0].DynStair(direction,1.1,-5.7,0.68,Math.PI/2,-1);
                smallStep[0].DynStair(direction,escalierMecanique.position.y,escalierMecanique.position.x,escalierMecanique.position.z,Math.PI/2,-1);
			  	smallStep[1].DynStair(-direction,1.1,-5.7,0.93,Math.PI/2,-1);
                bigStep[0].DynStair(direction,1.5,6,1.36,Math.PI/2,1);               //EM niveau3   --gauche
                bigStep[1].DynStair(direction,1.5,6,0.25,Math.PI/2,1); 
			}

               scene.onPointerDown = function (evt, pickResult) {
                                // if the click hits the ground object, we change the impact position
                                if (pickResult.hit) {
                                    clickedPosition.x = pickResult.pickedPoint.x;
                                    clickedPosition.y = pickResult.pickedPoint.y;
                                    clickedPosition.z = pickResult.pickedPoint.z;
                                    camera1.setTarget(clickedPosition);
                                }
                            };


	})
    

engine.runRenderLoop(function()
    {
        /*
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
                */

    	scene.render();



	});

    window.addEventListener("resize", function () {

                engine.resize();


            });


///hhhhhhhhhhhhhhhhhhhhhhhhhah











