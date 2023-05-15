function footernav() {
	const element = document.getElementById("footernav");
	var footer_begin = '<div class="footer_div">';
	
	var footer_links = '<a href="minimal-compute-page-generator.html" class="footer-link">Minimal Computing Page Maker</a>';
	footer_links += '<a href="https://www.makeuseof.com/responsive-navigation-bar-using-html-and-css/" class="footer-link" target="_blank">Responsive Navigation Bar Tutorial</a>';
	
	var footer_text = '<div style="width:100%; margin-top:22px;">This project grew from work in <div>';
	
	var footer_end = '</div>';
	
	element.innerHTML = footer_begin + footer_links + footer_text + footer_end;
}
