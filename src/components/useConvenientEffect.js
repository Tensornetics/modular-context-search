import useConvenientEffect from './hooks/useConvenientEffect';

function MyComponent({ someProp }) {
    useConvenientEffect(() => {
        // effect function here
    }, [someProp]);
    return (
        // JSX here
    )
}
