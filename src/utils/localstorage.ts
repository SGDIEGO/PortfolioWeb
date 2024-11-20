export const saveLS = (key: string, value: any) => {
    const valueString = JSON.stringify(value);
    localStorage.setItem(key, valueString);
}

export const getLS = (key: string): string => {
    const fromLS = localStorage.getItem(key)
    return fromLS ? JSON.parse(fromLS) : null;
}