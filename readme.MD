# Maratona de programação

### Objetivo
Esse projeto tem por objetivo treinar os conceitos de filas e pilhas, utilizando os métodos disponíveis na linguagem escolhida.

### Desafio
O principal desafio é fazer a comparação de strings onde o "#" representa a ação de apagar (apagando o caracter anterior e ele mesmo) e retornando True ou False para strings iguais ou diferentes respectivamente.

### Javascript!?
Optamos por utilizar javascript por ser a solução mais rápida para pequenos projetos e de fácil implementação.

### Solução
Ao recebermos as duas strings, elas entram em um While (repetição até que a condição seja falsa) e fazem a remoção das "#" utilizando o método slice do JS, esse processo é repetido até que as strings não contenham mais "#", após isso esses arrays são unidos novamentes em strings e comparados, retornando True para strings iguais e False para as diferentes.

### Execução
```javascript
node start.js %texto1% %texto2%
```

* Separar as duas strings por um espaço.
* O console retornará True ou False verificando a igualdade.

