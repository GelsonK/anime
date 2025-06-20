
import './home.css'
import Navbar from "./nav_bar"
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import Logo from './animation'



function Home() {

    var [caregar, setCaregar] = useState(true)

    const item = useRef(null)

    let [sms, setSms] = useState()


    var [dados, setDados] = useState([])


    var [pagina, setPagina] = useState(1)

    let v = localStorage.getItem('valor')

    if (pagina > localStorage.getItem('valor')) {


        localStorage.setItem('valor', Number(v) + 1)

    }
    else if (pagina < localStorage.getItem('valor')) {

        pagina = Number(v)
    }








    let navegar = useNavigate()

    function sobre(props) {


        navegar('/Sobre', { state: { props } })

    }


    function voltar() {

        if (pagina > 1) { setPagina(pagina = pagina - 1) }
        localStorage.setItem('valor', pagina)


    }

    function contar() {

        setPagina(pagina = pagina + 1)


    }







    let fim = 24;

    async function ss() {

        setCaregar(true)

        await item.current.scrollTo({ top: 0, behavior: 'smooth' });


        try {
            await axios.get(`https://api.jikan.moe/v4/anime?limit=${fim}&page=${localStorage.getItem('valor')}`)
                .then(resposta => {
                    setDados(resposta.data.data)


                })
        }
        catch {

            setSms(sms = "Sem coneccao a internet")


            localStorage.setItem("valor", 1)
        }
        finally {

            setCaregar(false)
        }



    }

    useEffect(() => {

        ss()

    }, []);



    return (
        <>
            <Navbar />

            <main className="main" ref={item}>


                <div className='corpo'>





                    <div className='bb'>

                        <h2>Pagina : </h2>
                        <h2 id='numero'>{localStorage.getItem('valor')}</h2>
                    </div>
                    <div className='todos'>

                        {
                            dados ? (

                                dados.map(anime => (


                                    <div key={anime.mal_id} className='animes' >

                                        <img src={anime.images.webp.large_image_url} onClick={() => {

                                            sobre(anime.mal_id)
                                        }} alt='Erro' />

                                        <p>{anime.title}</p>

                                        <div>
                                            <button>{anime.rating}</button>
                                        </div>

                                    </div>

                                ))


                            ) : (<Logo />)

                        }


                    </div>

                    <p id='sms'>{sms}</p>


                    <div className='pp'>

                        <button onClick={() => {

                            voltar()
                            ss()

                        }}>Back</button>


                        <h2>{localStorage.getItem('valor')}</h2>
                        <button onClick={() => {

                            contar()
                            ss()
                        }}>Next</button>
                    </div>
                </div>




            </main>

        </>
    )
}


export default Home