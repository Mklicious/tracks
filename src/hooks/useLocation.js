import React, { useState, useEffect } from 'react';
import { Accuracy, requestPermissionsAsync, watchPositionAsync } from 'expo-location';


export default (shouldTrack, callback) => {
    const [error, setError] = useState('');
    
    //BUG ici, lorsqu'on demarre l'enregistrement la valeur de state.recording est modifiér false => true
    // Mais pas la valeur de shouldTrack donc useEffect n'est pas appelée.
    //correction ajout du callback et useCallback
    useEffect(() => {
        let subscriber;
        const startWatching = async () => {
            try {
                const { granted } = await requestPermissionsAsync();
                if (!granted) {
                    throw new Error('Location permission not granted');
                }
                subscriber = await watchPositionAsync(
                    {
                        accuracy: Accuracy.BestForNavigation,
                        timeInterval: 1000,
                        distanceInterval: 10
                    },
                    callback
                );
            } catch (err) {
                setError(err);
            }
        };
        if (shouldTrack) {
            startWatching();
        } else {
            if (subscriber) {
                subscriber.remove();
            }
            subscriber = null
        }
        //fonction de nettoyage  pour arreter le watcher
        return () => {
            if (subscriber) {
                subscriber.remove();
            } 
        };
    }, [shouldTrack, callback]);

    //convention: dans un hook, retourner un array
    return [error];
};
