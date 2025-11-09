import { useState } from 'react'
import './App.css'
import OpeningList from './components/opening-list'

function App() {

  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [firstMove, setFirstMove] = useState("");

  const resetFilters = () => {
    setSearch("");
    setTypeFilter("");
    setFirstMove("");
  };

  return (
    <>
    <header>
      <h1 className="title">Chess Openings Browser</h1>
    </header>
    <div className="bg-cont">
      
    <div className="filters">
      
      <input type="text"
       placeholder="Search Opening"
       value={search}
       onChange={(e) => setSearch(e.target.value)}
       className="filt"/>

      <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className="filt">
        <option value="">All Types</option>
        <option value="Open Game">Open Game</option>
        <option value="Semi-Open Game">Semi-Open Game</option>
        <option value="Closed Game">Closed Game</option>
        <option value="Flank Opening">Flank Opening</option>
        <option value="Indian Defense">Indian Defense</option>
      </select>

      <input type="text"
      placeholder="First Move"
      value={firstMove}
      onChange={(e) => setFirstMove(e.target.value)}
      className="filt"/>

    </div>

      <OpeningList search={search} typeFilter={typeFilter} firstMove={firstMove} />
    </div>
    </>
  )
}

export default App
