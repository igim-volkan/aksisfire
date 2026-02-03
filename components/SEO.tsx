import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
    title?: string;
    description?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description }) => {
    const location = useLocation();

    useEffect(() => {
        // Set Document Title
        const baseTitle = "Aksisfire | Marine Fire Protection";
        document.title = title ? `${title} | Aksisfire` : baseTitle;

        // Set Meta Description
        if (description) {
            const metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription) {
                metaDescription.setAttribute('content', description);
            } else {
                const meta = document.createElement('meta');
                meta.name = "description";
                meta.content = description;
                document.getElementsByTagName('head')[0].appendChild(meta);
            }
        }
    }, [title, description, location]);

    return null;
};

export default SEO;
