
import axios from "axios"
import './unico.css'
import { useLocation } from "react-router-dom"
import { useState , useEffect } from "react"
import N from "./null"
import ffa from '../assets/sick_8383555.png'
function Unico(){

    let [dados , setDados] = useState([])
    let [caregar , setCaregar] = useState(true)

    let r = useLocation()

    var resposta = r.state.id


   async function call(){


    try{

        
        await axios.get(`https://kitsu.io/api/edge/anime?filter[text]=${resposta}`)
        .then(conteudo =>{
            setCaregar(false)
            setDados(conteudo.data.data)
        })
    }
    catch{

        <N/>
        
    }

    }



     useEffect(()=>{


        call()
     },[])


     if(caregar){

        return (
            <>

                <div className="caregar">

                 <img src={ffa} alt="err"/>
                  <p>Carregando...</p>
                </div>
          
            </>
        )
     }



     return(

        
        <>

        
        <div className="pai">


        {
            

            dados.map(anime =>(

                
                <div key={anime.id} className="unico">

                    <img src={anime.attributes.posterImage.medium} alt="erro"/>
                    <p>{anime.attributes.titles.en}</p>

                
                </div>
            ))
            
       
        }
        
        </div>
        </>
     )

}

export default Unico