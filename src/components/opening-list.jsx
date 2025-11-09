import { useEffect, useState } from "react";

function OpeningList({search, typeFilter, firstMove}){
    const [openings, setOpenings] = useState([]);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/ognjen-simic/chess-openings-api/main/openings.json")
        .then(res => res.json())
        .then(data => setOpenings(data))
        .catch(error => console.error(error));
    }, [])

    const filtered = openings.filter(o => {
        const matchesSearch = o.name.toLowerCase().includes(search.toLowerCase());
        const matchesType = !typeFilter || o.type === typeFilter;
        const matchesFirstMove = !firstMove || o.firstMove === firstMove;

        return (matchesSearch && matchesType && matchesFirstMove);
    });

    if (filtered.length === 0)
            {
                return(<>
                    <h2 className="noRes">No matching results</h2>
                </>);
            }
    return(
        <ul className="opList">
            {filtered.map(o => (
                <li className="Opening" key={o.id}>
                    <h2 className="opName">{o.name}</h2>
                    <img className="opImg" src={o.picture} alt={o.name}/>
                    <div className="opInfo">
                        <p>First Move: {o.firstMove}</p>
                        <p>Type: {o.type}</p>
                        <p>Moves: {o.moves.join(", ")}</p>
                        <p>Eco: {o.eco}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default OpeningList;