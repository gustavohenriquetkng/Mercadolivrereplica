/* ===============================
   CONFIGURAÇÃO WHATSAPP
================================= */

const WHATS_NUMBER = "5533999516082"; // 👉 TROQUE PELO SEU NÚMERO


/* ===============================
   BANCO DE DADOS DE EPIs
================================= */

const epis = [
    {
        id: 1,
        nome: "Capacete de Segurança",
        descricao: "Proteção contra impactos na cabeça",
        categoria: "Proteção da Cabeça",
        risco: "Impacto",
        norma: "NR6",
        imagem: "https://images.unsplash.com/photo-1567954970774-58d6aa6c50dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2FwYWNldGUlMjBkZSUyMFNlZ3VyYW4lQzMlQTdhfGVufDB8fDB8fHww",
        estoque: 50,
        detalhes: "Capacete de segurança em polietileno de alta densidade, resistente a impactos. Atende à NR6 e normas internacionais.CA: 29792",
        uso: "Deve ser utilizado em todos os ambientes de risco de queda de objetos."
    },
    {
        id: 2,
        nome: "Óculos de Proteção",
        descricao: "Proteção ocular contra partículas",
        categoria: "Proteção Visual",
        risco: "Partículas",
        norma: "NR6",
        imagem: "https://media.istockphoto.com/id/483378646/pt/foto/%C3%B3culos-de-seguran%C3%A7a-isolado-a-branco.webp?a=1&b=1&s=612x612&w=0&k=20&c=H5l4N5v0ws9unQhkphr9ohAAA_mZTMhMnSovfwOWlwU=",
        estoque: 100,
        detalhes: "Óculos de proteção com lentes policarbonato, resistentes a impactos. Proteção contra partículas e radiação.CA: 43789",
        uso: "Usar em atividades que envolvam risco de partículas nos olhos."
    },
    {
        id: 3,
        nome: "Protetor Auricular Plug",
        descricao: "Redução de ruído ocupacional",
        categoria: "Proteção Auditiva",
        risco: "Ruído",
        norma: "NR15",
        imagem: "https://media.istockphoto.com/id/627227504/pt/foto/ear-plugs-isolated-on-white-background-orange-ear-plugs-isolated.webp?a=1&b=1&s=612x612&w=0&k=20&c=dloKhetuw31XZz-Zx9MgzSuJztTwYN8tyDfFyO49Hdw= ",
        estoque: 80,
        detalhes: "Protetor auricular com redução de 25dB. Confortável para uso prolongado.CA: 12186",
        uso: "Usar em ambientes com ruído acima de 85dB."
    },
    {
        id: 4,
        nome: "Máscara Respiratória",
        descricao: "Proteção contra partículas e gases",
        categoria: "Proteção Respiratória",
        risco: "Inalação",
        norma: "NR9",
        imagem: "https://media.istockphoto.com/id/1210215333/pt/foto/protection-factor-for-n95-covid-19-corona-virus-filtering-face-mask.webp?a=1&b=1&s=612x612&w=0&k=20&c=94v_yIsF7BDFwZteUSvZ--ccczddkzeEjvei7W_ViR0=",
        estoque: 200,
        detalhes: "Máscara respiratória N95 com filtro de 5 camadas. Eficácia de 95% contra partículas.CA: 4115",
        uso: "Usar em ambientes com poeira, névoa ou gases tóxicos."
    },
    {
        id: 6,
        nome: "Bota de Segurança",
        descricao: "Proteção dos pés contra impactos",
        categoria: "Proteção dos Pés",
        risco: "Impacto",
        norma: "NR6",
        imagem: "https://media.istockphoto.com/id/466843741/pt/foto/botas-de-seguran%C3%A7a-isolado-a-branco.webp?a=1&b=1&s=612x612&w=0&k=20&c=I6cSoKU4TlwDuj3qUG45_NzXsvN8NeQYlxPFoc9Pkbg=",
        estoque: 60,
        detalhes: "Bota de segurança com bico de aço e solado antiderrapante. Resistência a impactos até 200J.CA: 42165",
        uso: "Usar em ambientes com risco de queda de objetos nos pés."
    },
    {
        id: 7,
        nome: "Cinto paraquedista",
        descricao: "Proteção contra quedas em altura",
        categoria: "Proteção contra Quedas",
        risco: "Queda",
        norma: "NR35",
        imagem: "https://media.istockphoto.com/id/977302930/pt/foto/construction-worker-use-safety-harness-and-safety-line-working-on-a-new-construction-site.webp?a=1&b=1&s=612x612&w=0&k=20&c=re2hE2epe9K-06DSztQbstTNErd8EOTRNGKmmN72ZhE=",
        estoque: 40,
        detalhes: "Cinturão de segurança com corda de 2 metros. Capacidade de suporte até 150kg.CA: 37126",
        uso: "Usar obrigatoriamente em trabalhos em altura acima de 2 metros."
    },
    {
        id: 8,
        nome: "Colete Refletor",
        descricao: "Visibilidade em ambientes de risco",
        categoria: "Proteção Corporal",
        risco: "Visibilidade",
        norma: "NR6",
        imagem: "https://media.istockphoto.com/id/1139576179/pt/foto/photos-reflective-vest.webp?a=1&b=1&s=612x612&w=0&k=20&c=tUX7bOyisydU2I0ip5oE_xqRGRwgs7OFqWGZNOGxp-o=",
        estoque: 120,
        detalhes: "Colete refletor com fitas refletivas de alta visibilidade. Cores fluorescentes.CA: 39543",
        uso: "Usar em ambientes com baixa visibilidade ou próximo a tráfego."
    },
    {
        id: 9,
        nome: "Luvas de Latex",
        descricao: "Proteção das mãos contra agentes biológicos",
        categoria: "Proteção das Mãos",
        risco: "Agentes Biológicos",
        norma: "NR6",
        imagem: "https://media.istockphoto.com/id/1215673535/pt/foto/an-asian-chinese-female-wearing-her-latex-surgical-gloves-at-home-before-the-cleaning-process.webp?a=1&b=1&s=612x612&w=0&k=20&c=5kaHyOr16q19WRxIaQuv_tYD5roBFEjn9WsraJ3Swig=",
        estoque: 150,
        detalhes: "Luvas de látex descartáveis, resistentes a perfurações. Confortáveis e anatômicas.CA: 15352",
        uso: "Usar ao manipular materiais biológicos ou contaminados."  
    },
    {
        id: 10,
        nome: "Arnês de Segurança",
        descricao: "Proteção total contra quedas",
        categoria: "Proteção contra Quedas",
        risco: "Queda",
        norma: "NR35",
        imagem: "https://media.istockphoto.com/id/1440872328/pt/foto/3d-rendering-realistic-construction-safety-harness.webp?a=1&b=1&s=612x612&w=0&k=20&c=Z-xidcH22Yjb-mP_b73Lo0lXXnDARZOHsySEPJsGK7I=",
        estoque: 35,
        detalhes: "Arnês de segurança com 5 pontos de fixação. Distribuição equilibrada de peso.CA: 35589",
        uso: "Usar em trabalhos em altura com risco de queda total."
    },
    {
        id: 11,
        nome: "Luva de Vaqueta",
        descricao: "Proteção das mãos contra abrasão",
        categoria: "Proteção das Mãos",
        risco: "Abrasão",
        norma: "NR6",
        imagem: "https://media.istockphoto.com/id/1197524229/pt/foto/pair-of-warm-leather-protection-gloves-on-the-background-of-a-round-bulb-on-the-table.webp?a=1&b=1&s=612x612&w=0&k=20&c=VoCFOeMuVeO4eY6OgC1qR6jCItbrmatrYBK-AT3IP5c=",
        estoque: 75,
        detalhes: "Luva de vaqueta com reforço na palma e dedos. Confortável e resistente.CA: 25387",
        uso: "Usar ao manipular materiais abrasivos ou pesados."
    },
    {
        id: 12,
        nome: "Perneira de Raspa",
        descricao: "Proteção das pernas contra cortes",
        categoria: "Proteção das Pernas",
        risco: "Cortes",
        norma: "NR6",
        imagem: "https://media.istockphoto.com/id/1385629867/pt/foto/hiker-wears-gaiters-over-trekking-boots-to-protect-against-water-insects-and-cold-clothing-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=e1EwxFuSbRKLt6v0roIjXBKfH5zmYsSuH7Hr5mMggBc=",
        estoque: 55,
        detalhes: "Perneira de raspa com ajuste em velcro. Proteção eficaz contra cortes.CA: 13990",
        uso: "Usar em atividades com risco de cortes nas pernas."
    },
    {
        id: 13,
        nome: "Macacão quimíco",
        descricao: "Proteção corporal contra produtos químicos",
        categoria: "Proteção Corporal",
        risco: "Produtos Químicos",
        norma: "NR6",
        imagem: "https://media.istockphoto.com/id/2221343182/pt/foto/scientist-in-ppe-mask-and-goggles-doing-research-and-working-with-microscope-in-laboratory.webp?a=1&b=1&s=612x612&w=0&k=20&c=OrXU4xsfUbD9_sq6jSn8gaK4XLFZ-_kgxWTTafVIga0=",
        estoque: 30,
        detalhes: "Macacão químico em polietileno de alta densidade. Proteção total contra produtos químicos.CA: 35752",
        uso: "Usar em atividades com risco de exposição a produtos químicos perigosos."
    },
    {
        id: 14,
        nome:"Luva Nitrilica",
        descricao: "Proteção das mãos contra produtos químicos",
        categoria: "Proteção das Mãos",
        risco: "Produtos Químicos",
        norma: "NR6",
        imagem: "https://media.istockphoto.com/id/499084521/pt/foto/luva-de-borracha.webp?a=1&b=1&s=612x612&w=0&k=20&c=JNLSmMU8rnSvn4nDg0JbtuzD3N_suLnfV9IMzyetdpI=",
        estoque: 180,
        detalhes: "Luva nitrílica com alta resistência a produtos químicos. Confortável e flexível.CA: 36755",
        uso: "Usar ao manipular produtos químicos ou substâncias tóxicas."
    }
];


