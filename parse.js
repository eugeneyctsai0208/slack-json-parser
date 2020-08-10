window.onload=function(){
	document.getElementById('slackJson').onchange = function(event) {
	    try {
	        var file = event.target.files[0];
	        var reader = new FileReader();
	        reader.readAsText(file);
	        reader.onload = (event) => {
	        	var json = JSON.parse(event.target.result);
	        	var conversation = document.getElementById('conversations');
	        	for (var i = 0; i < json.length; ++i) {
	        		if (json[i].hasOwnProperty('user_profile')) {
	        			var b = document.createElement('B');
	        			var user = document.createTextNode(json[i].user_profile.real_name + ":");
	        			b.appendChild(user);
	        			conversation.appendChild(b);
	        		}
	        		else {
		        		var b = document.createElement('B');
		        		var user = document.createTextNode(json[i].user + ":");
		        		b.appendChild(user);
	        			conversation.appendChild(b);
		        	}
		        	var p = document.createElement('P');
		        	var text = document.createTextNode(json[i].text);
		        	p.appendChild(text);
		        	conversation.appendChild(p);
		        	conversation.appendChild(document.createElement('BR'));
	        	}
	        };
	    } catch (err) {
	        console.error(err);
	    }
	}
}