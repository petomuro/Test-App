import {GoogleMap} from '@capacitor/google-maps';

export const useGoogleMaps = () => {
    const initMap = async () => {
        const apiKey = process.env.VUE_APP_GM_API_KEY;
        const mapRef = document.getElementById('map') as HTMLElement;

        const newMap = await GoogleMap.create({
            id: 'my-map', // Unique identifier for this map instance
            element: mapRef, // reference to the capacitor-google-map element
            apiKey: apiKey, // Your Google Maps API Key
            config: {
                center: {
                    // The initial position to be rendered by the map
                    lat: 48.6,
                    lng: 19.6,
                },
                zoom: 8, // The initial zoom level to be rendered by the map
            },
        });
    }

    return {
        initMap,
    }
}