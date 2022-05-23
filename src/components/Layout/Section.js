import SectionBottomLine from '../UI/SectionBottomLine';
import classes from './Section.module.scss';

const Section = ({ sectionId, children, leftContent, rightContent }) => {
    return (
        <section 
            id={sectionId} 
            className={classes.section}
        >
            {children}
            <SectionBottomLine 
                leftContent={leftContent} 
                rightContent={rightContent} 
            />
        </section>
    );
};

export default Section;