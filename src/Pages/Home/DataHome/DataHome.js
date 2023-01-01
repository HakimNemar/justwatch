// img for providers
import apple_tv from '../../../Assets/Images/LogoStreamingService/apple_tv.jpeg';
import apple_tv_plus from '../../../Assets/Images/LogoStreamingService/apple_tv_plus.jpeg';
import arte from '../../../Assets/Images/LogoStreamingService/arte.jpeg';
import canal from '../../../Assets/Images/LogoStreamingService/canal.jpeg';
import disney_plus from '../../../Assets/Images/LogoStreamingService/disney_plus.jpeg';
import france_tv from '../../../Assets/Images/LogoStreamingService/france_tv.jpeg';
import google_play_movies from '../../../Assets/Images/LogoStreamingService/google_play_movies.jpeg';
import netflix from '../../../Assets/Images/LogoStreamingService/netflix.jpeg';
import ocs from '../../../Assets/Images/LogoStreamingService/ocs.jpeg';
import orange_vod from '../../../Assets/Images/LogoStreamingService/orange_vod.jpeg';
import prime_video from '../../../Assets/Images/LogoStreamingService/prime_video.jpeg';
import sfr_play from '../../../Assets/Images/LogoStreamingService/sfr_play.jpeg';
import sixplay from '../../../Assets/Images/LogoStreamingService/sixplay.jpeg';
// img for features
import all_in_one_place from '../../../Assets/Images/GlobalCards/all_in_one_place.png';
import one_search from '../../../Assets/Images/GlobalCards/one_search.png';
import one_watchlist from '../../../Assets/Images/GlobalCards/one_watchlist.png';

const DataHome = {
    'providers': [
        {
            'name': 'netflix',
            'image': netflix
        }, {
            'name': 'Amazone Prime Video',
            'image': prime_video
        }, {
            'name': 'Disney Plus',
            'image': disney_plus
        }, {
            'name': 'Canal+',
            'image': canal
        }, {
            'name': 'OCS Go',
            'image': ocs
        }, {
            'name': 'Apple TV',
            'image': apple_tv
        }, {
            'name': 'Apple TV+',
            'image': apple_tv_plus
        }, {
            'name': 'Google Play Movies',
            'image': google_play_movies
        }, {
            'name': 'SFR Play',
            'image': sfr_play
        }, {
            'name': 'SixPlay',
            'image': sixplay
        }, {
            'name': 'Orange VOD',
            'image': orange_vod
        }, {
            'name': 'France TV',
            'image': france_tv
        }, {
            'name': 'Arte',
            'image': arte
        }
    ],
    'features': [
        {
            'image': all_in_one_place,
            'title': 'Votre guide complet de streaming',
            'subtitle': 'Tout au même endroit',
            'text': 'Recevez des recommandations personnalisées pour tous vos services de streaming préférés. Nous vous indiquerons où regarder les films, les séries et le sport.'
        }, {
            'image': one_search,
            'title': 'Toutes les plateformes en une seule recherche',
            'subtitle': 'Tout en une recherche',
            'text': 'Ne faites plus jamais la navette entre vos services de streaming pour savoir si un film ou une série est disponible. Avec nous, vous saurez tout en une seule recherche.'
        }, {
            'image': one_watchlist,
            'title': 'Regroupez toutes vos listes',
            'subtitle': 'Tout dans une watchlist',
            'text': 'Créez une liste de visionnage unique avec tous les films et toutes les séries que vous souhaitez regarder - elle couvrira tous les services de streaming à la fois, pour tous vos appareils.'
        }
    ]
};

export default DataHome;
