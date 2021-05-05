import Slot from "./Slot";



const {ccclass, property} = cc._decorator;


@ccclass
export default class NewClass extends cc.Component {

    

    @property
    mouseUp:boolean=false;
    @property
    mouseDown:boolean=false;
    @property
    Id:string="";
    
    @property
    initialPosition:cc.Vec3

    @property(Slot)
    slot:Slot
  
    
    onLoad()
    
    { 
       this.mouseEvents();
      cc.director.getCollisionManager().enabled=true;
      this.initialPosition=this.node.position;
    }




mouseEvents()
{    cc.macro.ENABLE_MULTI_TOUCH = false;
    this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart,this);
    this.node.on(cc.Node.EventType.TOUCH_MOVE,this.touchMove,this);
    this.node.on(cc.Node.EventType.TOUCH_END,this.touchEnd,this);
    this.node.on(cc.Node.EventType.TOUCH_CANCEL,this.touchCancel,this);
}
    
touchStart(event)
  { 
    this.mouseDown=true;   
    this.mouseUp=false;       
  }

  touchMove(event)
  {
    if(this.mouseDown==true)
         {         
            let delta =event.getDelta();
           
             
            this.node.x=this.node.x+delta.x;
            this.node.y= this.node.y+delta.y;
           
                
         }  
  }

  touchEnd()
  {                         
         
         this.mouseDown=false; 
         this.mouseUp=true;
         if(this.slot.onSlot==false)
          {
           this.node.position=this.initialPosition;
          }  
              
         
         
  }

  touchCancel()
  {
    this.mouseDown=false;
    

  }

  public reset()
  { 
    console.log("res");
    this.node.active=true;
    this.node.position=this.initialPosition;
   
  }

      
}
