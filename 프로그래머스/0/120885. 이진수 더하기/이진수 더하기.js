function solution(bin1, bin2) {
    const binary = [...(String(Number(bin1) + Number(bin2)))].map(Number);
    
    let idx = 1;
    let num = binary.reduceRight((acc, cur) => {
        const value = acc + cur * idx;
        idx *= 2;
        
        return value;
    }, 0);

    const result = [];
    if (num === 0 ) {
        result.push(0);
    } else {
        while (num > 0) {
            result.push(num % 2);
            num = Math.floor(num / 2);
        }
    }

    return result.reverse().join('');

}