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
treeHouse:cc.Node
@property(cc.Node)
BoatHouse:cc.Node

@property(cc.Node)
iglooCut:cc.Node

@property
i:number=0;

@property(DragAndDrop)
dragAndDropIgloo:DragAndDrop
@property(DragAndDrop)
dragAndDropTreeHouse:DragAndDrop
@property(DragAndDrop)
dragAndDropBoatHouse:DragAndDrop




    start () 
    {    
       cc.audioEngine.stopAll();
       cc.audioEngine.uncacheAll();
       this.startLevel();     

    }


    startLevel()
    {
     
      
         var i=this.i;
         console.log("i==========="+i);
          this.spawnText("Brr.Rehna is in a bery cold region near the Arctic.She sure is adventurous");
          this.audiomanager.playAudio("Shelter_08");  
        
          cc.audioEngine.setFinishCallback(5+i,()=>{
           
  
          this.audiomanager.playAudio("Shelter_09");
          var animation=this.textNode.getComponent(cc.Animation);
          animation.play("TextExit");
          this.spawnText("Help her find a nice house to survive the extreme cold");
               cc.audioEngine.setFinishCallback(6+i,()=>{
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
{   this.audiomanager.playAudio("Shelter_010")
    this.i++;

    this.Options.active=false;
    this.igloo.active=true;
    this.iglooCut.active=true;
    
    
    var animation=this.character.getComponent(cc.Animation);
    animation.play("WriteAnswer_Snow");  
    console.log("animate");
   
    

    }

    public WrongAnswer(name)
 {
    this.audiomanager.playAudio("SFX_Wrong ans");
    this.i++;


    this.Options.active=false;
    var animation=this.character.getComponent(cc.Animation);
    animation.play("Wrong_Snow");
    
    

    if(name=="TreeHouse")
    {
        
        this.audiomanager.playAudio("Shelter_011");
        this.i++;
        console.log("ASASASAS"+this.i);

        this.treeHouse.active=true;
      
    }

    if(name=="BoatHouse")
    {
        this.audiomanager.playAudio("Shelter_012");
        this.i++;
        console.log("ASASASAS"+this.i);

        this.BoatHouse.active=true;
       
    }

  } 

    tryAgain()
   {
      this.treeHouse.active=false;
      this.igloo.active=false;
      this.BoatHouse.active=false;
      this.i=this.i+2;
      cc.audioEngine.stopAll();
      this.dragAndDropIgloo.reset();
      this.dragAndDropTreeHouse.reset();
      this.dragAndDropBoatHouse.reset();

      this.startLevel();

    }
    next()
     {   cc.audioEngine.stopAll();
         cc.audioEngine.uncacheAll();
         cc.director.loadScene("Intro");
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
    { cc.audioEngine.stopAll();
      cc.audioEngine.uncacheAll();
      cc.game.end()
    }
     
    }
