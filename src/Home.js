import { useEffect, useState } from "react";
import ArtifactList from "./ArtifactList";
import useFetch from "./useFetch";

const Home = () => {
    // const [artifacts, setArtifacts] = useState([
    //     { artifactId: 3, artifactTitle: 'Awelye', styleId: 'AOL001', artistId: 'CPWG0194', description: '', isInGallery: true, addedDate: '2023-05-29' }
    // ]);

    // const [artifacts, setArtifacts] = useState();

    // useEffect(() => {
    //     fetch('https://localhost:7278/api/artifacts')
    //         .then(res => {
    //             return res.json();
    //         })
    //         .then(data => {
    //             // console.log(data);
    //             setArtifacts(data);
    //         })
    // }, []);

    const { error, isPending, data: artifacts } = useFetch('https://localhost:7278/api/artifacts')

    return (
        <div className="home">
            <h2>hello</h2>
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { artifacts && <ArtifactList artifacts={artifacts} /> }
            {/* {artifacts.map((artifact) => (
                <div className="artifact-preview" key={artifact.artifactId}>
                    <h2>{ artifact.artifactTitle }</h2>
                    <p>Artist Id : { artifact.artistId }</p>
                </div>
            ))} */}
        </div>
    );
}
 
export default Home;