import classes from './NewsBody.module.css';
import NewsCard from './NewsCard';

const NewsBody = ({ news }) => {

    return (
        <div className={classes.news_body}>
            {news.data.map((news, key) => (
                <NewsCard
                    key={key}
                    title={news.title}
                    description={news.description}
                    date={news.published_at}
                    url={news.url}
                />
            ))}
        </div>
    );
}

export default NewsBody;