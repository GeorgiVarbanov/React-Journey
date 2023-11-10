import Searchbar from "./Searchbar.jsx";
import Table from "./UserTable.jsx";

const Section = () => {
    return (
        <div>
            <section className="card users-container">
                <Searchbar />
                <Table />
                
            </section>
        </div>
    )
}

export default Section;