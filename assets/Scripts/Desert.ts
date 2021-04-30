import AudioManager from "./AudioManager"
import DragAndDrop from "./DragAndDrop"
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

   
@property(AudioManager)
audiomanager:AudioManager


@property(cc.Prefab)
text:cc.Prefab

@property(cc.Node)
character:cc.Node


@property(cc.Node)
textNode:cc.Node
@property(cc.Node)
Options:cc.Node

@property(cc.Node)
igloo:cc.Node
@property(cc.Node)
woddenHouse:cc.Node
@property(cc.Node)
Hut:cc.Node
@property(cc.Node)
Hut_cut:cc.Node
@property
i:number=0;

@property(DragAndDrop)
dragAndDropIgloo:DragAndDrop
@property(DragAndDrop)
dragAndDropWoddenHouse:DragAndDrop
@property(DragAndDrop)
dragAndDropHut:DragAndDrop




    start () 
    {    
       cc.audioEngine.stopAll();
       cc.audioEngine.uncacheAll();
       this.startLevel();     

    }


    startLevel()
    {
     
      
       var i=this.i;
       console.log(i);
          this.spawnText("Rehna is on a place which is really hot");
          this.audiomanager.playAudio("Shelter_03");  
        
          cc.audioEngine.setFinishCallback(2+i,()=>{
           
  
          this.audiomanager.playAudio("Shelter_04");
          var animation=this.textNode.getComponent(cc.Animation);
          animation.play("TextExit");
          this.spawnText("Drag the right kind of house for Rehna to stay comfortably");
               cc.audioEngine.setFinishCallback(3+i,()=>{
                    console.log("2nd audio");
                    var animation=this.textNode.getComponent(cc.Animation);
                     animation.play("TextExit");
                     this.startQuiz();
                    
             
                     });
          });    
         
    }
    startQuiz()
{
    this.Options.active=true;
    
    }

    public WriteAnswer()
{   this.audiomanager.playAudio("Shelter_05")
    this.i++;

    this.Options.active=false;
    this.Hut.active=true;
    this.Hut_cut.active=true;
    console.log("hut");
    var animation=this.character.getComponent(cc.Animation);
    animation.play("Right_Desert");  
    var ani=this.woddenHouse.getComponent(cc.Animation);
    ani.play("Wind");
    

    }

    public WrongAnswer(name)
 {
    this.audiomanager.playAudio("SFX_Wrong ans");
    this.i++;


    this.Options.active=false;
    var animation=this.character.getComponent(cc.Animation);
    animation.play("WrongAnswer_01");
    
    

    if(name=="Igloo")
    {
        
        this.audiomanager.playAudio("Shelter_06");
        this.i++;

        this.igloo.active=true;
        var animation=this.igloo.getComponent(cc.Animation);
        animation.play("Igloo_Desert");
    }

    if(name=="WoodHouse")
    {
        this.audiomanager.playAudio("Shelter_07");
        this.i++;

        this.woddenHouse.active=true;
        var animation=this.woddenHouse.getComponent(cc.Animation);
        animation.play("WoddenHouse_Desert");
    }

  } 

    tryAgain()
   {
      this.woddenHouse.active=false;
      this.igloo.active=false;
      this.Hut.active=false;
      this.i=this.i+2
      cc.audioEngine.stopAll();
      this.dragAndDropIgloo.reset();
      this.dragAndDropWoddenHouse.reset();
      this.dragAndDropHut.reset();

      this.startLevel();

    }
    next()
     {
    cc.director.loadScene("Snow")
     }
    
    spawnText(text:string)
       {
           console.log("as");
          var scene = cc.director.getScene();
          this.textNode = cc.instantiate(this.text);
          this.textNode.parent = scene;

            var lable=this.textNode.getComponent(cc.Label);
             lable.string=text;

          var animation=this.textNode.getComponent(cc.Animation);
           animation.play("TextEntry");
  
    
    }
    Exit()
    {
      cc.game.end()
    }
     
    }
