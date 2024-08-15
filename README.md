# RESTIC36_Desafios
## **Desafio Relâmpago de HTML e CSS**

## Descrição

Temos um código HTML e CSS com alguns erros que precisam ser corrigidos. O objetivo é encontrar e corrigir os 7 erros presentes no código.

## Objetivo

O objetivo deste desafio é aprimorar suas habilidades de identificação e correção de erros em código HTML e CSS. Aprender a detectar e corrigir esses erros é essencial para o desenvolvimento de páginas web funcionais e esteticamente agradáveis. Ao participar deste desafio, você vai:

- Melhorar suas habilidades de revisão de código.
- Desenvolver um olhar crítico para identificar erros comuns.
- Praticar a correção de problemas que afetam a renderização e a usabilidade das páginas web.

## Codigo
~~~html
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <style type="text/css">
     body {
         font-family: saints;
         margin: 0;
         padding: 0;
     }

     header {
         background-colored: #f4f4f4;
         padding: 20px;
         text-align: center;
     }

     img {
         width: 100px;
         height: 100px;
         border: 1px solid #000;
     }

     footer {
         background-color: #f4f4f4;
         text-align: center;
         padding: 10px;
     }

     h1 {
         color: #333
     }

     p {
         margin: 0;
     }
 </style>
</head>
<body>
 <header>
     <h1>Galeria de Imagens
 </header>
 <main>
     <section>
         <h2>Imagens</h2>
         <img src="image1.jpg" alt="Imagem 1"/>
         <img src="image2.jpg" />
         <img src="image3.jpg" alt="Imagem 3"/>
     </section>
 </main>
 <footer>
     <p>(c) 2024 Galeria de Imagens</p>
</body>
</html>
~~~

## Resposta

ERROS:

- Linha 8 - `font-family: Arial, sans-serif;` - erro de digitação (`font-famly`)
- Linha 14 - `background-color: #f4f4f4;` - erro de digitação (`backgroud-color`)
- Linha 32 - `color: #333;` - falta o ponto e vírgula no final
- Linha 42 - `<h1>Galeria de Fotos</h1>` - tag `<h1>` não estava fechada corretamente
- Linha 48 - `<img src="image2.jpg" alt="Imagem 2" />` - ausência do atributo `alt`
- Linha 52 - `<footer>` - tag `<footer>` não estava fechada corretamente

