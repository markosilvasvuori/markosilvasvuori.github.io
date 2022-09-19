import classes from './SectionTemplate.module.scss';

const SectionTemplate = ({ className, sectionId, children }) => {
    return (
        <section 
            id={sectionId}
            className={`${classes.section} ${className}`}
        >
            {children}
        </section>
    );
};

export default SectionTemplate;