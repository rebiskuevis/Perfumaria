// Dados dos perfumes
const perfumes = {
  masculinoDia: [
    {
      id: 1,
      nome: "Acqua di Gio - Giorgio Armani",
      descricao: "Notas frescas de bergamota e sal marinho",
      precos: {
        30: 299.9,
        50: 399.9,
        100: 599.9,
      },
      tipo: "dia",
      genero: "masculino",
    },
    {
      id: 2,
      nome: "Light Blue - Dolce & Gabbana",
      descricao: "Notas cítricas com toque de madeira e pimenta",
      precos: {
        30: 279.9,
        50: 379.9,
        100: 549.9,
      },
      tipo: "dia",
      genero: "masculino",
    },
    {
      id: 3,
      nome: "Sauvage - Dior",
      descricao: "Fragrância fresca com notas de bergamota e ambroxan",
      precos: {
        30: 329.9,
        50: 429.9,
        100: 629.9,
      },
      tipo: "dia",
      genero: "masculino",
    },
    {
      id: 10,
      nome: "Invictus - Paco Rabanne",
      descricao:
        "Fragrância moderna com notas de toranja, louro marinho e madeiras",
      precos: {
        30: 289.9,
        50: 389.9,
        100: 589.9,
      },
      tipo: "dia",
      genero: "masculino",
      imagem: "https://source.unsplash.com/400x400/?perfume-invictus",
    },
    {
      id: 11,
      nome: "Bleu de Chanel - Chanel",
      descricao: "Fragrância amadeirada aromática com notas de cedro e sândalo",
      precos: {
        30: 349.9,
        50: 449.9,
        100: 649.9,
      },
      tipo: "dia",
      genero: "masculino",
      imagem: "https://source.unsplash.com/400x400/?perfume-bleu-chanel",
    },
    {
      id: 12,
      nome: "Luna Rossa - Prada",
      descricao:
        "Fragrância fresca e sofisticada com notas de lavanda e sálvia",
      precos: {
        30: 279.9,
        50: 379.9,
        100: 579.9,
      },
      tipo: "dia",
      genero: "masculino",
      imagem: "https://source.unsplash.com/400x400/?perfume-luna-rossa",
    },
  ],
  masculinoNoite: [
    {
      id: 4,
      nome: "Le Male - Jean Paul Gaultier",
      descricao: "Baunilha e lavanda",
      precos: {
        30: 289.9,
        50: 389.9,
        100: 589.9,
      },
      tipo: "noite",
      genero: "masculino",
    },
    {
      id: 5,
      nome: "One Million - Paco Rabanne",
      descricao: "Couro e âmbar",
      precos: {
        30: 299.9,
        50: 399.9,
        100: 599.9,
      },
      tipo: "noite",
      genero: "masculino",
    },
    {
      id: 13,
      nome: "The One - Dolce & Gabbana",
      descricao: "Tabaco e gengibre",
      precos: {
        30: 309.9,
        50: 409.9,
        100: 609.9,
      },
      tipo: "noite",
      genero: "masculino",
    },
    {
      id: 14,
      nome: "Stronger With You - Armani",
      descricao: "Baunilha e cardamomo",
      precos: {
        30: 319.9,
        50: 419.9,
        100: 619.9,
      },
      tipo: "noite",
      genero: "masculino",
    },
    {
      id: 15,
      nome: "Valentino Uomo - Valentino",
      descricao: "Café e chocolate",
      precos: {
        30: 329.9,
        50: 429.9,
        100: 629.9,
      },
      tipo: "noite",
      genero: "masculino",
    },
  ],
  femininoDia: [
    {
      id: 6,
      nome: "J'adore - Dior",
      descricao: "Jasmim e ylang-ylang",
      precos: {
        30: 319.9,
        50: 419.9,
        100: 619.9,
      },
      tipo: "dia",
      genero: "feminino",
    },
    {
      id: 7,
      nome: "Good Girl - Carolina Herrera",
      descricao: "Amêndoa e café",
      precos: {
        30: 309.9,
        50: 409.9,
        100: 609.9,
      },
      tipo: "dia",
      genero: "feminino",
    },
    {
      id: 16,
      nome: "Miss Dior - Dior",
      descricao: "Rosa e peônia",
      precos: {
        30: 329.9,
        50: 429.9,
        100: 629.9,
      },
      tipo: "dia",
      genero: "feminino",
    },
    {
      id: 17,
      nome: "Light Blue - D&G",
      descricao: "Limão e maçã",
      precos: {
        30: 289.9,
        50: 389.9,
        100: 589.9,
      },
      tipo: "dia",
      genero: "feminino",
    },
    {
      id: 18,
      nome: "Chance - Chanel",
      descricao: "Jasmim e pimenta rosa",
      precos: {
        30: 349.9,
        50: 449.9,
        100: 649.9,
      },
      tipo: "dia",
      genero: "feminino",
    },
  ],
  femininoNoite: [
    {
      id: 8,
      nome: "La Vie Est Belle - Lancôme",
      descricao: "Íris e baunilha",
      precos: {
        30: 329.9,
        50: 429.9,
        100: 629.9,
      },
      tipo: "noite",
      genero: "feminino",
    },
    {
      id: 9,
      nome: "Black Opium - YSL",
      descricao: "Café e baunilha",
      precos: {
        30: 339.9,
        50: 439.9,
        100: 639.9,
      },
      tipo: "noite",
      genero: "feminino",
    },
    {
      id: 19,
      nome: "Mon Paris - YSL",
      descricao: "Morango e patchouli",
      precos: {
        30: 319.9,
        50: 419.9,
        100: 619.9,
      },
      tipo: "noite",
      genero: "feminino",
    },
    {
      id: 20,
      nome: "Sì - Giorgio Armani",
      descricao: "Cassis e frésia",
      precos: {
        30: 309.9,
        50: 409.9,
        100: 609.9,
      },
      tipo: "noite",
      genero: "feminino",
    },
    {
      id: 21,
      nome: "Alien - Mugler",
      descricao: "Jasmim e âmbar",
      precos: {
        30: 349.9,
        50: 449.9,
        100: 649.9,
      },
      tipo: "noite",
      genero: "feminino",
    },
  ],
}

