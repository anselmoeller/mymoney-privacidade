# MyMoney — Correção da Política de Privacidade (GitHub Pages)

## O que foi corrigido
- O site foi refeito a partir da política mais recente (backup criptografado, biometria opcional e Pix).
- O estilo verde está incorporado diretamente em cada HTML (não depende de assets/style.css).
- O ícone está incorporado diretamente em cada HTML (não depende de assets/logo.png).
- A navegação entre português, inglês e espanhol usa o caminho completo do repositório GitHub Pages.
- O e-mail de contato é moneyproapp@gmail.com.
- `.nojekyll` evita processamento desnecessário do Jekyll.

## Publicação
O repositório é: https://github.com/anselmoeller/mymoney-privacidade

Se usa o Git instalado:
1. Faça clone ou abra o repositório local.
2. Copie index.html, as pastas en e es e os arquivos Markdown desta pasta, substituindo os existentes.
3. Copie também o arquivo .nojekyll (oculto no Windows).
4. Faça commit e push na branch main.
5. Aguarde a implantação ser concluída na guia Actions/Settings > Pages.

Se usa apenas o navegador GitHub:
1. Abra cada HTML no GitHub e utilize Edit (lápis); substitua o conteúdo pelo HTML homônimo deste pacote.
2. Repita com en/index.html e es/index.html, preservando a estrutura das pastas.
3. Faça Commit changes em main para cada arquivo.
4. Opcionalmente, atualize os três arquivos .md de referência.
5. A publicação acontece automaticamente; não é necessário clicar em Unpublish site.

## Endereços oficiais
- PT: https://anselmoeller.github.io/mymoney-privacidade/
- EN: https://anselmoeller.github.io/mymoney-privacidade/en/
- ES: https://anselmoeller.github.io/mymoney-privacidade/es/

IMPORTANTE: https://anselmoeller.github.io/ não corresponde a esse repositório e pode continuar exibindo 404. Isso é normal.

## Aplicativo
O projeto MyMoney já aponta para esses três endereços no arquivo src/config/links.js. Não altere o app.json, a criptografia, o PIN ou o backup para corrigir a aparência do site.

## Como conferir
Abra em janela anônima e clique nos três idiomas. Veja se o fundo verde, a marca, o email e as seções sobre backup, biometria e Pix aparecem. Atualização de website não exige gerar novo AAB se os endereços permanecerem os mesmos.
