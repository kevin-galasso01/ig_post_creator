import FieldDesc from '../components/report/FieldDesc';
import ReportImage from '../components/report/ReportImage';
import classes from '../styles/PostGeneratorPage.module.css';
import imgGenerated from '../images/image_generated.jpg';
import imgError from '../images/image_error.png';
import { useState } from 'react';
import Router from 'next/router';

const Report = ({ img_generated, post_description }) => {

    const [buttonF, setButton] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async event => {

        event.preventDefault();

        if (buttonF == 'public') {

            const formData = {
                post_image: event.target.post_image.value,
                img_desc: event.target.img_desc.value
            }

            const JSONdata = JSON.stringify(formData);

            try {
                setLoading(true);

                const response = await fetch('/api/postToInstagram', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSONdata
                });

                const json = await response.json();

                if (response.ok) {

                    setLoading(false);
                    Router.push('./Public');

                } else {
                    Router.push({
                        pathname: './Error',
                        query: {
                            error_text: json.error_text
                        }
                    });
                }
            } catch (error) {
                Router.push({
                    pathname: './Error',
                    query: {
                        error_text: json.error_text
                    }
                });
            }
        } else {
            Router.push('/');
        }
    }

    return (
        <>
            {loading ?
                <div className={classes.loader_parent}>
                    <div className={classes.loader}>Just hang on a second</div>
                </div> :
                <form className={classes.report} onSubmit={handleSubmit}>

                    {{ img_generated } ?
                        <ReportImage image={imgGenerated} /> :
                        <ReportImage image={imgError} />}

                    <FieldDesc
                        text='description'
                        title={post_description}
                    />
                    <button type="submit" value="public" className={classes.button} onClick={(event) => setButton(event.currentTarget.value)}>
                        <div>
                            Public
                        </div>
                    </button>
                    <button type="submit" value="regenerate" className={classes.button} onClick={(event) => setButton(event.currentTarget.value)}>
                        <div>
                            Regenerate
                        </div>
                    </button>
                </form>
            }
        </>
    );
}

Report.getInitialProps = async ({ query }) => {
    const { img_generated } = query;
    const { post_description } = query;

    return { img_generated, post_description }
}

export default Report;