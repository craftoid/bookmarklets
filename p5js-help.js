javascript: 
(function() {		
	var q;
	q = "" +  ((window.ace&&ace.getSession&&ace.getSession().doc.getTextRange(ace.selection.getRange())) ||  (window.getSelection&&window.getSelection()) || (document.getSelection&&document.getSelection()) || (document.selection&&document.selection.createRange&&document.selection.createRange().text))
	if(q == "") {
		q = prompt("Search P5 Reference", "");
	}
	if(q != "") { 
		location.assign("http://p5js.org/reference/#/p5/" + escape(q).replace(/ /g,"+"));
	} else {
		location.assign("http://p5js.org/reference/");
	}
})();


