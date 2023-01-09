import Link from 'next/link';
import FieldDesc from '../components/report/FieldDesc';
import ReportImage from '../components/report/ReportImage';
import classes from '../styles/PostGeneratorPage.module.css';
import imgGenerated from '../images/image_generated.jpg';
import imgError from '../images/image_error.png';

const Report = ({ img_generated, post_description }) => {

    return (
        <div className={classes.report}>

            {{ img_generated } ?
                <ReportImage image={imgGenerated} /> :
                <ReportImage image={imgError}/>}

            <FieldDesc
                text='description'
                title={post_description}
            />
            <Link className={classes.button}
                href={{
                    pathname: './Public',
                    query: {

                    }
                }}>
                <div>
                    Public
                </div>
            </Link>
            <Link className={classes.button}
                href={{
                    pathname: './',
                    query: {

                    }
                }}>
                <div>
                    Regenerate
                </div>
            </Link>
        </div>
    );
}

Report.getInitialProps = async ({ query }) => {
    const { img_generated } = query;
    const { post_description } = query;

    return { img_generated, post_description }
}

export default Report;