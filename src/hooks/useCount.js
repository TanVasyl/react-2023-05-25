import { useCallback, useState } from "react";


export function useCount(initialCount) {
  
    const [count, setCount] = useState(initialCount)

    const increment = useCallback((stepChange = 1) =>         
        setCount((currentCount) => currentCount + stepChange),
        []
    );
    const decrement = useCallback((stepChange = 1) => 
        setCount((currentCount) => currentCount - stepChange),
        []
    );
    

    return {count, decrement, increment}
}