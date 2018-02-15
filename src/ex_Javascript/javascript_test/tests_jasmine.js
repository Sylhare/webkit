

const isPalindrome = (str) => {
    // noinspection JSAnnotator
    return str
        .toString()
        .split("")
        .reverse()
        .join("") === str.toString();
};

describe("isPalindrome", () => {
    it("returns true if the string is a palindrome", () => {
        expect(isPalindrome("abba")).toEqual(true);
    });
    it("returns false if the string isn't a palindrome", () => {
        expect(isPalindrome("Bubba")).toEqual(false);
    });
    it("returns true if a number is a palindrome", () => {
        expect(isPalindrome(1001)).toEqual(true);
    });
});