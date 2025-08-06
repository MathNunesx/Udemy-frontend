export const bootstrap = () => {
    class PaymentMethod {
        processPayment(amount) {
            console.log(`Processamento genérico de R$ ${amount.toFixed(2)}`);
        }
    }
    class CreditCardPayment extends PaymentMethod {
        processPayment(amount) {
            console.log(`Processamento com cartão de crédito de R$ ${amount.toFixed(2)}`);
        }
    }
    class Paypal extends PaymentMethod {
        processPayment(amount) {
            console.log(`Processamento com PayPal de R$ ${amount.toFixed(2)}`);
        }
    }
    const payment1 = new PaymentMethod();
    const payment2 = new CreditCardPayment();
    const payment3 = new Paypal();
    payment1.processPayment(100);
    payment2.processPayment(500);
    payment3.processPayment(900);
};
