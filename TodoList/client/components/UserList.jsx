import Searchbar from "./Searchbar.jsx";
import Table from "./UserTable.jsx";

const Section = () => {
    return (
        <section className="card users-container">
            <Searchbar />
            <Table />
            <button class="btn-add btn">Add new user</button>
        </section>
    )
}

export default Section;