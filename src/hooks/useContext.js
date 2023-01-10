import { useContext } from 'react';
import { MyContext } from './context';

export function useMyContext() {
    const context = useContext(MyContext);
    if (context === undefined) {
        throw new Error('useMyContext must be used within a MyProvider');
    }
    return context;
}
