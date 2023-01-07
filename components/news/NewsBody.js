import classes from './NewsBody.module.css';
import NewsCard from './NewsCard';

const NewsBody = (props) => {
    return(
        <div className={classes.news_body}>
            {props.news.map((news) => (
                <NewsCard 
                    key={news.id}
                    id={news.id}
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