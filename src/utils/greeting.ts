export const Greeting = (name: string): string => {
    if (name === undefined || name.length === 0) {
        return 'Who should I greet to?';
    }
    return `Hello, ${name}!`;
};
