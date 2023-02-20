const FormatNumber = (value) => {
    return Intl.NumberFormat('ru-RU').format(parseInt(value)) + ' руб.';
};

export default FormatNumber;