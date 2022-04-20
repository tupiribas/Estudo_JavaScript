# Instalação Gulp
## Introdução
O Gulp é uma ferramenta que serve pára automatizar seus projetos em produção.
### Passo a passo 
Esse passo a passso foi utilizado para que fosse possível instalar as dependências já implementadas no package.json. 
1.      npm install node-sass 
2.      npm i
3.      npm i -g gulp-cli

## Correções feitas durante os estudos da ferramenta Gulp!
Antes de processar o SASS, tive que fazer alguns ajustes no package.json.
1. Delete a pasta node_modules do seu projeto
2. Abra o arquivo package.json
3. Dentro do arquivo, procure nas dependências a linha referente ao **node-sass** e/ou **sass** e delete a linha
4. Salve o arquivo
5. Use o comando: 

        npm install 
    no seu projeto normalmente
6. Agora utilize o comando
        
        npm install node-sass gulp-sass --save-dev