import NewsBody from "../components/news/NewsBody";
//import { getServerSideProps } from 'next';

export default function HomePage({ data }) {

    return (
        <NewsBody news={data} />
    );
}

export async function getServerSideProps() {

    const key = process.env.MEDIASTACK_APIKET;
    const language = '&languages=it';
    const sort = '&sort=published_desc';
    const keyWord = '&keywords=calcio';
    const source = '&sources=calciomercatonews';
    const limit = '&limit=10';
    const string = process.env.URL;

    const url = string + key + language + sort + keyWord + source + limit;

    const res = await fetch(url);
    let newsData = await res.json();

    return {
        props: {
            data: newsData,
        },
    };
};