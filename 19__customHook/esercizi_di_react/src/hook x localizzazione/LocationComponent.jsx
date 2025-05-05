import useCurrentLocation from "./useCurrentLocation"



const LocationComponent=()=>{

const { location, error, loading, getLocation }=useCurrentLocation()

return(
<div>
<h2>la tua posizione </h2>
<button onClick={getLocation}>ottieni posizione</button>

{loading && <p>caricamento posizione</p>}
{error && <p>{error}</p>}
{location && (
    <p>
        latitude: {location.latitude}  <br />
        longitudine: {location.longitude}
    </p>
)}



</div>

)

}


export default LocationComponent