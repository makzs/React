import { useEffect, useState } from "react";

function ProdutoListar(){

    //exercicio consultar os produtos da API  e exibir na tela
    // resolver o problema de CORS
    // como exibir na tela um array em react

    // executar algum codigo no carregamento do componente
    useEffect(() => {
        console.log("O componente foi carregado");

        //FECTH ou AXIOS (o .then é se der tudo certo faça tal coias)
        fetch("https://viacep.com.br/ws/01001000/json/").then((resposta) => resposta.json()).then((cep) => {
            console.log(cep);
        });

     }, []);

    return (
        <div>
            <h2>Listar produtos</h2>
        </div>
    );
}

export default ProdutoListar;