//API yang digunakan https://api.discogs.com/, https://musicbrainz.org/ws/2/

fetchData();

async function fetchData() {
    try{
        const response = await fetch("https://musicbrainz.org/ws/2/artist/8264722b-df00-467a-858e-5c97cda169c9?inc=aliases&fmt=json");

        if (!response.ok) {
            throw new Error("Data cannot be fetch");
        }

        const data = await response.json();
        console.log(data);
    }   
    catch(error){
        console.error(error);
    }
}