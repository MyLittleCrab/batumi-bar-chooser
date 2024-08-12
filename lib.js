import fetch from 'node-fetch';
/**
 * Generates a random integer within a specified range.
 *
 * @param {number} min - The minimum value of the range (inclusive).
 * @param {number} max - The maximum value of the range (inclusive).
 * @return {number} A random integer between min and max.
 */
export function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Fetches a list of bars from the Modiak API.
 *
 * @return {object[]} A list of bar objects in JSON format
 */
async function fetchBars(){
    const res = await fetch("https://modiak.ge/api/PublicFirms/Filtered?rubricIds=4");
    const json = await res.json();
    return json;
} 

/**
 * Retrieves a random bar from the list of available bars.
 *
 * @return {object} A randomly selected bar object
 */
export async function getRandomBar(){
    const bars = await fetchBars();
    const nonEmptyBars = bars.filter(bar => bar.name.Ru || bar.name.En);
    return nonEmptyBars[randomInteger(0, nonEmptyBars.length - 1)];
}

/**
 * Escapes special characters in a string to make it safe for use in Markdown formatting.
 *
 * @param {string} text - The input string to be escaped.
 * @return {string} The escaped string.
 */
export function markdownEscape(text) {
    return text
    .replace(/\_/g, '\\_')
    .replace(/\*/g, '\\*')
    .replace(/\[/g, '\\[')
    .replace(/\]/g, '\\]')
    .replace(/\(/g, '\\(')
    .replace(/\)/g, '\\)')
    .replace(/\~/g, '\\~')
    .replace(/\`/g, '\\`')
    .replace(/\>/g, '\\>')
    .replace(/\#/g, '\\#')
    .replace(/\+/g, '\\+')
    .replace(/\-/g, '\\-')
    .replace(/\=/g, '\\=')
    .replace(/\|/g, '\\|')
    .replace(/\{/g, '\\{')
    .replace(/\}/g, '\\}')
    .replace(/\./g, '\\.')
    .replace(/\!/g, '\\!');
}