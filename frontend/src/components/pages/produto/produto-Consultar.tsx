import { useEffect, useState } from "react";
import { Produto } from "../../../Models/Produto";
import axios from "axios";

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

    function deletar(id : string){
        console.log("id: " + id);
        //axios.delete("http://localhost:5259/produto/deletar/" + id);
        axios.delete(`http://localhost:5259/produto/deletar/${id}`) .then((resposta) => {
            // pega o corpo da requisição o axios.data
            console.log(resposta.data);
            setProdutos(resposta.data);
        });
    }

    return (
        < div >
            < h2 > Consultar Produto </ h2 >
            <table border={1}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Valor</th>
                        <th>Quantidade</th>
                        <th>Criado em</th>
                        <th>Deletar</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map(produto => (
                        <tr key={produto.id}>
                            <td>{produto.id}</td>
                            <td>{produto.nome}</td>
                            <td>{produto.descricao}</td>
                            <td>{produto.valor}</td>
                            <td>{produto.quantidade}</td>
                            <td>{produto.criadoEm}</td>
                            <td><button onClick={() => {deletar(produto.id!);}} >Deletar</button></td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </ div >
    );
}

export default ProdutoListar;