// Carrinho de compras
let carrinho = []
let produtosFiltrados = []

// Função para aplicar filtros
function aplicarFiltros() {
  const nomeBusca = document.getElementById("busca-nome").value.toLowerCase()
  const mlSelecionado = document.getElementById("filtro-ml").value
  const tipoSelecionado = document.getElementById("filtro-tipo").value

  // Combina todos os perfumes em um array
  const todosPerfumes = [
    ...perfumes.masculinoDia,
    ...perfumes.masculinoNoite,
    ...perfumes.femininoDia,
    ...perfumes.femininoNoite,
  ]

  // Aplica os filtros
  produtosFiltrados = todosPerfumes.filter((perfume) => {
    const matchNome = perfume.nome.toLowerCase().includes(nomeBusca)
    const matchML = !mlSelecionado || perfume.precos[mlSelecionado]
    const matchTipo = !tipoSelecionado || perfume.tipo === tipoSelecionado
    return matchNome && matchML && matchTipo
  })

  exibirProdutos()
}

// Adiciona event listeners para os filtros
document.getElementById("busca-nome").addEventListener("input", aplicarFiltros)
document.getElementById("filtro-ml").addEventListener("change", aplicarFiltros)
document
  .getElementById("filtro-tipo")
  .addEventListener("change", aplicarFiltros)

