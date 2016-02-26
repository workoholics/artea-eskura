angular
	.module('scgallery')
	.service('theproject', theproject);

theproject.$inject = ['$injector'];
function theproject($injector){
	var theproject = {
		title: 'Proiektua',
		html: '<p>SC Gallery - Artea zure eskura honi esker, tokiko eta nazioarteko artista plastiko garaikideen lanak arakatu ditzakezu, Euskal Herrian erakusketaren bat eta jardueraren bat egin badute.</p><p>Panorama artistikoko egungo joerentzako erakusleihoa, arte independentera gerturatzen gaitu, batez ere street art, graffiti, ilustrazio eta grafikaren eszenako artista garaikideen artera. </p><p>Proiektu honi esker, obrarekin elkarreragin daiteke, artistak erakusketa ingurutik kanpo duen jarduerara gerturatu, edukiarekin jolas egin eta adierazpen plastikoak areago ezagutu, ikusmenaren eta ukimenaren bidez. Artearekin topo egiteko aukera, zure eskuen bidez.</p>'
	}

	return theproject;
};