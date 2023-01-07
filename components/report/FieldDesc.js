import classes from './FieldText.module.css'

const FieldDesc = (props) => {
    return (
        <div className={classes.field}>
            <div>
                {props.text}:
            </div>
            <textarea type='text' defaultValue={props.title} className={classes.field_image2}/>
        </div>
    );
}

export default FieldDesc;