/* ===============================
   CATEGORIAS DE PROTEÇÃO
================================= */

const categorias = [
    
];


/* ===============================
   NORMAS REGULAMENTADORAS
================================= */

const normas = [
    {
        codigo: "NR6",
        titulo: "Equipamento de Proteção Individual",
        conceito: "Estabelece os requisitos para o uso obrigatório de EPIs em ambientes de trabalho.",
        aplicacao: "Aplicável a todas as empresas que possuem trabalhadores expostos a riscos ocupacionais.",
        relacao: "Norma fundamental que regulamenta todos os EPIs apresentados nesta plataforma."
    },
    {
        codigo: "NR9",
        titulo: "Avaliação e Controle de Riscos Ambientais",
        conceito: "Estabelece procedimentos para identificar, avaliar e controlar riscos ambientais.",
        aplicacao: "Obrigatória para empresas com riscos ambientais (químicos, físicos, biológicos).",
        relacao: "Determina a necessidade de EPIs respiratórios em ambientes com contaminação."
    },
    {
        codigo: "NR15",
        titulo: "Atividades e Operações Insalubres",
        conceito: "Define atividades insalubres e estabelece limites de exposição.",
        aplicacao: "Aplicável a atividades com exposição a ruído, calor, radiação e outros agentes.",
        relacao: "Justifica o uso de protetores auriculares e outros EPIs em ambientes insalubres."
    },
    {
        codigo: "NR35",
        titulo: "Trabalho em Altura",
        conceito: "Estabelece requisitos para segurança em trabalhos em altura acima de 2 metros.",
        aplicacao: "Obrigatória para todas as atividades em altura.",
        relacao: "Exige o uso de cinturões e arneses de segurança em trabalhos em altura."
    }
];


