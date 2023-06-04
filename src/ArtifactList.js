import { Link } from "react-router-dom";

const ArtifactList = ({ artifacts }) => {
    return (
        <div className="artifact-list">
            {/* <h2>{ artifacts.artifactTitle }</h2> */}
            {artifacts.map((artifact) => (
                <div className="artifact-preview" key={artifact.artifactId}>
                    <Link to={`/artifacts/${artifact.artifactId}`}>
                        <h2>{ artifact.artifactTitle }</h2>
                        <p>Artist Id : { artifact.artistId }</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default ArtifactList;