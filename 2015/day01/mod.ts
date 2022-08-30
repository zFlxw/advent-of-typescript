export function part1() {
    const text = Deno.readTextFileSync('2015/day01/input.txt');
    let floor = 0;
    text.split('').forEach((c) => (c === '(' ? floor++ : floor--));

    return floor;
}

export function part2() {
    const text = Deno.readTextFileSync('2015/day01/input.txt');
    let floor = 0;
    for (let i = 0; i < text.length; i++) {
        text.charAt(i) === '(' ? floor++ : floor--;
        if (floor < 0) {
            return i + 1;
        }
    }

    return 0;
}
