const calcDiscount = (value, percent) => {
    if(percent > 1) {
        percent = percent / 100;
    }

    return Math.ceil(value - (value * percent));
}

export default calcDiscount;