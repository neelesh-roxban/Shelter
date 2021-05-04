import AudioManager from "./AudioManager"


const {ccclass, property} = cc._decorator;
declare var require: any
@ccclass
export default class NewClass extends cc.Component {


@property(cc.Node)
character01:cc.Node=null;


@property(AudioManager)
audiomanager:AudioManager


@property(cc.Prefab)
text:cc.Prefab


@property(cc.Node)
textNode:cc.Node




    start ()
    {      
      
        this.Play();    
      
    }

   

     Play()
    {           
        var character01Animation=this.character01.getComponent(cc.Animation);
        character01Animation.play("Walking_Lev01");
        this.rollIntroText();      
              
       
    }
    
    rollIntroText()
      {
        this.spawnText("Meet Rehna,an adventurous 12 Year Old,Rehna is on a journey around the workd.");
        var i=this.audiomanager.playAudio("Shelter_01");         
        cc.audioEngine.setFinishCallback(i,()=>{

        i=this.audiomanager.playAudio("Shelter_02");
        var animation=this.textNode.getComponent(cc.Animation);
        animation.play("TextExit");
        this.spawnText("She needs a place to stay while she travels.Help her find the appropriate shelter.");
             cc.audioEngine.setFinishCallback(i,()=>{
               
                  var animation=this.textNode.getComponent(cc.Animation);
                   animation.play("TextExit");
                   cc.director.loadScene("Desert");

           
                   });
        });    

      }
  
    spawnText(text:string)
    {
     
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
