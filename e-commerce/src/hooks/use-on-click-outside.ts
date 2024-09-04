import { RefObject, useEffect } from "react";

    /**
     * useOnClickOutside
     * 
     * This hook is used to detect click event outside of the given component.
     * It takes a ref to the component and a function which will be called if
     * the user clicks outside of the component.
     * 
     * The useRef hook is used to create a reference to the DOM node of the given component.
     * This is necessary because the component may not be mounted when the hook is called.
     * The ref is used to get the DOM node of the component and add event listeners to it.
     * 
     * @param ref - The ref to the component
     * @param handler - The function that will be called if the user clicks outside of the component
     */
    // 

type Event = MouseEvent | TouchEvent;

// Export a custom hook called 'useOnClickOutside'
// T is a generic parameter that extends HTMLElement, defaulting to HTMLElement if not specified
export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
    ref: RefObject<T>, // The 'ref' is a reference to the HTML element you want to monitor clicks outside of
    handler: (event: Event) => void // The 'handler' is a function that will be called if the user clicks outside of the component
) => {
    // useEffect hook is used to manage side effects (such as adding event listeners) in React
    useEffect(() => { 
        
        const listener = (event: Event) => {
            
            // get the current element from the ref
            const el = ref?.current
            
            // If the user clicks outside of the component, call the 'handler' function
            // and pass the 'event' object as an argument
            if(!el || el.contains((event?.target as Node) || null)){
                return;
            }

            handler(event)
        }

        // Add the event listeners when the component mounts
        document.addEventListener("mousedown", listener)
        document.addEventListener("touchstart", listener)

        return () => {
            // Remove the event listeners when the component unmounts
            document.removeEventListener("mousedown", listener)
            document.removeEventListener("touchstart", listener)
        }
    },[ref, handler]) // The 'ref' and 'handler' are dependencies of the 'useOnClickOutside' hook

}