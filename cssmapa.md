/* ============================================
   RESET E VARIÁVEIS
   ============================================ */
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

:root {
	--primary-color: #1e88e5;
	--primary-hover: #0288d1;
	--primary-active: #fd7132;
	--text-color: #333;
	--text-light: #666;
	--bg-light: #f5f5f5;
	--border-color: #ddd;
	--shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	--shadow-lg: 0 4px 20px rgba(0, 0, 0, 0.15);
	--transition: all 0.3s ease-in-out;
}

/* ============================================
   BASE
   ============================================ */
body {
	width: 100%;
	font-family: "Hind", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
	color: var(--text-color);
	background: var(--bg-light);
	line-height: 1.6;
	overflow-x: hidden;
}

/* ============================================
   CONTAINER E HEADER
   ============================================ */
.container {
	max-width: 1400px;
	margin: 0 auto;
	padding: 20px;
}

.header {
	text-align: center;
	margin-bottom: 30px;
	padding: 20px;
}

.header h1 {
	font-size: 2rem;
	margin-bottom: 10px;
	color: var(--primary-color);
}

.header p {
	color: var(--text-light);
	font-size: 1rem;
}

/* ============================================
   MAPA
   ============================================ */
.box-mapa {
	position: relative;
	width: 100%;
	max-width: 100%;
	margin: 0 auto 30px;
	padding: 20px;
	background: white;
	border-radius: 8px;
	box-shadow: var(--shadow);
	overflow: hidden;
}

#map {
	width: 100%;
	height: auto;
	max-width: 100%;
	display: block;
	margin: 0 auto;
}

#map .state {
	cursor: pointer;
}

#map .state .shape {
	cursor: pointer;
	fill: #ddd;
	transition: var(--transition);
	stroke: #fff;
	stroke-width: 0.5;
}

#map .state:hover .shape {
	fill: var(--primary-hover) !important;
	stroke-width: 1;
}

#map .state.active .shape {
	fill: var(--primary-active) !important;
}

#map .state .label_icon_state {
	fill: var(--text-light);
	font-family: Arial, sans-serif;
	font-size: 11px;
	font-weight: normal;
	pointer-events: none;
	transition: var(--transition);
}

#map .state:hover .label_icon_state,
#map .state.active .label_icon_state {
	fill: #fff;
}

#map .state .label_state {
	display: none;
	font-family: Arial, sans-serif;
	font-size: 14px;
	font-weight: bold;
	fill: var(--text-light);
}

#map .state:hover .label_state {
	display: block;
	fill: #fff;
}

#map .state .icon_state {
	fill: #284779;
	transition: var(--transition);
}

#map .state:hover .icon_state,
#map .state.active .icon_state {
	fill: var(--primary-hover);
}

/* ============================================
   SELEÇÃO E INFORMAÇÕES DOS ESTADOS
   ============================================ */
.parca {
	position: relative;
	width: 100%;
	max-width: 500px;
	margin: 0 auto;
	padding: 0 20px;
}

.parca select {
	width: 100%;
	max-width: 100%;
	margin: 0 auto 20px;
	padding: 12px 15px;
	border: 2px solid var(--border-color);
	border-radius: 8px;
	background: white;
	font-size: 16px;
	font-family: inherit;
	color: var(--text-color);
	cursor: pointer;
	transition: var(--transition);
	appearance: none;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
	background-repeat: no-repeat;
	background-position: right 15px center;
	padding-right: 40px;
}

.parca select:focus {
	outline: none;
	border-color: var(--primary-color);
	box-shadow: 0 0 0 3px rgba(30, 136, 229, 0.1);
}

.parca .estado {
	transition: var(--transition);
	border: 1px solid var(--border-color);
	border-radius: 8px;
	background: white;
	opacity: 0;
	visibility: hidden;
	position: absolute;
	width: 100%;
	max-width: 100%;
	min-width: 280px;
	padding: 0;
	margin-top: 20px;
	box-shadow: var(--shadow-lg);
	transform: translateY(-10px);
	z-index: 10;
}

.parca .estado.active {
	opacity: 1;
	visibility: visible;
	position: relative;
	transform: translateY(0);
}

.parca .estado h3 {
	margin: 0;
	padding: 15px 20px;
	background: var(--primary-color);
	color: #fff;
	text-transform: uppercase;
	font-size: 1.1rem;
	border-radius: 8px 8px 0 0;
}

.parca .estado ul {
	list-style: none;
	padding: 20px;
	margin: 0;
}

.parca .estado ul li {
	padding: 8px 0;
	border-bottom: 1px solid #f0f0f0;
	line-height: 1.8;
}

.parca .estado ul li:last-child {
	border-bottom: none;
}

.parca .estado ul li a {
	color: var(--primary-color);
	text-decoration: none;
	transition: var(--transition);
}

.parca .estado ul li a:hover {
	text-decoration: underline;
}

.parca #box_mg.estado {
	opacity: 1;
	visibility: visible;
	position: relative;
}

