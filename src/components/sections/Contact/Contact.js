import SectionTemplate from "../../Layout/SectionTemplate";
import classes from './Contact.module.scss';

const Contact = () => {
    return (
        <SectionTemplate sectionId={'contact'} className={classes.section}>
            <h2 className={classes.heading}>Contact</h2>
            <div className={classes.container}>
                <p><span className={classes.highlight}>I'm open for job opportunities!</span> - If you are hiring a frontend developer or have any questions, please don't hesitate to contact me!</p>
                <p className={classes.email}>marko.silvasvuori@gmail.com</p>
                <a className={classes.link} href='https://www.linkedin.com/in/marko-silvasvuori-310838170/' target={'_blank'}>LinkedIn</a>
            </div>
        </SectionTemplate>
    );
};

export default Contact;