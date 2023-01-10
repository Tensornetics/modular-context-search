import { useState } from 'react';

export default function useConvenientState(initialState) {
    const [state, setState] = useState(initialState);

    return [state, setState];
}
