import { useEffect, useMemo, useState } from 'react';
import himalLogo from '../../../public/images/himal-Photoroom.png';

const EXIT_ANIMATION_MS = 650;

function preloadImage(url) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve({ url, status: 'loaded' });
        img.onerror = () => resolve({ url, status: 'error' });
        img.src = url;
    });
}

function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function getTrackedDomImages() {
    return Array.from(document.images || []).filter((img) => {
        if (!img) return false;

        if (img.getAttribute?.('data-loader-ignore') === 'true')
            return false;

        if (img.loading === 'lazy')
            return false;

        return true;
    });
}

function waitForDomImagesToSettle({
    idleMs = 250,
    maxMs = 9000,
} = {}) {

    const start = performance.now();
    let lastChangeAt = performance.now();
    let lastTotal = -1;
    let lastLoaded = -1;

    return new Promise((resolve) => {

        const tick = () => {

            const now = performance.now();
            const images = getTrackedDomImages();

            const total = images.length;
            const loaded = images.filter(
                (img) => img.complete
            ).length;

            if (
                total !== lastTotal ||
                loaded !== lastLoaded
            ) {
                lastTotal = total;
                lastLoaded = loaded;
                lastChangeAt = now;
            }

            const allLoaded =
                total === 0 || loaded === total;

            const idleEnough =
                now - lastChangeAt >= idleMs;

            const timedOut =
                now - start >= maxMs;

            if (
                (allLoaded && idleEnough) ||
                timedOut
            ) {
                return resolve();
            }

            return window.setTimeout(tick, 75);
        };

        tick();
    });
}

export default function InitialLoader({
    children,
    minDurationMs = 1200,
    maxWaitMs = 9000,
}) {

    const [isExiting, setIsExiting] =
        useState(false);

    const [isHidden, setIsHidden] =
        useState(false);

    const loaderUrls =
        useMemo(() => [himalLogo], []);

    useEffect(() => {

        let canceled = false;

        // ✅ FIX: Use BODY instead of HTML
        const previousOverflow =
            document.body.style.overflow;

        document.body.style.overflow = 'hidden';

        const fontReady =
            document.fonts &&
            typeof document.fonts.ready?.then === 'function'
                ? document.fonts.ready
                : Promise.resolve();

        Promise.all([
            wait(minDurationMs),

            Promise.all([
                fontReady,

                ...loaderUrls.map((url) =>
                    preloadImage(url)
                ),

                waitForDomImagesToSettle({
                    maxMs: maxWaitMs,
                }),
            ]),
        ]).then(() => {

            if (canceled) return;

            setIsExiting(true);

            window.setTimeout(() => {

                if (canceled) return;

                setIsHidden(true);

                // Restore overflow
                document.body.style.overflow =
                    previousOverflow;

            }, EXIT_ANIMATION_MS);

        });

        return () => {

            canceled = true;

            document.body.style.overflow =
                previousOverflow;

        };

    }, [
        loaderUrls,
        maxWaitMs,
        minDurationMs,
    ]);

    return (
        <>
            {children}

            {!isHidden && (
                <div
                    className={[
                        // ✅ overflow protection added
                        'fixed inset-0 z-[9999]',
                        'flex items-center justify-center',
                        'bg-black overflow-hidden',
                        'transition-opacity duration-[650ms]',
                        isExiting
                            ? 'opacity-0 pointer-events-none'
                            : 'opacity-100',
                    ].join(' ')}
                    role="status"
                    aria-live="polite"
                    aria-label="Loading"
                >
                    <div className="flex flex-col items-center justify-center">

                        {/* <p className='text-white text-2xl lg:text-5xl text-center mb-6'>Himalaya Organization</p> */}

                        {/* ✅ PNG COLOR INVERT FIX */}
                        <img
                            src={himalLogo}
                            alt="Loading"
                            draggable="false"
                            className="
                                h-32
                                lg:h-56
                                w-auto
                                select-none
                                invert
                                brightness-200
                                himal-loader-logo
                                logo-shine
                            "
                        />

                    </div>
                </div>
            )}
        </>
    );
}