// tests/paymentService.test.ts
import { processPayment } from '../src/paymentService';

test('processPayment processes the payment', async () => {
  const mockFetch = jest.fn().mockImplementation((url: string) => {
    if (url.includes('amount=100')) {
      return Promise.resolve({ text: () => Promise.resolve('Payment Successful') });
    } else {
      return Promise.resolve({ text: () => Promise.resolve('Payment Failed') });
    }
  });

  global.fetch = mockFetch as any;

  const result = await processPayment(100);
  expect(result).toBe('Payment Successful');
  expect(mockFetch).toHaveBeenCalledWith('https://payment.example.com/process?amount=100');
});
