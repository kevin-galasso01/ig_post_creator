import classes from './FieldText.module.css'

const FieldDesc = (props) => {
    return (
        <div className={classes.field}>
            <div>
                {props.text}:
            </div>
            <textarea type='text' defaultValue={props.title} className={classes.field_image2} id='img_desc'/>
        </div>
    );
}

export default FieldDesc;