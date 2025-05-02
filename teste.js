const { getLivros, getLivroPorId, adicionarReview, livroReview, getLivroPorAutor, getLivroPorCategoria, adicionarLivro} = require("./livros");

console.log("\n")
console.log("Teste 1: Listar todos os livros")
console.log("Lista de livros: ", getLivros());
console.log("\n")

console.log("Teste 2: Buscar um livro pelo ID")
console.log("Buscando livro com ID 1: ", getLivroPorId(1));
console.log("\n")

console.log("Teste 3: Adicionar uma review a um livro que existe")
const novaReview = adicionarReview(2, "Toigo", 5, "Melhor coisa que já li.");
console.log("Nova review adicionada: ", novaReview);
console.log("\n")

console.log("Teste  4: Verificar se a review foi salva")
console.log("Livro atualizado: ", getLivroPorId(2));
console.log("\n")

console.log("Teste 5: Tentar adicionar uma review a um livro que não existe")
const reviewInvalida = adicionarReview(99, "João", 5, "Livro incrível!");
console.log("Tentativa de adicionar review a um livro inexistente: ", reviewInvalida);
console.log("\n")

console.log("Teste  6: Mostrar Reviews de um livro existente")
console.log("Reviews do Livro 1: ", livroReview(1));
console.log("\n")

console.log("Teste 7: Mostrar review de Livro que não existe.")
console.log("Review do livro 666: ", livroReview(99));
console.log("\n")

console.log("Teste 8: Mostrar livro pelo autor.")
console.log("Temos os seguintes livros deste autor: ", getLivroPorAutor("Eichiro Oda"));
console.log("\n")

console.log("Teste 9: Mostrar livro por um autor que não existe.")
console.log("Temos os seguintes livros deste autor: ", getLivroPorAutor("Pedro S. Siade"));
console.log("\n")

console.log("Teste 10: Mostrar livro por categoria que existe.")
console.log("Temos os seguintes livros desta categoria: ", getLivroPorCategoria("Fantasia"));
console.log("\n")

console.log("Teste 11: Adicionar novo Livro.")
console.log(adicionarLivro("O Senhor dos Anéis", "J.R.R. Tolkien", "500", ["Fantasia", "Aventura"]));
console.log(adicionarLivro("Dragon Ball", "Akira Toriyama", "250", ["Anime", "Ação", "Aventura"]));

//Lista dos Livros
console.log(getLivros());
