import classes from './FieldText.module.css'

const FieldText = (props) => {
    return (
        <div className={classes.field}>
            <div>
                This {props.text}:
            </div>
            <input type='text' defaultValue={props.title} className={classes.field_image}/>
        </div>
    );
}

export default FieldText;