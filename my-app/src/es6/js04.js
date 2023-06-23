// 클래스 : ES6에서 class를 지원함
// 기존 ES5에서는 prototype을 사용하여 클래스를 표현했음
// ES6에서는 클래스를 생성하기 위한 class 키워드가 추가됨
// 자바에서 사용하던 방식의 class를 사용하 수 있음

// 자바스크립트에서 클래스 생성하기 1
// function Shape(x, y) {
//     this.name = "Shape";
//     this.move(x, y);
// };

// Shape.create = function(x, y) {
//     return new Shape(x, y)
// };

// Shape.prototype.move = function(x, y) {
//     this.x = x;
//     this.y = y;
// };

// Shape.prototype.area = function() {
//     return 0;
// };

// 자바스크립트에서 클래스 생성하기 2

// Shape.prototype = {
//     move: function(x, y) {
//         this.x = x;
//         this.y = y;
//     },
//     area: function() {
//         return 0;
//     }
// };

// var s = new Shape(0, 0);
// s.area();

// ES6에서 클래스 생성하기

// class 키워드를 사용하여 클래스 생성
class Shape {
    static create(x, y) {
        return new Shape(x, y);
    }

    // ES7에서 추가된 방식으로 클래스의 멤버 변수(필드) 선언
    name = "Shape";

    // 생성자, 자바스크립트의 생성자는 이름이 constructor로 지정되어 있음
    constructor(x, y) {
        this.move(x, y);
        // 클래스의 멤버 변수(필드) 생성, 생성자 안에서 this.변수명 으로 클래스 멤버 변수를 선언함
        this.age = 10;
    }

    // 멤버 메소드
    move (x, y) {
        this.x = x;
        this.y = y;
    }

    // 멤버 메소드
    area() {
        return 0;
    }
}

// 객체 생성
var s = new Shape(0, 0);
s.area();
console.log(s.age);

class Car1 {    // 생성자를 통해 필드 생성
    constructor(name) {
        this.brand = name;
    }
}

const myCar = new Car1("트랙스");
console.log(myCar.brand);

class Car2 {    // 생성자 없이 필드 생성
    brand = "트랙스";
    // 매개변수가 없는 기본 생성자의 경우 생략 가능
}

const yourCar = new Car2();
console.log(yourCar.brand);

class Car3 {
    constructor(name) {
        this.brand = name;
    }

    // 메소드 선언
    present() {
        return `I have a ${this.brand}`;
    }
}

const myCar3 = new Car3("렉스턴 쿨맨");
console.log(myCar3.present());

// extends를 사용하여 상속 기능도 사용 가능

// Car3 클래스에서 내용을 상속받은 Model 클래스
class Model extends Car3 {  // Car3 클래스 상속
    constructor(name, mod) {
        // 부모 클래스의 생성자를 호출하는 명령어
        super(name);    // Car3 클래스의 매개변수 name 사용
        this.model = mod;
    }

    show() {
        return `${this.present()}, it is a ${this.model}`;  // 상속받은 메소드 present() 사용
    }
}

const myCar4 = new Model("KIA", "EV9");
console.log(myCar4.show());