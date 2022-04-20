import {randomName} from "../lib/cjs/index.js"

test('randomName function', () => {
    expect(["Dwight Shrute", "Michael Scott", "Pam Beesly", "Jim Halpert"]).toContain(randomName())
})