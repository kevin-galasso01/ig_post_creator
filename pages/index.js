import NewsBody from "../components/news/NewsBody";
//import { getServerSideProps } from 'next';

export default function HomePage({ data }) {

    return (
        <NewsBody news={data} />
    );
}

export async function getServerSideProps() {

    const key = '?access_key=50c24f7eeea911014e455695584049a5';
    const language = '&languages=it';
    const sort = '&sort=published_desc';
    const keyWord = '&keywords=calcio';
    const source = '&sources=calciomercatonews';
    const limit = '&limit=10';
    const string = 'http://api.mediastack.com/v1/news';

    const url = string + key + language + sort + keyWord + source + limit;

    const res = await fetch(url);
    let newsData = await res.json();

    return {
        props: {
            data: newsData,
        },
    };
};