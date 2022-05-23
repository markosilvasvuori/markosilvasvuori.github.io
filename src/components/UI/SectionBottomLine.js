import classes from './SectionBottomLine.module.scss';

const SectionBottomLine = ({ leftContent, rightContent }) => {
    return (
        <div className={classes.line}>
            <span>{leftContent}</span>
            <span>{rightContent}</span>
        </div>
    );
};

export default SectionBottomLine;