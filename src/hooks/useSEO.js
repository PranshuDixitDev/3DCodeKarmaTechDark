import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useSEO = (title, description, keywords) => {
  const location = useLocation();

  useEffect(() => {
    document.title = title;
    const metaDescription = document.querySelector('meta[name="description"]');
    const metaKeywords = document.querySelector('meta[name="keywords"]');

    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }
  }, [location.pathname, title, description, keywords]);
};

export default useSEO;
