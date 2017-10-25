import { Greeting } from '../../src/utils/greeting';

describe('Greeting', () => {
    it('should be able to say Hello to someone', () => {
        expect(Greeting('Zico')).toEqual('Hello, Zico!');
    });

    it('should be confused when no name is not provided', () => {
        expect(Greeting()).toEqual('Who should I greet to?');
    });

    it('should be confused when name is empty', () => {
        expect(Greeting('')).toEqual('Who should I greet to?');
    });
});
