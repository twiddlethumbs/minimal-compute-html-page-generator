function footernav() {
	const element = document.getElementById("footernav");
	var footer_begin = '<div class="footer_div">';
	
	var footer_text = '<div style="width:100%; margin-bottom:22px;">Top navigation customized from https://github.com/obscuredetour/simply-nav<div>';
	
	var footer_links = '<a href="#" class="footer-link">test</a>';
	footer_links += '<a href="https://www.makeuseof.com/responsive-navigation-bar-using-html-and-css/" class="footer-link" target="_blank">Responsive Navigation Bar Tutorial</a>';
	
	var footer_end = '</div>';
	
	element.innerHTML = footer_begin + footer_text + footer_links + footer_end;
}