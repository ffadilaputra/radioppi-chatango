function BrowserType(){
 this.agt=navigator.userAgent.toLowerCase();
 this.major=parseInt(navigator.appVersion);
 this.dom=(document.getElementById);
 this.ns=(document.layers);
 this.ns4up=(this.ns && this.major>=4);
 this.ns6=(this.dom&&navigator.appName=="Netscape");
 this.op=(window.opera);
 if(document.all)this.ie=1;else this.ie=0;
 this.ie4=(document.all&&!this.dom);
 this.ie4up=(this.ie&&this.major>=4);
 this.ie5=(document.all&&this.dom);
 this.ie6=(document.nodeType);
 this.sf=(this.agt.indexOf("safari")!=-1);
 this.win=((this.agt.indexOf("win")!=-1)||(this.agt.indexOf("16bit")!=-1));
 this.winme=(this.agt.indexOf("win 9x 4.90")!=-1);
 this.xpsp2=(this.agt.indexOf("sv1")!=-1);
 this.mac=(this.agt.indexOf("mac")!=-1);
}
var b_type=new BrowserType();

function selectAndCopy(obj){
	obj.select();
	if(window.clipboardData){ 
		var r = clipboardData.setData('Text', obj.value);
	}
}
