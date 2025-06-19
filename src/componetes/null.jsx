
import './null.css'



function N(){



     async function voltar(){

        window.close()

     }


    return(

        <>

         <div className='N'>
            <h2>Aviso:</h2>
            <p> O trailer deste anime não está disponível no momento. Isso pode acontecer por vários motivos, como a ausência de um trailer oficial lançado pelos produtores, ou limitações na nossa base de dados atual.

Sabemos o quanto é importante assistir a um trailer para ter uma ideia da história, da animação e dos personagens. Por isso, continuaremos atualizando nosso sistema, e assim que o trailer estiver disponível, ele será adicionado automaticamente.

Enquanto isso, você pode conferir a sinopse, as imagens e outras informações sobre o anime. Obrigado pela compreensão!</p>

           <button onClick={voltar}>Voltar</button>
         </div>
        </>
    )
}

export default N