/* ============================================
   TOOLTIP FLUTUANTE (HOVER)
   ============================================ */
.hover-tooltip {
	position: fixed;
	z-index: 9999;
	min-width: 240px;
	max-width: 320px;
	background: #fff;
	color: var(--text-color);
	border: 1px solid var(--border-color);
	border-radius: 10px;
	box-shadow: var(--shadow-lg);
	padding: 12px 14px;
	pointer-events: none;
	transition: var(--transition);
	font-size: 14px;
}

.hover-tooltip.hidden {
	display: none;
}

.hover-tooltip .hover-title {
	font-weight: 700;
	color: var(--primary-color);
	margin-bottom: 8px;
}

.hover-tooltip .hover-list {
	display: flex;
	flex-direction: column;
	gap: 8px;
}

.hover-tooltip .hover-item strong {
	display: block;
	font-size: 14px;
	color: var(--text-color);
}

.hover-tooltip .hover-phone {
	font-size: 13px;
	color: var(--primary-color);
}

.hover-tooltip .hover-area {
	font-size: 12px;
	color: var(--text-light);
}

/* ============================================
   FOOTER
   ============================================ */
.author {
	text-align: center;
	padding: 30px 20px;
	margin-top: 40px;
	background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.6) 100%);
}

.author a {
	font-size: 16px;
	display: inline-block;
	text-decoration: none;
	color: #fff;
	font-weight: 700;
	transition: var(--transition);
}

.author a:hover {
	opacity: 0.8;
}

.author a span {
	color: #F7254C;
}

/* ============================================
   RESPONSIVIDADE - TABLET
   ============================================ */
@media (min-width: 768px) {
	.container {
		padding: 30px;
	}

	.header h1 {
		font-size: 2.5rem;
	}

	.box-mapa {
		padding: 30px;
	}

	.parca {
		max-width: 600px;
	}

	.parca .estado {
		min-width: 350px;
	}
}

/* ============================================
   RESPONSIVIDADE - DESKTOP
   ============================================ */
@media (min-width: 1024px) {
	.container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 40px;
		align-items: start;
		padding: 40px;
	}

	.header {
		grid-column: 1 / -1;
		margin-bottom: 0;
	}

	.box-mapa {
		margin-bottom: 0;
	}

	.parca {
		max-width: 100%;
		padding: 0;
	}

	.parca select {
		display: none;
	}

	.parca .estado {
		position: relative;
		opacity: 0;
		visibility: hidden;
		transform: translateY(-10px);
	}

	.parca .estado.active {
		opacity: 1;
		visibility: visible;
		transform: translateY(0);
	}
}

/* ============================================
   RESPONSIVIDADE - MOBILE
   ============================================ */
@media (max-width: 767px) {
	.container {
		padding: 15px;
	}

	.header {
		padding: 15px 0;
		margin-bottom: 20px;
	}

	.header h1 {
		font-size: 1.5rem;
	}

	.header p {
		font-size: 0.9rem;
	}

	.box-mapa {
		padding: 15px;
		margin-bottom: 20px;
	}

	#map {
		width: 100%;
		height: auto;
	}

	#map .state .label_icon_state {
		font-size: 9px;
	}

	.parca {
		padding: 0;
	}

	.parca select {
		display: block;
		margin-bottom: 20px;
		font-size: 14px;
		padding: 10px 12px;
		padding-right: 35px;
	}

	.parca .estado {
		position: relative;
		width: 100%;
		min-width: 100%;
		margin-top: 0;
		transform: none;
	}

	.parca .estado.active {
		position: relative;
		transform: none;
	}

	.author {
		padding: 20px 15px;
		margin-top: 30px;
	}

	.author a {
		font-size: 14px;
	}
}

/* ============================================
   RESPONSIVIDADE - MOBILE PEQUENO
   ============================================ */
@media (max-width: 480px) {
	.header h1 {
		font-size: 1.25rem;
	}

	.box-mapa {
		padding: 10px;
	}

	#map .state .label_icon_state {
		font-size: 8px;
	}

	.parca .estado h3 {
		font-size: 1rem;
		padding: 12px 15px;
	}

	.parca .estado ul {
		padding: 15px;
	}

	.parca .estado ul li {
		font-size: 0.9rem;
		padding: 6px 0;
	}
}

/* ============================================
   MELHORIAS DE ACESSIBILIDADE
   ============================================ */
@media (prefers-reduced-motion: reduce) {
	* {
		transition: none !important;
		animation: none !important;
	}
}

/* ============================================
   ESTADOS DE FOCUS PARA ACESSIBILIDADE
   ============================================ */
#map .state:focus {
	outline: 3px solid var(--primary-color);
	outline-offset: 2px;
}

.parca select:focus-visible {
	outline: 3px solid var(--primary-color);
	outline-offset: 2px;
}

/* ============================================
   ANIMAÇÕES
   ============================================ */
@keyframes fadeIn {
	from {
		opacity: 0;
		transform: translateY(-10px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

.parca .estado.active {
	animation: fadeIn 0.3s ease-out;
}
