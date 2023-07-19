import React from "react";

const students = [
    {id: 1, name: "김경아"},
    {id: 2, name: "이지원"},
    {id: 3, name: "카리나"},
    {id: 4, name: "윈터"},
]

function AttendanceBook(props) {
    return (
        // jsx에서는 일반 for문을 사용할 수 없음
        // javascript ES6 문법의 배열 함수 forEach(), map()를 활용해야 함
        // ul 태그의 자식 태그를 입력하는 부분에 map() 함수를 사용하여 배열 students가 가지고 있는 내용을 직접 출력
        <ul>
            {students.map((std) => {    // 변수 std
                return <li key={std.id}>{std.name}</li>
            })}

            {/*{for (let i = 0; i < students.length; i++) {    // JSX에서는 일반 for문 사용 불가. 그렇기 때문에 map, each 사용*/}
            {/*    */}
            {/*}*/}
        </ul>
    )
}

export default AttendanceBook;