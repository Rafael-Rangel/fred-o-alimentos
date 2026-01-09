(function($) {
	$(document).ready(function(){
		// ============================================
		// DADOS DOS REPRESENTANTES
		// ============================================
		const dados = {
			PA: [
				{ nome: 'Alexandre Pereira P. Almeida', telefone: '(91) 99103-8244', area: 'Pará' },
				{ nome: 'Hemérito Silva Neto', telefone: '(91) 98283-2288', area: 'Pará' },
				{ nome: 'Leila de Jesus', telefone: '(91) 99924-8352', area: 'Pará' },
				{ nome: 'Manoel d Oliveira Reis Neto', telefone: '(91) 98404-9698', area: 'Pará' },
				{ nome: 'Marcio Paulo Blanco de Castro', telefone: '(91) 98313-0287', area: 'Pará' },
				{ nome: 'Renan Richards S. Teixeira', telefone: '(91) 98443-4455', area: 'Pará' },
				{ nome: 'Marcelo Fábio de Castro Alves', telefone: '(91) 98121-0160', area: 'Pará (interior)' }
			],
			AP: [
				{ nome: 'Marcelo Fábio de Castro Alves', telefone: '(91) 98121-0160', area: 'Amapá e Pará (interior)' }
			],
			MT: [
				{ nome: 'Ed Carlos Eloy da Silva', telefone: '(65) 99930-8781', area: 'Mato Grosso' }
			],
			BA: [
				{ nome: 'Euclides Sampaio Cerqueira', telefone: '(71) 99401-0210', area: 'Bahia' }
			],
			ES: [
				{ nome: 'Heber Billo Nogueira', telefone: '(27) 99608-7589', area: 'Espírito Santo' }
			],
			AC: [
				{ nome: 'João Passos de Araujo', telefone: '(68) 98421-5259', area: 'Acre e Rondônia' }
			],
			RO: [
				{ nome: 'João Passos de Araujo', telefone: '(68) 98421-5259', area: 'Acre e Rondônia' }
			],
			SC: [
				{ nome: 'João Paulo da Silva Ferreira', telefone: '(48) 98817-4006', area: 'Santa Catarina' }
			],
			MG: [
				{ nome: 'Paulo Henrique M. Quinderer', telefone: '(31) 99153-5748', area: 'Minas Gerais' }
			],
			SP: [
				{ nome: 'Marcelo Gianelli Melhado', telefone: '(11) 94804-3278', area: 'São Paulo' },
				{ nome: 'Miguel D. Chacon', telefone: '(11) 99709-0101', area: 'São Paulo' },
				{ nome: 'Paulo Roberto Domingues Mergulhão', telefone: '(11) 99493-0067', area: 'São Paulo' }
			],
			MA: [
				{ nome: 'Raimundo Nonato Mendes Junior', telefone: '(98) 98104-0464', area: 'Maranhão' }
			],
			AM: [
				{ nome: 'Ronney Maquire Nobre', telefone: '(92) 98179-0677', area: 'Amazonas e Roraima' }
			],
			RR: [
				{ nome: 'Ronney Maquire Nobre', telefone: '(92) 98179-0677', area: 'Amazonas e Roraima' }
			],
			DF: [
				{ nome: 'Sedrick Marcel', telefone: '(65) 99997-2019', area: 'Distrito Federal, Goiás e Mato Grosso do Sul' }
			],
			GO: [
				{ nome: 'Sedrick Marcel', telefone: '(65) 99997-2019', area: 'Distrito Federal, Goiás e Mato Grosso do Sul' }
			],
			MS: [
				{ nome: 'Sedrick Marcel', telefone: '(65) 99997-2019', area: 'Distrito Federal, Goiás e Mato Grosso do Sul' }
			],
			RJ: [
				{ nome: 'Vera Lucia Brada de Moraes', telefone: '(21) 98235-8565', area: 'Rio de Janeiro (interiores)' },
				{ nome: 'Viviane Silva de Oliveira', telefone: '(21) 97684-0021', area: 'Rio de Janeiro' }
			],
			AL: [
				{ nome: 'Walber da Silva Santos', telefone: '(85) 98239-8044', area: 'Alagoas, Ceará, Pernambuco, Piauí, Rio Grande do Norte, Sergipe' }
			],
			CE: [
				{ nome: 'Walber da Silva Santos', telefone: '(85) 98239-8044', area: 'Alagoas, Ceará, Pernambuco, Piauí, Rio Grande do Norte, Sergipe' }
			],
			PE: [
				{ nome: 'Walber da Silva Santos', telefone: '(85) 98239-8044', area: 'Alagoas, Ceará, Pernambuco, Piauí, Rio Grande do Norte, Sergipe' }
			],
			PI: [
				{ nome: 'Walber da Silva Santos', telefone: '(85) 98239-8044', area: 'Alagoas, Ceará, Pernambuco, Piauí, Rio Grande do Norte, Sergipe' }
			],
			RN: [
				{ nome: 'Walber da Silva Santos', telefone: '(85) 98239-8044', area: 'Alagoas, Ceará, Pernambuco, Piauí, Rio Grande do Norte, Sergipe' }
			],
			SE: [
				{ nome: 'Walber da Silva Santos', telefone: '(85) 98239-8044', area: 'Alagoas, Ceará, Pernambuco, Piauí, Rio Grande do Norte, Sergipe' }
			]
		};

		const nomesEstados = {
			AC: 'Acre',
			AL: 'Alagoas',
			AP: 'Amapá',
			AM: 'Amazonas',
			BA: 'Bahia',
			CE: 'Ceará',
			DF: 'Distrito Federal',
			ES: 'Espírito Santo',
			GO: 'Goiás',
			MA: 'Maranhão',
			MT: 'Mato Grosso',
			MS: 'Mato Grosso do Sul',
			MG: 'Minas Gerais',
			PA: 'Pará',
			PB: 'Paraíba',
			PR: 'Paraná',
			PE: 'Pernambuco',
			PI: 'Piauí',
			RJ: 'Rio de Janeiro',
			RN: 'Rio Grande do Norte',
			RS: 'Rio Grande do Sul',
			RO: 'Rondônia',
			RR: 'Roraima',
			SC: 'Santa Catarina',
			SP: 'São Paulo',
			SE: 'Sergipe',
			TO: 'Tocantins'
		};

		// ============================================
		// CRIAÇÃO DO PAINEL DINÂMICO
		// ============================================
		// Remover painéis estáticos e criar um único painel dinâmico
		$('.parca .estado').remove();
		const infoPanel = $('<div/>', { id: 'info-panel', class: 'estado active' });
		const infoTitle = $('<h3/>', { text: 'Selecione um estado' });
		const infoList = $('<ul/>');
		infoPanel.append(infoTitle, infoList);
		$('.parca').append(infoPanel);

		// Tooltip flutuante para hover
		const hoverTooltip = $('<div/>', { id: 'hover-tooltip', class: 'hover-tooltip hidden' });
		const hoverTitle = $('<div/>', { class: 'hover-title', text: 'Estado' });
		const hoverList = $('<div/>', { class: 'hover-list' });
		hoverTooltip.append(hoverTitle, hoverList);
		$('body').append(hoverTooltip);

		// ============================================
		// FUNÇÕES AUXILIARES
		// ============================================
		function resetStates() {
			$('.state .label_icon_state').css({ 'fill': '#666' });
			$('.state .shape').css({ 'fill': '#ddd' });
			$('.state').removeClass('active');
		}

		function renderInfo(uf) {
			const reps = dados[uf] || [];
			const nomeEstado = nomesEstados[uf] || uf;

			infoTitle.text(nomeEstado);
			infoList.empty();

			if (reps.length === 0) {
				infoList.append($('<li/>', { text: 'Nenhum representante cadastrado.' }));
				return;
			}

			reps.forEach(rep => {
				const li = $('<li/>');
				const strong = $('<strong/>', { text: rep.nome });
				const phone = $('<div/>', { text: rep.telefone });
				const area = rep.area ? $('<div/>', { text: rep.area, class: 'rep-area' }) : null;

				li.append(strong, phone);
				if (area) li.append(area);
				infoList.append(li);
			});
		}

		function renderTooltip(uf) {
			const reps = dados[uf] || [];
			const nomeEstado = nomesEstados[uf] || uf;

			hoverTitle.text(nomeEstado);
			hoverList.empty();

			if (reps.length === 0) {
				hoverList.append($('<div/>', { text: 'Nenhum representante.' }));
				return;
			}

			reps.forEach(rep => {
				const item = $('<div/>', { class: 'hover-item' });
				item.append($('<strong/>', { text: rep.nome }));
				item.append($('<div/>', { text: rep.telefone, class: 'hover-phone' }));
				if (rep.area) item.append($('<div/>', { text: rep.area, class: 'hover-area' }));
				hoverList.append(item);
			});
		}

		function positionTooltip(x, y) {
			const padding = 14;
			const tt = hoverTooltip[0];
			if (!tt) return;
			const rect = tt.getBoundingClientRect();
			let left = x + padding;
			let top = y + padding;
			const vw = window.innerWidth;
			const vh = window.innerHeight;

			if (left + rect.width > vw) left = x - rect.width - padding;
			if (top + rect.height > vh) top = y - rect.height - padding;
			if (left < 4) left = 4;
			if (top < 4) top = 4;

			hoverTooltip.css({ left: `${left}px`, top: `${top}px` });
		}

		function showTooltip(uf, x, y) {
			renderTooltip(uf);
			hoverTooltip.removeClass('hidden');
			positionTooltip(x, y);
		}

		function hideTooltip() {
			hoverTooltip.addClass('hidden');
		}

		function showStateInfo(uf) {
			resetStates();
			const stateEl = $('#state_' + uf);
			stateEl.addClass('active');
			stateEl.find('.label_icon_state').css({ 'fill': '#FFF' });
			stateEl.find('.shape').css({ 'fill': '#fd7132' });
			renderInfo(uf);
		}

		// ============================================
		// EVENTOS - HOVER (mouseenter / mouseleave)
		// ============================================
		$('#map .state').on('mouseenter', function(e) {
			const uf = $(this).attr('data-state')?.toUpperCase();
			if (!uf) return;
			showStateInfo(uf);
			showTooltip(uf, e.pageX, e.pageY);
		});

		$('#map .state').on('mousemove', function(e) {
			const uf = $(this).attr('data-state')?.toUpperCase();
			if (!uf) return;
			positionTooltip(e.pageX, e.pageY);
		});

		$('#map .state').on('mouseleave', function() {
			hideTooltip();
		});

		// Para touch, ainda permitimos tap
		$('#map .state').on('touchstart', function(e) {
			e.preventDefault();
			const uf = $(this).attr('data-state')?.toUpperCase();
			if (!uf) return;
			showStateInfo(uf);
			hideTooltip(); // em touch não exibimos tooltip flutuante
		});

		// ============================================
		// SELECT RESPONSIVO
		// ============================================
		$('#seletory').on('change', function() {
			const uf = $(this).val()?.toUpperCase();
			if (!uf) return;
			showStateInfo(uf);
		});

		// ============================================
		// ACESSIBILIDADE (TECLADO)
		// ============================================
		$('#map .state').attr('tabindex', '0');
		$('#map .state').attr('role', 'button');
		$('#map .state').attr('aria-label', function() {
			return 'Estado: ' + $(this).find('desc').text();
		});
		$('#map .state').on('keydown', function(e) {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				const uf = $(this).attr('data-state')?.toUpperCase();
				if (uf) showStateInfo(uf);
			}
		});

		// ============================================
		// INICIALIZAÇÃO
		// ============================================
		// Define um estado inicial (Pará, pois há vários representantes)
		showStateInfo('PA');

		console.log('Mapa interativo do Brasil carregado (hover ativado).');
	});
})(jQuery);
