function pesquisar(){
    let entrada,filtro,books,BooksItens,links,x, y;

    entrada = document.getElementById("pesquisa");
    filtro = entrada.value.toUpperCase();
    books = document.getElementById("books");
    BooksItens = books.getElementsByTagName("li");

    x = document.getElementById("nao-achado");
    y = 0;

    for(let i=0; i < BooksItens.length;i++){
        links = BooksItens[i].getElementsByTagName("a")[0];

        if(links.innerHTML.toUpperCase().indexOf(filtro) == 0){
            BooksItens[i].style.display="block"; /*mostra o elemento*/
            y++;
        }
        else{
            BooksItens[i].style.display="none";
        }
    }
    if(y >= 1){
        x.style.display="none";
    }
    else{
        x.style.display="block";
    }
}