const vowels = /[aeiouAEIOU]/g;

function vowelDots(str) {
    // Replace each vowel with itself followed by a dot
    return str.replace(vowels, (match) => match + '.');
}
