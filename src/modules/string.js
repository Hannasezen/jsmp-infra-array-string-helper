const upper = (string, nth) => {
    if (!string || !string.length) {
        throw new Error('String param is required, pass a string')
    }

    if(!nth) {
        return string.toUpperCase();
    }  

    const regex = new RegExp(`(.{${nth-1}})(.)`, 'g');

    return string.replace(regex, (match, p1, p2) => `${p1}${p2.toUpperCase()}`);
}

const lower = (string, nth) => {
    if (!string || !string.length) {
        throw new Error('String param is required, pass a string')
    }

    if(!nth) {
        return string.toLowerCase();
    }

    const regex = new RegExp(`(.{${nth-1}})(.)`, 'g');

    return string.replace(regex, (match, p1, p2) => `${p1}${p2.toLowerCase()}`);
}

export { upper, lower };