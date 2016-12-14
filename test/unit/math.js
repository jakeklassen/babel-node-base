import test from 'ava';
import * as math from '../../src/lib/math';

test('sum supports any arity of numbers', t => {
	t.plan(3);

	t.is(math.sum(1, -1, 3), 3);
	t.is(math.sum(), 0);
	t.is(math.sum(...[1, 2, 3]), 6);
});
