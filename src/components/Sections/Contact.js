import Section from "../Layout/Section";
import Heading from "../UI/Heading";
import classes from "./Contact.module.scss";

const Contact = () => {
    return (
        <Section
            sectionId={'contact'}
            leftContent={'</contact>'}
            rightContent={'<footer>'}
        >
            <div className={classes.container}>
                <Heading>Contact</Heading>
                <p><span className={classes.highlight}>I'm open for job opportunities! </span> 
                - If you are hiring a frontend developer or have any 
                questions, please don't hesitate to contact me!</p>
                <p>marko.silvasvuori@gmail.com</p>
            </div>
        </Section>
    );
};

export default Contact;