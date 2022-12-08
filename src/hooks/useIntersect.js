import { useState, useRef, useEffect } from 'react';

const useIntersect = ({ root = null, rootMargin = '0%', threshold = 0 }) => {
  const [entry, setEntry] = useState([]);
  const [node, setNode] = useState(null);

  const observer = useRef(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(([entry]) => setEntry(entry), {
      root,
      rootMargin,
      threshold,
    });

    const { current: currentObserver } = observer;

    if (node) currentObserver.observe(node);

    return () => currentObserver.disconnect();
  }, [node, root, rootMargin, threshold]);

  const disconnect = () => {
    observer.current.disconnect();
  };

  return [setNode, entry, disconnect];
};

export default useIntersect;
