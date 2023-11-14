import { useEffect, useState } from "react";
import { getAll } from "../../services/gameService.js";
import Game from "./Game/Game.jsx";


const Catalogue = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        getAll().then(result => setGames(result))
    }, []);

    console.log(games);

    return (
        <section id="catalog-page">
            <h1>All Games</h1>

            {games.map(game => (
                <Game key={game._id} {...game}/>
            ))}
            {games.length === 0 && <h3 className="no-articles">No articles yet</h3>}

        </section>
    )
}

export default Catalogue;