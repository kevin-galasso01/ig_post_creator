import classes from '../styles/Public.module.css'

const Error = ({ error_text }) => {
    return (
        <div className={classes.message_parent}>
            <div className={classes.error}>
                {error_text}
            </div>
        </div>
    );
}

Error.getInitialProps = async ({ query }) => {
    const { error_text } = query;

    return { error_text }
}

export default Error;