javascript: 
(function() {		
	var q;
	q = "" + ((window.getSelection&&window.getSelection()) || (document.getSelection&&document.getSelection()) || (document.selection&&document.selection.createRange&&document.selection.createRange().text));
	if(q == "") {
		q = prompt("Search P5 Reference", "");
	}
	if(q != "") { 
		location="http://p5js.org/reference/#/p5/" + escape(q).replace(/ /g,"+");
	} else {
		location="http://p5js.org/reference/";
	}
})();
