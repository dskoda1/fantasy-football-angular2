import {Currency} from './currencies';
import {Rates} from './rates';
import {} from 'jasmine';


describe('Angular Lab', () => {
	describe('Rates', () => {
		let rates: Rates;
		const timestamp = Date.now();
		beforeEach(() => {
			rates = new Rates({
				timestamp,
				disclaimer: '',
				license: '',
				base: 'USD',
				rates: {
					EUR: 0.96
			}});
		});

		it('should have {base, timestamp} properties', () => {
			expect(rates.timestamp).not.toBeUndefined();
			expect(rates.base).not.toBeUndefined();
			expect(rates.timestamp instanceof Date)
				.toBeTruthy();
			expect(rates.timestamp.getTime())
				.toEqual(timestamp);
			expect(rates.base)
				.toEqual('USD');
		});

		describe('has()', () => {
			it('should check for presence of a Currency', () => {
				const usd = new Currency('USD', 'US Dollar');
				expect(rates.has(null))
					.toBeFalsy();
				expect(rates.has(usd))
					.toBeTruthy();
			});
		});

		describe('get()', () => {
			it('should get the rate for a Currency', () => {
				const euro = new Currency('EUR', 'Euro');
				expect(rates.get(null))
					.toBeNaN();
				expect(rates.get(euro))
					.toEqual(.96);
			});
		});

		it('should add the base to rates with value 1', () => {
			const usd = new Currency('USD', 'US Dollar');
			expect(rates.get(usd))
				.toEqual(1);
		});
	});
});
