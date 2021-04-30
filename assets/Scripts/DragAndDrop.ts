


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
  
    
    onLoad()
    {  this.mouseEvents();
      cc.director.getCollisionManager().enabled=true;
      this.initialPosition=this.node.position;
    }


mouseEvents()
{
    this.node.on(cc.Node.EventType.MOUSE_DOWN, this.MouseDown,this);
    this.node.on(cc.Node.EventType.MOUSE_MOVE,this.MouseMove,this);
    this.node.on(cc.Node.EventType.MOUSE_UP,this.MouseUp,this);
    this.node.on(cc.Node.EventType.MOUSE_LEAVE,this.MouseLeave,this);
}
    
 MouseDown(event)
  {
    this.mouseDown=true;          
  }

MouseMove(event)
  {
    if(this.mouseDown==true)
         {         
            let delta =event.getDelta();
           
             
            this.node.x=this.node.x+delta.x;
            this.node.y= this.node.y+delta.y;
           
                
         }  
  }

MouseUp()
  {                         
         
         this.mouseDown=false;        
         
         
  }

MouseLeave()
  {
    this.mouseDown=false;     

  }

  public reset()
  {console.log("res");
    this.node.active=true;
    this.node.position=this.initialPosition;
   
  }

      
}
