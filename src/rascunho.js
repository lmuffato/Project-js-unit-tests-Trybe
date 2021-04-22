// TESTE 1: Verifique se o retorno da função createMenu() é um objeto que possui,
// mas não é necessariamente é limitado à chave `fetchMenu`, a qual tem como valor uma função.
// ```
// const objetoRetornado = createMenu(); // Retorno: { fetchMenu: () => {}, ... }
// ```
// TESTE 2: Verifique que, dado que a função createMenu foi chamada com o objeto: `{ food: {}, drink: {} }`,
// verifique que 'objetoRetornado.fetchMenu()' retorna um objeto cujas chaves são somente `food` e `drink`.
// ```
// const objetoRetornado = createMenu({ food: {}, drink: {} });
// objetoRetornado.fetchMenu() // Retorno: { food: {}, drink: {}}
// ```
// TESTE 3: Verifique que o menu passado pra função createMenu é identico ao menu recuperado pela função 'objetoRetornado.fetchMenu'
// ```
// const objetoRetornado = createMenu(objetoQualquer);
// objetoRetornado.fetchMenu() // Retorno: objetoQualquer
// ```
// Agora faça o PASSO 1 no arquivo `src/restaurant.js`.
// --------------------------------------------------------------------------------------
// TESTE 4: Verifique que 'objetoRetornado.consumption', após a criação do menu, retorna um array vazio.
// ```
// const objetoRetornado = createMenu(objetoQualquer);
// objetoRetornado.consumption // Retorno: []
// ```
// Agora faça o PASSO 2 no arquivo `src/restaurant.js`.
// --------------------------------------------------------------------------------------
// TESTE 5: Verifique que chamar uma função associada à chave `order` no objeto retornado, passando uma string como parâmetro,
// como `objetoRetornado.order('coxinha')`, tal string é adicionada ao array retornado em `objetoRetornado.consumption
// ```
// const objetoRetornado = createMenu(objetoQualquer);
// objetoRetornado.order("coxinha");
// objetoRetornado.consumption // Retorno: ["coxinha"]
// ```
// Agora faça o PASSO 3 no arquivo `src/restaurant.js`.
// --------------------------------------------------------------------------------------
// TESTE 6: Verifique que as três orders seguintes, de bebidas e comidas mescladas, somam três itens no array `objetoRetornado.consumption` conforme os itens pedidos.
// ```
// objetoRetornado.order("coxinha");
// objetoRetornado.order("agua");
// objetoRetornado.order("sopa");
// objetoRetornado.order("sashimi");
// objetoRetornado.consumption // Retorno: ["coxinha", "agua", "sopa", "sashimi"]
// ```
// Agora faça o TESTE 7 deste arquivo.
// --------------------------------------------------------------------------------------
// TESTE 7: Verifique que a função `order` aceita que pedidos repetidos sejam acrescidos a consumption.
// ```
// objetoRetornado.order('coxinha');
// objetoRetornado.order('agua');
// objetoRetornado.order('coxinha');
// objetoRetornado.comsuption // Retorno: ['coxinha', 'agua', 'coxinha']
// ```
// Agora faça o TESTE 8 deste arquivo.
// --------------------------------------------------------------------------------------
// TESTE 8: Verifique que, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, conforme registrado em `objetoRetornado.consumption`
// ```
// objetoRetornado.order('coxinha');
// objetoRetornado.order('agua');
// objetoRetornado.order('coxinha');
// objetoRetornado.pay() // Retorno: somaDosPreçosDosPedidos
// ```
// Agora faça o PASSO 4 no arquivo `src/restaurant.js`.
