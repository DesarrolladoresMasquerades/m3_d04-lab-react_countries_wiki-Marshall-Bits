import { Link } from "react-router-dom"

export default function CountryDetails(country) {
    return (
        <div className="country-details">
            <img src={`https://flagpedia.net/data/flags/w580/${country.country.alpha2Code.toLowerCase()}.png`} alt={country.country.name} />
            <h1>{country.country.name}</h1>
            <table class="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td>Capital</td>
                        <td>{country.country.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                            {country.country.area} km <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {country.country.borders.map((border) => {
                                    return (
                                        <li>
                                            <Link to={`/${border}`}>{border}</Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}