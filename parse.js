window.onload=function(){
	document.getElementById('slackJson').onchange = function(event) {
	    try {
	        let files = event.target.files;
	        if (!files.length) {
	            alert('No file selected!');
	            return;
	        }
	        let file = files[0];
	        let reader = new FileReader();
	        const self = this;
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
	        reader.readAsText(file);
	    } catch (err) {
	        console.error(err);
	    }
	}
}