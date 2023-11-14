import { useEffect, useState } from "react";
import { getAll } from "../../services/gameService.js";


const Catalogue = () => {

    const [games, setGames] = useState([]);
    useEffect(() => {
        getAll().then(setGames)
    }, []);

    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            <div className="allGames">
                <div className="allGames-info">
                    <img src="./images/avatar-1.jpg"/>
                        <h6>Action</h6>
                        <h2>Cover Fire</h2>
                        <a href="#" className="details-button">Details</a>
                </div>
            </div>
            <h3 className="no-articles">No articles yet</h3>
        </section>
    )
}

export default Catalogue;