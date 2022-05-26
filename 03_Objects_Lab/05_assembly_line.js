function createAssemblyLine() {
    const decorators = {
        hasClima: (car) => {

            car.temp = 21;
            car.tempSettings = 21;
            car.adjustTemp = () => {
                if (car.temp < car.tempSettings) {
                    car.temp++;
                } else if (car.temp > car.tempSettings) {
                    car.temp--;
                }
            }
        },

        hasAudio: (car) => {
            car.currentTrack = null;
            car.nowPlaying = () => {
                if (car.currentTrack != null) {
                    console.log(`Now playing '${car.currentTrack.name}' by ${car.currentTrack.artist}`);
                }
            }
        },

        hasParktronic: (car) => {
            car.checkDistance = (distance) => {
                if (distance <= 0.5 || distance >= 0.1) {
                    console.log('');
                } else if (distance <= 0.1) {
                    console.log('Beep! Beep! Beep!');
                } else if (distance <= 0.25) {
                    console.log('Beep! Beep!');
                } else if (distance <= 0.5) {
                    console.log('Beep!');
                }
            }
        }
    };

    return decorators;
    // decorators[hasClima] = hasClima()

    // function hasAudio(car) {
    //     car.currentTrack = null;
    //     car.nowPlaying = () => {
    //         if (car.currentTrack != null) {
    //             console.log(`Now playing '${car.currentTrack.name}' by ${car.currentTrack.artist}`);
    //         }
    //     }
    // }

    // decorators[hasAudio] = hasAudio()

    // function hasParktronic(car) {
    //     car.checkDistance = (distance) => {
    //         if (distance <= 0.5 || distance >= 0.1) {
    //             console.log('');
    //         } else if (distance <= 0.1) {
    //             console.log('Beep! Beep! Beep!');
    //         } else if (distance <= 0.25) {
    //             console.log('Beep! Beep!');
    //         } else if (distance <= 0.5) {
    //             console.log('Beep!');
    //         }
    //     }
    // }

    // decorators[hasParktronic] = hasParktronic()

}

const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();


