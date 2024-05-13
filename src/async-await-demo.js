const fetchPokemon = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({

                name: 'bulbasaur',
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
            })
        }, [1000])
    });
};

const fetchMood = (pokemonName) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const pokemonMoods = {
                bulbasaur: 'Grumpy',
                pickachu: 'Happy'
            }
            resolve(pokemonMoods[pokemonName]);
        }, 500)
    })
};

async function initialize() {
    const pokemonObj = await fetchPokemon();
    const { name } = pokemonObj;

    const mood = await fetchMood(name);
    console.log(name);
    console.log(mood);
}
initialize();