const CONFIG = {
    currencyConverter : {
        apiUrl : 'https://api.fixer.io/latest',
        defaultCurrencies : [
            'CAD', 'USD', 'EUR' 
        ],
        currencyMaskOptions : {
            align: 'left', 
            prefix: '', 
            thousands: ',', 
            decimal: '.'
        }
    }
}
export default CONFIG