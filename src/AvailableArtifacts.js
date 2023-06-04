// import { useEffect, useState } from "react";
import ArtifactList from "./ArtifactList";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";

const AvailableArtifacts = () => {

    const { error, isPending, data: artifacts } = useFetch('https://localhost:7278/api/artifacts/in-gallery');

    return (
        <div>
            <h2 className="home-h2" style={{fontSize: 40 + 'px'}}>Artifacts available now on our gallery.</h2>
            <Link to="/">
                <h3 style={{fontSize: 20 + 'px'}}>Get all the artifacts of our gallery</h3>
            </Link>
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { artifacts && <ArtifactList artifacts={artifacts} /> }
            { console.log("Request - 'GET/artifacts/in-gallery'") }
        </div>
    );
}
 
export default AvailableArtifacts;