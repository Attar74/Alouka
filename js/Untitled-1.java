public class rect { 
    private double width, length;

    public void setWidth (double L) {
        width = L;
    }
    public rect (){
        length = 10;
        width = 15;
    }
    public void setHeight (double H) {
        height = H;
    }
    public double getWidth () {
        return width;
    }
    public double getHeight () {
        return height;
    }
    public getArea() {
        double area = width*height;
        return area;
    }
}

