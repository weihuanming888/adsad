/* 银行账户 */
export function validateAccountNumber(str) {
    const reg = /^([1-9]{1})(\d{14}|\d{18})$/
    return reg.test(str)
}