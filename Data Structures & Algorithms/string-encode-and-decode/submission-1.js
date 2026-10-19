class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
         let result = "";

    for (let str of strs) {
        result += str.length + "#" + str;
    }

    return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
    let result = [];
    let i = 0;

    while (i < str.length) {
        let j = i;

        // Find the separator after the length
        while (str[j] !== "#") {
            j++;
        }

        // Read the string length
        let length = Number(str.slice(i, j));

        // Read exactly that many characters
        let s = str.slice(j + 1, j + 1 + length);

        result.push(s);

        // Move to the start of the next length prefix
        i = j + 1 + length;
    }

    return result;
}
}
