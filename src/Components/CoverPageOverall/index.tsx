import React, { Suspense, lazy, useEffect, useImperativeHandle, useRef } from 'react';
// import Connect from '../Connect';
// import CoverPage from '../CoverPage';
// import Projects from '../Projects';
import CoverPageDiv from './CoverPageDiv';
import "./styles.css";

const CoverPage = lazy(() => import('../CoverPage'));
const Projects = lazy(() => import('../Projects'));
const Connect = lazy(() => import('../Connect'));

const CoverPageOverall = ({navigateToPage}: {navigateToPage: (val: number) => void}) => {

    const observer1 = useRef<IntersectionObserver>(newObserver(0, navigateToPage));
    const observer2 = useRef<IntersectionObserver>(newObserver(1, navigateToPage));
    const observer3 = useRef<IntersectionObserver>(newObserver(2, navigateToPage));

    const refObserver = (observer: React.MutableRefObject<IntersectionObserver>) => {
        return (node?: HTMLElement) => {
            if (node) {
                observer.current.observe(node);
            }
            
        }
    }

    useEffect(() => {
        return () => {
            observer1.current.disconnect();
            observer2.current.disconnect();
            observer3.current.disconnect();
        }
    }, [])

    return (
        <div className="App">
            <CoverPageDiv className={"cover-page-container"} ref={refObserver(observer1)} >
            <Suspense fallback={<span>Loading...</span>}>
                <CoverPage />
            </Suspense>
            </CoverPageDiv>
            
            <CoverPageDiv className={"projects-overall-container"} ref={refObserver(observer2)} >
            <Suspense fallback={<span>Loading...</span>}>
                <Projects />
            </Suspense>
            </CoverPageDiv>
            
            <CoverPageDiv className={"connect-container"} ref={refObserver(observer3)}>
            <Suspense fallback={<span>Loading...</span>}>
                <Connect />
            </Suspense>
            </CoverPageDiv>
            
      </div>
    )
}

const newObserver = (page: number, cb: (val: number) => void) => {
    return new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            cb(page);
        }
    }, {
        threshold: [0.2]
    })
}


export default CoverPageOverall