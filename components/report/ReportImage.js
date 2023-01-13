import classes from './ReportImage.module.css';
import Image from 'next/image';

const ReportImage = (props) => {

    return (
        <Image src={props.image}
            alt="Picture Generated"
            width="1080px"
            height="1080px" 
            className={classes.post_image} 
            id='post_image'/>
    );
}

export default ReportImage;