setEE = null
var setEventElement = function (element) { setEE = element; return setEE; }

var event = function (nameEvent, functionName, eventElement=setEE) {
	eventElement.addEventListener(nameEvent, functionName)
}

var css = function (name, up = null) {
	if(up !== null) style.name = up
	return style.name
}