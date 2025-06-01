import { useState, useEffect } from 'react';

const useWakeLock = () => {
    const [wakeLock, setWakeLock] = useState(null);
    const [isSupported, setIsSupported] = useState(false);

    useEffect(() => {
        // Prüfe, ob Wake Lock API unterstützt wird
        setIsSupported('wakeLock' in navigator);
    }, []);

    const requestWakeLock = async () => {
        if (!isSupported) return;

        try {
            const lock = await navigator.wakeLock.request('screen');
            setWakeLock(lock);

            // Event-Handler für den Fall, dass der Wake Lock verloren geht
            lock.addEventListener('release', () => {
                setWakeLock(null);
            });

            // Erneuere den Wake Lock wenn der Tab wieder sichtbar wird
            document.addEventListener('visibilitychange', async () => {
                if (document.visibilityState === 'visible' && !wakeLock) {
                    await requestWakeLock();
                }
            });

        } catch (err) {
            console.error('Wake Lock konnte nicht aktiviert werden:', err);
        }
    };

    const releaseWakeLock = async () => {
        if (wakeLock) {
            try {
                await wakeLock.release();
                setWakeLock(null);
            } catch (err) {
                console.error('Wake Lock konnte nicht deaktiviert werden:', err);
            }
        }
    };

    return { isSupported, requestWakeLock, releaseWakeLock, isActive: !!wakeLock };
};

export default useWakeLock;