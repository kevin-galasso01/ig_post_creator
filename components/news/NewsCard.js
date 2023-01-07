import Button from './Button';
import classes from './NewsCard.module.css';

const NewsCard = (props) => {

    return (
        <div className={classes.news}>
            <div className={classes.card}>
                <div className={classes.card_title}>{props.title}</div>
                <div className={classes.card_date}>{props.date}</div>
                <div className={classes.card_desc}>{props.description}</div>
            </div>
            <Button
                id={props.id}
                title={props.title}
                description={props.description}
                url={props.url}
            />
        </div>
    );
}

export default NewsCard;