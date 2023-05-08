import { pokemonTypes } from "./pokemonTypes";

export function getEffectiveness(types) {
    let result = {}
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
        if (key === 'noEffect') {
            value.forEach(type => {
                if (!acc[type]) {
                    acc[type] = 1
                }
                acc[type] *= 0
            });
        } else if (key === 'notEffective') {
            value.forEach(type => {
                if (!acc[type]) {
                    acc[type] = 1
                }
                acc[type] *= 0.5
            });
        } else if (key === 'superEffective') {
            value.forEach(type => {
                if (!acc[type]) {
                    acc[type] = 1
                }
                acc[type] *= 2
            });
        }
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

    return effectiveness
};