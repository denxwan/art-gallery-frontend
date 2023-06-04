import { Link, useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";
import useFetch from './useFetch';

const EditDetails = () => {
    const { id } = useParams();

    const [artifactTitle, setTitle] = useState('');
    const [styleId, setStyleId] = useState('');
    const [artistId, setArtistId] = useState('');
    const [description, setDescription] = useState('');
    const [isInGallery, setAvailability] = useState(true);
    const [isPending2, setIsPending] = useState(false);

    useEffect(() => {
        fetch('https://localhost:7278/api/artifacts/' + id).then((res) => {
            return res.json();
        }).then((res) => {
            setTitle(res.artifactTitle);
            setStyleId(res.styleId);
            setArtistId(res.artistId);
            setDescription(res.description);
            setAvailability(res.isInGallery);
            console.log("Request - 'GET/artifacts/{id}'");
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const artifact = { artifactTitle, styleId, artistId, description, isInGallery }

        // console.log(artifact);
        setIsPending(true);

        fetch('/api/artifacts/' + id, {
            method: 'PUT',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(artifact)
        }).then(() => {
            setIsPending(false);
            history.push("/");
            console.log("Request - 'PUT/artifacts/{id}'");
        })
    }

    return (
        <div className="create">
            <h2 className="home-h2" style={{fontSize: 40 + 'px'}}>Edit an Artifact</h2>
            <form onSubmit={handleSubmit}>
                <label>Artifact Title:</label>
                {/* { console.log(artifact.artifactTitle) } */}
                <input
                    type="text"
                    required
                    // placeholder={artifact.artifactTitle}
                    value={artifactTitle}
                    // value={artifact.artifactTitle}
                    onChange={e => setTitle(e.target.value)}
                />

            <label>Style Id:</label>
            <input
                type="text"
                required
                value={styleId}
                onChange={e => setStyleId(e.target.value)}
            />

            <label>Artist Id:</label>
            <input
                type="text"
                required
                value={artistId}
                onChange={e => setArtistId(e.target.value)}
            />
            <label>Description:</label>
            <textarea
                // required
                value={description}
                onChange={e => setDescription(e.target.value)}
            >
            </textarea>
            <label>Availability in gallery:</label>
            <select
                value={isInGallery}
                onChange={e => {
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
                { !isPending2 && <button style={{margin: 10 +'px'}}>Update Artifact</button> }
                { isPending2 && <button style={{margin: 10 +'px'}} disabled>Updating artifact..</button> }
            </div>
            </form>
            { console.log("Request - 'GET/artifacts/{id}'") }
        </div>
    );
}
 
export default EditDetails;