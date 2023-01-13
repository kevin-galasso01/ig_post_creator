import { useEffect, useState } from 'react';
import Button from './Button';
import classes from './NewsCard.module.css';

const regex = [
    { entity: '&#8217;', symbol: '\'' },
    { entity: '&#8220;', symbol: '"' },
    { entity: '&#8230;', symbol: '…' },
    { entity: '&#34;', symbol: '"' },
    { entity: '&euro;', symbol: '€' },
    { entity: '&#8216;', symbol: '’' },
    { entity: '&#8221;', symbol: '”' },]

const NewsCard = (props) => {
    const [decodedString, setDecodedString] = useState('');

    useEffect(() => {
        var desc = props.description;
        let str = '';

        regex.forEach(element => {
            if (desc.includes(element.entity)) {
                if (str === '') {
                    str = desc.split(element.entity).join(element.symbol);
                }else{
                    str = str.split(element.entity).join(element.symbol);
                }
            }
        });
        str= str.replace('è stato pubblicato originariamente sul sito calciomercatonews.com', '');
        setDecodedString(str);
    }, []);

    return (
        <div className={classes.news}>
            <div className={classes.card}>
                <div className={classes.card_title}>{props.title}</div>
                <div className={classes.card_date}>{props.date}</div>
                <div className={classes.card_desc}>{decodedString}</div>
            </div>
            <Button
                id={props.id}
                title={props.title}
                description={decodedString}
                url={props.url}
            />
        </div>
    );
}

export default NewsCard;