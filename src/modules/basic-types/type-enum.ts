export const bootstrap = (): void => {
  enum OrderStatus {
    PENDING,
    DELIVERED,
    CANCELED,
  }

  console.log(OrderStatus);

  enum OrderStatus {
    WAITFORPAYAMENT = 500,
    SENT = 'Enviado',
  }

  function changeOrderStatus(newStatus: OrderStatus): void {
    if (newStatus === OrderStatus.SENT) {
      console.log('novo status: ', newStatus);
    }
  }
  changeOrderStatus(OrderStatus.SENT);
};
