import { useEffect, useState } from "react";
import { Produto } from "../../../Models/Produto";
import { parse } from "path";

function ProdutoCadastrar(){

    const[produtos, setProdutos] = useState<Produto[]>([]);
    const[nome, SetNome] = useState("");
    const[descricao, SetDescricao] = useState("");
    const[quantidade, SetQuantidade] = useState("");
    const[valor, SetValor] = useState("");

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

    function cadastrarProduto(e : any){
        e.preventDefault();
        const produto : Produto = {
            nome: nome,
            descricao: descricao,
            quantidade: parseInt(quantidade),
            valor: parseFloat(valor),
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
                SetNome("");
                SetDescricao("");
                SetQuantidade("");
                SetValor("");
            });
    }

    return (
        <div>
            <h1>Cadastrar Produto</h1>
            <form onSubmit={cadastrarProduto}>
            <label>Nome:</label>
            <input type="text" value={nome} onChange={(e : any) => SetNome(e.target.value)} required />

            <label>Descricao:</label>
            <input type="text" value={descricao} onChange={(e : any) => SetDescricao(e.target.value)} required />

            <label>Quantidade:</label>
            <input type="text" value={quantidade} onChange={(e : any) => SetQuantidade(e.target.value)} required />

            <label>Valor:</label>
            <input type="text" value={valor} onChange={(e : any) => SetValor(e.target.value)} required />

            <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}

export default ProdutoCadastrar;