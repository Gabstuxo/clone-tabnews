function Home() {
    function Botaoteste() {
        alert("Você clicou no botão 'ava'")
    }

    return (
        <div style={{
            backgroundImage: "url('/Gifdog.gif')",  // Seu GIF do dog
            backgroundSize: 'cover',       // Cobre toda a tela
            backgroundPosition: 'center',  // Centraliza o GIF
            backgroundRepeat: 'no-repeat', // Não repete
            minHeight: '100vh',            // Ocupa a altura toda da tela
            display: 'flex',               // Ativa o flexbox
            flexDirection: 'column',       // Organiza os itens em coluna
            alignItems: 'center',          // Centraliza horizontalmente
            justifyContent: 'center',      // Centraliza verticalmente
            color: 'white',                // Cor do texto
            padding: '20px',               // Espaçamento interno
            // Camada escura pra facilitar leitura (opcional)
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backgroundBlendMode: 'darken'
        }}>
            
            <h1>Hello World</h1>
            <h6>Vamos fazer um teste de fonte</h6>
            <h5>Esse é o padrão do tamanho 6 hehe</h5>
            <p>Estou aprendendo a programar</p>
            <p>E esta sendo uma batalha fortissima</p>
            <p>Mas vamos juntos até dar certo</p>
            
            <button 
                onClick={Botaoteste}
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    backgroundColor: '#e94560',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
            >
                Clique aqui para desistir
            </button>
        </div>
    )
}

export default Home
