window.ROADMAP_DATA = [
  {
    "id": 1,
    "title": "OData V2 e V4",
    "subtitle": "Aprender a ler o contrato da API antes de tentar programar contra ela.",
    "intro": "OData é um padrão de API baseado em HTTP. Ele organiza dados em entidades, propriedades e relações. O $metadata é o contrato: informa nomes e tipos dos campos, chaves, navegações, funções e ações. HTTP transporta a requisição; OData define regras de consulta e representação.",
    "example": "Ao consultar uma ordem PM, primeiro descubra no $metadata a entidade MaintenanceOrder, o nome exato da chave e as entidades relacionadas. Depois faça GET com $select para trazer apenas os campos necessários. Use $expand somente nas navegações existentes no serviço.",
    "days": [
      "Entenda EntityType (estrutura), EntitySet (coleção), propriedades, chaves e $metadata. Abra um metadata real e identifique uma entidade.",
      "Treine $select, $filter, $top e $orderby. Execute três GETs e compare tamanho da resposta.",
      "Estude navigation properties, associações e $expand. Identifique o relacionamento entre objetos do PM quando o serviço permitir.",
      "Compare V2 e V4: JSON, $count, ações/funções e metadados. Lembre que endpoints e capacidades variam por serviço.",
      "Documente dois endpoints SAP com URL, entidade, chaves, campos, filtros aceitos e exemplo de resposta."
    ],
    "deliver": "Uma pequena ficha de API com 2 entidades reais, 5 GETs reproduzíveis e um comparativo V2 x V4.",
    "warning": "Não deduza campos de uma tela SAP ou de outra API: confirme nomes e relações no $metadata do serviço correto.",
    "resources": [
      {
        "title": "Introdução oficial ao protocolo OData",
        "url": "https://www.odata.org/getting-started/basic-tutorial/",
        "kind": "documentação / curso",
        "type": "official",
        "order": 1
      },
      {
        "title": "Documentação de OData e suas versões",
        "url": "https://www.odata.org/documentation/",
        "kind": "documentação / curso",
        "type": "official",
        "order": 2
      },
      {
        "title": "Catálogo oficial de APIs SAP",
        "url": "https://api.sap.com/",
        "kind": "documentação / curso",
        "type": "official",
        "order": 3
      },
      {
        "title": "Vídeos SAP Developers: pesquisar OData",
        "url": "https://www.youtube.com/@sapdevs/search?query=OData",
        "kind": "documentação / curso",
        "type": "official",
        "order": 4
      },
      {
        "title": "Videoaulas de OData e SAP em portugues",
        "description": "Busque introducao, EntitySet, $metadata, $select e $expand.",
        "url": "https://www.youtube.com/results?search_query=OData+SAP+V2+V4+aula+portugues",
        "kind": "BUSCA DE VIDEOAULAS",
        "type": "portuguese",
        "isSearch": true,
        "order": 1
      },
      {
        "title": "Explicacoes de OData com exemplos praticos",
        "description": "Prefira aulas que demonstrem requisicoes em Insomnia ou Postman.",
        "url": "https://www.youtube.com/results?search_query=OData+API+REST+filtros+select+expand+portugues+tutorial",
        "kind": "BUSCA DE VIDEOAULAS",
        "type": "portuguese",
        "isSearch": true,
        "order": 2
      },
      {
        "title": "Documentacao: padrao OData V4",
        "description": "Consulte a sintaxe como referencia, nao como primeira videoaula.",
        "url": "https://www.odata.org/documentation/",
        "kind": "DOCUMENTACAO",
        "type": "portuguese",
        "isSearch": false,
        "order": 3
      }
    ]
  },
  {
    "id": 2,
    "title": "Sessões, cookies e CSRF",
    "subtitle": "Compreender por que um POST pode falhar mesmo com usuário, senha e token.",
    "intro": "Cookie é um dado que o servidor pede para o cliente guardar e reenviar. Uma sessão pode associar várias requisições ao mesmo contexto autenticado. CSRF é uma proteção contra requisições de alteração indevidas; no SAP Gateway, a proteção frequentemente utiliza um token obtido por GET com X-CSRF-Token: Fetch. Token CSRF não substitui autenticação.",
    "example": "No Insomnia, o GET retorna X-CSRF-Token e pode retornar Set-Cookie. O POST deve levar o token no header e, quando exigido, os cookies associados à sessão. Se usar cookies de outra sessão ou o token expirar, o servidor pode responder 403. O comportamento depende da configuração SAP.",
    "days": [
      "Distinga Authorization (Basic, OAuth etc.), autenticação, sessão e cookie. Inspecione Request Headers e Response Headers.",
      "Faça um GET com X-CSRF-Token: Fetch. Anote X-CSRF-Token, Set-Cookie e códigos HTTP observados.",
      "Execute uma alteração autorizada em ambiente de testes usando o mesmo contexto de sessão. Verifique o cookie jar do cliente HTTP.",
      "Simule token ausente e sessão inconsistente. Identifique a diferença entre 401 (sem autenticação válida) e 403 (acesso/proteção negada).",
      "Desenhe o fluxo seguro: front-end -> CAP -> SAP. Determine onde ficam credenciais, tokens, cookies e logs."
    ],
    "deliver": "Fluxograma documentado de GET Fetch -> sessão -> POST/PATCH -> tratamento de expiração.",
    "warning": "Não envie credenciais técnicas SAP ou cookies da sessão SAP ao navegador. Evite armazenar token/senha em logs.",
    "resources": [
      {
        "title": "Visão geral de cookies HTTP (MDN)",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Cookies",
        "kind": "documentação / curso",
        "type": "official",
        "order": 1
      },
      {
        "title": "Headers e autenticação HTTP (MDN)",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Authentication",
        "kind": "documentação / curso",
        "type": "official",
        "order": 2
      },
      {
        "title": "Guia oficial de proteção CSRF no SAP",
        "url": "https://help.sap.com/docs/SAP_NETWEAVER_AS_ABAP_752/68bf513362174d54b58cddec28794093/b35c22518bc72214e10000000a44176d.html",
        "kind": "documentação / curso",
        "type": "official",
        "order": 3
      },
      {
        "title": "Vídeos SAP Developers: CSRF",
        "url": "https://www.youtube.com/@sapdevs/search?query=CSRF",
        "kind": "documentação / curso",
        "type": "official",
        "order": 4
      },
      {
        "title": "Cookies e sessoes HTTP explicados em portugues",
        "description": "Aprenda Set-Cookie, Cookie, expiracao e diferenca entre sessao e token.",
        "url": "https://www.youtube.com/results?search_query=cookies+sessoes+HTTP+autenticacao+aula+portugues",
        "kind": "BUSCA DE VIDEOAULAS",
        "type": "portuguese",
        "isSearch": true,
        "order": 1
      },
      {
        "title": "CSRF: o que e e como funciona",
        "description": "Diferencie CSRF de bearer token e de autenticacao Basic.",
        "url": "https://www.youtube.com/results?search_query=CSRF+token+ataque+prevencao+portugues+aula",
        "kind": "BUSCA DE VIDEOAULAS",
        "type": "portuguese",
        "isSearch": true,
        "order": 2
      },
      {
        "title": "CAP - seguranca e autenticacao",
        "description": "Material de consulta para a fase CAP; nao e video em portugues.",
        "url": "https://cap.cloud.sap/docs/node.js/authentication",
        "kind": "DOCUMENTACAO",
        "type": "portuguese",
        "isSearch": false,
        "order": 3
      }
    ]
  },
  {
    "id": 3,
    "title": "Fundamentos de CAP e CDS",
    "subtitle": "Criar um serviço de back-end com Node.js sem começar pela integração remota.",
    "intro": "CAP (Cloud Application Programming Model) é o framework SAP para criar serviços. A linguagem de modelagem CDS do CAP descreve entidades e serviços; o runtime Node.js implementa comportamentos comuns. Uma entidade local pode ser persistida em banco; uma entidade remota representa informações de outro serviço. CAP não é linguagem: você programará em TypeScript/JavaScript.",
    "example": "Crie uma entidade Equipamentos (ID, descricao, centro) em db/schema.cds e exponha uma projeção em srv/service.cds. Ao executar cds watch, CAP disponibiliza um endpoint OData V4 local. Isso ajuda a entender a diferença entre modelo, serviço e persistência.",
    "days": [
      "Instale Node.js LTS, VS Code e @sap/cds-dk. Verifique node --version e cds --version.",
      "Crie projeto com cds init manutencao-cap; explore pastas db/, srv/, app/ e package.json.",
      "Modele Equipamentos e Centros com key, campos e associação. Entenda cardinalidade e chave primária.",
      "Exponha o serviço com projection e rode cds watch. Consulte GET e $metadata localmente.",
      "Adicione dados CSV de exemplo e teste filtros; explique onde o dado é armazenado e de onde vem o endpoint."
    ],
    "deliver": "Repositório CAP funcional com duas entidades, relação, serviço e GET local.",
    "warning": "Não confunda CDS do CAP com ABAP CDS: são ambientes, runtimes e objetivos distintos, apesar dos conceitos semelhantes.",
    "resources": [
      {
        "title": "Curso oficial CAP em português (SAP Learning)",
        "url": "https://learning.sap.com/courses/introduction-to-sap-cloud-application-programming-model-br",
        "kind": "documentação / curso",
        "type": "official",
        "order": 1
      },
      {
        "title": "Getting Started da documentação CAP",
        "url": "https://cap.cloud.sap/docs/get-started/",
        "kind": "documentação / curso",
        "type": "official",
        "order": 2
      },
      {
        "title": "Tutorial SAP Developers: CAP com Node.js",
        "url": "https://developers.sap.com/tutorials/mission-build-a-business-application-using-cap-for-node-js/",
        "kind": "documentação / curso",
        "type": "official",
        "order": 3
      },
      {
        "title": "Exemplo guiado Bookshop",
        "url": "https://cap.cloud.sap/docs/get-started/bookshop",
        "kind": "documentação / curso",
        "type": "official",
        "order": 4
      },
      {
        "title": "Curso introdutorio ao CAP em portugues",
        "description": "Curso oficial com explicacoes no idioma portugues.",
        "url": "https://learning.sap.com/courses/introduction-to-sap-cloud-application-programming-model-br",
        "kind": "CURSO EM PORTUGUÊS",
        "type": "portuguese",
        "isSearch": false,
        "order": 1
      },
      {
        "title": "Aulas CAP Node.js em portugues",
        "description": "Busca direcionada: disponibilidade de aulas independentes nao confirmada.",
        "url": "https://www.youtube.com/results?search_query=SAP+CAP+Node.js+tutorial+aula+portugues",
        "kind": "BUSCA DE VIDEOAULAS",
        "type": "portuguese",
        "isSearch": true,
        "order": 2
      },
      {
        "title": "Criando projeto CAP - licao guiada",
        "description": "Acompanhe a instalacao, estrutura e execucao do projeto.",
        "url": "https://learning.sap.com/courses/introduction-to-sap-cloud-application-programming-model-br/criacao-de-um-projeto-cap",
        "kind": "AULA EM PORTUGUÊS",
        "type": "portuguese",
        "isSearch": false,
        "order": 3
      }
    ]
  },
  {
    "id": 4,
    "title": "CAP com TypeScript",
    "subtitle": "Implementar validações e ações de negócio, em vez de apenas publicar tabelas.",
    "intro": "Handlers são pontos onde você adiciona comportamento em eventos do CAP. before executa validações antes do processamento padrão; on substitui ou implementa o tratamento; after complementa um resultado. Uma action representa uma operação de negócio (por exemplo, validar uma ordem), diferente de atualizar um campo indiscriminadamente.",
    "example": "Crie a action validarOrdem(numeroOrdem). Seu handler verifica se o número foi informado, aplica uma regra simulada e retorna {valida, motivo}. Depois substitua o mock por consulta real ao SAP. Use TypeScript para deixar entradas e saídas explícitas.",
    "days": [
      "Estude npm, scripts e configuração do CAP com TypeScript; adicione suporte TypeScript conforme o guia atual.",
      "Implemente before para validar propriedades obrigatórias, emitindo erros claros.",
      "Implemente action e handler on. Entenda req.data, req.error e retorno da resposta.",
      "Estude CQN, SELECT/INSERT/UPDATE e limites de transações. Separe lógica da API e integração externa.",
      "Adicione testes para sucesso e falha; registre logs sem vazar dados sensíveis."
    ],
    "deliver": "Action validarOrdem, validação de entrada, erros padronizados e testes.",
    "warning": "Uma action criada no CAP não altera automaticamente o status de uma ordem SAP; é necessário chamar a operação correta do serviço remoto.",
    "resources": [
      {
        "title": "CAP com TypeScript",
        "url": "https://cap.cloud.sap/docs/node.js/typescript",
        "kind": "documentação / curso",
        "type": "official",
        "order": 1
      },
      {
        "title": "Documentação de serviços CAP",
        "url": "https://cap.cloud.sap/docs/guides/services/",
        "kind": "documentação / curso",
        "type": "official",
        "order": 2
      },
      {
        "title": "Guia de lógica customizada e handlers",
        "url": "https://cap.cloud.sap/docs/guides/services/custom-code",
        "kind": "documentação / curso",
        "type": "official",
        "order": 3
      },
      {
        "title": "Vídeos oficiais: CAP Node.js",
        "url": "https://www.youtube.com/@sapdevs/search?query=CAP%20Node.js",
        "kind": "documentação / curso",
        "type": "official",
        "order": 4
      },
      {
        "title": "CAP + TypeScript: aulas em portugues",
        "description": "Busca direcionada: confirme idioma e versao antes de estudar.",
        "url": "https://www.youtube.com/results?search_query=SAP+CAP+TypeScript+handlers+before+on+after+portugues",
        "kind": "BUSCA DE VIDEOAULAS",
        "type": "portuguese",
        "isSearch": true,
        "order": 1
      },
      {
        "title": "Logica customizada com CAP",
        "description": "Aprenda handlers before/on/after, eventos e requests.",
        "url": "https://cap.cloud.sap/docs/node.js/core-services",
        "kind": "DOCUMENTACAO",
        "type": "portuguese",
        "isSearch": false,
        "order": 2
      },
      {
        "title": "Documentacao CAP Node.js",
        "description": "Referencia tecnica para a implementacao.",
        "url": "https://cap.cloud.sap/docs/node.js/",
        "kind": "DOCUMENTACAO",
        "type": "portuguese",
        "isSearch": false,
        "order": 3
      }
    ]
  },
  {
    "id": 5,
    "title": "CAP consumindo APIs SAP PM",
    "subtitle": "Fazer o serviço CAP conversar com endpoints já publicados pelo SAP.",
    "intro": "Serviço remoto é uma API pertencente a outro sistema. CAP pode importar seu contrato EDMX, representar esse serviço no modelo e chamá-lo por meio de cds.connect.to. A configuração de conexão e autenticação depende do ambiente. Ao consumir OData V2 no SAP e disponibilizar OData V4 no CAP, você está expondo um contrato próprio e o CAP pode fazer a adaptação.",
    "example": "Escolha uma API de ordens ou equipamentos disponível em DEV. Baixe ou obtenha o $metadata/EDMX, importe-o com cds import, configure o serviço remoto e use cds.connect.to('NOME_DO_SERVICO'). Primeiro execute um GET. Depois trate erros SAP e campos indisponíveis.",
    "days": [
      "Selecione API PM suportada no sistema e valide serviço, versão e permissões no Insomnia.",
      "Leia e importe o EDMX com cds import. Inspecione as entidades geradas e eventuais limitações.",
      "Configure conexão remota no CAP (mock/destinação conforme ambiente); valide autenticação.",
      "Implemente um handler que faz GET SAP e transforma o retorno para um DTO simples do aplicativo.",
      "Teste filtros, paginação e falhas 4xx/5xx. Só faça POST de teste com autorização em DEV/QAS."
    ],
    "deliver": "GET de ordens/equipamentos passando pelo CAP, com mapeamento de resposta e erros.",
    "warning": "O guia antigo de Consuming Services foi descontinuado como referência principal; prefira o material atual de integração CAP. Nem toda característica de uma API é suportada automaticamente.",
    "resources": [
      {
        "title": "Padrão atual: integração de serviços CAP",
        "url": "https://cap.cloud.sap/docs/guides/integration/calesi",
        "kind": "documentação / curso",
        "type": "official",
        "order": 1
      },
      {
        "title": "Consumo de serviços remotos em Node.js",
        "url": "https://cap.cloud.sap/docs/node.js/remote-services",
        "kind": "documentação / curso",
        "type": "official",
        "order": 2
      },
      {
        "title": "Importação de EDMX (cds import)",
        "url": "https://cap.cloud.sap/docs/tools/apis/cds-import",
        "kind": "documentação / curso",
        "type": "official",
        "order": 3
      },
      {
        "title": "SAP Business Accelerator Hub (APIs PM)",
        "url": "https://api.sap.com/",
        "kind": "documentação / curso",
        "type": "official",
        "order": 4
      },
      {
        "title": "Integracao SAP CAP e OData em portugues",
        "description": "Procure exemplos com servicos remotos e destination.",
        "url": "https://www.youtube.com/results?search_query=SAP+CAP+consumir+API+OData+S4HANA+portugues",
        "kind": "BUSCA DE VIDEOAULAS",
        "type": "portuguese",
        "isSearch": true,
        "order": 1
      },
      {
        "title": "Aulas de APIs SAP no Insomnia/Postman",
        "description": "Use para revisar cabecalhos, sessao e erros HTTP.",
        "url": "https://www.youtube.com/results?search_query=SAP+OData+API+Postman+token+CSRF+portugues",
        "kind": "BUSCA DE VIDEOAULAS",
        "type": "portuguese",
        "isSearch": true,
        "order": 2
      },
      {
        "title": "Integracao de servicos no CAP",
        "description": "Guia atual para uso e consumo de servicos.",
        "url": "https://cap.cloud.sap/docs/guides/using-services",
        "kind": "DOCUMENTACAO",
        "type": "portuguese",
        "isSearch": false,
        "order": 3
      }
    ]
  },
  {
    "id": 6,
    "title": "ABAP CDS e RAP",
    "subtitle": "Aprender a reconhecer quando a extensão precisa ocorrer dentro do SAP.",
    "intro": "ABAP CDS define modelos semânticos no ambiente ABAP. Eclipse com ADT permite visualizar/desenvolver esses objetos com autorização. RAP (ABAP RESTful Application Programming Model) organiza comportamentos transacionais, definições de serviço e bindings para expor APIs. CAP e RAP não são sinônimos: CAP executa fora do core ABAP; RAP executa na pilha ABAP.",
    "example": "Se uma operação PM exige uma regra interna sem API publicada, peça ao time ABAP para avaliar extensão suportada (API/BAdI/RAP, conforme cenário). O time pode criar uma interface segura; o CAP consome a interface, aplica orquestração e entrega ao front-end.",
    "days": [
      "Estude conceitos básicos de ABAP, tabelas, objetos e camadas. Saiba o que é standard e o que é Z/Y.",
      "Instale/acesse Eclipse + ADT, se autorizado. Localize uma view entity ABAP CDS existente.",
      "Leia define view entity, associações, anotações e parâmetros de uma CDS real.",
      "Conheça service definition, service binding e behavior definition no RAP; desenhe o fluxo.",
      "Converse com o time ABAP sobre uma lacuna de API e documente qual extensão é oficialmente suportada."
    ],
    "deliver": "Diagrama ABAP CDS -> RAP -> OData e proposta para uma lacuna real de API PM.",
    "warning": "CDS não equivale a endpoint OData: publicar operações envolve camada de serviço, comportamento e configuração apropriada.",
    "resources": [
      {
        "title": "Fundamentos ABAP (SAP Learning)",
        "url": "https://learning.sap.com/courses/learn-the-basics-of-abap-programming-on-sap-btp",
        "kind": "documentação / curso",
        "type": "official",
        "order": 1
      },
      {
        "title": "Curso RAP (SAP Learning)",
        "url": "https://learning.sap.com/courses/building-transactional-apps-with-the-abap-restful-application-programming-model",
        "kind": "documentação / curso",
        "type": "official",
        "order": 2
      },
      {
        "title": "Conceitos e arquitetura RAP",
        "url": "https://learning.sap.com/courses/building-transactional-apps-with-the-abap-restful-application-programming-model/exploring-the-concept-and-architecture-of-rap",
        "kind": "documentação / curso",
        "type": "official",
        "order": 3
      },
      {
        "title": "Vídeos oficiais: ABAP CDS e RAP",
        "url": "https://www.youtube.com/@sapdevs/search?query=ABAP%20RAP",
        "kind": "documentação / curso",
        "type": "official",
        "order": 4
      },
      {
        "title": "Curso ABAP 131: CDS Views - O basico",
        "description": "Canal ABAP World. Mostra criacao, consumo, filtros e Eclipse.",
        "url": "https://www.youtube.com/watch?v=pSg0PR0hzjc",
        "kind": "VIDEO EM PORTUGUÊS",
        "type": "portuguese",
        "isSearch": false,
        "order": 1
      },
      {
        "title": "Criando sua primeira CDS View SAP ABAP",
        "description": "Canal Prime Control Academy. Requer Eclipse, ADT e ambiente SAP.",
        "url": "https://www.youtube.com/watch?v=AlIJPAF-Snc",
        "kind": "VIDEO EM PORTUGUÊS",
        "type": "portuguese",
        "isSearch": false,
        "order": 2
      },
      {
        "title": "CDS: explicacao em portugues",
        "description": "Complemento para associacoes, definicoes e leituras.",
        "url": "https://learning.sap.com/courses/learning-basic-abap-programming-br/trabalhar-com-visoes-cds_c289f74d-675e-4084-9d90-5635958ec604_pt-BR",
        "kind": "AULA EM PORTUGUÊS",
        "type": "portuguese",
        "isSearch": false,
        "order": 3
      },
      {
        "title": "RAP ABAP em portugues",
        "description": "Estude apos entender CDS e Eclipse ADT.",
        "url": "https://www.youtube.com/results?search_query=ABAP+RAP+tutorial+portugues+service+definition+binding",
        "kind": "BUSCA DE VIDEOAULAS",
        "type": "portuguese",
        "isSearch": true,
        "order": 4
      }
    ]
  },
  {
    "id": 7,
    "title": "SAP BTP e conectividade",
    "subtitle": "Entender como o CAP alcança sistemas SAP sem embutir senhas no código.",
    "intro": "SAP BTP é a plataforma de execução e serviços. Uma Destination centraliza parâmetros de conexão e autenticação. Em cenários on-premise, Cloud Connector pode estabelecer conectividade controlada da BTP para recursos internos. A arquitetura real depende da topologia, licenciamento e segurança da empresa; nem todo cenário exige Cloud Connector.",
    "example": "Em vez de colocar https://servidor-interno e senha no TypeScript, o CAP consulta uma destination configurada para DEV. Para QAS/PRD, alteram-se as configurações do ambiente, sem reescrever os handlers. As permissões devem respeitar identidade e escopo do usuário/serviço.",
    "days": [
      "Estude contas/subcontas BTP, aplicações e variáveis de ambiente.",
      "Entenda Destination: URL, autenticação, certificados e opções de conexão.",
      "Entenda Cloud Connector no caso on-premise, conectividade e liberação de caminhos.",
      "Mapeie identidade técnica versus propagação de identidade do usuário e o princípio do menor privilégio.",
      "Desenhe a implantação DEV/QAS/PRD e lista de parâmetros/segredos que não entram no repositório."
    ],
    "deliver": "Desenho de conectividade front -> CAP -> Destination -> SAP e matriz de ambientes.",
    "warning": "Não presuma que um IP interno ficará acessível diretamente de uma aplicação hospedada na BTP.",
    "resources": [
      {
        "title": "SAP Learning: desenvolvimento na BTP",
        "url": "https://learning.sap.com/products/business-technology-platform/development",
        "kind": "documentação / curso",
        "type": "official",
        "order": 1
      },
      {
        "title": "Documentação SAP BTP",
        "url": "https://help.sap.com/docs/btp",
        "kind": "documentação / curso",
        "type": "official",
        "order": 2
      },
      {
        "title": "Documentação de implantação CAP",
        "url": "https://cap.cloud.sap/docs/guides/deployment/",
        "kind": "documentação / curso",
        "type": "official",
        "order": 3
      },
      {
        "title": "Vídeos oficiais: SAP BTP Destination",
        "url": "https://www.youtube.com/@sapdevs/search?query=destination%20service",
        "kind": "documentação / curso",
        "type": "official",
        "order": 4
      },
      {
        "title": "SAP BTP Destinations em portugues",
        "description": "Procure demonstracoes no cockpit BTP.",
        "url": "https://www.youtube.com/results?search_query=SAP+BTP+destination+service+cloud+connector+portugues+aula",
        "kind": "BUSCA DE VIDEOAULAS",
        "type": "portuguese",
        "isSearch": true,
        "order": 1
      },
      {
        "title": "Destinos e conectividade - curso em portugues",
        "description": "Diferencie destination, proxy, approuter e cloud connector.",
        "url": "https://learning.sap.com/courses/sap-btp-fundamentals-level-3-advanced-services-integration-enterprise-architecture-br/configuracao-de-destinos-e-consumo_fa17216e-3db1-40a4-8f28-9510ad39d8e6_pt-BR",
        "kind": "AULA EM PORTUGUÊS",
        "type": "portuguese",
        "isSearch": false,
        "order": 2
      }
    ]
  },
  {
    "id": 8,
    "title": "Projeto integrado de manutenção",
    "subtitle": "Juntar todos os aprendizados em uma pequena aplicação realista.",
    "intro": "Seu back-end precisa proteger o SAP do acoplamento direto ao front-end. Isso significa expor uma API estável, validar entradas, traduzir erros, lidar com tempos de resposta e auditar operações. O fluxo de mudança de status e encerramento de uma ordem normalmente envolve ações próprias e regras de negócio, não necessariamente PATCH de um campo.",
    "example": "O front-end solicita GET /ordens/12161478. CAP consulta o SAP e retorna somente os campos usados na tela. Para criar uma nota, POST /notas recebe payload validado, usa a API oficial permitida em QAS e retorna o identificador criado. Não exponha credenciais do SAP.",
    "days": [
      "Defina endpoints, contratos de entrada/saída e desenho do fluxo de dados.",
      "Implemente GET /equipamentos e GET /ordens com mock e integração remota.",
      "Implemente POST /notas em QAS autorizado, validando propriedades e CSRF conforme tecnologia utilizada.",
      "Implemente logs com correlation ID, timeout, erros SAP tratados e testes de autorização.",
      "Demonstre os fluxos de sucesso/falha, documente decisões e revise com o time SAP/ABAP."
    ],
    "deliver": "Protótipo front -> CAP -> SAP PM, com documentação técnica e checklist de segurança.",
    "warning": "Não faça retry automático de POST não idempotente sem mecanismo confiável para evitar duplicações.",
    "resources": [
      {
        "title": "Guia oficial de serviços CAP",
        "url": "https://cap.cloud.sap/docs/guides/services/",
        "kind": "documentação / curso",
        "type": "official",
        "order": 1
      },
      {
        "title": "Integração CAP com serviços remotos",
        "url": "https://cap.cloud.sap/docs/guides/integration/calesi",
        "kind": "documentação / curso",
        "type": "official",
        "order": 2
      },
      {
        "title": "Catálogo de APIs SAP PM",
        "url": "https://api.sap.com/",
        "kind": "documentação / curso",
        "type": "official",
        "order": 3
      },
      {
        "title": "CAP: testes e qualidade",
        "url": "https://cap.cloud.sap/docs/node.js/cds-test",
        "kind": "documentação / curso",
        "type": "official",
        "order": 4
      }
    ]
  }
];
