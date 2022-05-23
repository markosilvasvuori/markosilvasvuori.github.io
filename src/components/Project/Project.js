import classes from './Project.module.scss';
import buttonStyles from '../UI/Button.module.scss';

const Project = ({ imgSrc, title, technologies, description, liveLink, gitHubLink }) => {
    return (
        <div className={classes.project}>
            <div className={classes.content}>
            <div className={classes['image-container']}>
                <img src={imgSrc} alt={'title'} />
            </div>
                <h3>{title}</h3>
                <ul>
                    {technologies.map((tech, index) => (
                        <li 
                            key={index}
                            className={classes.tech}
                        >
                            {tech}
                        </li>
                    ))}
                </ul>
                <p>{description}</p>
            </div>
            <div className={classes.buttons}>
                <a 
                    className={buttonStyles.button} 
                    href={liveLink}
                    target='_blank'
                    rel='noreferrer'
                >
                    Live Site
                </a>
                <a 
                    className={`${buttonStyles.button} ${buttonStyles.outlined}`} 
                    href={gitHubLink}
                    target='_blank'
                    rel='noreferrer'
                >
                    GitHub
                </a>
            </div>
        </div>
    );
};

export default Project;