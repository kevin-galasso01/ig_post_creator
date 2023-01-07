import FieldText from '../components/report/FieldText';
import FieldDesc from '../components/report/FieldDesc';
import classes from '../styles/PostGeneratorPage.module.css'
import Link from "next/link";

function PostGeneratorPage({ title, description, url }) {

    return (
        <div className={classes.report}>
            Post will generated with
            <FieldText
                text='This image'
                title={title}
            />
            <FieldDesc
                text='This description'
                title={description}
            />
            <a className={classes.link} href={url}>
                {url}
            </a>
            <div className={classes.warning}>
                <div>
                    Do you realy want to proceed?
                </div>
                <div>
                    you will spend 0.02$
                </div>
            </div>
            <Link className={classes.button}
                href={{
                    pathname: './Report',
                    query: {
                        
                    }
                }}>
                <div>
                    YES
                </div>
            </Link>
        </div>
    );
}

PostGeneratorPage.getInitialProps = async ({ query }) => {
    const { title } = query;
    const { description } = query;
    const { url } = query;

    return { title, description, url }
}

export default PostGeneratorPage;