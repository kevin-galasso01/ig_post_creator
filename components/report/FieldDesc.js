import classes from './FieldText.module.css'

const FieldDesc = (props) => {
    return (
        <div className={classes.field}>
            <div>
                {props.text}:
            </div>
            <div className={classes.field_image2}>
                {props.title}
            </div>
        </div>
    );
}

export default FieldDesc;