//FUNCTION - Cria uma função → é um bloco de código que faz algo quando chamada.
// Home é nome do componente principal da tela
function Home() {

    // Função que só funciona dentro do componente Home
    // Ela roda quando o botão for clicado
    function Botaoteste() {
        alert("Você clicou no botão 'ava'") // Mensagem exibida quando clicar
    }

    // Return é que a função devolve! Tudo dentro do return é o que aparece na tela
    return (
        <div> {/* div é só um container para organizar os elementos */}
            
            <h1>Hello World</h1> {/* Título grande na tela */}

            <p>Estou aprendendo a programar</p> {/* Texto normal */}

            <p>E esta sendo uma batalha fortissima</p> {/* Outro texto */}

            {/* Botão que chama a função Botaoteste quando clicado */}
            <button onClick={Botaoteste}>Clique aqui para desistir</button>
        </div>
    )
}

// Permite que outros arquivos usem o componente Home
export default Home

//Colocamos esse default para deixar como a tela padrão da pagina
//function = palavra que diz "vou criar uma função"
//Home = nome da função (pode ser qualquer nome)
//() = parênteses onde você pode passar informações (vazio por enquanto)
//{} = chaves onde fica o código






































