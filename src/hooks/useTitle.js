import { useEffect } from 'react';

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Nakib Uddin Ahmad `
    },[title]);
};

export default useTitle;