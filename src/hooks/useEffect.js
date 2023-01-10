import { useEffect } from 'react';

export default function useConvenientEffect(effect, dependencies) {
    useEffect(() => {
        effect();
        return () => {
            // cleanup function here
        };
    }, dependencies);
}
