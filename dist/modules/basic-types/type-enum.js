export const bootstrap = () => {
    let OrderStatus;
    (function (OrderStatus) {
        OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
        OrderStatus[OrderStatus["DELIVERED"] = 1] = "DELIVERED";
        OrderStatus[OrderStatus["CANCELED"] = 2] = "CANCELED";
    })(OrderStatus || (OrderStatus = {}));
    console.log(OrderStatus);
    (function (OrderStatus) {
        OrderStatus[OrderStatus["WAITFORPAYAMENT"] = 500] = "WAITFORPAYAMENT";
        OrderStatus["SENT"] = "Enviado";
    })(OrderStatus || (OrderStatus = {}));
    function changeOrderStatus(newStatus) {
        if (newStatus === OrderStatus.SENT) {
            console.log('novo status: ', newStatus);
        }
    }
    changeOrderStatus(OrderStatus.SENT);
};
