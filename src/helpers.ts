interface MinusNumberObject {
  number1: number;
  number2: number;
  result: number;
}
type MinusNumber = (number1: number, number2: number) => MinusNumberObject;

const minusNumber: MinusNumber = (number1, number2) => {
  const result = number1 + number2;
  return {
    number1,
    number2,
    result,
  };
};

export { minusNumber };
export default minusNumber;

//type นิยมใช้กับ function
//mapping interface กับ type
