module.exports = function longestConsecutiveLength(array) {
        if (!array.length) {
            return 0;
        }
        const USorted = [...new Set(array)].sort((left, right) => left - right);
        const USortedLength = USorted.length;

        let result = 1;
        let per = 1;

        for (let i = 1; i < USortedLength; i++) {
            if (USorted[i] - USorted[i - 1] === 1) {
                per++;
                result = Math.max(result, per);
            } else {
                per = 1;
            }
        }

        return result;
    };


