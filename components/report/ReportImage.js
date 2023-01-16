import Image from 'next/image';
import classes from './ReportImage.module.css';


const ReportImage = (props) => {

    return (
        <Image
            loader={() => props.image}
            src={props.image}
            alt="Picture Generated"
            width={1080}
            height={1080}
            className={classes.post_image}
            id='post_image' />
    );
}

export default ReportImage;