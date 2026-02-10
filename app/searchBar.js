'use client'



export default function SearchBar() {
    function search(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const query = formData.get("query");
        alert(`You searched for '${query}'`);
    }
    return (
        
            <div className="container d-flex justify-content-center align-items-center search-wrapper" >
                <div className="search-wrapper">
                    <form onSubmit={search}>
                        <div className="search-box">
                            <input className="search-input form-control" name="query" placeholder="Search"/>     
                        </div>
                    </form>
                </div>
            </div>
        



    );
}