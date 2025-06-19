
import './nav.css'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ffa from '../assets/sick_8383555.png'

function Navbar() {


     let anime_id = useNavigate()

    let input = useRef()

    function b() {

        if(input.current.value === "") return


        
        anime_id('/Id',{state:{id:input.current.value}})



    }


    return (

        <>

            <header className='nav_bar'>

                 <img src={ffa} alt='erro' id='ffa'/>

                <div className='meno'>

                   
                    <div className='pesquisa'>

                        <input type='text' placeholder='pesquisa' ref={input} />
                        <button onClick={b}>Pesquisar</button>
                    </div>

                </div>

               
                
            </header>
        </>
    )

}

export default Navbar