// Função para exibir os produtos
function exibirProdutos() {
  if (produtosFiltrados.length > 0) {
    // Organiza os produtos filtrados por categoria
    const produtosPorCategoria = {
      masculinoDia: produtosFiltrados.filter(
        (p) => p.genero === "masculino" && p.tipo === "dia"
      ),
      masculinoNoite: produtosFiltrados.filter(
        (p) => p.genero === "masculino" && p.tipo === "noite"
      ),
      femininoDia: produtosFiltrados.filter(
        (p) => p.genero === "feminino" && p.tipo === "dia"
      ),
      femininoNoite: produtosFiltrados.filter(
        (p) => p.genero === "feminino" && p.tipo === "noite"
      ),
    }

    Object.keys(produtosPorCategoria).forEach((categoria) => {
      const containerEl = document.getElementById(
        categoria.replace(/([A-Z])/g, "-$1").toLowerCase()
      )
      if (containerEl) {
        containerEl.innerHTML = ""
        produtosPorCategoria[categoria].forEach((perfume) => {
          const produtoEl = document.createElement("div")
          produtoEl.className = "produto"
          produtoEl.innerHTML = `
                        <h3>${perfume.nome}</h3>
                        <p class="descricao">${perfume.descricao}</p>
                        <div class="produto-selecao">
                            <select class="select-ml" onchange="atualizarPreco(this, ${
                              perfume.id
                            })">
                                <option value="">Selecione o volume</option>
                                <option value="30">30ml - R$ ${perfume.precos[30].toFixed(
                                  2
                                )}</option>
                                <option value="50">50ml - R$ ${perfume.precos[50].toFixed(
                                  2
                                )}</option>
                                <option value="100">100ml - R$ ${perfume.precos[100].toFixed(
                                  2
                                )}</option>
                            </select>
                            <button class="btn-adicionar" onclick="adicionarAoCarrinho(${
                              perfume.id
                            }, this.parentElement.querySelector('.select-ml').value)" disabled>
                                Adicionar ao Carrinho
                            </button>
                        </div>
                    `
          containerEl.appendChild(produtoEl)
        })
      }
    })
  } else {
    // Se não houver filtros ativos, mostra todos os produtos
    Object.keys(perfumes).forEach((categoria) => {
      const containerEl = document.getElementById(
        categoria.replace(/([A-Z])/g, "-$1").toLowerCase()
      )
      if (containerEl) {
        containerEl.innerHTML = ""
        perfumes[categoria].forEach((perfume) => {
          const produtoEl = document.createElement("div")
          produtoEl.className = "produto"
          produtoEl.innerHTML = `
                        <h3>${perfume.nome}</h3>
                        <p class="descricao">${perfume.descricao}</p>
                        <div class="produto-selecao">
                            <select class="select-ml" onchange="atualizarPreco(this, ${
                              perfume.id
                            })">
                                <option value="">Selecione o volume</option>
                                <option value="30">30ml - R$ ${perfume.precos[30].toFixed(
                                  2
                                )}</option>
                                <option value="50">50ml - R$ ${perfume.precos[50].toFixed(
                                  2
                                )}</option>
                                <option value="100">100ml - R$ ${perfume.precos[100].toFixed(
                                  2
                                )}</option>
                            </select>
                            <button class="btn-adicionar" onclick="adicionarAoCarrinho(${
                              perfume.id
                            }, this.parentElement.querySelector('.select-ml').value)" disabled>
                                Adicionar ao Carrinho
                            </button>
                        </div>
                    `
          containerEl.appendChild(produtoEl)
        })
      }
    })
  }
}

// Função para atualizar preço e habilitar botão quando ml é selecionado
function atualizarPreco(selectEl, perfumeId) {
  const ml = selectEl.value
  const btnAdicionar = selectEl.parentElement.querySelector(".btn-adicionar")
  btnAdicionar.disabled = !ml
}

// Função para adicionar ao carrinho
function adicionarAoCarrinho(id, ml) {
  if (!ml) {
    alert("Por favor, selecione o volume do perfume.")
    return
  }

  const perfume = Object.values(perfumes)
    .flat()
    .find((p) => p.id === id)

  const itemCarrinho = {
    id: perfume.id,
    nome: perfume.nome,
    preco: perfume.precos[ml],
    ml: parseInt(ml),
    quantidade: 1,
  }

  const itemExistente = carrinho.find(
    (item) => item.id === itemCarrinho.id && item.ml === itemCarrinho.ml
  )

  if (itemExistente) {
    itemExistente.quantidade++
  } else {
    carrinho.push(itemCarrinho)
  }

  atualizarCarrinho()
}

