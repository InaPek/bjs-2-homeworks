//Задача 1. Форматтер чисел
function parseCount(count) {
    let result = Number.parseFloat(count)
    if (isNaN(result)) {
        throw new Error('Невалидное значение');
    }
    return result
}

function validateCount(count) {
    try {
        return parseCount(count);
    } catch (error) {
        return error;
    }
}

//Задача 2. Треугольник
class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (a + b <= c || a + c <= b || b + c <= a) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }

    get perimeter() {
        return this.a + this.b + this.c
    }
    get area() {
        let holPerimeter = (this.a + this.b + this.c) / 2;
        let square = Math.sqrt((holPerimeter * (holPerimeter - this.a) * (holPerimeter - this.b) * (holPerimeter - this.c)))
        return Number(square.toFixed(3))
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            get area() {
                return "Ошибка! Треугольник не существует";
            },
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            }
        };
    }
}
