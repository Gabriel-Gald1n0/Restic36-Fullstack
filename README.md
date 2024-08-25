# RESTIC36_Projetos

## Objetivo
Desenvolver uma aplicação web básica que utilize HTML, CSS e TypeScript para criar uma interface visualmente agradável com dados dinâmicos.

# Weather App 🌤️

## Descrição do Projeto

O **Weather App** é uma aplicação web que permite ao usuário consultar informações meteorológicas de diferentes cidades ao redor do mundo. A aplicação exibe dados como temperatura, condições climáticas, umidade, e velocidade do vento. O design é responsivo, oferecendo uma experiência visual agradável em diversos dispositivos, e inclui animações suaves para transições entre diferentes estados, como a exibição de erros quando uma cidade não é encontrada.

## Instruções de Como Executar a Aplicação

### Pré-requisitos

- Node.js instalado na máquina
- Um navegador web moderno (Chrome, Firefox, Edge, Opera)

### Passos para execução

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/username/weather-app.git
2. **Navegue até o diretório do projeto:**
   ```bash
    cd weather-app 
3. **Instale o http-server:**
   ```bash
   npm install -g http-server 
4. **Pegue a ApiKey:**

   Por motivos de segurança, removi as chaves API utilizadas no projeto. Por isso, insira suas chaves API que você irá cadastrar nos sites [OpenWeatherMap](https://openweathermap.org/current) e [Pexels](https://www.pexels.com/api/). São seguros e de confiança.
5. **Colar Chaves e atualizar o TypeScript:**

   Cole as chaves na pasta `/src/ts/config.ts`. Em `apiKey`, cole a chave da OpenWeatherMap e em `imgApiKey`, cole a da Pexels. Após isso, digite `tsc` no terminal para compilar o arquivo .ts.
6. **Executar a pagina web:**

   Digite http-server no terminal e la aparecera uma porta ```http://192.168.1.3:8080 ``` para abrir a pagina.

## Tecnologias Utilizadas

- HTML5: Para a estrutura da página.
- CSS3: Para o estilo e responsividade, incluindo transições e animações.
- JavaScript (ES6): Para a lógica de interação com a API de clima e manipulação do DOM.
- API de Clima (OpenWeatherMap): Para obter os dados meteorológicos em tempo real.
- API de Imagens (Pexels): Para obter imagens dos locais especificados.
- Node.js: Para o ambiente de execução do JavaScript no servidor.
- Git: Controle de versão do código.

## Possíveis Melhorias Futuras

- Adição de Previsão Estendida: Incluir uma previsão de 5 dias, permitindo ao usuário visualizar a variação do clima ao longo da semana.
- Geolocalização: Automatizar a localização do usuário para mostrar o clima local ao abrir o app.
- Dark Mode: Implementar um tema escuro para melhorar a usabilidade durante a noite.
- Internacionalização: Adicionar suporte para múltiplos idiomas.
- Menu de Opções: Adicionar opções de algumas cidades sugeridas.
- Adicionar informações adicionais como:
  - Índice UV: Para fornecer informações sobre a intensidade da radiação ultravioleta.
  - Nascer e Pôr do Sol: Para mostrar os horários de nascer e pôr do sol, proporcionando mais contexto sobre o clima.
- Resposividade: Melhorar a responsividade e a experiência do usuário em dispositivos móveis.
- Gráficos: Adicionar gráficos ou representações visuais para dados meteorológicos.

## Resultados

![image](https://github.com/user-attachments/assets/d45fa074-2249-4db7-a6da-1d6f93a0ae60)
![image](https://github.com/user-attachments/assets/3953a285-ebab-4819-bf07-56e6df3cd6bb)
![image](https://github.com/user-attachments/assets/9c21e90d-076c-48a1-9f62-4f4e3b067bc1)
![image](https://github.com/user-attachments/assets/3f022b26-c577-480a-bbd4-fb81d79883eb)
![image](https://github.com/user-attachments/assets/c38c9e19-a76b-421e-8325-0c980b49ebc1)




