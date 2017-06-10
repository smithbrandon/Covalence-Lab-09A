class Shape {
    div: HTMLDivElement;
    radius: number;
    height: number;
    width: number;
    name: string;

    constructor(width: number, height: number){
        this.name = "shape";
        this.radius = this.height /2;
        this.div.style.backgroundColor = 'white';
        this.div.className = 'shape';
        this.div.style.width = width + 'px';
        this.div.style.height = height + 'px';
        this.div.style.left = Math.floor(Math.random() * (600 - width)) + 'px';
        this.div.style.top = Math.floor(Math.random() * (600 - height)) + 'px';
        document.getElementById('pad').appendChild(this.div);
        this.div.addEventListener('click', () => {
            this.describe();
        });
        this.div.addEventListener('dblclick', () => {
            this.div.remove();
        });
    }
    describe():void{
        document.getElementById('name').innerHTML = this.name;
        document.getElementById('wid').innerHTML = String(this.width);
        document.getElementById('hei').innerHTML = String(this.height);
        document.getElementById('rad').innerHTML = String(this.radius);
        document.getElementById('area').innerHTML = String(this.area());
        document.getElementById('peri').innerHTML = String(this.perimeter());
    }
    area(): number{
        return this.height * this.width;
    }
    perimeter(): number{
        return this.height * 2 + this.width * 2;
    }
}
class Rectangle extends Shape{
    constructor(width:number, height:number){
            super(width, height);
            this.name = 'Rectangle';
            this.radius = null;
            this.div.style.backgroundColor = 'green';
            this.div.className = 'shape rectangle';
    }

}
class Square extends Rectangle{
    constructor(height:number){
        super(height, height);
        this.name = 'Square';
        this.radius = null;
        this.div.style.backgroundColor = 'red';
        this.div.style.width = this.width + 'px';
        this.div.className = 'shape square';
    }
}
class Circle extends Shape{
    constructor(radius: number){
        super(radius*2, radius*2);
        this.name = 'Circle';
        this.div.style.backgroundColor = 'purple';
        this.div.className += ' circle';
        this.radius = radius;
    }
    area():number{
       return Math.PI * Math.pow(this.height / 2, 2);
    }
    perimeter():number{
    return 2 * Math.PI * (this.height / 2);
    }
}
class Triangle extends Shape{
    constructor(height: number){
        super(height, height);
        this.name = 'Triangle';
        this.div.className += ' triangle';
        this.div.style.width = '0px';
        this.div.style.height = '0px';
        this.radius = null;
        this.div.style.backgroundColor = 'transparent';
        this.div.style.borderRightWidth = this.height + 'px';
        this.div.style.borderBottomWidth = this.height + 'px';
    }
    area():number {
        return (this.height * this.height) / 2;
    }
    perimeter():number {
        return 2 * this.height + (Math.sqrt(2 * Math.pow(this.height, 2)))
    }
}

document.getElementById('rect').addEventListener('click', function () {
    let wid = Number((<HTMLInputElement>document.getElementById('rectangleW')).value);
    let hei = Number((<HTMLInputElement>document.getElementById('rectangleH')).value);
    new Rectangle(wid, hei);
})

document.getElementById('sq').addEventListener('click', function () {
    let hei = Number((<HTMLInputElement>document.getElementById('square')).value);
    new Square(hei);
})
document.getElementById('cir').addEventListener('click', function () {
    let rad = (Number((<HTMLInputElement>document.getElementById('circle')).value)/2);
    new Circle(rad);
})
document.getElementById('tri').addEventListener('click', function () {
    let hei = Number((<HTMLInputElement>document.getElementById('triangle')).value);
    new Triangle(hei);
})