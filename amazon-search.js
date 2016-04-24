javascript: 
(function() {		
	var q;
	q = "" + ((window.getSelection&&window.getSelection()) || (document.getSelection&&document.getSelection()) || (document.selection&&document.selection.createRange&&document.selection.createRange().text));
	if(q == "") {
		q = prompt("Search Amazon", "");
	}
	if(q != null) { 
		location="http://www.amazon.com/exec/obidos/external-search?keyword="+escape(q).replace(/ /g,"+");
	} else {
		location="http://www.amazon.com";
	}
})();
