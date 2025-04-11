function ArrowFun() {
   const func1 = function(a, b) {
    return a+b;
   }
   console.log(`func1 : ${func1(3,4)}`)
   // console.log('func1 : ' + func1(3,4));

   const func2 = (a, b) => {
    return a+b;
   }

   const func3 = (a,b) => a+b //한줄이면 리턴, 중괄호, 세미콜론 생략 가능
   console.log(`func3 : ${func3(1,2)}`);

   // 매개 변수가 1개 일떄만 () 소괄호 생략 가능
   const func4 = a => a+5
   console.log(`func4 : ${func4(4)}`);

   const func5 = (num) => {
    return function(value) {
        return num+value;
    }
   }
   
   let func5Num = func5(5);
   let result = func5Num(7);
   console.log(`func5Num : ${func5Num}`);
   console.log(`result : ${result}`);

   result = func5(3)(4);
   console.log(`result : ${result}`);

   // func5를 화살표함수로 아래와 같이 짧게 작성
   const func6 = num => value => num+value;
   console.log(`func6: ${func6(1)(2)}`);

}

export default ArrowFun;