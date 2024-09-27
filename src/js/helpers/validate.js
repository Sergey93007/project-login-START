const regExpDic = {
    email: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/,
    password: /^[0-9a-zA-Z]{4,}$/
}

/**
 * function validate chek input on regexp provided in regExpDic by input data=required type
 * @param {HTMLInputElement} el
 * @returns {boolean} - return true if input valid  or doesn`t has data-required attr
 */
export function validate (el) {
    const regExpName = el.dataset.required;
    

    if (!regExpDic[regExpName]) return true;

    return regExpDic[regExpName].test(el.value);
}