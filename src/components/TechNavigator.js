import classes from './TechNavigator.module.css';

export default function TechNavigator({ annotationIds }) {

    const handleAnnotationFocus = (e, tries = 0) => {
        const annotationId = e.target.getAttribute('data-annotation-id');
        const annotationElement = document.querySelector(`[data-annotation-id='${annotationId}']`);

        if (annotationElement && typeof annotationElement.hideAnnotation === 'function') {
            annotationElement.scrollIntoView({ behavior: 'auto', block: 'center' });
            setTimeout(() => {
                annotationElement.showAnnotation();
            }, 100);
        } else if (tries < 5) {
            setTimeout(() => handleAnnotationFocus(e, tries + 1), 100);
        }

        console.log(annotationElement);
    };

    const handleAnnotationBlur = (e) => {
        const annotationId = e.target.getAttribute('data-annotation-id');
        const annotationElement = document.querySelector(`[data-annotation-id='${annotationId}']`);
        if (annotationElement && typeof annotationElement.hideAnnotation === 'function') {
            annotationElement.hideAnnotation();
        }
    };

    return (
        <nav className={classes.navigator}>
            {annotationIds.map((id) => {
                return <button key={id} onFocus={e => handleAnnotationFocus(e)} onBlur={handleAnnotationBlur} data-annotation-id={id}></button>
            })}
        </nav>
    )
}