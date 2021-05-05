import Slot from "./Slot";



const {ccclass, property} = cc._decorator;


@ccclass
export default class NewClass extends cc.Component {

    

    @property
    mouseUp:boolean=false;
    @property
    mouseDown:boolean=false;
    @property
    touchcount:number=0;
    @property
    Id:string="";
    
    @property
    initialPosition:cc.Vec3

    @property(Slot)
    slot:Slot

    @property
    dragging:boolean=false;
  
    
    onLoad()
    
    { 
       this.mouseEvents();
      cc.director.getCollisionManager().enabled=true;
      this.initialPosition=this.node.position;
    }




mouseEvents()
{ 
    this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart,this);
    this.node.on(cc.Node.EventType.TOUCH_MOVE,this.touchMove,this);
    this.node.on(cc.Node.EventType.TOUCH_END,this.touchEnd,this);
    this.node.on(cc.Node.EventType.TOUCH_CANCEL,this.touchCancel,this);
}
    
touchStart(event)
  { if(this.slot.touchCount==0)
    {
      this.slot.touchCount=1;
    }
    else
    {
      this.slot.touchCount++;
    }
    
    
    this.mouseDown=true;   
    this.mouseUp=false;      
    console.log(this.slot.touchCount);
    //console.log(event.touch);
  }

  touchMove(event)
  { 
    
    if(this.mouseDown==true&&(this.slot.touchCount==1||this.dragging))
         {  
            this.dragging=true;     
            let delta =event.getDelta();          
             
            this.node.x=this.node.x+delta.x;
            this.node.y= this.node.y+delta.y;
           
                
         }  
         
         
  }

  touchEnd()
  {      
         this.dragging=false;                    
         this.slot.touchCount--;
         console.log(this.slot.touchCount);
         
         this.mouseDown=false; 
         this.mouseUp=true;
         if(this.slot.onSlot==false)
          {
           console.log("reset");
           this.node.position=this.initialPosition;
           
          }  
              
         
         
  }

  touchCancel()
  {
    this.slot.touchCount--;
    this.mouseDown=false;
    

  }

  public reset()
  { 
    this.dragging=false;                    
    this.slot.touchCount=0;
    this.slot.onSlot=false;
    console.log("res");
    this.node.active=true;
    this.node.position=this.initialPosition;
   
  }

      
}
