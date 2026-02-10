import NavBar from "./navBar"
import SearchBar from "./searchBar"
import OutputArea from "./outPutArea"

export default function Home() {
  return (
    <main>
      
      <div>
        <NavBar />
      </div>

      <div className="outPutArea">
        <OutputArea content="Not default"/>
      </div>
      
      <div className="Search">
        <SearchBar />
      </div>

    </main>
    
  );
}