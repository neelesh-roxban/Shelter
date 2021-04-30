
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

   onWalkingEnded()
   {
       console.log("a");
       var animation=this.node.getComponent(cc.Animation);
       animation.play("StandingIdel_lev01");
   }

   wrongAnswerAnimation()
   {
       console.log("a");
       var animation=this.node.getComponent(cc.Animation);
       animation.play("WrongAnswer_01");
   }
}
