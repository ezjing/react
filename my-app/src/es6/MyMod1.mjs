// 외부에서 사용할 수 있도록 export로 지정

export const name = '김경아';
export const gender = '여성';
export const job = '영양사';

export const getInfo = () => console.log(`이름 : ${name}, 직업 : ${job}, 성별 : ${gender}`);