import classes from './Button.module.css';
import Link from "next/link";

const Button = (props) => {

    return (
        <div className={classes.container_button}>
            <Link className={classes.news_button}
                href={{
                    pathname: './post_generator',
                    query: {
                        title: props.title,
                        description: props.description,
                        url: props.url
                    }
                }}>
                <div>
                    select this
                </div>
            </Link>
        </div>
    );
}

export default Button;