/* ===============================
   CARRINHO DE COMPRAS
================================= */

let carrinho = [];

function carregarCarrinho() {
    const stored = localStorage.getItem("carrinho");
    carrinho = stored ? JSON.parse(stored) : [];
    atualizarContadorCarrinho();
}

function salvarCarrinho() {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    atualizarContadorCarrinho();
}

function adicionarAoCarrinho(epiId) {
    const epi = epis.find(p => p.id === epiId);
    if (!epi) return;

    const itemExistente = carrinho.find(item => item.id === epiId);

    if (itemExistente) {
        itemExistente.quantidade++;
    } else {
        carrinho.push({
            id: epiId,
            nome: epi.nome,
            preco: 100, // Preço simulado
            quantidade: 1
        });
    }

    salvarCarrinho();
    mostrarNotificacao(`${epi.nome} adicionado ao carrinho!`);
}

function removerDoCarrinho(epiId) {
    carrinho = carrinho.filter(item => item.id !== epiId);
    salvarCarrinho();
}

function atualizarQuantidade(epiId, quantidade) {
    const item = carrinho.find(i => i.id === epiId);
    if (item) {
        item.quantidade = quantidade;
        if (item.quantidade <= 0) {
            removerDoCarrinho(epiId);
        } else {
            salvarCarrinho();
        }
    }
}

