import Desert from "./Desert";
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
    

   

    

    onCollisionEnter(other:cc.Collider,self:cc.Collider)
     {        
      if(this.desert!=null)
      {

       if(other.node.name==this.ID)
       { 
        
           this.desert.WriteAnswer();
            console.log("correct");
           other.node.active=false;
           return;          
         
         
       }

       else 
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
        
           this.snow.WriteAnswer();
            console.log("correct");
           other.node.active=false;
           return;          
         
         
       }

       else 
           { 
            console.log("notcorrect");
             other.node.active=false;
             this.snow.WrongAnswer(other.node.name);             

           } 




     }
    }
    

     onCollisionExit(other:cc.Collider,self:cc.Collider)
     {
        
              
     }

    
}
