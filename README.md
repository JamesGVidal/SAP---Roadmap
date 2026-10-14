# SAP PM Academy — Trilha de estudos

Landing page estática, responsiva, sem dependências e pronta para **GitHub Pages**.

## Conteúdo
- 8 semanas de estudo, 40 atividades diárias, explicações e exercícios extraídos do guia em PDF.
- Materiais com links clicáveis, diferenciando cursos/documentações de buscas no YouTube.
- Seletor de semanas, checklists, indicador de progresso e tema claro/escuro.
- Progresso salvo localmente por navegador (`localStorage`), sem conta e sem servidor.
- PDF original disponível na página.

## Publicar no GitHub Pages
1. Crie um repositório público no GitHub (por exemplo `sap-pm-roadmap`).
2. Envie os arquivos `index.html`, `styles.css`, `script.js`, `data.js`, `favicon.svg` e `guia-sap-pm.pdf` para a **raiz** do repositório.
3. Acesse **Settings → Pages → Build and deployment**.
4. Em **Source**, escolha **Deploy from a branch**; em **Branch**, escolha `main` e `/ (root)`; salve.
5. Acesse `https://SEU-USUARIO.github.io/sap-pm-roadmap/` após o deploy.

Se o repositório se chamar exatamente `SEU-USUARIO.github.io`, o endereço pode ser `https://SEU-USUARIO.github.io/`.

## Desenvolvimento local
Basta abrir `index.html` no navegador, ou usar um servidor local:

```bash
python -m http.server 5500
```

Acesse `http://localhost:5500/`.

## Editar o cronograma
Modifique os dados em `data.js`. Não é necessário build, `npm install`, React nem back-end.

## Observações
- O acompanhamento de progresso é específico de cada navegador/dispositivo; não sincroniza automaticamente entre celular e computador.
- Links externos são de terceiros e podem mudar.
- Execute operações de gravação no SAP apenas em ambientes autorizados.
