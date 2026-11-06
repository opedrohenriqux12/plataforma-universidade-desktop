/* =========================================================
   UniD LMS — lógica da aplicação (JavaScript puro)
   ========================================================= */
(function () {
  'use strict';

  /* ---------------- Dados ---------------- */
  // status: 'nao_inscrito' | 'inscrito' | 'em_andamento' | 'concluido' | 'expirado'
  // statusCurso: 'ativo' | 'agendado' | 'iniciado' | 'finalizado'
  const cursos = [
    {
      id: 10,
      tipo: 'curso',
      titulo: 'Treinamento de Análise de Contratos',
      categoria: 'Jurídico',
      statusCurso: 'ativo',
      inscricao: 'gratuita',
      status: 'em_andamento',
      progresso: 15,
      imagem: 'img/analise-contratos/slide-1.png',
      cor: '#881337',
      corTexto: '#ffffff',
      criadoEm: '2026-10-22',
      ultimoAcesso: '2026-10-22',
      descricao: 'Treinamento completo para capacitação no envio de informações e minutas contratuais ao setor jurídico, garantindo conformidade, agilidade e segurança jurídica nas operações.',
      qtdItens: 8,
      ch: 1,
      avaliacao: 0,
      slides: [
        'img/analise-contratos/slide-1.png',
        'img/analise-contratos/slide-2.png',
        'img/analise-contratos/slide-3.png',
        'img/analise-contratos/slide-4.png',
        'img/analise-contratos/slide-5.png',
        'img/analise-contratos/slide-6.png',
        'img/analise-contratos/slide-7.png',
        'img/analise-contratos/slide-8.png'
      ]
    },
    { id: 11, tipo: 'curso', titulo: 'Guia de Boas Práticas - Antifraude', categoria: 'Compliance', statusCurso: 'ativo', inscricao: 'gratuita', status: 'em_andamento', progresso: 35, cor: '#6d1818', corTexto: '#ffffff', criadoEm: '2026-10-21', ultimoAcesso: '2026-10-21', descricao: 'Diretrizes essenciais e procedimentos operacionais para prevenção, detecção ágil e combate a práticas fraudulentas no ecossistema corporativo.', qtdItens: 1, ch: 0, avaliacao: 0 },
    { id: 1, tipo: 'curso', titulo: 'Parcerias Educacionais', categoria: 'Institucional', statusCurso: 'ativo', inscricao: 'gratuita', status: 'inscrito', progresso: 0, cor: '#F2B94B', corTexto: '#1f1f1f', criadoEm: '2026-10-01', ultimoAcesso: null, descricao: 'Visão geral sobre os programas e convênios educacionais corporativos disponíveis para desenvolvimento profissional contínuo.', qtdItens: 1, ch: 0, avaliacao: 0 },
    { id: 2, tipo: 'fluxo', titulo: 'Programa de Parentalidade', categoria: 'Desenvolvimento Pessoal', statusCurso: 'agendado', inscricao: 'aprovacao', status: 'nao_inscrito', progresso: 0, cor: '#1f1f1f', corTexto: '#ffffff', criadoEm: '2026-09-25', ultimoAcesso: null, descricao: 'Trilha de apoio e acolhimento para mães e pais, orientações e boas práticas para conciliação familiar e bem-estar.', qtdItens: 2, ch: 0, avaliacao: 0 },
    { id: 3, tipo: 'fluxo', titulo: 'Palestras Desktop', categoria: 'Institucional', statusCurso: 'iniciado', inscricao: 'gratuita', status: 'inscrito', progresso: 0, cor: '#2b2b2b', corTexto: '#ffffff', criadoEm: '2026-09-18', ultimoAcesso: null, descricao: 'Ciclo de palestras internas com lideranças e especialistas abordando inovação, metas corporativas e futuro do setor.', qtdItens: 3, ch: 0, avaliacao: 0 },
    { id: 4, tipo: 'curso', titulo: 'Compliance, Código de Conduta, Assédios, Combate e Prevenção', categoria: 'Compliance', statusCurso: 'ativo', inscricao: 'gratuita', status: 'em_andamento', progresso: 45, cor: '#5b1a1a', corTexto: '#ffffff', criadoEm: '2026-08-10', ultimoAcesso: '2026-10-20', descricao: 'Treinamento institucional obrigatório sobre ética, conduta responsável, prevenção de assédios e canais de denúncia.', qtdItens: 1, ch: 0, avaliacao: 0 },
    { id: 5, tipo: 'curso', titulo: 'LGPD na Prática', categoria: 'Compliance', statusCurso: 'finalizado', inscricao: 'gratuita', status: 'expirado', progresso: 100, cor: '#1e3a5f', corTexto: '#ffffff', criadoEm: '2025-11-02', ultimoAcesso: '2025-12-15', descricao: 'Fundamentos da Lei Geral de Proteção de Dados Pessoais aplicados ao cotidiano das operações e segurança de dados.', qtdItens: 1, ch: 0, avaliacao: 5 },
    { id: 6, tipo: 'curso', titulo: 'Fundamentos de Redes e Telecom', categoria: 'Tecnologia', statusCurso: 'ativo', inscricao: 'aprovacao', status: 'em_andamento', progresso: 70, cor: '#0f4c45', corTexto: '#ffffff', criadoEm: '2026-07-22', ultimoAcesso: '2026-10-17', descricao: 'Capacitação técnica em arquitetura de redes de telecomunicação, fibra óptica, roteamento e protocolos essenciais.', qtdItens: 2, ch: 0, avaliacao: 0 },
    { id: 7, tipo: 'curso', titulo: 'Liderança e Feedback', categoria: 'Gestão', statusCurso: 'ativo', inscricao: 'aprovacao', status: 'concluido', progresso: 100, cor: '#4c1d95', corTexto: '#ffffff', criadoEm: '2026-05-14', ultimoAcesso: '2026-09-02', descricao: 'Práticas de comunicação assertiva, escuta ativa, delegação eficaz e estruturação de rotinas de feedback de alto impacto.', qtdItens: 1, ch: 0, avaliacao: 5 },
    { id: 8, tipo: 'curso', titulo: 'Segurança da Informação', categoria: 'Tecnologia', statusCurso: 'agendado', inscricao: 'gratuita', status: 'nao_inscrito', progresso: 0, cor: '#9a3412', corTexto: '#ffffff', criadoEm: '2026-10-15', ultimoAcesso: null, descricao: 'Procedimentos de cibersegurança, identificação de phishing, proteção de senhas e uso seguro de dispositivos corporativos.', qtdItens: 1, ch: 0, avaliacao: 0 },
    { id: 9, tipo: 'curso', titulo: 'Comunicação Não Violenta', categoria: 'Desenvolvimento Pessoal', statusCurso: 'iniciado', inscricao: 'gratuita', status: 'concluido', progresso: 100, cor: '#E5A42A', corTexto: '#1f1f1f', criadoEm: '2026-03-03', ultimoAcesso: '2026-06-11', descricao: 'Técnicas de empatia, resolução pacífica de conflitos e aprimoramento das relações interpessoais no ambiente de trabalho.', qtdItens: 1, ch: 0, avaliacao: 4 },
  ];

  const usuario = {
    nome: 'Pedro Henrique Pereira dos Santos',
    email: 'pedro.psantos@teste.senai.br',
    cargo: '792_Analista de Telecomunicação Jr',
    ultimoLogin: '2026-10-20T21:04:00',
    horas: 2,
  };

  const banners = [
    { titulo: 'Trilha Compliance', sub: 'Clique aqui e faça o Treinamento obrigatório de Compliance' },
    { titulo: 'Segurança Digital', sub: 'Novo curso agendado — garanta já a sua vaga' },
    { titulo: 'Liderança 2026', sub: 'Desenvolva suas competências de gestão' },
  ];

  let notificacoes = [
    { id: 1, texto: 'Novo curso disponível: Segurança da Informação', lida: false },
    { id: 2, texto: 'Seu certificado de LGPD expirou', lida: false },
    { id: 3, texto: 'Você concluiu "Liderança e Feedback"', lida: true },
  ];

  const LABELS = {
    statusCurso: { ativo: 'Curso Ativo', agendado: 'Agendado', iniciado: 'Iniciado', finalizado: 'Finalizado' },
    inscricao: { aprovacao: 'Aprovação do gerente necessária', gratuita: 'Inscrição Gratuita' },
    tipo: { curso: 'Cursos', fluxo: 'Fluxos' },
  };
  const CATEGORIAS = [...new Set(cursos.map((c) => c.categoria))].sort();

  /* ---------------- Persistência (localStorage) ---------------- */
  const STORAGE_KEY = 'unid-lms:v1';

  function carregarEstado() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const salvo = JSON.parse(raw);
      if (!salvo || typeof salvo !== 'object') return;
      cursos.forEach((c) => {
        const s = salvo.cursos && salvo.cursos[c.id];
        if (s) {
          if (typeof s.status === 'string') c.status = s.status;
          if (typeof s.progresso === 'number') c.progresso = Math.min(100, Math.max(0, s.progresso));
          if (s.ultimoAcesso) c.ultimoAcesso = s.ultimoAcesso;
          if (typeof s.avaliacao === 'number') c.avaliacao = s.avaliacao;
        }
      });
      if (Array.isArray(salvo.notifLidas)) {
        notificacoes.forEach((n) => { if (salvo.notifLidas.includes(n.id)) n.lida = true; });
      }
    } catch (err) {
      console.warn('Não foi possível ler os dados salvos:', err);
    }
  }

  function salvarEstado() {
    try {
      const data = { cursos: {}, notifLidas: notificacoes.filter((n) => n.lida).map((n) => n.id) };
      cursos.forEach((c) => {
        data.cursos[c.id] = {
          status: c.status,
          progresso: c.progresso,
          ultimoAcesso: c.ultimoAcesso,
          avaliacao: c.avaliacao || 0
        };
      });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (err) {
      console.warn('Não foi possível salvar os dados:', err);
      toast('Não foi possível salvar seu progresso neste navegador.');
    }
  }

  /* ---------------- Utilitários ---------------- */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const esc = (s) => String(s).replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
  const icon = (id, cls = 'ico ico--sm', label) =>
    `<svg class="${cls}" ${label ? `role="img" aria-label="${esc(label)}"` : 'aria-hidden="true"'}><use href="#${id}"/></svg>`;
  const hojeISO = () => new Date().toISOString().slice(0, 10);

  function fmtDataHora(iso) {
    return new Date(iso).toLocaleString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  }
  function diasAtras(iso) {
    if (!iso) return 'nunca acessado';
    const d = Math.floor((new Date(hojeISO()) - new Date(iso)) / 86400000);
    if (d <= 0) return 'hoje';
    if (d === 1) return 'há 1 dia';
    return `há ${d} dias`;
  }
  function anel(valor) {
    const r = 17, c = 2 * Math.PI * r;
    return `<div class="ring" role="progressbar" aria-valuenow="${valor}" aria-valuemin="0" aria-valuemax="100" aria-label="Progresso ${valor}%">
      <svg width="42" height="42" aria-hidden="true">
        <circle cx="21" cy="21" r="${r}" stroke="var(--gold-100)" stroke-width="4" fill="none"/>
        <circle cx="21" cy="21" r="${r}" stroke="var(--gold-600)" stroke-width="4" fill="none" stroke-linecap="round"
          stroke-dasharray="${c}" stroke-dashoffset="${c - (valor / 100) * c}"/>
      </svg><span>${valor}%</span></div>`;
  }
  let toastTimer;
  function toast(msg) {
    const t = $('#toast');
    t.textContent = msg;
    t.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { t.hidden = true; }, 2600);
  }

  /* ---------------- Layout: menu, dropdowns ---------------- */
  function toggleSidebar(forcarEstado) {
    const collapsed = typeof forcarEstado === 'boolean'
      ? forcarEstado
      : !document.body.classList.contains('sidebar-collapsed');

    document.body.classList.toggle('sidebar-collapsed', collapsed);
    $('#btn-menu').setAttribute('aria-expanded', String(!collapsed));

    try {
      localStorage.setItem('unid-sidebar-collapsed', collapsed ? '1' : '0');
    } catch (e) {}
  }

  function initLayout() {
    // Restaura preferência salva do menu colapsado
    try {
      if (localStorage.getItem('unid-sidebar-collapsed') === '1') {
        document.body.classList.add('sidebar-collapsed');
        $('#btn-menu').setAttribute('aria-expanded', 'false');
      }
    } catch (e) {}

    // Clique no botão de 3 barras (hambúrguer)
    $('#btn-menu').addEventListener('click', () => toggleSidebar());

    $('#btn-expand').addEventListener('click', (e) => {
      const btn = e.currentTarget;
      const open = btn.getAttribute('aria-expanded') !== 'true';
      btn.setAttribute('aria-expanded', String(open));
      $('#submenu').hidden = !open;
    });

    // Dropdowns
    const pares = [['#btn-notif', '#painel-notif'], ['#btn-user', '#painel-user']];
    function fecharTodos(exceto) {
      pares.forEach(([b, p]) => {
        if (b === exceto) return;
        $(p).hidden = true;
        $(b).setAttribute('aria-expanded', 'false');
      });
    }
    pares.forEach(([b, p]) => {
      $(b).addEventListener('click', (e) => {
        e.stopPropagation();
        fecharTodos(b);
        const open = $(p).hidden;
        $(p).hidden = !open;
        $(b).setAttribute('aria-expanded', String(open));
      });
      $(p).addEventListener('click', (e) => e.stopPropagation());
    });
    document.addEventListener('click', () => fecharTodos());
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') { fecharTodos(); }
    });

    $('#btn-ler-todas').addEventListener('click', () => {
      notificacoes.forEach((n) => (n.lida = true));
      salvarEstado();
      renderNotificacoes();
    });

    $('#btn-reset').addEventListener('click', () => {
      try { localStorage.removeItem(STORAGE_KEY); } catch (err) { console.warn(err); }
      location.reload();
    });

    // Busca global -> Explore
    $('#form-busca').addEventListener('submit', (e) => {
      e.preventDefault();
      estadoFiltro.busca = $('#busca-global').value.trim();
      $('#busca-explore').value = estadoFiltro.busca;
      if (location.hash === '#/explore') renderExplore(); else location.hash = '#/explore';
    });
  }

  function renderNotificacoes() {
    const naoLidas = notificacoes.filter((n) => !n.lida).length;
    $('#notif-count').textContent = naoLidas || '';
    $('#btn-notif').setAttribute('aria-label', `Notificações, ${naoLidas} não lidas`);
    $('#lista-notif').innerHTML = notificacoes
      .map((n) => `<li class="${n.lida ? '' : 'unread'}">${esc(n.texto)}</li>`).join('');
  }

  /* ---------------- Roteamento por hash ---------------- */
  const ROTAS = ['inicio', 'explore', 'aprender', 'certificacoes', 'curso'];
  const TITULOS = {
    inicio: 'Início',
    explore: 'Explore',
    aprender: 'Meu espaço de aprendizagem',
    certificacoes: 'Minhas certificações',
    curso: 'Detalhes do Curso'
  };

  let cursoAtivoId = null;
  let telaAnterior = '#/explore';

  function rota() {
    const m = location.hash.match(/^#\/curso\/(\d+)/);
    if (m) {
      cursoAtivoId = Number(m[1]);
      return 'curso';
    }
    const r = (location.hash.match(/^#\/(\w+)/) || [])[1];
    return ROTAS.includes(r) ? r : null;
  }

  function onRoute() {
    const r = rota();
    if (!r) { location.replace('#/inicio'); return; }
    $$('.view').forEach((v) => { v.hidden = v.dataset.view !== r; });
    $$('.menu__link').forEach((a) => {
      const matchRoute = r === 'curso' ? 'aprender' : r;
      if (a.dataset.route === matchRoute) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });

    if (r !== 'curso') {
      telaAnterior = location.hash || '#/explore';
    }

    window.scrollTo(0, 0);

    if (r === 'inicio') { document.title = `${TITULOS[r]} — UniD`; renderInicio(); }
    if (r === 'explore') { document.title = `${TITULOS[r]} — UniD`; abrirExplore(); }
    if (r === 'aprender') { document.title = `${TITULOS[r]} — UniD`; renderAprender(); }
    if (r === 'certificacoes') { document.title = `${TITULOS[r]} — UniD`; renderCertificacoes(); }
    if (r === 'curso') renderCurso(cursoAtivoId);
  }

  /* ---------------- Tela Início ---------------- */
  let heroIdx = 0, heroTimer;

  function initHero() {
    $('#hero-dots').innerHTML = banners
      .map((_, i) => `<button type="button" data-i="${i}" aria-label="Ir para destaque ${i + 1}"></button>`).join('');
    $('#hero-dots').addEventListener('click', (e) => {
      const b = e.target.closest('button');
      if (!b) return;
      mostrarBanner(Number(b.dataset.i));
      reiniciarTimer();
    });
    mostrarBanner(0, true);
    reiniciarTimer();
  }
  function reiniciarTimer() {
    clearInterval(heroTimer);
    heroTimer = setInterval(() => mostrarBanner((heroIdx + 1) % banners.length), 6000);
  }
  function mostrarBanner(i, imediato) {
    heroIdx = i;
    const txt = $('.hero__text');
    const aplicar = () => {
      $('#hero-titulo').innerHTML = banners[i].titulo.split(' ').map((w, k) => `<span class="${k === 0 ? 'outline' : ''}">${esc(w)}</span>`).join('');
      $('#hero-sub').textContent = banners[i].sub;
      txt.classList.remove('fade');
    };
    $$('#hero-dots button').forEach((b, k) => b.setAttribute('aria-current', String(k === i)));
    if (imediato) return aplicar();
    txt.classList.add('fade');
    setTimeout(aplicar, 250);
  }

  function renderInicio() {
    $('#perfil-nome').textContent = usuario.nome;
    $('#perfil-email').textContent = usuario.email;
    $('#perfil-cargo').textContent = usuario.cargo;
    $('#perfil-login').textContent = `Último login: ${fmtDataHora(usuario.ultimoLogin)}`;

    const inscritos = cursos.filter((c) => c.status !== 'nao_inscrito');
    const nC = inscritos.filter((c) => c.tipo === 'curso').length;
    const nF = inscritos.filter((c) => c.tipo === 'fluxo').length;
    $('#resumo-inscrito').innerHTML = `<strong>Inscrito</strong> em ${nC} cursos e ${nF} fluxos`;
    $('#resumo-horas').textContent = usuario.horas;
    $('#resumo-expirados').textContent = `${cursos.filter((c) => c.status === 'expirado').length} Expirados`;
    $('#resumo-concluidos').textContent = `${cursos.filter((c) => c.status === 'concluido').length} Concluídos`;

    const andamento = cursos.filter((c) => c.status === 'em_andamento');
    $('#lista-continue').innerHTML = andamento.length
      ? andamento.map((c) => `
        <li class="continue-item" style="cursor:pointer;" onclick="location.hash='#/curso/${c.id}'">
          <div class="continue-item__thumb" style="${c.imagem ? `background-image:url('${c.imagem}');background-size:cover;background-position:center;` : `background:${c.cor}`}" aria-hidden="true"></div>
          ${anel(c.progresso)}
          <div class="continue-item__info">
            <p class="continue-item__title">${esc(c.titulo)}</p>
            <p class="continue-item__date">Último acesso ${diasAtras(c.ultimoAcesso)}</p>
          </div>
          <button class="btn btn--soft" onclick="event.stopPropagation();location.hash='#/curso/${c.id}'" aria-label="Acessar ${esc(c.titulo)}">${icon('i-play')} Continuar</button>
        </li>`).join('')
      : `<li class="empty"><p class="muted">Você não tem cursos em andamento. Que tal explorar o catálogo?</p><a class="btn btn--gold" href="#/explore">Explorar</a></li>`;
  }

  // "Continuar" avança 15% no curso (simulação) e persiste
  function continuarCurso(id) {
    const c = cursos.find((x) => x.id === id);
    if (!c) return;
    c.progresso = Math.min(100, c.progresso + 15);
    c.ultimoAcesso = hojeISO();
    if (c.progresso >= 100) {
      c.status = 'concluido';
      usuario.horas += 1;
      toast(`Parabéns! Você concluiu "${c.titulo}" e ganhou um certificado.`);
    } else {
      c.status = 'em_andamento';
      toast(`Progresso em "${c.titulo}": ${c.progresso}%`);
    }
    salvarEstado();
    onRoute();
  }

  /* ---------------- Tela Explore ---------------- */
  const estadoFiltro = {
    busca: '',
    categoria: '',
    statusCurso: ['agendado', 'ativo', 'iniciado'],
    inscricao: [],
    tipo: [],
    ordem: 'novo',
    modo: 'grade',
  };
  let skeletonTimer;

  function initExplore() {
    const sel = $('#f-categoria');
    CATEGORIAS.forEach((c) => sel.insertAdjacentHTML('beforeend', `<option value="${esc(c)}">${esc(c)}</option>`));

    ['statusCurso', 'inscricao', 'tipo'].forEach((g) => {
      $(`#f-${g}`).innerHTML = Object.entries(LABELS[g]).map(([v, l]) => `
        <label class="check"><input type="checkbox" data-grupo="${g}" value="${v}" ${estadoFiltro[g].includes(v) ? 'checked' : ''} /> ${esc(l)}</label>`).join('');
    });

    $('.filters').addEventListener('change', (e) => {
      const t = e.target;
      if (t.matches('input[type="checkbox"]')) {
        const arr = estadoFiltro[t.dataset.grupo];
        if (t.checked) arr.push(t.value); else arr.splice(arr.indexOf(t.value), 1);
      } else if (t.id === 'f-categoria') {
        estadoFiltro.categoria = t.value;
      }
      renderExplore();
    });
    $('#busca-explore').addEventListener('input', (e) => { estadoFiltro.busca = e.target.value; renderExplore(); });
    $('#ordem').addEventListener('change', (e) => { estadoFiltro.ordem = e.target.value; renderExplore(); });
    $$('.toggle__btn').forEach((b) => b.addEventListener('click', () => {
      estadoFiltro.modo = b.dataset.viewMode;
      $$('.toggle__btn').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
      renderExplore();
    }));
    $('#btn-reiniciar').addEventListener('click', limparFiltros);
    $('#btn-limpar').addEventListener('click', limparFiltros);
    $('#btn-vazio-limpar').addEventListener('click', limparFiltros);

    $('#chips').addEventListener('click', (e) => {
      const b = e.target.closest('[data-chip]');
      if (!b) return;
      const [g, v] = b.dataset.chip.split(':');
      if (g === 'busca') { estadoFiltro.busca = ''; $('#busca-explore').value = ''; }
      else if (g === 'categoria') { estadoFiltro.categoria = ''; $('#f-categoria').value = ''; }
      else {
        estadoFiltro[g] = estadoFiltro[g].filter((x) => x !== v);
        const cb = $(`input[data-grupo="${g}"][value="${v}"]`);
        if (cb) cb.checked = false;
      }
      renderExplore();
      $('#busca-explore').focus();
    });
  }

  function limparFiltros() {
    Object.assign(estadoFiltro, { busca: '', categoria: '', statusCurso: [], inscricao: [], tipo: [] });
    $('#busca-explore').value = '';
    $('#busca-global').value = '';
    $('#f-categoria').value = '';
    $$('.filters input[type="checkbox"]').forEach((cb) => (cb.checked = false));
    renderExplore();
  }

  function filtrar() {
    const q = estadoFiltro.busca.trim().toLowerCase();
    const f = estadoFiltro;
    const r = cursos.filter((c) =>
      (!q || c.titulo.toLowerCase().includes(q) || c.categoria.toLowerCase().includes(q)) &&
      (!f.categoria || c.categoria === f.categoria) &&
      (!f.statusCurso.length || f.statusCurso.includes(c.statusCurso)) &&
      (!f.inscricao.length || f.inscricao.includes(c.inscricao)) &&
      (!f.tipo.length || f.tipo.includes(c.tipo))
    );
    const ord = {
      novo: (a, b) => b.criadoEm.localeCompare(a.criadoEm),
      antigo: (a, b) => a.criadoEm.localeCompare(b.criadoEm),
      az: (a, b) => a.titulo.localeCompare(b.titulo, 'pt-BR'),
    };
    return r.sort(ord[f.ordem]);
  }

  function cardCurso(c) {
    const badgeStatus = { ativo: 'badge--green', agendado: 'badge--blue', iniciado: 'badge--green', finalizado: 'badge--gray' }[c.statusCurso];
    const inscrito = c.status !== 'nao_inscrito';
    const coverHtml = c.imagem
      ? `<div class="course__cover course__cover--image" style="background-image: url('${c.imagem}');" aria-label="Capa de ${esc(c.titulo)}"></div>`
      : `<div class="course__cover ${c.corTexto === '#ffffff' ? 'course__cover--dark' : 'course__cover--light'}" style="background:${c.cor};color:${c.corTexto}">
          <span class="course__brand" aria-hidden="true">✺ UniD</span>
          ${c.corTexto === '#ffffff' ? '<svg class="course__neon" viewBox="0 0 120 120" aria-hidden="true"><path d="M-10 20 H40 a22 22 0 0 1 0 44 H22 v60"/></svg>' : ''}
          <span class="course__cover-title">${esc(c.titulo)}</span>
          ${c.corTexto !== '#ffffff' ? '<span class="course__bar" aria-hidden="true"></span>' : ''}
        </div>`;

    return `
      <article class="card course" data-course-id="${c.id}" style="cursor:pointer;">
        ${coverHtml}
        <div class="course__body">
          <h3 class="course__title">${icon(c.tipo === 'fluxo' ? 'i-layers' : 'i-book', 'ico ico--sm', c.tipo === 'fluxo' ? 'Fluxo' : 'Curso')}${esc(c.titulo)}</h3>
          <div class="course__badges">
            <span class="badge ${badgeStatus}">${LABELS.statusCurso[c.statusCurso]}</span>
            ${c.status === 'expirado' ? '<span class="badge badge--red">Expirado</span>' : ''}
            ${c.status === 'concluido' ? '<span class="badge badge--gold">Concluído</span>' : ''}
            ${c.status === 'em_andamento' ? `<span class="badge badge--gold">${c.progresso}% concluído</span>` : ''}
          </div>
          ${c.statusCurso === 'agendado' ? icon('i-clock', 'ico ico--sm', 'Agendado') : ''}
          <div class="course__footer">
            ${inscrito
              ? `<span class="enrolled">${icon('i-usercheck')} Inscrito</span>`
              : `<button class="btn btn--gold" data-inscrever="${c.id}" aria-label="Inscreva-se em ${esc(c.titulo)}">Inscreva-se</button>`}
            <button class="icon-btn course__info" data-info="${c.id}" aria-label="Informações sobre ${esc(c.titulo)}">${icon('i-info')}</button>
          </div>
        </div>
      </article>`;
  }

  function skeletons(n) {
    return Array.from({ length: n }, () => `
      <div class="card course" aria-hidden="true">
        <div class="skeleton sk-cover"></div>
        <div class="skeleton sk-line" style="width:70%"></div>
        <div class="skeleton sk-line" style="width:35%"></div>
        <div class="skeleton sk-line" style="width:45%;height:26px;margin-bottom:16px"></div>
      </div>`).join('');
  }

  function abrirExplore() {
    const lista = $('#lista-cursos');
    lista.className = `courses courses--${estadoFiltro.modo}`;
    lista.setAttribute('aria-busy', 'true');
    lista.innerHTML = skeletons(6);
    $('#vazio').hidden = true;
    $('#res-count').textContent = '…';
    clearTimeout(skeletonTimer);
    skeletonTimer = setTimeout(() => {
      lista.setAttribute('aria-busy', 'false');
      renderExplore();
    }, 800);
  }

  function renderChips() {
    const f = estadoFiltro;
    const chips = [];
    ['statusCurso', 'inscricao', 'tipo'].forEach((g) => f[g].forEach((v) => chips.push({ key: `${g}:${v}`, label: LABELS[g][v] })));
    if (f.categoria) chips.push({ key: 'categoria:', label: f.categoria });
    if (f.busca.trim()) chips.push({ key: 'busca:', label: `“${f.busca.trim()}”` });
    $('#chips').innerHTML = chips.map((c) => `
      <li><button class="chip" data-chip="${esc(c.key)}" aria-label="Remover filtro ${esc(c.label)}">${esc(c.label)} ${icon('i-x', 'ico ico--xs')}</button></li>`).join('');
    $('#btn-limpar').hidden = chips.length === 0;
  }

  function renderExplore() {
    renderChips();
    if ($('#lista-cursos').getAttribute('aria-busy') === 'true') return; // ainda carregando
    const r = filtrar();
    $('#res-count').textContent = r.length;
    $('#res-label').textContent = r.length === 1 ? 'resultado encontrado' : 'resultados encontrados';
    const lista = $('#lista-cursos');
    lista.className = `courses courses--${estadoFiltro.modo}`;
    lista.innerHTML = r.map(cardCurso).join('');
    $('#vazio').hidden = r.length > 0;
  }

  /* ---------------- Tela Aprender ---------------- */
  function renderAprender() {
    const meus = cursos.filter((c) => c.status !== 'nao_inscrito');
    $('#lista-aprender').innerHTML = meus.length
      ? meus.map((c) => {
          const html = cardCurso(c);
          // adiciona barra de progresso + ação continuar
          const extra = `
            <div class="progress-bar" role="progressbar" aria-valuenow="${c.progresso}" aria-valuemin="0" aria-valuemax="100" aria-label="Progresso ${c.progresso}%"><div style="width:${c.progresso}%"></div></div>
            ${c.status === 'inscrito' || c.status === 'em_andamento'
              ? `<button class="btn btn--soft" data-continuar="${c.id}">${icon('i-play')} ${c.progresso ? 'Continuar' : 'Começar'}</button>`
              : ''}`;
          return html.replace('<div class="course__footer">', `${extra}<div class="course__footer">`);
        }).join('')
      : `<div class="card empty"><p class="empty__title">Você ainda não está inscrito em nenhum curso</p><a class="btn btn--gold" href="#/explore">Explorar catálogo</a></div>`;
  }

  /* ---------------- Tela Certificações (Conforme Imagem 2) ---------------- */
  const certificadosCatalogo = [
    {
      id: 10,
      titulo: 'TREINAMENTO DE ANÁLISE DE CONTRATOS',
      status: 'valido',
      statusTexto: 'Certificado',
      capa: 'img/analise-contratos/slide-1.png',
      cor: '#881337',
      corTexto: '#ffffff',
      certificadoImg: 'img/certificado-contratos.jpg',
      dataEmissao: '16 de Dezembro de 2026'
    }
  ];

  function renderCertificacoes() {
    const grid = $('#grid-certificacoes');
    if (!grid) return;

    grid.innerHTML = certificadosCatalogo.map((c) => {
      let coverHtml = '';
      if (c.capa) {
        coverHtml = `<div class="cert-item__cover" style="background-image: url('${c.capa}');"></div>`;
      } else if (c.inativo) {
        coverHtml = `
          <div class="cert-item__cover cert-item__cover--inactive" style="background:${c.cor};">
            <svg class="course__neon" viewBox="0 0 120 120" style="opacity:0.4"><path d="M-10 20 H40 a22 22 0 0 1 0 44 H22 v60"/></svg>
            <span class="cert-item__badge-inactive">Inativo</span>
          </div>`;
      } else if (c.tipoCapa === 'ouro') {
        coverHtml = `
          <div class="cert-item__cover">
            <div class="cert-item__gold-cover">
              <svg class="cert-item__gold-icon"><use href="#i-rosette"/></svg>
            </div>
          </div>`;
      } else if (c.tipoCapa === 'unid') {
        coverHtml = `
          <div class="cert-item__cover" style="background:${c.cor};color:${c.corTexto};flex-direction:column;align-items:flex-start;padding:12px;justify-content:space-between;">
            <span style="font-size:10px;font-weight:700;color:var(--gold)">✺ UniD</span>
            <span style="font-size:12px;font-weight:700;">${esc(c.titulo)}</span>
          </div>`;
      } else {
        coverHtml = `
          <div class="cert-item__cover" style="background:${c.cor || '#222'};color:${c.corTexto || '#fff'};">
            <svg class="course__neon" viewBox="0 0 120 120" style="opacity:0.75"><path d="M-10 20 H40 a22 22 0 0 1 0 44 H22 v60"/></svg>
            <span style="position:relative;font-size:12px;margin-left:35%;font-weight:600;letter-spacing:.02em;">${esc(c.titulo)}</span>
          </div>`;
      }

      const rosetteClass = c.status === 'expirado' ? 'cert-item__rosette--inactive' : 'cert-item__rosette--active';
      const statusClass = c.status === 'valido' ? 'cert-item__status--green' : (c.status === 'expirado' ? 'cert-item__status--red' : 'cert-item__status--muted');

      return `
        <article class="cert-item" data-cert-id="${c.id}" tabindex="0" role="button" aria-label="Ver certificado de ${esc(c.titulo)}">
          ${coverHtml}
          <div class="cert-item__meta">
            <svg class="cert-item__rosette ${rosetteClass}" aria-hidden="true"><use href="#i-rosette"/></svg>
            <div class="cert-item__info">
              <h3 class="cert-item__title">${esc(c.titulo)}</h3>
              <span class="cert-item__status ${statusClass}">${esc(c.statusTexto)}</span>
            </div>
          </div>
        </article>`;
    }).join('');
  }

  function abrirModalCertificado(cert) {
    $('#cert-modal-titulo').textContent = `Certificado — ${cert.titulo}`;
    $('#cert-modal-sub').textContent = `Concedido a ${usuario.nome} · ${cert.dataEmissao || '2026'}`;
    const imgPath = cert.certificadoImg || 'img/certificado-contratos.jpg';
    $('#cert-modal-img').src = imgPath;
    $('#btn-cert-download').href = imgPath;
    $('#btn-cert-download').setAttribute('download', `Certificado-${cert.titulo.replace(/\s+/g, '-')}.jpg`);
    $('#cert-modal').hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function fecharModalCertificado() {
    const modal = $('#cert-modal');
    if (modal) modal.hidden = true;
    document.body.style.overflow = '';
  }

  function imprimirCertificado() {
    const imgSrc = $('#cert-modal-img').src;
    const win = window.open('', '_blank');
    if (win) {
      win.document.write(`
        <!DOCTYPE html>
        <html>
        <head><title>Imprimir Certificado</title></head>
        <body style="margin:0;display:flex;align-items:center;justify-content:center;height:100vh;">
          <img src="${imgSrc}" style="max-width:100%;max-height:100%;" onload="window.print();window.close();"/>
        </body>
        </html>
      `);
      win.document.close();
    }
  }

  /* ---------------- Tela Detalhes do Curso ---------------- */
  let cursoAtual = null;

  function renderCurso(id) {
    const c = cursos.find((x) => x.id === id) || cursos[0];
    cursoAtual = c;
    document.title = `${c.titulo} — UniD`;

    // Atualiza cabeçalho
    $('#curso-detalhes-titulo').textContent = c.titulo;
    $('#player-subtitulo').textContent = c.titulo;
    $('#player-titulo').textContent = c.titulo;

    // Status de progresso
    const stBadge = $('#c-status-progresso-badge');
    const stTexto = $('#c-status-progresso-texto');
    if (c.status === 'concluido') {
      stTexto.textContent = 'Concluído';
      stBadge.style.color = 'var(--green)';
    } else if (c.status === 'em_andamento') {
      stTexto.textContent = 'Em progresso';
      stBadge.style.color = 'var(--gold-700)';
    } else {
      stTexto.textContent = 'Não iniciado';
      stBadge.style.color = '#64748b';
    }

    // Módulos
    const thumbStyle = c.imagem
      ? `background-image: url('${c.imagem}');`
      : `background: ${c.cor};`;

    $('#c-lista-modulos').innerHTML = `
      <div class="c-module-item" id="modulo-item-card" role="button" tabindex="0" aria-label="Abrir aula ${esc(c.titulo)}">
        <div class="c-module-thumb" style="${thumbStyle}">
          ${!c.imagem ? '<span style="padding:4px;text-align:center;">' + esc(c.titulo.slice(0, 16)) + '</span>' : ''}
        </div>
        <div class="c-module-title">${esc(c.titulo)}</div>
        <div class="c-module-progress-wrap" role="progressbar" aria-valuenow="${c.progresso}" aria-valuemin="0" aria-valuemax="100" aria-label="Progresso: ${c.progresso}%">
          <div class="c-module-progress-fill" style="width: ${c.progresso}%;"></div>
        </div>
      </div>
    `;

    // Sidebar do curso
    const sideCover = $('#c-side-cover');
    if (c.imagem) {
      sideCover.style.backgroundImage = `url('${c.imagem}')`;
    } else {
      sideCover.style.backgroundImage = 'none';
      sideCover.style.backgroundColor = c.cor || '#2b1111';
    }

    $('#c-side-status').textContent = LABELS.statusCurso[c.statusCurso] || 'Ativo';
    $('#c-stat-conclusao-val').textContent = `${c.progresso}%`;
    $('#c-stat-score-val').textContent = c.status === 'concluido' ? '100' : '--';

    // Círculo com conic gradient
    const pAng = (c.progresso / 100) * 360;
    $('#c-stat-circle-progresso').style.background = `conic-gradient(var(--gold-600) ${pAng}deg, #e2e8f0 ${pAng}deg 360deg)`;

    // Avaliação
    renderEstrelas(c);

    // Metadados
    $('#c-meta-itens').textContent = `${c.qtdItens || 1} itens de conteúdo`;
    $('#c-meta-ch').textContent = String(c.ch !== undefined ? c.ch : 0);
    $('#c-desc-conteudo').textContent = c.descricao || 'Treinamento corporativo com diretrizes, procedimentos e checklists para conformidade, boas práticas e alta produtividade operacional.';

    // Botão de ação
    $('#btn-iniciar-curso-main-txt').textContent = c.progresso > 0 ? 'Continuar Curso' : 'Iniciar Curso';
  }

  function renderEstrelas(c) {
    const val = c.avaliacao || 0;
    $('#c-rating-texto').textContent = val > 0 ? `Sua avaliação: ${val} de 5 estrelas` : 'Você ainda não avaliou';
    let html = '';
    for (let i = 1; i <= 5; i++) {
      const active = i <= val;
      html += `<button type="button" class="c-star-btn ${active ? 'active' : ''}" data-star="${i}" aria-label="Avaliar com ${i} estrelas">
        <svg class="ico ico--sm" aria-hidden="true"><use href="#${active ? 'i-star' : 'i-star-o'}"/></svg>
      </button>`;
    }
    $('#c-stars-container').innerHTML = html;
  }

  /* ---------------- Player Modal ---------------- */
  let playerSlideIdx = 0;
  let playerAudioAtivo = true;

  function abrirPlayer(c) {
    cursoAtual = c || cursoAtual;
    if (!cursoAtual) return;

    playerSlideIdx = 0;
    $('#player-subtitulo').textContent = cursoAtual.titulo;
    $('#player-titulo').textContent = cursoAtual.titulo;
    $('#player-modal').hidden = false;
    document.body.style.overflow = 'hidden';

    const brandHeader = $('#player-screen .player-screen__header');
    if (brandHeader) {
      brandHeader.hidden = Boolean(cursoAtual.slides && cursoAtual.slides.length > 0);
    }

    renderSlide();
  }

  function fecharPlayer() {
    $('#player-modal').hidden = true;
    document.body.style.overflow = '';
  }

  function mudarSlide(delta) {
    const total = (cursoAtual && cursoAtual.slides && cursoAtual.slides.length) || 3;
    playerSlideIdx = Math.max(0, Math.min(total - 1, playerSlideIdx + delta));
    renderSlide();
  }

  function renderSlide() {
    const body = $('#player-screen-body');
    const btnPrev = $('#btn-player-prev');
    const btnNext = $('#btn-player-next');

    const total = (cursoAtual && cursoAtual.slides && cursoAtual.slides.length) || 3;
    btnPrev.disabled = playerSlideIdx === 0;

    $('#player-subtitulo').textContent = `${cursoAtual.titulo} · Slide ${playerSlideIdx + 1} de ${total}`;

    // Atualiza progresso proporcional se ainda não concluído
    const pct = Math.min(100, Math.round(((playerSlideIdx + 1) / total) * 100));
    if (pct > cursoAtual.progresso && cursoAtual.status !== 'concluido') {
      cursoAtual.progresso = pct;
      salvarEstado();
    }

    // Se o curso possuir slides com imagens reais da apresentação
    if (cursoAtual.slides && cursoAtual.slides.length > 0) {
      const isLast = playerSlideIdx === total - 1;
      btnNext.innerHTML = isLast
        ? `Concluir Treinamento ✓`
        : `Próximo <svg class="ico ico--xs" aria-hidden="true"><use href="#i-chevron"/></svg>`;

      const imgSrc = cursoAtual.slides[playerSlideIdx];
      body.innerHTML = `
        <div class="player-slide-img-wrap" id="player-slide-click-wrap" title="Clique para avançar">
          <img src="${imgSrc}" class="player-slide-img" alt="Slide ${playerSlideIdx + 1} de ${total}" />
        </div>
      `;
      return;
    }

    // Fallback para cursos sem slides de imagem
    if (playerSlideIdx === 0) {
      btnNext.innerHTML = `Próximo <svg class="ico ico--xs" aria-hidden="true"><use href="#i-chevron"/></svg>`;
      body.innerHTML = `
        <h2 class="slide-big-title">ATENÇÃO</h2>
        <div class="slide-phone-wrap">
          <svg viewBox="0 0 100 100" class="ico-phone-rotate"><use href="#i-phone-rotate"/></svg>
        </div>
        <p class="slide-instruction">Gire o dispositivo para melhor experiência de navegação ou acompanhe pelo computador.</p>
        <p style="font-size:12px;color:#94a3b8;margin-top:8px;">💡 Clique em <b>Próximo</b> para avançar pelos conteúdos do módulo.</p>
      `;
    } else if (playerSlideIdx === 1) {
      btnNext.innerHTML = `Próximo <svg class="ico ico--xs" aria-hidden="true"><use href="#i-chevron"/></svg>`;
      body.innerHTML = `
        <div class="slide-badge-step">Etapa 1 de 2 · Conteúdo do Treinamento</div>
        <h2 class="slide-big-title" style="font-size: clamp(20px, 3.2vw, 32px); margin-bottom: 16px;">${esc(cursoAtual.titulo)}</h2>
        <div class="slide-card-presentation">
          <div class="slide-bullet-item">
            <span class="bullet-num">1</span>
            <div>
              <strong>Validação de Informações Obrigatórias</strong>
              <p>Certifique-se do preenchimento integral dos dados e anexos necessários antes do encaminhamento às instâncias de aprovação.</p>
            </div>
          </div>
          <div class="slide-bullet-item">
            <span class="bullet-num">2</span>
            <div>
              <strong>Conformidade e Mitigação de Riscos</strong>
              <p>A tramitação estruturada assegura governança, mitigação de fraudes e agilidade jurídica em todos os processos internos.</p>
            </div>
          </div>
        </div>
      `;
    } else if (playerSlideIdx === 2) {
      btnNext.innerHTML = `Concluir ✓`;
      body.innerHTML = `
        <div class="slide-badge-step slide-badge-step--gold">Módulo Concluído</div>
        <h2 class="slide-big-title" style="color:var(--gold);margin-bottom:8px;">PARABÉNS!</h2>
        <p class="slide-instruction">Você completou com sucesso todos os tópicos instrucionais deste curso.</p>
        <div class="slide-score-box">
          <span class="score-number">100%</span>
          <span class="score-sub">Aproveitamento e frequência confirmados</span>
        </div>
        <button class="btn btn--gold" id="btn-concluir-dentro-slide" style="padding:10px 24px;font-size:14px;">
          Validar Conclusão e Emitir Certificado
        </button>
      `;
    }
  }

  function concluirTreinamento() {
    if (!cursoAtual) return;
    cursoAtual.progresso = 100;
    cursoAtual.status = 'concluido';
    cursoAtual.ultimoAcesso = hojeISO();
    usuario.horas += 1;
    salvarEstado();
    fecharPlayer();
    toast(`🎉 Parabéns! Você concluiu "${cursoAtual.titulo}" e o certificado foi liberado!`);
    renderCurso(cursoAtual.id);
  }

  function toggleAudio() {
    playerAudioAtivo = !playerAudioAtivo;
    const iconUse = $('#player-sound-icon use');
    if (iconUse) {
      iconUse.setAttribute('href', playerAudioAtivo ? '#i-volume' : '#i-volume-x');
    }
    toast(playerAudioAtivo ? 'Áudio ativado' : 'Áudio silenciado');
  }

  function toggleFullscreen() {
    const wrap = $('#player-screen');
    if (!document.fullscreenElement) {
      if (wrap.requestFullscreen) wrap.requestFullscreen();
      else if (wrap.webkitRequestFullscreen) wrap.webkitRequestFullscreen();
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
    }
  }

  /* ---------------- Ações globais (delegação) ---------------- */
  function initAcoes() {
    document.addEventListener('click', (e) => {
      // Clique no botão de inscrever
      const ins = e.target.closest('[data-inscrever]');
      if (ins) {
        const c = cursos.find((x) => x.id === Number(ins.dataset.inscrever));
        if (c) {
          c.status = 'inscrito';
          salvarEstado();
          toast(c.inscricao === 'aprovacao'
            ? `Inscrição em "${c.titulo}" enviada para aprovação do gerente.`
            : `Você está inscrito em "${c.titulo}"!`);
          renderExplore();
        }
        return;
      }

      // Clique em info
      const info = e.target.closest('[data-info]');
      if (info) {
        const c = cursos.find((x) => x.id === Number(info.dataset.info));
        if (c) toast(`${c.titulo} · ${c.categoria} · ${LABELS.inscricao[c.inscricao]}`);
        return;
      }

      // Clique em baixar certificado
      const bx = e.target.closest('[data-baixar]');
      if (bx) {
        toast('Download do certificado iniciado (simulação).');
        return;
      }

      // Voltar na tela de curso
      if (e.target.closest('#btn-curso-voltar')) {
        location.hash = telaAnterior || '#/explore';
        return;
      }

      // Toggle lista de módulos no curso
      if (e.target.closest('#btn-toggle-modulos')) {
        const lista = $('#c-lista-modulos');
        const hidden = lista.hidden;
        lista.hidden = !hidden;
        const iconUse = $('#btn-toggle-modulos use');
        if (iconUse) iconUse.setAttribute('href', hidden ? '#i-minus' : '#i-chevron');
        return;
      }

      // Abrir player a partir dos botões do curso
      if (e.target.closest('#btn-iniciar-curso-main') || e.target.closest('#btn-expandir-player') || e.target.closest('#modulo-item-card')) {
        abrirPlayer(cursoAtual);
        return;
      }

      // Fechar player
      if (e.target.closest('#btn-fechar-player')) {
        fecharPlayer();
        return;
      }

      // Navegação do player
      if (e.target.closest('#btn-player-prev')) {
        mudarSlide(-1);
        return;
      }
      if (e.target.closest('#btn-player-next') || e.target.closest('#player-slide-click-wrap')) {
        const total = (cursoAtual && cursoAtual.slides && cursoAtual.slides.length) || 3;
        if (playerSlideIdx === total - 1) concluirTreinamento();
        else mudarSlide(1);
        return;
      }
      if (e.target.closest('#btn-concluir-dentro-slide')) {
        concluirTreinamento();
        return;
      }
      if (e.target.closest('#btn-player-sound')) {
        toggleAudio();
        return;
      }
      if (e.target.closest('#btn-player-fullscreen')) {
        toggleFullscreen();
        return;
      }
      if (e.target.closest('#btn-player-drawer')) {
        toast('Menu do módulo expandido.');
        return;
      }

      // Avaliação por estrelas
      const star = e.target.closest('[data-star]');
      if (star && cursoAtual) {
        cursoAtual.avaliacao = Number(star.dataset.star);
        salvarEstado();
        renderEstrelas(cursoAtual);
        toast(`Avaliação de ${cursoAtual.avaliacao} estrelas registrada!`);
        return;
      }

      // Fechar modal do certificado
      if (e.target.closest('#btn-cert-fechar') || e.target.closest('#cert-modal-backdrop')) {
        fecharModalCertificado();
        return;
      }

      // Imprimir certificado
      if (e.target.closest('#btn-cert-imprimir')) {
        imprimirCertificado();
        return;
      }

      // Clique em um card de certificado no grid
      const certCard = e.target.closest('[data-cert-id]');
      if (certCard) {
        const id = Number(certCard.dataset.certId);
        const cert = certificadosCatalogo.find((x) => x.id === id);
        if (cert) {
          if (cert.status === 'valido' && cert.certificadoImg) {
            abrirModalCertificado(cert);
          } else if (cert.status === 'expirado') {
            toast('Este certificado expirou em 2 de dez. de 2025. É necessária reciclagem.');
          } else {
            toast(`Certificado em andamento (${cert.statusTexto}). Conclua o treinamento para liberar.`);
          }
        }
        return;
      }

      // Clique em qualquer card de curso para abrir detalhes
      const card = e.target.closest('.course');
      if (card && card.dataset.courseId) {
        location.hash = `#/curso/${card.dataset.courseId}`;
        return;
      }
    });

    document.addEventListener('keydown', (e) => {
      const modal = $('#player-modal');
      if (modal && !modal.hidden) {
        if (e.key === 'Escape') fecharPlayer();
        if (e.key === 'ArrowRight' || e.key === ' ') {
          e.preventDefault();
          const total = (cursoAtual && cursoAtual.slides && cursoAtual.slides.length) || 3;
          if (playerSlideIdx === total - 1) concluirTreinamento();
          else mudarSlide(1);
        }
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          mudarSlide(-1);
        }
      }

      const certModal = $('#cert-modal');
      if (certModal && !certModal.hidden && e.key === 'Escape') {
        fecharModalCertificado();
      }
    });
  }

  /* ---------------- Inicialização ---------------- */
  document.addEventListener('DOMContentLoaded', () => {
    carregarEstado();
    initLayout();
    initHero();
    initExplore();
    initAcoes();
    renderNotificacoes();
    window.addEventListener('hashchange', onRoute);
    onRoute();
  });
})();
