import { useLocation } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import './sobre.css'
import ffa from '../assets/sick_8383555.png'
function Sobre() {
    const [item, setItem] = useState(null);
    const location = useLocation();
    let [mensagem, setMensagem] = useState()


    function treler(params) {

        console.log(params);

        window.open(params)

    }

    useEffect(() => {


        const id = location.state?.props;


        if (id) {

            axios.get(`https://api.jikan.moe/v4/anime/${id}`)
                .then(response => {
                    setItem(response.data.data); // Corrigido aqui
                })
                .catch(error => {
                    console.error("Erro ao buscar dados do anime:", error);
                });
        }


        

        }, [location.state]);

return (
    <div>


        <div>
        </div>

        {item ? (
            <>

                <div className="pai_pai">


                    <div className="img">

                        <img src={item.images.jpg.large_image_url} alt={item.title} />
                    </div>

                    <div className="des">

                        <h1>{item.title}</h1>
                        <h2>{item.title_japanese}</h2>
                        <p>{item.type}</p>
                        <p>{item.source}</p>
                        <p>episodes :{item.episodes}</p>
                        <p>status :{item.status}</p>
                        <p>year :{item.year}</p>
                        <p>duration :{item.duration}</p>
                        <p>score :{item.score}</p>
                        <p>rank :{item.rank}</p>
                        <p>popularity :{item.popularity}</p>
                        <p>members :{item.members}</p>

                    </div>

                    <div className="text">
                        <h2>Descricao :</h2>
                        <br></br>
                        <br></br>
                        <p>{item.synopsis}</p>
                        <br>
                        </br>
                        <h2>producers :</h2>
                        <div className="d">{item.producers.map(p => (

                            <div key={p.mal_id} className="link">

                                <p className="name">{p.name}</p>
                                <p className="url">{p.url}</p>
                            </div>
                        ))}</div>
                        <br>
                        </br>

                        <button onClick={() => treler(item.trailer.url)} id="treler">Ver Trailer ...</button>

                    </div>

                </div>
            </>
        ) : (


             <div className="caregar">

                 <img src={ffa} alt="err"/>
                  <p>Carregando...</p>
                </div>
          
           
        )}
    </div>
);
}

export default Sobre;
