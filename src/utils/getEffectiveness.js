import { pokemonTypes } from "./pokemonTypes";

export function getEffectiveness(types) {
    let weaknesses = {
        noEffect: [],
        notEffective: [],
        superEffective: []
    };

    types.forEach((type) => {
        weaknesses.noEffect = weaknesses.noEffect.concat(pokemonTypes[type].weakness.noEffect);
        weaknesses.notEffective = weaknesses.notEffective.concat(pokemonTypes[type].weakness.notEffective);
        weaknesses.superEffective = weaknesses.superEffective.concat(pokemonTypes[type].weakness.superEffective);
    });
    
    const typeEffectiveness = Object.entries(weaknesses).reduce((acc, [key, value]) => {
        value.forEach(type => {
            if (acc[type]===undefined) {
              acc[type] = 1;
            }
            if (key === 'noEffect') {
              acc[type] *= 0;
            } else if (key === 'notEffective') {
              acc[type] *= 0.5;
            } else if (key === 'superEffective') {
              acc[type] *= 2;
            }
          });
        return acc;
    }, {});
    
    const effectiveness = {}
    for (const [key, value] of Object.entries(typeEffectiveness)) {
        if (!effectiveness[value]) {
            effectiveness[value] = [key];
        } else {
            effectiveness[value].push(key);
        }
    }
    delete effectiveness[1];

    return effectiveness
};