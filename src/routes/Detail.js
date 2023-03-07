import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import Movie from "../components/Movie";


function Detail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [info, setInfo] = useState({});
    const getMovie = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json()
        setInfo(json);
        setLoading(false);
    }
    useEffect(() => {
        getMovie();
    }, []);
    return <div>
        {loading ? 
        <h1>Loading...</h1>
         : 
        <div>
            <h1>Detail</h1>
            <Movie
                key={info.data.movie.id}
                movieId={info.data.movie.id}
                coverImg={info.data.movie.medium_cover_image} 
                title={info.data.movie.title} 
                summary={info.data.movie.description_full} 
                genres={info.data.movie.genres}
            />
        </div>
        }
    </div>
}

export default Detail;