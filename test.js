import test from 'ava';
import { pl } from './';

test('should return correct polish plural', t => {
    const words = ['produkt', 'produkty', 'produktów'];

    t.is(words[pl(0)], 'produktów');
    t.is(words[pl(1)], 'produkt');
    t.is(words[pl(2)], 'produkty');
    t.is(words[pl(5)], 'produktów');
    t.is(words[pl(11)], 'produktów');
    t.is(words[pl(15)], 'produktów');
    t.is(words[pl(20)], 'produktów');
    t.is(words[pl(21)], 'produktów');
    t.is(words[pl(113)], 'produktów');
    t.is(words[pl(1163)], 'produkty');
});
