import { Link, useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from './useFetch';

const ArtifactDetails = () => {
    const { id } = useParams();
    const { data: artifact, error, isPending } = useFetch('https://localhost:7278/api/artifacts/' + id);
    const history = useHistory();

    const handleClink = () => {
        fetch('https://localhost:7278/api/artifacts/' + id, {
            method: 'DELETE'
        }).then(() => {
            history.push("/");
            console.log("Request - 'DELETE/artifacts/{id}'");
        })
    }

    return (
        <div className="artifact-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { artifact && (
                <article>
                    <h2 className="home-h2">{ artifact.artifactTitle }</h2>
                    <p className="para">Added date : { artifact.addedDate }</p>
                    <div className="newdiv">
                        <p>Style Id : { artifact.styleId }</p>
                        <p>Artist Id : { artifact.artistId }</p>
                        <p>Description : { artifact.description }</p>
                        <p>Availablity in gallery : { artifact.isInGallery }</p>
                    </div>
                    <div style={{marginTop: -10 +'px'}}>
                        <button style={{margin: 10 +'px'}} onClick={handleClink}>Remove artifact</button>
                        <Link to={`/edit/${artifact.artifactId}`}>
                            <button style={{margin: 10 +'px'}}>Edit artifact</button>
                        </Link>
                    </div>
                </article>
            )}
            { console.log("Request - 'GET/artifacts/{id}'") }
        </div>
    );
}
 
export default ArtifactDetails;