// Função para atualizar o carrinho
function atualizarCarrinho() {
  const carrinhoEl = document.getElementById("itens-carrinho")
  const totalEl = document.getElementById("valor-total")
  const qtdEl = document.getElementById("carrinho-qtd")

  carrinhoEl.innerHTML = ""
  let total = 0

  carrinho.forEach((item) => {
    const itemEl = document.createElement("div")
    itemEl.className = "item-carrinho"
    itemEl.innerHTML = `
            <span>${item.nome} - ${item.ml}ml</span>
            <div class="quantidade-controles">
                <button onclick="alterarQuantidade(${item.id}, -1)">-</button>
                <span>${item.quantidade}</span>
                <button onclick="alterarQuantidade(${item.id}, 1)">+</button>
                <button onclick="removerDoCarrinho(${item.id})">Remover</button>
            </div>
            <span>R$ ${(item.preco * item.quantidade).toFixed(2)}</span>
        `
    carrinhoEl.appendChild(itemEl)
    total += item.preco * item.quantidade
  })

  totalEl.textContent = total.toFixed(2)
  qtdEl.textContent = `(${carrinho.reduce(
    (acc, item) => acc + item.quantidade,
    0
  )})`
}

// Função para alterar quantidade
function alterarQuantidade(id, delta) {
  const item = carrinho.find((item) => item.id === id)
  if (item) {
    item.quantidade += delta
    if (item.quantidade <= 0) {
      removerDoCarrinho(id)
    } else {
      atualizarCarrinho()
    }
  }
}

// Função para remover do carrinho
function removerDoCarrinho(id) {
  carrinho = carrinho.filter((item) => item.id !== id)
  atualizarCarrinho()
}

// Função para finalizar compra
function finalizarCompra() {
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio!")
    return
  }

  // Monta a mensagem para o WhatsApp
  let mensagem = "🛍️ *NOVO PEDIDO - PERFUMARIA ELEGANCE*\n\n"
  mensagem += "📝 *ITENS DO PEDIDO:*\n"

  let total = 0
  carrinho.forEach((item) => {
    const subtotal = item.preco * item.quantidade
    mensagem += `\n• ${item.nome}\n`
    mensagem += `   ${item.quantidade}x ${item.ml}ml\n`
    mensagem += `   R$ ${subtotal.toFixed(2)}\n`
    total += subtotal
  })
  mensagem += "\n💰 *VALOR TOTAL: R$ " + total.toFixed(2) + "*\n"

  // Formata a data no padrão brasileiro
  const dataAtual = new Date()
  const dia = dataAtual.getDate().toString().padStart(2, "0")
  const mes = (dataAtual.getMonth() + 1).toString().padStart(2, "0")
  const ano = dataAtual.getFullYear()
  mensagem += "\n📅 Data: " + `${dia}/${mes}/${ano}`

  // Número do WhatsApp (substitua pelo número que receberá os pedidos)
  const numeroWhatsApp = "5521964654302" // Altere para o número correto

  // Codifica a mensagem para URL
  const mensagemCodificada = encodeURIComponent(mensagem)
  // Detecta se é dispositivo móvel
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  
  // Define a URL base de acordo com o dispositivo
  const whatsappURL = isMobile
    ? `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${mensagemCodificada}`
    : `https://web.whatsapp.com/send?phone=${numeroWhatsApp}&text=${mensagemCodificada}`

  // Abre o link do WhatsApp
  window.open(whatsappURL, "_blank")
  
  carrinho = []
  atualizarCarrinho()
  alert(
    `Você será redirecionado para o ${isMobile ? "aplicativo do" : ""} WhatsApp para finalizar seu pedido!`
  )
}

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  exibirProdutos()
})
