import classes from './TechNavigator.module.css';

export default function TechNavigator({ annotationIds }) {

    const handleAnnotationFocus = (e) => {
        const annotationId = e.target.getAttribute('data-annotation-id');
        const annotationElement = document.querySelector(`[data-annotation-id='${annotationId}']`);

        annotationElement.scrollIntoView({ behavior: 'smooth', block: 'center' }); // Scrolls the dot into view
        setTimeout(() => {
            annotationElement.click();
        }, 100); // Wait a bit for the scroll to finish before triggering click
    };

    const handleAnnotationBlur = (e) => {
        const annotationId = e.target.getAttribute('data-annotation-id');
        const annotationElement = document.querySelector(`[data-annotation-id='${annotationId}']`);
        if (annotationElement) {
            annotationElement.blur();
        }
    };

    return (
        <nav className={classes.navigator}>
            {annotationIds.map((id) => {
                return <button key={id} onFocus={handleAnnotationFocus} onBlur={handleAnnotationBlur} data-annotation-id={id}></button>
            })}
        </nav>
    )
}