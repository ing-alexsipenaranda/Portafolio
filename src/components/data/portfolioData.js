/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @typedef PortafolioData
 * @property {string} imgSrc Url de la imagen
 * @property {string} title Titulo de la tarjeta
 * @property {string[]} skills Array con tus habilidades ej: ['React', 'CSS', 'JavaScript']
 * @property {string} descripcion La descripcion de la tarjeta
 * @property {string} demoURL Url de una pagina de demostración
 * @property {string} repoURL Url del repositorio, ej: https://github.com/usuario/repo
 * @property {string} anim La animación que se ejecutará cuando se cargue la tarjeta, ej: fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness Cuanto brillo tendrá el color de fondo de la tarjeta, ej: 0.1
 */

/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @type {PortafolioData[]}
 */
export const portafolioData = [
	{
		imgSrc: 'img/dropshi.co.png',
		title: 'DROPSHI',
		skills: ['WordPress', 'JavaScript','HTML','CSS','StyledComponents','PHP'],
		descripcion:
			'Desarrollo de ecommerce Departamental. Diseñada para ofrecer soluciones tecnológicas avanzadas a empresas. La plataforma fue creada con un enfoque en la optimización de la experiencia del usuario, garantizando una interfaz intuitiva y una estructura técnica robusta.',
		demoURL: 'https://www.dropshi.co',
		repoURL: '',
		anim: 'fade-left',
	},
	{
		imgSrc: 'img/inpool.us.png',
		title: 'INPOOL POOL FILTERS',
		skills: ['WordPress', 'JavaScript','HTML','CSS','StyledComponents','PHP'],
		descripcion:
			'Plataforma de comercio electrónico especializada en productos de diversas categorías, como seguridad industrial, materias primas, filtros de piscina,logistica. La tienda se enfoca en proporcionar a los clientes una experiencia de compra eficiente y confiable para satisfacer las necesidades de empresas y consumidores. Con una interfaz intuitiva y un diseño atractivo, InfinitySupplier facilita el acceso a productos soluciones globales, adaptándose a las tendencias del mercado y a las exigencias de los usuarios.',
		demoURL: 'https://www.inpool.us',  // Corregido aquí		repoURL: '',
		anim: 'fade-right',
	},
	{
		imgSrc: 'img/afaworld.png',
		title: 'AFAA WORLD',
		skills: ['WordPress', 'JavaScript','HTML','CSS','StyledComponents','PHP'],
		descripcion:
			'Diseñé y desarrollé AFAAWORLD.com, una plataforma innovadora que destaca por su diseño intuitivo y funcionalidad enfocada en conectar a profesionales y entusiastas de una industria globalmente influyente. La página ofrece recursos, contenido dinámico y una experiencia de usuario optimizada, garantizando una navegación fluida y adaptada a las necesidades del sector.',
		demoURL: 'https://www.afaaworld.com',
		repoURL: '',
		anim: 'fade-left',
	},
	{
		imgSrc: 'img/infinitysupplier.png',
		title: 'Infinity Supplier',
		skills: ['WordPress', 'JavaScript','HTML','CSS','StyledComponents','PHP'],
		descripcion:
			'Plataforma de comercio electrónico especializada en productos de diversas categorías, como seguridad industrial, materias primas, filtros de piscina,logistica. La tienda se enfoca en proporcionar a los clientes una experiencia de compra eficiente y confiable para satisfacer las necesidades de empresas y consumidores. Con una interfaz intuitiva y un diseño atractivo, InfinitySupplier facilita el acceso a productos soluciones globales, adaptándose a las tendencias del mercado y a las exigencias de los usuarios.',
		demoURL: 'https://www.infinitysupplier.com',  // Corregido aquí		repoURL: '',
		anim: 'fade-right',
	},
	{
		imgSrc: 'img/coperca.png',
		title: 'COPERCA',
		skills: ['WordPress', 'JavaScript','HTML','CSS','StyledComponents','PHP'],
		descripcion:
			'Plataforma de comercio electrónico especializada en productos de diversas categorías, como seguridad industrial, materias primas, filtros de piscina,logistica. La tienda se enfoca en proporcionar a los clientes una experiencia de compra eficiente y confiable para satisfacer las necesidades de empresas y consumidores. Con una interfaz intuitiva y un diseño atractivo, InfinitySupplier facilita el acceso a productos soluciones globales, adaptándose a las tendencias del mercado y a las exigencias de los usuarios.',
		demoURL: 'https://www.new.coperca.com',  // Corregido aquí		repoURL: '',
		anim: 'fade-right',
	},
	{
		imgSrc: 'img/botasaga.png',
		title: 'Industrias Saga de Colombia S.A.S',
		skills: ['JavaScript', 'Bootstrap','HTML','CSS'],
		descripcion:
			' Se ralizaron mantenimientos  y nuevas customizaciones para Botasaga, especializada en la venta de botas de seguridad industrial. El sitio fue diseñado con un enfoque en la facilidad de navegación y una experiencia de compra optimizada para los usuarios',
		demoURL: '',
		repoURL: '',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
	{
		imgSrc: 'img/infinityc.png',
		title: 'INFINITYC WEB',
		skills: ['WordPress', 'JavaScript','HTML','CSS','StyledComponents','PHP'],
		descripcion:
			'Desarrollo de www.infinityc.com.co: Desarrollé la plataforma InfinityC.com.co, diseñada para ofrecer soluciones tecnológicas avanzadas a empresas. La plataforma fue creada con un enfoque en la optimización de la experiencia del usuario, garantizando una interfaz intuitiva y una estructura técnica robusta.',
		demoURL: 'https://www.infinityc.com.co',
		repoURL: '',
		anim: 'fade-left',
	},
	{
		imgSrc: 'img/raites.png',
		title: 'Raites Tijuana',
		skills: ['WordPress', 'JavaScript','HTML','CSS','StyledComponents','PHP'],
		descripcion:
			'Desarrollo de Raitestijuana.com: Desarrollé la plataforma web Raitestijuana.com, enfocada en ofrecer servicios especializados en la región de Tijuana. La web fue diseñada para facilitar el acceso a información relevante, servicios y productos locales, con una interfaz amigable y un rendimiento óptimo. La plataforma permite a los usuarios encontrar lo que necesitan de manera rápida y eficiente, brindando una experiencia de navegación sencilla y profesional.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-left',
	},
	{
		imgSrc: 'img/belleza.png',
		title: 'Salon de belleza',
		skills: ['WordPress', 'JavaScript','HTML','CSS','StyledComponents','PHP'],
		descripcion:
			'Desarrollo de pagina web para salon de Belleza. Una plataforma digital orientada a ofrecer productos y servicios de belleza de alta calidad. La web fue diseñada con un enfoque en la simplicidad y la accesibilidad, permitiendo a los usuarios explorar y adquirir productos fácilmente.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-left',
	},
	{
		imgSrc: 'img/restaurantes.png',
		title: 'JURIDICOOK',
		skills: ['WordPress', 'JavaScript','HTML','CSS','StyledComponents','PHP'],
		descripcion:
			'Desarrollo de JuridiCook.com: Desarrollé la plataforma web para JuridiCook, un restaurante único que fusiona la gastronomía con el concepto legal en su concepto temático. La página está diseñada para ofrecer a los usuarios una experiencia de navegación atractiva y eficiente, con un menú interactivo, reservas en línea y una sección dedicada a eventos especiales. La interfaz moderna y funcional permite a los comensales explorar las opciones gastronómicas del restaurante, conocer su propuesta culinaria y realizar pedidos de manera sencilla, reflejando la filosofía innovadora y profesional de JuridiCook.',
		demoURL: 'https://saga.infinityc.com.co/',
		repoURL: '',
		anim: 'fade-right',
	}
];

const skillIcons = {
	JavaScript: 'skill-icons:javascript',
	React: 'skill-icons:react-dark',
	Astro: 'skill-icons:astro',
	CSS: 'skill-icons:css',
	HTML: 'skill-icons:html',
	Sass: 'skill-icons:sass',
	StyledComponents: 'skill-icons:styledcomponents',
	Bootstrap: 'skill-icons:bootstrap',
	Tailwind: 'skill-icons:tailwindcss-dark',
	WordPress: 'skill-icons:wordpress',
	PHP: 'skill-icons:logo:php',
};

/**
 * @description Se mapea el portafolioData para que tenga los iconos de las habilidades
 * 	Puedes ver Array.map en https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export const getPortafolioData = portafolioData.map((item) => {
	return {
		// Se coloca todo el contenido previo del item
		...item,
		// Se cambian las skills por los iconos correspondientes
		skills: item.skills.map((skill) => skillIcons[skill]),
	};
});
