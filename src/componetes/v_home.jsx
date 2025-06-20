
import './home.css'
import fafa from "./../assets/sick_8383555.png"

function Vh(){



 function v_home(){

        window.location.replace("/")
    }

    return(
        <>
        
        <div className="v_home">
            <img src={fafa} alt='err'/>

                <button onClick={v_home}>Voltar</button>

            </div>
        </>
    )
}

export default Vh