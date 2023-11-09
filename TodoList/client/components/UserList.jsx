import Searchbar from "./Searchbar.jsx";
import Table from "./UserTable.jsx";

const Section = () => {
    return (
        <div>
            <section className="card users-container">
                <Searchbar />
                <Table />
                <button className="btn-add btn">Add new user</button>
            </section>
        </div>
    )
}

export default Section;