function atualizarContadorCarrinho() {
    const contador = document.getElementById("cart-count");
    if (contador) {
        const total = carrinho.reduce((sum, item) => sum + item.quantidade, 0);
        contador.textContent = total;
    }
}

function calcularTotalCarrinho() {
    return carrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);
}


/* ===============================
   FORMATAÇÃO
================================= */

function formatarPreco(preco) {
    return preco.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

function mostrarNotificacao(mensagem) {
    const notif = document.createElement("div");
    notif.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #0A7C2F;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    notif.textContent = mensagem;
    document.body.appendChild(notif);

    setTimeout(() => {
        notif.style.animation = "slideOut 0.3s ease";
        setTimeout(() => notif.remove(), 300);
    }, 3000);
}


/* ===============================
   CRIAR CARD DE EPI
================================= */

function criarCardEpi(epi) {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
        <img src="${epi.imagem}" class="product-image" alt="${epi.nome}">
        <span class="product-category">${epi.categoria}</span>
        <h3 class="product-title">${epi.nome}</h3>
        <p class="product-description">${epi.descricao}</p>
        <div class="product-risk">⚠️ Risco: ${epi.risco}</div>
        <div class="product-buttons">
            <button class="btn-details" onclick="abrirDetalhesEpi(${epi.id})">Ver Detalhes</button>
            <button class="btn-cart" onclick="adicionarAoCarrinho(${epi.id})">Carrinho</button>
            <button class="btn-whatsapp" onclick="enviarWhatsApp(${epi.id})">WhatsApp</button>
        </div>
    `;

    return card;
}


/* ===============================
   RENDERIZAR EPIs
================================= */

function renderizarEpis(lista = epis) {
    const grid = document.getElementById("products-grid");
    if (!grid) return;

    grid.innerHTML = "";
    lista.forEach(epi => {
        grid.appendChild(criarCardEpi(epi));
    });
}


/* ===============================
   FILTRO POR CATEGORIA
================================= */

function filtrarPorCategoria(categoria) {
    if (categoria === "Todos") {
        renderizarEpis(epis);
    } else {
        const filtrados = epis.filter(epi => epi.categoria === categoria);
        renderizarEpis(filtrados);
    }

    // Atualizar botões ativos
    document.querySelectorAll(".category-btn").forEach(btn => {
        btn.classList.remove("active");
    });
    event.target.classList.add("active");
}


/* ===============================
   BUSCA DE EPIs
================================= */

function buscarEpis() {
    const termo = document.querySelector(".search-input").value.toLowerCase();

    if (termo === "") {
        renderizarEpis(epis);
        return;
    }

    const filtrados = epis.filter(epi =>
        epi.nome.toLowerCase().includes(termo) ||
        epi.descricao.toLowerCase().includes(termo) ||
        epi.categoria.toLowerCase().includes(termo)
    );

    renderizarEpis(filtrados);
}


/* ===============================
   MODAL DE DETALHES
================================= */

function abrirDetalhesEpi(epiId) {
    const epi = epis.find(p => p.id === epiId);
    if (!epi) return;

    const modal = document.getElementById("epi-modal");
    if (!modal) return;

    modal.innerHTML = `
        <div class="modal-content">
            <span class="modal-close" onclick="fecharModal()">&times;</span>
            <img src="${epi.imagem}" class="modal-image" alt="${epi.nome}">
            <h2 class="modal-title">${epi.nome}</h2>

            <div class="modal-section">
                <div class="modal-section-title">Descrição</div>
                <div class="modal-section-content">${epi.descricao}</div>
            </div>

            <div class="modal-section">
                <div class="modal-section-title">Detalhes Técnicos</div>
                <div class="modal-section-content">${epi.detalhes}</div>
            </div>

            <div class="modal-section">
                <div class="modal-section-title">Categoria</div>
                <div class="modal-section-content">${epi.categoria}</div>
            </div>

            <div class="modal-section">
                <div class="modal-section-title">Tipo de Risco Protegido</div>
                <div class="modal-section-content">${epi.risco}</div>
            </div>

            <div class="modal-section">
                <div class="modal-section-title">Norma Regulamentadora</div>
                <div class="modal-section-content">${epi.norma}</div>
            </div>

            <div class="modal-section">
                <div class="modal-section-title">Forma Correta de Utilização</div>
                <div class="modal-section-content">${epi.uso}</div>
            </div>

            <div class="modal-section">
                <div class="modal-section-title">Estoque Disponível</div>
                <div class="modal-section-content">${epi.estoque} unidades</div>
            </div>

            <div class="product-buttons" style="margin-top: 20px;">
                <button class="btn-cart" onclick="adicionarAoCarrinho(${epi.id}); fecharModal();">Adicionar ao Carrinho</button>
                <button class="btn-whatsapp" onclick="enviarWhatsApp(${epi.id})">Consultar WhatsApp</button>
            </div>
        </div>
    `;

    document.getElementById("epi-modal").classList.add("active");
}

function fecharModal() {
    const modal = document.getElementById("epi-modal");
    if (modal) {
        modal.classList.remove("active");
    }
}


/* ===============================
   WHATSAPP
================================= */

function enviarWhatsApp(epiId) {
    const epi = epis.find(p => p.id === epiId);
    if (!epi) return;

    const mensagem = `
Olá! 👋

Tenho interesse neste EPI:

🛡️ Equipamento: ${epi.nome}
📋 Categoria: ${epi.categoria}
⚠️ Proteção: ${epi.risco}
📄 Norma: ${epi.norma}

Gostaria de mais informações e orientação técnica.
    `;

    const url = `https://wa.me/${WHATS_NUMBER}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
}


/* ===============================
   RENDERIZAR CATEGORIAS
================================= */

function renderizarCategorias() {
    const container = document.getElementById("category-filter");
    if (!container) return;

    container.innerHTML = '<button class="category-btn active" onclick="filtrarPorCategoria(\'Todos\')">Todos</button>';

    categorias.forEach(cat => {
        const btn = document.createElement("button");
        btn.classList.add("category-btn");
        btn.textContent = cat;
        btn.onclick = () => filtrarPorCategoria(cat);
        container.appendChild(btn);
    });
}


/* ===============================
   RENDERIZAR NORMAS
================================= */

function renderizarNormas() {
    const container = document.getElementById("normas-grid");
    if (!container) return;

    container.innerHTML = "";

    normas.forEach(norma => {
        const card = document.createElement("div");
        card.classList.add("norma-card");
        card.innerHTML = `
            <h3 class="norma-title">${norma.codigo} - ${norma.titulo}</h3>
            <p class="norma-content"><strong>Conceito:</strong> ${norma.conceito}</p>
            <p class="norma-content"><strong>Aplicação:</strong> ${norma.aplicacao}</p>
            <p class="norma-content"><strong>Relação com EPIs:</strong> ${norma.relacao}</p>
        `;
        container.appendChild(card);
    });
}


/* ===============================
   MENU SIDEBAR
================================= */

function configurarSidebar() {
    const menuIcon = document.getElementById("menu-icon");
    const sidebar = document.getElementById("sidebar");

    if (menuIcon && sidebar) {
        menuIcon.addEventListener("click", () => {
            sidebar.classList.toggle("active");
        });

        // Fechar ao clicar em um link
        sidebar.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                sidebar.classList.remove("active");
            });
        });
    }
}


