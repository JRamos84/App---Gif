import React, {useState,useRef, useEffect } from 'react'

export default function useNearScrenn({distance = '100px', externalRef} = {}){
    const [isNearScreen, setShow] = useState(false)
    const fromRef = useRef()

    useEffect(function () {
      let observer
        const element = externalRef ? externalRef.current: fromRef.current
        const onChange = (entries, observer) => {

            const el = entries[0]
            if (el.isIntersecting) {
                setShow(true)
                observer.disconnect()
            }

        }
        observer = new IntersectionObserver(onChange, {
            rootMargin: distance
        })
        observer.observe(element)
        return () => observer.disconnect()
    }, [])

return {isNearScreen, fromRef}
}