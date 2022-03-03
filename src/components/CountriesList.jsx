import { Link } from "react-router-dom";


export default function CountriesList({countries}) {
    return (
        <div className="contries-container">
            {countries.map((country) => {
                return(
                <div className="row" key={country.alpha3Code}>
                    <div className="col-5">
                        <div className="list-group">
                            <Link to={`/${country.alpha3Code}`} className="list-group-item list-group-item-action" >
                                <img className="App-logo" alt="Flag" width="100px" height="auto" src={`https://flagpedia.net/data/flags/w580/${country.alpha2Code.toLowerCase()}.png`} />
                                <p>{country.name}</p>
                            </Link>
                        </div>
                    </div>
                </div>)

            })}
        </div>

    )
}