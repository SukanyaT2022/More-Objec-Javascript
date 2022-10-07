function triangle(s1, s2, s3) {
    this.side1 = s1,
        this.side2 = s2,
        this.side3 = s3,
        this.area = function () {
            s = (this.side1 + this.side2 + this.side3) / 2
            return Math.sqrt(s * (s - this.side1) * (s - this.side2) * (s - this.side3));
        }
    this.perimeter = function () {
        return this.side1 + this.side2 + this.side3
    }

}
function display() {

    s1 = parseFloat(document.getElementById("txtSideOne").value)
    s2 = parseFloat(document.getElementById("txtSideTwo").value)
    s3 = parseFloat(document.getElementById("txtSideThree").value)
    var obj = new triangle(s1, s2, s3)

    a=obj.area()
    p=obj.perimeter()
    alert("side of the triangle are -"+obj.side1+" " +obj.side2+ " "+ obj.side3 + ".the area of triangle is " + a +", the perimeter of the triangle is "+ p)
}

