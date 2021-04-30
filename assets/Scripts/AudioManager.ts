
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property({
        type : cc.AudioClip
    })
  public   audioClips:cc.AudioClip[] = [];
     
    @property
    audioID:number=null;
    
    
 
     public playAudio(name:string):number
     {  
       
         for(var i=0;i<this.audioClips.length;i++)
         {
             if(this.audioClips[i].name==name)
             {
             var index= this.audioID=cc.audioEngine.play(this.audioClips[i], false, 1);     
           return index;     
                               
             }
            
            
         }
         return
     }
     
     public test()
     {
        this.playAudio("Shelter_02");
     }
 
 
     public stopAudio()
     {
            
         for(var i=0;i<this.audioClips.length;i++)
         {        
             cc.audioEngine.stopAll();
           
            
         }
 
     }
}
