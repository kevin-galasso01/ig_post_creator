import NewsBody from "../components/news/NewsBody";

const HomePage = () => {

    const DUMMY_NEWS = [
        {
            id: '1',
            title: 'Mondo del calcio ancora in lutto: si è spento Gianluca Vialli',
            description: 'Il mondo del calcio colpito ancora da un grande lutto. Si è spento all&#8217;età di 58 anni Gianluca Vialli, che combatteva da tempo contro una brutta malattia. Il mondo del&#8230; L\'articolo Mondo del calcio ancora in lutto: si è spento Gianluca Vialli è stato pubblicato originariamente sul sito calciomercatonews.com',
            published_at: '2023-01-06T10:15:31+00:00',
            url: 'https://www.calciomercatonews.com/2023/01/06/gianluca-vialli-morte-malattia-sinisa-mihajlovic-londra/'
        },
        {
            id: '2',
            title: 'Via dalla Juve “in prestito”: annuncio in diretta',
            description: 'Il mondo del calcio è ancora in lutto per la scomparsa di Pelé, ma oggi si è parlato anche di calciomercato e di colpi passati e futuri che coinvolgono la&#8230; L\'articolo Via dalla Juve &#8220;in prestito&#8221;: annuncio in diretta è stato pubblicato originariamente sul sito calciomercatonews.com.',
            published_at: '2022-12-30T18:17:21+00:00',
            url: 'https://www.calciomercatonews.com/2023/01/06/gianluca-vialli-morte-malattia-sinisa-mihajlovic-londra/'
        },
        {
            id: '3',
            title: 'Il mondo del calcio piange Pelé: O Rei si è spento',
            description: 'Giorno di lutto nel mondo del calcio: si è spento a 82 anni O Rei, Pelé Oggi è un giorno triste per il mondo del calcio e non solo. All&#8217;età&#8230; L\'articolo Il mondo del calcio piange Pelé: O Rei si è spento è stato pubblicato originariamente sul sito calciomercatonews.com.',
            published_at: '2022-12-29T20:47:01+00:00',
            url: 'https://www.calciomercatonews.com/2023/01/06/gianluca-vialli-morte-malattia-sinisa-mihajlovic-londra/'
        }
    ];


    return (
            <NewsBody news={DUMMY_NEWS} />
    );
}

export default HomePage;