import FieldText from '../components/report/FieldText';
import FieldDesc from '../components/report/FieldDesc';
import classes from '../styles/PostGeneratorPage.module.css'
import Router from 'next/router';
import { useState } from 'react';

function PostGeneratorPage({ title, description, url }) {

    const [loading, setLoading] = useState(false);

    const handleSubmit = async event => {

        event.preventDefault();

        const formData = {
            img_text: event.target.img_text.value,
            img_desc: event.target.img_desc.value,
        }

        const JSONdata = JSON.stringify(formData);

        try {
            setLoading(true);
            const response = await fetch('/api/imageGenerator', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSONdata
            });

            const json = await response.json();

            if (response.ok) {

                setLoading(false);

                Router.push({
                    pathname: './Report',
                    query: {
                        img_generated: json.image_url,
                        post_description: json.img_desc
                    }
                });

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
                    error_text: 'Something went wrong on calling API'
                }
            });
        }
    }

    return (
        <>
            {loading ?
                <div className={classes.loader_parent}>
                    <div className={classes.loader}>Genereting image...</div>
                </div> :
                <form className={classes.report} onSubmit={handleSubmit}>
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
                    <button type="submit" className={classes.button}>
                        <div>
                            YES
                        </div>
                    </button>
                </form>
            }
        </>
    );
}

PostGeneratorPage.getInitialProps = async ({ query }) => {
    const { title } = query;
    const { description } = query;
    const { url } = query;

    return { title, description, url }
}

export default PostGeneratorPage;