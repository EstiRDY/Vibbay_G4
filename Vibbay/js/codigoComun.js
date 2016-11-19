/* Inserta en la página el footer diseñado */
function callFooter() {
	document.write('<footer class=\"page-footer\">');
	document.write('<div class=\"container\">');
	document.write('<div class=\"row\">');
	document.write('<div class=\"col s12 l6\">');
	document.write('<h5 class=\"white-text\">¿Quiénes somos?</h5>');
	document.write('<p class=\"grey-text text-lighten-4\">Una aplicación de compraventa de artículos por medio de subastas hecha por estudiantes de ingeniería informática. Esperamos sacar muy buena nota. No es broma :).</p>');
	document.write('</div>');
	document.write('<ul class=\"col s6 l3\">');
	document.write('<li><i class=\"material-icons\">mail</i><a href=\"mailto:soporte@vibbay.es\"> soporte@vibbay.es</a></li>');
	document.write('<br>');
	document.write('<li><i class=\"material-icons\">code</i> github/loquesea</li>');
	document.write('</ul>');
	document.write('<ul class=\"col s6 l3\">');
	document.write('<li><i class=\"material-icons\">mail</i> soporte@vibbay.es</li>');
	document.write('<br>');
	document.write('<li><i class=\"material-icons\">mail</i> cosas</li>');
	document.write('</ul>');
	document.write('</div>');

	document.write('<div class=\"col l4 offset-12 s12\">');
	document.write('<h5 class=\"white-text\">Mapa del sitio</h5>');
	document.write('<ul>');
	document.write('<li><a class=\"grey-text text-lighten-3\" href=\"#!\">F.A.Q.</a></li>');
	document.write('<li><a class=\"grey-text text-lighten-3\" href=\"#!\">Ayuda</a></li>');
	document.write('<li><a class=\"grey-text text-lighten-3\" href=\"#!\">Noséqué</a></li>');
	document.write('<li><a class=\"grey-text text-lighten-3\" href=\"#!\">Nosecuantos</a></li>');
	document.write('</ul>');
	document.write('</div>');
	document.write('</div>');

	document.write('<div class=\"footer-copyright\">');
	document.write('<div class=\"container\">© 2016 ADSI - UPV/EHU </div> </div> </footer>')
}

/* Inserta en la página el NavBar correspondiente */
function callNavBar() {
	document.write('<nav>');
	document.write('<div class=\"nav-wrapper\">');
	document.write('<a href=\"#!\" class=\"brand-logo\">Vibbay</a>');
	document.write('<a href=\"#\" data-activates=\"mobile-demo\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a>');
	document.write('<ul class=\"right hide-on-med-and-down\">');
	document.write('<li><a href=\"#!\">Tienda</a></li>');
	document.write('<li><a href=\"#!\">Ayuda</a></li>');
	document.write('<li><a href=\"#!\">Registro</a></li>');
	document.write('<li><a class=\"waves-effect waves-light btn\">Login</a></li>');
	document.write('</ul>');
	document.write('<ul class=\"side-nav\" id=\"mobile-demo\">');
	document.write('<li><a href=\"#!\">Sass</a></li>');
	document.write('<li><a href=\"#!\">Components</a></li>');
	document.write('<li><a href=\"#!\">Javascript</a></li>');
	document.write('<li><a href=\"#!\">Mobile</a></li>');
	document.write('</ul>');
	document.write('</div>');
	document.write('</nav>');
}