# 🛡️ Plataforma Educacional de EPIs - Segurança do Trabalho

Uma plataforma web interativa e educacional para ensinar sobre Equipamentos de Proteção Individual (EPIs), desenvolvida como ferramenta didática para o Curso Técnico em Segurança do Trabalho.

## 📋 Características Principais

### 🎨 Identidade Visual Institucional
- **Cores Principais**: Verde institucional (#0A7C2F), Verde secundário (#38B000), Verde claro (#D8F3DC)
- **Design Responsivo**: Adaptado para desktop, tablet e mobile
- **Interface Intuitiva**: Menu lateral animado e navegação clara

### 🛡️ Catálogo de EPIs
- **10 Equipamentos Reais**: Capacetes, óculos, protetores auriculares, máscaras, luvas, botas, cinturões, arneses, coletes e aventais
- **Informações Completas**: Nome, descrição, categoria, tipo de risco, norma regulamentadora
- **Detalhes Técnicos**: Especificações, forma de uso, estoque disponível
- **Modal Interativo**: Visualização ampliada com todas as informações

### 📂 Sistema de Categorias
- Proteção da Cabeça
- Proteção Auditiva
- Proteção Respiratória
- Proteção Visual
- Proteção das Mãos
- Proteção dos Pés
- Proteção contra Quedas
- Proteção Corporal

### 📖 Normas Regulamentadoras
- **NR6**: Equipamento de Proteção Individual
- **NR9**: Avaliação e Controle de Riscos Ambientais
- **NR15**: Atividades e Operações Insalubres
- **NR35**: Trabalho em Altura

### 🛒 Carrinho Didático
- Adicionar/remover EPIs
- Alterar quantidades
- Armazenamento via LocalStorage
- Cálculo automático de totais

### 💳 Checkout Educacional
- Formulário com dados do trabalhador
- Simulação de entrega de EPIs
- Geração de ficha de entrega
- Envio via WhatsApp

### 👨‍🏫 Painel Administrativo
- **Login Seguro**: Usuário: `admin` | Senha: `1234`
- **Dashboard**: Estatísticas de EPIs, estoque e categorias
- **Gerenciar EPIs**: Adicionar, editar e deletar equipamentos
- **Gerenciar Categorias**: Criar e remover categorias
- **Gerenciar Normas**: Adicionar normas regulamentadoras
- **Relatórios**: Estoque, status e resumo por categoria

### 📱 Integração WhatsApp
- Botões em cada EPI para consulta via WhatsApp
- Mensagens automáticas com informações do produto
- Integração no checkout para envio de ficha de entrega

## 🚀 Como Usar

### Instalação
1. Extraia os arquivos do projeto
2. Abra `index.html` em um navegador web moderno
3. Não requer servidor - funciona localmente

### Navegação Principal

#### 🏠 Início
- Banner educativo com apresentação da plataforma
- Botões para explorar EPIs e conhecer normas

#### 🛡️ Produtos
- Grade de EPIs com filtro por categoria
- Busca por nome ou descrição
- Botões para ver detalhes, adicionar ao carrinho ou consultar via WhatsApp

#### 📂 Categorias
- Explicação de cada categoria de proteção
- Informações sobre tipos de risco

#### 📖 Normas Regulamentadoras
- Detalhes de cada norma
- Conceito, aplicação e relação com EPIs

#### 📚 Sobre o Curso
- Objetivos do Curso Técnico em Segurança do Trabalho
- Importância da prevenção de acidentes

#### 📞 Contato
- Formulário de mensagem
- Links para redes sociais

### Painel Administrativo

1. Acesse `pages/admin.html`
2. Faça login com:
   - **Usuário**: admin
   - **Senha**: 1234

#### Funcionalidades do Admin

**Dashboard**
- Visualizar estatísticas gerais
- Total de EPIs, estoque, categorias e normas

**Gerenciar EPIs**
- Adicionar novos equipamentos
- Editar informações existentes
- Deletar EPIs
- Visualizar tabela com todos os produtos

**Categorias**
- Criar novas categorias
- Remover categorias existentes

**Normas**
- Adicionar normas regulamentadoras
- Visualizar normas cadastradas

**Relatórios**
- Relatório de estoque com status
- Resumo de EPIs por categoria

### Carrinho e Checkout

1. **Adicionar ao Carrinho**: Clique em "Carrinho" em qualquer EPI
2. **Visualizar Carrinho**: Clique no ícone 🛒 no header
3. **Alterar Quantidade**: Modifique no carrinho
4. **Ir para Checkout**: Clique em "Ir para Checkout"
5. **Preencher Dados**: Nome, função, setor, data
6. **Confirmar Entrega**: Finalize a simulação
7. **Enviar via WhatsApp**: Compartilhe a ficha

## 🔧 Configuração

### Número WhatsApp
Para alterar o número do WhatsApp, edite em `scripts.js`:

```javascript
const WHATS_NUMBER = "5599999999999"; // Troque pelo seu número
```

### Dados de EPIs
Os EPIs estão definidos em `scripts.js` no array `epis`. Você pode adicionar novos equipamentos:

```javascript
{
    id: 11,
    nome: "Novo EPI",
    descricao: "Descrição",
    categoria: "Categoria",
    risco: "Tipo de Risco",
    norma: "NR6",
    imagem: "URL da imagem",
    estoque: 50,
    detalhes: "Detalhes técnicos",
    uso: "Como usar"
}
```

## 📁 Estrutura de Arquivos

```
Epi/
├── index.html           # Página principal
├── styles.css           # Estilos completos
├── scripts.js           # Lógica JavaScript
├── README.md            # Este arquivo
├── fav.ico/             # Ícones
├── img/                 # Imagens
└── pages/
    ├── admin.html       # Painel administrativo
    ├── carrinho.html    # Página do carrinho
    └── checkout.html    # Página de checkout
```

## 🎯 Requisitos Técnicos Atendidos

✅ HTML semântico
✅ CSS com Flexbox e Grid
✅ Layout responsivo (mobile, tablet, desktop)
✅ JavaScript modular e funcional
✅ Menu lateral animado
✅ Cards interativos com hover effects
✅ Animações suaves
✅ LocalStorage para persistência de dados
✅ Modal para detalhes de produtos
✅ Integração WhatsApp
✅ Sistema de login simulado
✅ Painel administrativo funcional
✅ Relatórios educacionais

## 🌐 Compatibilidade

- ✅ Chrome/Chromium (recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Navegadores mobile

## 💡 Dicas de Uso Educacional

1. **Ensinar Categorias**: Use a seção de categorias para explicar tipos de proteção
2. **Demonstrar Normas**: Mostre as NRs relacionadas a cada EPI
3. **Praticar Seleção**: Peça aos alunos para montar kits de proteção por função
4. **Simular Entrega**: Use o checkout para simular entrega de EPIs
5. **Gerenciar Dados**: Use o painel admin para adicionar EPIs específicos da região

## 📊 Dados Armazenados Localmente

- **Carrinho**: Armazenado em `localStorage` com chave `carrinho`
- **Login Admin**: Armazenado em `localStorage` com chave `admin-login`
- **Entregas**: Armazenado em `localStorage` com chave `entregas`
- **EPIs Customizados**: Armazenado em `localStorage` com chave `epis-custom`

## 🔐 Segurança

- Login administrativo simples para fins educacionais
- Dados armazenados localmente (sem servidor)
- Não há transmissão de dados sensíveis
- Adequado para ambiente educacional controlado

## 📝 Notas Importantes

- Esta é uma plataforma **educacional e simulada**
- Não realiza transações reais
- Os preços são simulados (R$ 100,00 por item)
- Ideal para fins didáticos e de treinamento
- Pode ser expandida com backend real se necessário

## 🚀 Próximas Melhorias Sugeridas

- Integração com banco de dados real
- Sistema de usuários com diferentes perfis
- Relatórios em PDF
- Certificados de conclusão
- Vídeos educacionais
- Testes e quizzes
- Sistema de pontuação

## 👨‍💻 Desenvolvedor

Plataforma desenvolvida para o Curso Técnico em Segurança do Trabalho.

## 📄 Licença

Uso livre para fins educacionais.

---

**Última atualização**: 2025
**Versão**: 1.0
