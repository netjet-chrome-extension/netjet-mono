'use strict';


import {SceEvent, SceMain, Updateable} from "@sce/plugin-typings";

export class SCEPlugin implements SceMain {
  
  private rawCode = '';
  private styledCode = '';
  public static scePlugin = true;
  public static pluginType = 'code-generator';
  public static pluginName = 'va va voom' || 'my-special-plugin';
  public code = [] as any;
  public defaultCode = 'very special cooode.';
  
  constructor() {
  
  }
  
  initialize() {
  
  }
  
  getRawGeneratedCode() {
    // return this.rawCode;
    return 'so much code right now';
  }
  
  getStyledGeneratedCode() {
    return this.styledCode;
  }
  
  onComplete(x: Updateable) {
    this.code.push('complete');
    x.updateCode();
  }
  
  onNextEvent(ev: SceEvent, x: Updateable) {
    
    // this.code.push(this.code.length);
    x.updateCode();
  }
  
}

































