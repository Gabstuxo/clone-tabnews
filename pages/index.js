//FUNCTION - Cria uma função → é um bloco de código que faz algo quando chamada.
// Home é nome do componente principal da tela
function Home() {

    // Função que só funciona dentro do componente Home
    // Ela roda quando o botão for clicado
    function Botaoteste() {
        alert("Vai desistir não vagabundo !!!") // Mensagem exibida quando clicar
    }

    // Return é que a função devolve! Tudo dentro do return é o que aparece na tela
    return (
        <div> {/* div é só um container para organizar os elementos */}
            
            <h1>Hello World</h1> {/* Título grande na tela */}

            <p>Estou aprendendo a programargit</p> {/* Texto normal */}

            <p>E esta sendo uma batalha fortissima</p> {/* Outro texto */}

            {/* Botão que chama a função Botaoteste quando clicado */}
            <button onClick={Botaoteste}>Clique aqui para desistir</button>
        </div>
    )
}

// export manda pra o site oque esta sendo referido(default) deixa como padrão sempre essa função
//Export default home = mandando pra fora padrão a função home lá de cima
export default Home

//Colocamos esse default para deixar como a tela padrão da pagina
//function = palavra que diz "vou criar uma função"
//Home = nome da função (pode ser qualquer nome)
//() = parênteses onde você pode passar informações (vazio por enquanto)
//{} = chaves onde fica o código
//👉 Fora do return → //
//👉 Dentro do return → {/* ... */}





































