function topnav() {
	const element = document.getElementById("topnav");

	var header_begin = '<nav class="navbar"><!-- LOGO --><div class="logo">DH-MC-PM</div><!-- NAVIGATION MENU --><ul class="nav-links"><!-- USING CHECKBOX HACK --><input type="checkbox" id="checkbox_toggle" /><label for="checkbox_toggle" class="hamburger">&#9776;</label><!-- NAVIGATION MENUS --><div class="menu">';
	var header_links = '<li><a href="index.html">Home</a></li>'
	header_links += '<li><a href="about.html">About</a></li>';
	header_links += '<li><a href="https://www.buzzfeed.com/onesandwichshort/should-i-use-minimal-computing-for-my-digital-huma-44o63w4efn">Minimal Computing Buzzfeed Quiz</a></li>';
	header_links += '<li class="dropdown_anchor" ><a href="#">HTML Maker Pages</a><!-- DROPDOWN MENU --><ul class="dropdown"><li><a href="minimal-compute-page-generator.html">Full Maker Page</a></li><li><a href="#">Schema and OG</a></li><li><a href="#">Menu Maker</a></li></ul></li>';
/*
	header_links += '';
*/
	var header_end = '</div></ul></nav>';
	
	element.innerHTML = header_begin + header_links + header_end;
	}