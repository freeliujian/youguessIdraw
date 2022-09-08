import {
  Application,

} from "pixi.js";

class YouGuessIDraw {
  state: any
  constructor(props:any){
    this.state = {

    }
    this.init();
  }

  init(){
    console.log(Application);
  }
};

const youguessidraw = new YouGuessIDraw({});
youguessidraw;