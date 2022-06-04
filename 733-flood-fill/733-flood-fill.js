/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor, original = image[sr][sc]) {
    const rowInbound = sr >= 0 && sr < image.length;
    const colInbound = sc >= 0 && sc < image[0].length;
    if (!rowInbound || !colInbound) return image;
    
    if (image[sr][sc] === newColor) return image;
    if (image[sr][sc] !== original) return image;
    
    image[sr][sc] = newColor;
    
    floodFill(image, sr + 1, sc, newColor, original);
    floodFill(image, sr - 1, sc, newColor, original);
    floodFill(image, sr, sc + 1, newColor, original);
    floodFill(image, sr, sc - 1, newColor, original);
    
    return image; 
};