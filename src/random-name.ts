export const randomName =(): string =>{
    const names = ["Dwight Shrute", "Michael Scott", "Pam Beesly", "Jim Halpert"]

    return names[Math.floor(Math.random() * names.length)]

}