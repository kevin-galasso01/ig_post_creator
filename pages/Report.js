import Link from 'next/link';
import FieldDesc from '../components/report/FieldDesc';
import ReportImage from '../components/report/ReportImage';
import classes from '../styles/PostGeneratorPage.module.css'

const Report = () => {

    return (
        <div className={classes.report}>

            <ReportImage />

            <FieldDesc
                text='description'
                title='Description'
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

export default Report;