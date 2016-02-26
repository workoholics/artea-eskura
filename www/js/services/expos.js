angular
	.module('scgallery')
	.service('expos', expos);

expos.$inject = ['$injector'];
function expos($injector){
	var expolist = {
		btoy:{
			className : 'btoy',
			headerTitle : 'Beautiful transgressions | BTOY',
			category:{
				es: 'Exposición individual en SC Gallery, Bilbao',
				eu: 'Banako erakusketa SC Galleryn, Bilbo',
			},
			name: 'Beautiful transgressions',
			artist: 'Btoy',
			date: {
				es: '15.12.2012 - 28.02.2013',
				eu: '2012.12.15 - 2013.02.28'
			},
			description:{
				es: '<p>SC Gallery , inauguró Beautiful transgressions, exposición de la artista catalana Btoy, el 11 de Diciembre de 2012.</p><p>Beautiful transgressions explora retratos de la personalidad de mujeres visionarias durante el s. XX y XXI que han puesto en tela de juicio las costumbres, estereotipos o leyes establecidas.</p><p>Diferentes puntos de vista se han ido desarrollando con el paso del tiempo, pero desde el polémico “El Segundo Sexo”, Simone de Beauvoir reinicia y actualiza la lucha de la igualdad de géneros.</p><p>Desde activistas sociales, pintoras, actrices o cantantes han ido impulsando por la pasión,  por la capacidad de  aspirar e imaginar lo que  todavía no existía o a lo que actualmente cuestionan como atentado a la igualdad de género en la sociedad actual.</p><p>Desde  las históricas como La Pasionaria, Marlene Dietrich o Simone de Beauvoir, hasta las contemporáneas como Susan Sontag,  Kiki Smith o Pussy Riot…</p>',
				eu: '<p>SC Galleryk Beautiful transgressions inauguratu zuen, Btoy artista katalanaren erakusketa, 2012ko abenduaren 11n.</p><p>Beautiful transgressionsek emakume irudikorren nortasunaren argazkiak arakatzen ditu. XX. eta XXI. mendeetako emakumeak dira eta ezarritako ohiturak, estereotipoak edo legeak zalantzan jarri dituzte guztiek.</p><p>Ikuspuntu desberdinak garatu dira denboran zehar, baina "Bigarren sexua" polemikoaren ondoren Simone Beauviorrek berriro hasi eta eguneratu zuen genero-berdintasunaren aldeko borroka.</p><p>Gizarte-aktibista, margolari, aktore edo abeslari emakumezkoek grinaren, nahi izateko eta irudikatzeko gaitasunaren bidez sustatu dute ez zegoena edo gaur egun zalantzan jartzen dena, egungo gizartean genero-berdintasunaren aurkako atentatua dena.</p><p>La Pasionaria, Marlene Dietrich edo Simone de Beauvoir bezalako historikoekin hasi eta Susan Sontag,  Kiki Smith, Pussy Riot… bezalako garaikideetara arte.</p>'
			},
			video:{
				title: {
					es: 'Making-of video',
					eu: 'Making-of video'
				},
				url: 'http://player.vimeo.com/video/56239392',
			},
			slider:{
				title: {
					es: 'Exposición',
					eu: 'Erakusketa'
				},
				slides:[
					'img/btoy_expo1.jpg',
					'img/btoy_expo2.jpg',
					'img/btoy_expo3.jpg',
					'img/btoy_expo4.jpg',
					'img/btoy_expo5.jpg',
					'img/btoy_expo6.jpg'
				]
			},
			socialLinks:[
				{
					image: 'img/flickr.svg',
					url: 'https://www.flickr.com/photos/btoy/'
				}
			],
			bio: {
				img: 'img/btoy_bio.jpg',
				html:{
					es:'<p>La artista barcelonesa Andrea Michelsson a.k.a. Btoy utiliza lo que se podría llamar un “mur trouvé” con sus superficies irregulares, sumando restos de polución y anuncios, donde puertas y ventanas tapiadas se convierten en los marcos idóneos para la propia expresión de su obra. Paredes y medianeras buscadas y encontradas se convierten en un soporte ideal para difundir su obra.</p><p>Sus personajes se detienen y clavan en nosotros su mirada, y nos hacen reflexionar sobre el paso del tiempo. Su obra se caracteriza por la intertextualidad. Retratos con una fuerte carga nostálgica, son sacudidos con pinceladas llenas de fuerza y color. Paletas de colores raptan a las evocadoras fotografías en blanco y negro. Salen a resurgir en sus obras los preceptos de la posmodernidad; ecléctica, efímera, fruto de la pérdida de la cohesión social.</p><p>Ha expuesto su obra en diferentes ciudades como París, Milan, Varsovia, Los Angeles o Jakarta. En Londres, además de exponer en ‘Pictures On Walls’, ha participado en diversos live paintings como el ‘Cans Festival’, donde colaboró con el artista Banksy.</p>',
					eu: '<p>Andrea Michelsson a.k.a. Btoy bartzelonar artistak "mur trouvé" dei genezakeena erabiltzen du bere azalera irregularrekin, poluzio eta iragarki zatiak gehituaz; itsututako ateak eta leihoak bere obra adierazteko marko apartak dira. Bilatutako eta aurkitutako hormak eta mehelinak bere obrarentzako euskarri bikainak dira.</p><p>Bere pertsonaiak geratu egiten dira, begirada iltzatzen digute eta denboraren iraganaz hausnartzera garamatzate. Testuartekotasuna da bere lanaren ezaugarria. Karga nostalgiko handiko erretratuak, indarrez eta kolorez betetako pintzelkadaz astinduak. Koloreek lapurtu egiten dituzte zuri-beltzeko argazki oroitarazleak. Posmodernitatearen prezeptuak nabari dira bere obran: eklektikoa, efimeroa, gizarte-kohesioa galdu izanaren ondorioa.</p><p>Hainbat hiritan egin ditu erakusketak: Paris, Milan, Varsovia, Los Angeles edo Jakartan. Londonen "Pictures On Walls"-en erakusketa egiteaz gain, "Cans Festival" bezalako live paintingsetan hartu du parte, eta Bansky artistarekin lankidetzan aritu da.</p>'
				},
			},
			slider2:{
				title:{
					es: 'Intervención urbana',
					eu: 'Hiri-esku hartzea'
				},
				slides:[
					'img/btoy_calle1.jpg',
					'img/btoy_calle2.jpg',
					'img/btoy_calle3.jpg',
					'img/btoy_calle4.jpg'
				]
			}
		},
		vinz:{
			className : 'vinz',
			headerTitle : 'Market – VINZ',
			category : {
				es: 'Exposición individual en SC Gallery, Bilbao',
				eu: 'Banako erakusketa SC Galleryn, Bilbo'
			},
			name: 'Market',
			artist: 'Vinz',
			date:{
				es: '08.03.2013 - 09.05.2013',
				eu: '2013.03.08 - 2013.05.09'
			},
			description:{
				es: '<p>SC GALLERY inauguró Market, obra del artista Vinz (Valencia 1979), el 8 de marzo de 2013.</p><p>Esta exposición muestra una selección de trabajos individuales (fotografía, pintura, collage e instalaciones) fruto de la reflexión del sistema actual del mercado.</p><p>El artista Vinz también presentó su libro ‘Feel Free’ y estuvo firmando ejemplares.</p>',
				eu: '<p>SC GALLERYk 2013ko martxoaren 8an inauguratu zuen Market, Vinz artistaren (Valentzia, 1979) obra.</p><p>Erakusketa honetako banako lanak (argazkiak, pintura, collagea eta instalazioak) egungo merkatu-sistemari buruzko hausnarketaren ondorioak dira.</p><p>Vinz artistak "Feel Free" liburua aurkeztu zuen eta nahi zuenari sinatu ere egin zion.</p>'
			},
			video:{
				title: {
					es: 'Making-of video',
					eu: 'Making-of video'
				},
				url: 'https://player.vimeo.com/video/62242475'
			},
			slider:{
				title: {
					es: 'Exposición',
					eu: 'Erakusketa'
				},
				slides:[
					'img/vinz_expo1.jpg',
					'img/vinz_expo2.jpg',
					'img/vinz_expo3.jpg',
					'img/vinz_expo4.jpg',
					'img/vinz_expo5.jpg'
				]
			},
			slider2:{
				title:{
					es: 'Intervención urbana. Bilbao La Vieja, 2013',
					eu: 'Hiri-esku hartzea Bilbo Zaharra, 2013'
				},
				slides:[
					'img/vinz_calle1.jpg',
					'img/vinz_calle2.jpg',
					'img/vinz_calle3.jpg',
					'img/vinz_calle4.jpg'
				]
			}
		},
		hoppek:{
			className : 'hoppek',
			headerTitle: 'Don´t believe a word i say',
			category: {
				es: 'Exposición individual en SC Gallery, Bilbao',
				eu: 'Exposición individual en SC Gallery, Bilbo'
			},
			date: {
				es: '10.05.2013 - 05.07.2013',
				eu: '2013.05.10 - 2013.07.05'
			},
			name: 'Don´t believe a word i say',
			artist: 'Boris Hoppek',
			description: {
				es: '<p>El espacio expositivo SC Gallery cumplió su quinto aniversario, presentando por primera vez en País Vasco, el proyecto que Boris Hoppek (Kreuztal, Alemania, 1970) realizó bajo el titulo Don’t believe a word i say!.</p><p>La inauguración tuvo lugar el 10 de Mayo y la exposición duró hasta el 5 Julio de 2013.</p>',
				eu: '<p>SC Galleryk bost urte bete zituen eta Euskal Herrian lehenengoz aurkeztu zuen Boris Hoppekek (Kreuztal, Alemania, 1970) egindako Don’t believe a word i say! proiektua.</p><p>Maiatzaren 10ean inauguratu zen eta 2013ko uztailaren 5era arte egon zen.</p>'
			},
			socialLinks: [
				{
					icon: 'ion-earth',
					url: 'http://www.borishoppek.de'
				}
			],
			video:{
				title:{
					es: 'Making-of video',
					eu: 'Making-of video'
				},
				url: 'https://player.vimeo.com/video/68386687'
			},
			bio: {
				img: 'img/hoppek_bio.jpg',
				html:{
					es: '<p>Boris Hoppek (1970) es un artista alemán afincado en Barcelona. A principios de la década de 1990 encabezó la introducción de elementos figurativos en la escena del graffiti. Desde entonces ha descontextualizado continuamente figuras iconográficas y las ha llevado a un nivel de abstracción que le permite abordar temas políticos explícitos como la inmigración, el racismo, la violencia y la sexualidad. Este interés también domina su obra fotográfica, que es pornografía con un toque peculiar, en la que las mujeres siempre se encuentran un paso de ser tratadas totalmente como objetos.</p><p>Boris Hoppek puede ser tan agradable como un niño bien educado o tan rotundo y descarado como un golpe de karate en el cuello.</p><p>Su obra se encuentra entre la inocencia perversa de los dibujos infantiles que hiciesen niños que vivieran en un campo de refugiados y el nihilismo de un adulto que supiera demasiado acerca de todo como para creer en algo en particular.</p><p>La obra está formada por una selección de trabajos individuales (fotografía, dibujo e instalaciones). El artista realizó también una serie de intervenciones en el espacio público de la ciudad de Bilbao.</p>',
					eu: '<p>Boris Hoppek (1970) Bartzelonan bizi den artista alemaniarra da. 1990eko hamarkada hasieran graffitietan elementu figuratiboak sartzen hasi zen. Orduz geroztik irudi ikonografikoak testuingurutik atera ditu etengabe eta abstrakzio maila batera eraman ditu, gai politiko esplizituak tratatu ahal izateko, adibidez, immigrazioa, arrazakeria, indarkeria eta sexualitatea. Interes hau bera nagusitzen da bere argazkietan ere, ukitu berezi bat duen pornografia da eta emakumeak objektu bezala tratatzetik urrats batera daude beti.</p><p>Boris Hoppek ongi hezitako haur bat bezain atsegina edo lepoan emandako karate zartada bat bezain gogorra eta lotsagabea izan daiteke.</p><p>Errefuxiatu eremu batean bizi ziren haurrek egindako marrazkien inozentzia maltzurraren eta zerbaitengan sinesteko gauza guztiei buruz gehiegi dakien heldu baten nihilismoaren artean daude bere lanak.</p><p>Obran banako lanak daude (argazkiak, marrazkiak eta instalazioak). Bilboko espazio publikoan ere egin zituen esku-hartze batzuk artistak.</p>'
				},
			},
			slider:{
				title: {
					es: 'Exposición',
					eu: 'Erakusketa'
				},
				slides:[
					'img/hoppek_expo1.jpg',
					'img/hoppek_expo2.jpg',
					'img/hoppek_expo3.jpg',
					'img/hoppek_expo4.jpg'
				]
			},
			slider2:{
				title:{
					es: 'Intervenciones urbanas',
					eu: 'Hiri-esku hartzeak'
				},
				slides:[
					'img/hoppek_calle1.jpg',
					'img/hoppek_calle2.jpg',
					'img/hoppek_calle3.jpg',
					'img/hoppek_calle4.jpg'
				]
			}
		},
		grudziecki:{
			className: 'grudziecki',
			headerTitle: 'Sea forts - MICHAEL GRUDZIECKI',
			category:{
				es: 'Exposición individual en SC Gallery, Bilbao',
				eu: 'Banako erakusketa SC Galleryn, Bilbo'
			},
			date:{
				es: '03.10.2013 - 12.12.2013',
				eu: '2013.10.03 - 2013.12.12'
			},
			name: 'Sea forts',
			artist: 'Michael Grudziecki',
			description:{
				es: '<p>SC Gallery, inauguró Sea forts, exposición del artista polaco Michael Grudziecki el 3 de octubre de 2013.</p><p>Michael Grudziecki regala con su pintura un pequeño e interesante viaje a través del tiempo. Con la muestra “Sea Forts” nos traslada de la tierra al mar.</p><p>Durante su estancia en la ciudad, realizó también una obra mural en una fachada de Bilbao La Vieja, en la calle Iturburu nº 7, trasera del edificio de Bilbao Arte. Esta fachada se inauguró el 27 de septiembre de 2013, durante el festival BLVart.</p>',
				eu: '<p>SC Galleryk Sea forts inauguratu zuen 2013ko urriaren 3an, Michael Grudziecki artista poloniarraren erakusketa.</p><p>Michael Grudzieckik bere margolanen bidez denboran zeharreko bidaia txiki eta interesgarri bat oparitzen du. "Sea Forts" lanarekin lehorretik itsasora goaz.</p><p>Hirian egon zen aldian Bilbo Zaharreko aurrealde batean horma-irudi bat ere egin zuen, Iturburu kaleko 7. zenbakian, Bilbao Arte eraikinaren atzeko aldean. 2013ko irailaren 27an inauguratu zen lan hori, BLVart jaialdian.</p>'
			},
			socialLinks:[
				{
					icon: 'ion-earth',
					url: 'http://michael.grudziecki.com/'
				}
			],
			video:{
				title:{
					es: 'Making-of video',
					eu: 'Making-of video'
				},
				url: 'https://player.vimeo.com/video/77996388'
			},
			slider:{
				title:{
					es: 'Intervención mural. Bilbao Arte, 2013.',
					eu: 'Horma-irudia egiten. Bilbao Arte, 2013'
				},
				slides:[
					'img/grudziecki_calle1.jpg',
					'img/grudziecki_calle2.jpg',
					'img/grudziecki_calle3.jpg',
					'img/grudziecki_calle4.jpg'
				]
			},
			bio:{
				img: 'img/grudziecki_bio.jpg',
				html: {
					es: '<p>Michael Grudziecki es un artista polaco afincado en Munich. Grudziecki es un artista que hace de la arquitectura su material de trabajo.</p><p>Grudziecki trabaja meticulosamente: mide, proyecta, compone, ilumina… Es un escenógrafo aplicado, diligente y cuidadoso. En su nueva serie de obras pictóricas tituladas Sea forts compone imágenes surreales a base de contenedores marítimos sobre diferentes escenarios.</p><p>La primera constante que domina la actual obra de Grudziecki es la presencia imperativa de estos contenedores. Contenedores rojos y verdes; contenedores solitarios o en “cardumen”; contenedores sobre estructuras complejas aunque en apariencia de absurda funcionalidad.</p><p>La segunda constante, la más sutil y refinada, la que alcanza al observador un instante más tarde y casi de imprevisto, la que trasciende lo puramente visual, es el sentimiento de soledad, de aislamiento y de incomunicación que se experimenta frente a sus plataformas. Estas se encuentran ancladas en el preciso punto medio del océano, equidistantes a toda probable humanidad repartida sobre las costas más próximas a cada margen.</p><p>El contenedor es utilizado por M. Grudziecki como metáfora de hogar. Un hogar que el artista imagina, transportable y dotado únicamente de lo imprescindible para la supervivencia mientras se encuentre recluido. Es, además, una celda en el epicentro de la inmensidad, pero una celda cuyo emplazamiento no es arbitrario.</p><p>El contenedor no asume solamente un destino formal y estético en sus pinturas, sino que su ubicación ha sido estudiada y resuelta su instalación en lo alto para atalayar. Porque sus “Fortalezas Marinas” son atalayas, bastiones de un imperio de soledad y destierro. Son el último y más apartado baluarte de lo humano y el refugio más lejano para salvaguardarse del mar.</p><p>Michael Grudziecki avizora, otea y contempla, vigilante, hacia las costas del plano de lo real de quienes observamos. Y es desde ese otro lado, desde sus torres desoladas que concibe su obra.</p>',
					eu: '<p>Michael Grudziecki Munichen bizi den artista poloniarra da. Artista honek arkitektura bere lanerako material bilakatu du.</p><p>Zehatz-mehatz aritzen da lanean: neurtu, proiektatu, konposatu, argitu... egiten du. Eszenografo langilea, zuzena eta egokia da. Sea forts izeneko margolan serie berrian irudi surrealak daude, eszenario desberdinetan dauden itsas-edukiontziak oinarri hartuta.</p><p>Artista honen egungo obraren konstanteetako bat edukiontzi horien presentzia nagusia da. Edukiontzi gorri eta berdeak; bakarrik edo "cardumen" eran; egitura konplexuen gainean dauden edukiontziak, itxuraz funtzionalitate absurduarekin.</p><p>Bigarren konstantea sutilagoa eta finagoa da, ikuslea apur bat geroxeago eta ezustean harrapatzen du, ikusten denaz harantzago dago: bakardade sentimenduaz ari gara, isolamendua eta inkomunikazioa nabari dira bere plataformen aurrean. Plataforma hauek ozeanoaren erdian daude, ertz bakoitzetik gertuen egon daitekeen giza aztarna orotatik distantzia berdinera.</p><p>Etxearen metafora legez darabil edukiontzia M. Grudzieckik. Artistak irudikatzen duen etxea da, garraiatu daitekeena eta hor sartuta dagoela bizirauteko oinarrizkoa besterik ez duena. Handitasunaren erdian dagoen zelda bat ere bada, baina bere kokapena ez da arbitrarioa.</p><p>Edukiontziak bere lanetan destino formal eta estetikoa izateaz gain, bere kokapena aztertu egin da eta toki garai batean jarri da behatu ahal izateko. Izan ere bere "Itsas gotorlekuak" behatokiak dira, bakardadezko eta desterruzko inperioaren bastioiak.  Gizakiaren azkeneko eta urrutiko baluarteak dira, eta itsasotik babesteko babeslekurik urrunenak ere bai.</p><p>Michael Grudziecki behatzen ari da, begira dago, zain, begira gaudenon plano errealeko kostaldera begira dago. Eta beste alde horretatik, bere dorre atsekabetuetatik ulertzen da bere obra.</p>'
				}
			}
		},
		okuda:{
			className: 'okuda',
			headerTitle: 'Dream or die - OKUDA SAN MIGUEL',
			category: {
				es: 'Exposición individual en SC Gallery, Bilbao',
				eu: 'Banako erakusketa SC Galleryn, Bilbo'
			},
			date:{
				es:'14.12.2013 - 28.02.2014',
				eu:'2013.12.14 - 2014.02.28'
			},
			name: 'Dream or die',
			artist: 'Okuda San Miguel',
			description:{
				es: '<p>SC Gallery, inauguró Dream or die, exposición del artista Okuda San Miguel, el 14 de Diciembre de 2013.</p><p>Dream or Die es una muestra que combina fotografía, pintura, escultura e instalación proponiendo una reflexión en torno a las contradicciones e incoherencias de la vida moderna y sus constructos culturales. Por medio de una serie de protagonistas, el artista santanderino Okuda San Miguel, nos muestra personajes deshumanizados ubicados en entornos oníricos e inverosímiles, mostrando con ello el hastío existencial que en ocasiones acompaña al sueño de la modernidad.</p><p>Para la ocasión, Okuda nos transporta a diferentes escenarios y estados mentales por medio tanto de sus fotografías como de sus obras pictóricas y escultóricas; los bosques de Tennesse, las fábricas abandonadas de Detroit, las devastadas casas de Jersey tras el huracán Shandy o los indómitos acantilados del Mar Cantábrico, son algunos de los marcos en los que Dream or Die enfrenta al espectador con la incierta visión que el artista tiene de la vida del hombre actual.</p>',
				eu: '<p>SC Galleryk Dream or die inauguratu zen 2013ko abenduaren 14an, Okuda San Miguel artistaren lana.</p><p>Dream or Die erakusketan argazkiak, pintura, eskultura eta instalazioak konbinatu dira eta bizitza modernoaren eta bere eraikuntza kulturalen kontraesan eta inkoherentziei buruzko hausnarketa proposatu du. Hainbat protagonistaren bidez, Okuda San Miguel Santanderko artistak deshumanizatutako pertsonaiak ekarri dizkigu, inguru oniriko eta sinestezinetan jarri dizkigu, eta modernotasunaren ametsak askotan berekin duen asperdura existentziala adierazi nahi izan digu.</p><p>Okudak eszenatoki eta buru-egoera desberdinetara garamatza bere argazkien, margolanen eta eskulturen bidez; Tennesseko basoak, Detroiteko lantegi abandonatuak, Shandy urakanak suntsitutako Jerseyko etxeak edo Kantauri itsasoko labarrak ageri dira Dream or Die erakusketan, eta artistak egungo gizarteaz duen ikuspegi zalantzakorra aurrez aurre izango du ikusleak.</p>'
			},
			socialLinks: [
				{
					icon: 'ion-earth',
					url: 'http://okudart.es/showcase/'
				}
			],
			slider:{
				title:{
					es: 'Exposición',
					eu: 'Erakusketa'
				},
				slides:[
					'img/okuda_expo1.jpg',
					'img/okuda_expo2.jpg',
					'img/okuda_expo3.jpg',
					'img/okuda_expo4.jpg'
				]
			}
		},
		paper:{
			className:'paper',
			headerTitle: 'Paper gaineko lanak',
			category:{
				es: 'No color galería, San Sebastián',
				eu: 'No color galeria, Donostia '
			},
			date:{
				es: '05.07.2013 - 31.08.2014',
				eu: '2013.07.05 - 2014.08.31'
			},
			name: 'Paper gaineko lanak',
			description:{
				es:'<p>La exposición colectiva Paper Gaineko Lana es una amplia muestra de las posibilidades que ofrece el papel, como soporte, para la creación artística contemporánea.</p><p>Paper Gaineko Lana es una exposición colectiva que se centra en el papel como soporte de trabajo. Desde los dibujos de Miss Van, pasando por fotografías de Boris Hoppek y los collages de Anna Taratiel, entre otros. En total 11 artistas, mas de 20 obras, diferentes técnicas y más de 4 nacionalidades distintas que tienen como nexo común el uso papel como plataforma de expresión.</p><p>La exposición esta compuesta por una selección de 20 obras realizadas por los siete artistas representados por la galería SC Gallery (Bilbao), Abel Martínez, Anna Taratiel, Boris Hoppek, Eltono, Javier Siquier, SpY, Vinz, así como por tres artistas más, invitados a dialogar y crear puentes temáticos con estos últimos: Fermín Moreno, Miss Van y Sixe Paredes. Todos ellos, a lo largo de su trayectoria, con soportes y técnicas diversas, han “habitado” el papel con pintura, grabado, fotografía, collage, etc.</p><p>Se trata de obras de gran calidad realizadas por artistas internacionales de primer orden. Las distintas interpretaciones sobre este soporte vienen de la mano de autores internacionales como Sixe Paredes, Fermín Moreno, Boris Hoppek, SpY y Miss van, entre otros. El espacio expositivo elegido para presentar esta primera muestra colectiva es No Color Galería ubicada en el centro de Donostia, a escasos metros de la playa de Zurriola.</p>',
				eu:'<p>Paper Gaineko Lana taldeko erakusketa sormen artistiko garaikidearen euskarri gisa paperak eskaintzen dituen hamaika aukerei buruzkoa da. </p><p>Paper Gaineko Lana taldeko erakusketa da, eta papera lanerako euskarri gisa hartu eta hor oinarritzen da. Miss Vanen marrazkiak, Boris Hoppeken argazkiak eta Anna Taratilen collageak daude, besteak beste. Guztira 11 artista, 20 lan baino gehiago, teknika desberdinak eta 4 nazionalitate baino gehiago; denak paperaren bidez lotuta, adierazteko plataforma legez papera erabiltzeak elkartuta.</p><p>Erakusketan 20 obra egongo dira eta SC Galleryk (Bilbo) aurkeztutako 7 artistarenak izango dira: Abel Martínez, Anna Taratiel, Boris Hoppek, Eltono, Javier Siquier, SpY, Vinz. Beste hiru artista ere izango dira, eta hauekin elkarrizketak izatera eta zubi tematikoak eraikitzera gonbidatu ditugu: Fermín Moreno, Miss Van eta Sixe Paredes. Denek beren ibilbidean zehar papera "egokitu" dute margoekin, grabatuekin, argazkiekin, collageekin...</p><p>Kalitate handiko lanak dira, eta lehen mailako nazioarteko artistek egin dituzte. Euskarri honi buruzko interpretazioak eman dituzte Sixe Paredes, Fermín Moreno, Boris Hoppek, SpY eta Miss van bezalako nazioarteko artistek, besteak beste. Taldeko erakusketarako aukeratu den espazioa No Color Galería izan da; galerai hau Donostian dago, Zurriolako hondartzatik bertan.</p>'
			},
			artists:{
				title: {
					es: 'Artistas y obras',
					eu: 'Artistak eta obrak'
				},
				artists:[
					'Abel Martínez',
					'Anna Taratiel',
					'Boris Hoppek',
					'Btoy',
					'Eltono',
					'Fermín Moreno',
					'Javier Siquier',
					'Miss Van',
					'Sixe Paredes',
					'SpY',
					'Vinz'
				]
			},			
			socialLinks: [
				{
					icon: 'ion-location',
					url: 'http://www.nocolor.es/contact/'
				},
				{
					icon: 'ion-earth',
					url: 'http://www.nocolor.es/art-gallery/'
				},
				{
					icon: 'ion-social-instagram',
					url: 'http://instagram.com/nocolor_studio'
				}
			],
			slider:{
				title: {
					es: 'Exposición',
					eu: 'Erakusketa'
				},
				slides: [
					'img/paper_expo1.jpg',
					'img/paper_expo2.jpg',
					'img/paper_expo3.jpg',
					'img/paper_expo4.jpg',
					'img/paper_expo5.jpg'
				]
			}
		},
		spy:{
			className: 'spy',
			headerTitle: 'Pirámide – SpY',
			category:{
				es: 'Artium, Vitoria',
				eu: 'Artium, Gasteiz',
			},
			date: {
				es: 'desde 28.06.2013',
				eu: '2013.06.28-tik'
			},
			name: 'Pirámide',
			artist: 'SpY',
			description:{
				es: '<p>Artium, Centro-Museo Vasco de Arte Contemporáneo, presentó Pirámide, un proyecto de arte urbano del artista madrileño SpY para el programa Mutatis Mutandis. Enmarcada en lo que generalmente se conoce como arte público, la pieza es una construcción piramidal de 11 metros de altura realizada a partir de vallas de obra y fue instalada junto a la entrada principal del Museo. Al igual que con muchas de sus obras, SpY busca con ella romper la monotonía visual que caracteriza la vida en las grandes urbes y hacer a los transeúntes cómplices de su propia ciudad, elementos básicos para la dinamización del espacio público. La obra crea una gran tensión visual en un entorno urbano dominado por edificios de viviendas y servicios, por el amplio espacio público generado por el Centro-Museo y por la intensidad en el tráfico de peatones. Mutatis Mutandis es un programa de pequeños proyectos artísticos para los espacios exteriores de Artium, destinado a reclamarlos como parte integrante de la especial arquitectura del edificio, derivada de su carácter de museo-bodega. Este proyecto fue comisariado por Sergio García Bayón (SC Gallery Bilbao).</p><p>Tal y como lo concibe SpY, la dinamización del espacio público tiene el fin de hacer cómplices a los transeúntes con su propia ciudad, dejando de lado así la monotonía que generalmente absorbe la vida en las grandes urbes. En esa línea, Pirámide es en sí un proyecto simple, reconocible y que se hace muy familiar a primera vista.</p><p>SpY ha creado una formación piramidal con vallas de señalización y protección de obra, elementos que comúnmente se encuentran en cualquier ciudad del mundo y que inusualmente adquieren un valor artístico. Instalada cerca de la entrada principal del Centro-Museo, en un lugar de intenso tránsito de peatones, la pieza crea una gran tensión visual en este entorno urbano dominado por edificios de viviendas y servicios y por el amplio espacio público en torno al museo.</p>',
				eu: '<p>Artium-Arte Garaikideko Euskal Zentro-Museoak Pirámide aurkeztu zuen, SpY madrildar artistak Mutatis Mutandis programarako egin duen hiriko arte proiektua. Arte publikoa esaten zaion horretan sartuta dago eta 11 metroko garaiera duen piramide itxurako eraikin bat da; obretarako hesiekin egin eta Museoaren sarrera nagusiaren ondoan jarri zen. Beste lan askorekin bezala, oraingo honetan ere hiri handietako monotonia hautsi nahi zuen SpYk, oinezkoak bere hiriaren konplize bihurtu, espazio publikoa dinamizatzeko oinarrizko elementuak baitira. Etxebizitzaz eta zerbitzuz inguratutako toki horretan tentsio bisuala sortzen du lanak, Zentro-Museoak espazio publiko handia sortu baitu eta oinezko asko ibiltzen da hor. Mutatis Mutandi Artium kanpoko espazioetarako proiektu artistiko txikiak egiteko programa bat da, eraikinaren arkitektura bereziaren zati izateko nahi ditu, museo-upategia baita.  Proiektu honetako komisarioa Sergio García Bayón izan zen (SC Gallery, Bilbo).</p><p>SpYk ikusi bezala, espazio publikoaren dinamizazioan oinezkoen konplizitatea behar da, beren hiriaren konplize izan behar dute; horrela, hiri handietako monotonia hori alde batera utziko da. Ildo horretan, Pirámide proiektua xumea da, azkar ezagutzen da eta begiratu hutsarekin antzematen da zer den. SpYk piramide itxurako bat egin du obretako hesi horiekin; edozein hiritan aurki daitezke hesi hori horiek eta oso gutxitan izaten dute balio artistikoa. Zentro-Museoko sarrera nagusiaren ondoan jarrita, oinezko asko ibiltzen den toki horretan jarrita, tentsio bisual handia sortzen da eraikinez inguratutako toki horretan, museo inguruko espazio zabal horretan.</p>'
			},
			socialLinks:[
				{
					icon: 'ion-earth',
					url: 'http://spy-urbanart.com/'
				}
			],
			slider:{
				title: {
					es : 'Making-of',
					eu : 'Making-of'
				},
				slides: [
					'img/spy_calle1.jpg',
					'img/spy_calle2.jpg',
					'img/spy_calle3.jpg',
					'img/spy_calle4.jpg',
					'img/spy_calle5.jpg',
					'img/spy_calle6.jpg'
				]
			},
			bio:{
				img: 'img/spy_bio.jpg',
				html:{
					es: '<p>SpY madrildar artista bat da, eta bere hiri arloko lehenengo jarduerak 80ko hamarkada erdikoak dira. Handik gutxira, graffiti arloko figura ospetsu bihurtu ondoren, kaleko komunikazio artistikorako beste forma batzuk arakatzen hasi zen. Bere lana da hiriko elementuak hartu eta eraldaketaren edo errepikapenaren bidez hiriko errealitatearen komentario bihurtzea eta komunikatzeko bere kodeetan sartzea.</p>',
					eu: '<p>Hiria behatzea da bere ekoizpenaren oinarria, bertako osagaiak elementu bizigabetzat hartu ordez, aukera ugariko sortatzat hartzen ditu. Bere jardueraren ezaugarriak hauek dira: jolaserako gogoa, pieza bakoitzaren testuingurua behatzea eta eraikitzeko jarrera izatea, indarrean sartzeko jarrera ez izatea. SpYren lanek parentesi izan nahi dute, urbaniten inertzia automatetako parentesi. Nahita egindako atximurrak dira, ertz batean ezkutatuta daude harritu nahi duenaren zain. Ironia eta umore positiboa dituzte, irribarrea kutsatzen dute, hausnarketara garamatzate, kontzientzia esnatu nahi dute.</p>'
				}
			}
		}
	}

	return expolist;
};
