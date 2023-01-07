import classes from './FieldText.module.css'

const FieldText = (props) => {
    return (
        <div className={classes.field}>
            <div>
                This {props.text}:
            </div>
            <div className={classes.field_image}>
                {props.title}
            </div>
        </div>
    );
}

export default FieldText;