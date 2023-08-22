function splitAndMerge(string, separator) {
    const words = string.split(" ");  
    const mergedWords = words.map(word => {
        const characters = word.split(""); 
        return characters.join(separator); 
    });
    return mergedWords.join(" ");  
}