/* ===============================
   BUSCA
================================= */

function configurarBusca() {
    const searchInput = document.querySelector(".search-input");
    const searchBtn = document.querySelector(".search-btn");

    if (searchInput) {
        searchInput.addEventListener("input", buscarEpis);
    }

    if (searchBtn) {
        searchBtn.addEventListener("click", buscarEpis);
    }
}


/* ===============================
   INICIALIZAÇÃO
================================= */

document.addEventListener("DOMContentLoaded", () => {
    carregarCarrinho();
    renderizarEpis();
    renderizarCategorias();
    renderizarNormas();
    configurarSidebar();
    configurarBusca();

    // Fechar modal ao clicar fora
    const modal = document.getElementById("epi-modal");
    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                fecharModal();
            }
        });
    }
});


    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");

    function mostrarSlide(index) {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[index].classList.add("active");
    }

    document.querySelector(".next").addEventListener("click", () => {
        slideIndex = (slideIndex + 1) % slides.length;
        mostrarSlide(slideIndex);
    });

    document.querySelector(".prev").addEventListener("click", () => {
        slideIndex = (slideIndex - 1 + slides.length) % slides.length;
        mostrarSlide(slideIndex);
    });
document.addEventListener("DOMContentLoaded", () => {

    const elementos = document.querySelectorAll(".smooth");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {

            if(entry.isIntersecting){
                entry.target.classList.add("show");
            }

        });
    }, { threshold: 0.2 });

    elementos.forEach(el => observer.observe(el));

});




