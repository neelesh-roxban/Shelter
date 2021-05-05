import Desert from "./Desert";
import DragAndDrop from "./DragAndDrop";
import Snow from "./Snow";



const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    

    @property
    ID:string="Igloo";
    
    @property(Desert)
    desert:Desert=null;

    @property(Snow)
    snow:Snow=null;

    @property(cc.Vec3)
    position:cc.Vec3;
    
    @property
   public onSlot:boolean=false;
    

   

    
   
    start()
    {
        this.position=this.node.position;
    }
    onCollisionStay(other:cc.Collider,self:cc.Collider)
     {        
      this.onSlot=true;   
      var dragAndDrop=other.node.getComponent(DragAndDrop);
      if(this.desert!=null)
      {
        
        console.log(dragAndDrop.mouseUp);

       if(other.node.name==this.ID)
       { 
           
            if(dragAndDrop.mouseUp==true)
            {
            console.log("up");
            this.desert.WriteAnswer();
            console.log("correct");
            other.node.active=false;
            return;
            }  
        } 
            
            
            
         
         
       

          else 
          if(dragAndDrop.mouseUp==true)
            { 
              console.log("notcorrect");
              other.node.active=false;
              this.desert.WrongAnswer(other.node.name);             

           }
        
       
     }
     if(this.snow!=null)
     {
      if(other.node.name==this.ID)
       { 
        if(dragAndDrop.mouseUp==true)
            {
           this.snow.WriteAnswer();
            console.log("correct");
           other.node.active=false;
           return;   
            }       
         
         
       }

       else 
           { 
            if(dragAndDrop.mouseUp==true)
            {
             console.log("notcorrect");
             other.node.active=false;
             this.snow.WrongAnswer(other.node.name);       
            }      

           } 




     }
    }
    

     onCollisionExit(other:cc.Collider,self:cc.Collider)
     {
        
              
     }

    
}
