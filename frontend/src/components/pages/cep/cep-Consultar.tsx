import { useEffect, useState } from "react";
import { Endereco } from "../../../Models/Endereco";


    //exercicio consultar os produtos da API  e exibir na tela
    // resolver o problema de CORS
    // como exibir na tela um array em react

function CepConsultar()
{

    const[cep, setCep] = useState("");
    const[logradouro, setLogradouro] = useState("");
    const[bairro, setBairro] = useState("");
    const[uf, setUf] = useState("");
    const[localidade, setLocalidade] = useState("");


    // executar algum codigo no carregamento do componente
    useEffect(() =>
    {
        console.log("O componente foi carregado");
        //carregarCep();
        

    }, []);

    function carregarCep(){
        //FECTH ou AXIOS (o .then é se der tudo certo faça tal coias)
        fetch("https://viacep.com.br/ws/" + cep + "/json/").then((resposta) => resposta.json()).then((endereco : Endereco) =>
            {
                setLogradouro(endereco.logradouro)
                setBairro(endereco.bairro)
                setLocalidade(endereco.localidade)
                setUf(endereco.uf)
            });
    }

    return (
        < div >
            < h2 > Consultar cep </ h2 >
            <input type="text" placeholder="Digite CEP" onBlur={carregarCep} onChange={(e : any) => setCep(e.target.value)}></input>

            <p>{logradouro}</p>
            <input type="text" value={bairro} />
            <br></br>
            <button>{localidade}</button>
            <h1>{uf}</h1>
            <br></br>

        </ div >
    );
}

export default CepConsultar;