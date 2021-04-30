function getFlashVersion(){
	if (navigator.userAgent.indexOf("MSIE") != -1) {
		//activeX

		try 
		{
			var flash = new ActiveXObject('ShockwaveFlash.ShockwaveFlash')
			return flash.GetVariable('$version')
		} catch (e) {
			return 'None'
		}
	}
	else {
		//plugin
		return navigator.plugins['Shockwave Flash'].description
	}
}
