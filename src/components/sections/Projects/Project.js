import Button from '../../UI/Button';
import classes from './Project.module.scss';

const Project = ({ image, title, technologies, description, liveLink, gitHubLink }) => {
    return (
        <div className={classes.project}>
            <div className={classes['image-container']}>
                <img src={image} alt={title} />
            </div>
            <h3 className={classes.title}>{title}</h3>
            <ul className={classes.technologies}>
                {technologies?.map((technology, index) => (
                    <li key={index}>{technology}</li>
                ))}
            </ul>
            <p className={classes.description}>{description}</p>
            <div className={classes.buttons}>
                <Button>Live Site</Button>
                <Button>GitHub</Button>
            </div>
        </div>
    );
};

export default Project;