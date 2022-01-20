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

## Web Stack

