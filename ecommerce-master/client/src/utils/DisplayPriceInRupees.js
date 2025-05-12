export const DisplayPriceInRupees = (price)=>{
    return new Intl.NumberFormat('en-US',{
        style : 'currency',
        currency : 'INR'
    }).format(price)
}
