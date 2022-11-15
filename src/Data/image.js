let temp = [];

for (let i = 1; i < 100; i++) {
    for (let i = 1; i < 101; i++) {
        temp.push(`https://picsum.photos/id/${i}/800/600`);
    }
}

export const image = temp