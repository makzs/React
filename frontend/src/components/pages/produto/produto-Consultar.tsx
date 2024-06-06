import { useEffect, useState } from "react";
import { Produto } from "../../../Models/Produto";

function ProdutoListar(){

    const[produtos, setProdutos] = useState<Produto[]>([]);

    useEffect(() =>
        {
            console.log("O componente foi carregado");
            carregarProduto();
            
    
        }, []);

    function carregarProduto(){
        //FECTH ou AXIOS (o .then é se der tudo certo faça tal coias)
        fetch("http://localhost:5259/produto/listar").then((resposta) => resposta.json()).then((produtos : Produto[]) =>
            {
                setProdutos(produtos);
            });
    }

    function cadastrarProduto(){

        const produto : Produto = {
            nome: "Macarrao",
            descricao: "comida",
            quantidade: 150,
            valor: 15,
        };

        fetch("http://localhost:5259/produto/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(produto),
        }).then((resposta) => resposta.json()).then((produto : Produto) =>
            {
                console.log(produto);
            });
    }

    return (
        < div >
            < h2 > Consultar Produto </ h2 >
            <button onClick={cadastrarProduto}>Cadastrar</button>
            <table border={1}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Valor</th>
                        <th>Quantidade</th>
                        <th>Criado em</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map(produto => (
                        <tr>
                            <td>{produto.id}</td>
                            <td>{produto.nome}</td>
                            <td>{produto.descricao}</td>
                            <td>{produto.valor}</td>
                            <td>{produto.quantidade}</td>
                            <td>{produto.criadoEm}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </ div >
    );
}

export default ProdutoListar;