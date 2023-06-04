import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
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
        })
    }

    return (
        <div className="artifact-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { artifact && (
                <article>
                    <h2>{ artifact.artifactTitle }</h2>
                    <p>Added date : { artifact.addedDate }</p>
                    <div>
                        <p>Style Id : { artifact.styleId }</p>
                        <p>Artist Id : { artifact.artistId }</p>
                        <p>Description : { artifact.description }</p>
                        <p>Availablity in gallery : { artifact.isInGallery }</p>
                    </div>
                    <button onClick={handleClink}>Remove artifact</button>
                </article>
            )}
        </div>
    );
}
 
export default ArtifactDetails;