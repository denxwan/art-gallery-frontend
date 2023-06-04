import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateArtifact = () => {
    const [artifactTitle, setTitle] = useState('');
    const [styleId, setStyleId] = useState('');
    const [artistId, serArtistId] = useState('');
    const [description, setDescription] = useState('');
    const [isInGallery, setAvailability] = useState(true);
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const artifact = { artifactTitle, styleId, artistId, description, isInGallery }

        // console.log(artifact);
        setIsPending(true);

        fetch('/api/artifacts', {
            method: 'POST',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(artifact)
        }).then(() => {
            setIsPending(false);
            history.push("/");
            console.log("Request - 'POST/artifacts'");
        })
    }

    return (
        <div className="create">
            <h2 className="home-h2" style={{fontSize: 40 + 'px'}}>Create an Artifact</h2>
            <form onSubmit={handleSubmit}>
                <label>Artifact Title:</label>
                <input
                    type="text"
                    required
                    value={artifactTitle}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Style Id:</label>
                <input
                    type="text"
                    required
                    value={styleId}
                    onChange={(e) => setStyleId(e.target.value)}
                />
                <label>Artist Id:</label>
                <input
                    type="text"
                    required
                    value={artistId}
                    onChange={(e) => serArtistId(e.target.value)}
                />
                <label>Description:</label>
                <textarea
                    // required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                >
                </textarea>
                <label>Availability in gallery:</label>
                <select
                    value={isInGallery}
                    onChange={(e) => {
                            if(e.target.value === "false")
                            {
                                setAvailability(false);
                            }
                            else
                            {
                                setAvailability(true);
                            }
                        }
                    }
                >
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
                <div style={{marginTop: 10 +'px'}}>
                    { !isPending && <button style={{margin: 10 +'px'}}>Add Artifact</button> }
                    { isPending && <button style={{margin: 10 +'px'}} disabled>Adding artifact..</button> }
                </div>
            </form>
        </div>
    );
}
 
export default CreateArtifact;