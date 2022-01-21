# Camadas TCP/IP

Aplicação => Transporte => Internet => Física

# Anatomia do IPV4

## Classe A

|    Calasse A    | Rede |    Host     | Máscara de rede |
| :-------------: | :--: | :---------: | :-------------: |
| 192.168.100.230 | 192  | 168.100.230 |    255.0.0.0    |

## Classe B

|    Calasse B    |  Rede   |  Host   | Máscara de rede |
| :-------------: | :-----: | :-----: | :-------------: |
| 192.168.100.230 | 192.168 | 100.230 |   255.255.0.0   |

## Classe C

|    Calasse C    |    Rede     | Host | Máscara de rede |
| :-------------: | :---------: | :--: | :-------------: |
| 192.168.100.230 | 192.168.100 | 230  |  255.255.255.0  |

Caso você queira modificar a quantidade de redes, você terá que mexer na máscara de sub-rede.

# Conceito de porta

Computador 1		

end. IP: 10.85.0.5:8080

Acessa

Computador 2

end. IP: 10.85.0.5

O computador 1 acessa o computador 2 pela porta 8080 utilizando o mesmo endereço IP.

# Protocolo HTTP

H: Hyper - T: Text - T: Transfer - P: Protocol

## Características

* Camada de aplicação
* Stateless - "Ele age como se fosse a primeira requisição"
* Requisição e resposta - cliente e servidor 
* Opera em cima da pilha TCP/IP
* HTML, CSS, JS, Mídias...

## Fluxo

1. O usuário informa a URL;

2. Browser gera a Requisição - GET / HTTP / 1.1 - Host: www.google.com.br;

3. Servidor Web gera a Resposta - HTTP / 1.1 - 200 OK;

   `HTTP/1.1 - 200 OK \n content-Type: text\html; charset=UTF-8...`

   `<html> ...`

4. O Browser exibe a imagem.

## Requisições

As requisições **GET** irão na URL

As requisições **POST** irão no corpo da aplicação

## Grupos de Status 

1** - Informação

2** - Sucesso

3** - Redirecionamento

4** - Erro no cliente

5** - Erro no servidor

# Servidores Web

1. Apache
2. TomCat
3. Microsoft IIS
4. Node JS
5. NGiNX
6. JBoss

## Visual Hosting

Um único servidor web pode atender a várias requisições

## Estrutura de pastas

**Estático**

Web Server => Pastas: Imagens, css, js, index.html, about.html

# Client Side vs Server Side

## Mainframe

Um mainframe é um computador de grande porte dedicado normalmente ao processamento de um volume enorme de informações

## Client-server

O modelo cliente-servidor, em computação, é uma estrutura de aplicação distribuída que distribui as tarefas e cargas de trabalho entre os fornecedores de um recurso ou serviço, designados como servidores, e os requerentes dos serviços, designados como clientes.

## Web - server-side

Server-side, ou literalmente "lado do servidor", também conhecido por back-end, é um termo usado para designar operações que, em um contexto cliente-servidor, são feitas no servidor, não no cliente.

## Client-side: front-end

Lado cliente, também conhecido como front-end refere-se às operações que são realizadas pelo cliente em um relacionamento cliente-servidor em uma rede de computadores.

# Conteúdo Estático vs Dinâmico

## Estático

O servidor faz a leitura do arquivo e o conteúdo é passado para a aplicação.

## Dinâmico

Quando o conteúdo está sempre mudando de estado.

Pode ser criada uma estratégia na aplicação para que ela seja, tanto dinâmica quanto estática.

**A amostragem de um conteúdo, pode gerar um conteúdo estático**

**A pesquisa por um dado pode gerar conteúdos dinâmicos**

# Servidor DNS

Traduz os nomes de domínio em endereço IP

www.google.com.br **=>** 54.69.61.89

## Funcionamento básico

1. O usuário informa o endereço no browser
2. O computador envia uma consulta DNS para o servidor local
3. O servidor responde com o endereço IP
4. O computador acessa o servidor a partir do IP obtido

# HTTPS

* HTTP + TLS - Transport Layer Security Protocol
* HTTP + SSL - Security Sockets Layer Protocol

## Certificado <> Protocolo

"Certificado **usados com SSL / TLS**"

## HTTPSeguro

* Dados criptografados usando os protocolos TLS ou SSL.
* Protege contra interceptação (MITM).
  * O MITM - **Man-in-the-Middle** (em tradução literal, Homem-no-Meio) é um nome genérico para qualquer ataque virtual em que um usuário mal-intencionado, ou um hacker, intermedia a comunicação entre um cliente – site/aplicativo – e uma outra parte envolvida – servidor/API.
* Criptografa todas as informações: URL, cookies e headers.
* Usa certificados digitais.

## Autoridades Certificadoras

* Organizações que emitem e validam os certificados

