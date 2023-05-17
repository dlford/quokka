$fa = $preview ? 1 : 0.01;
$fs = $preview ? 0.1 : 0.01;
$fn = $preview ? 32 : 64;

standoff_length = 8;

height = standoff_length - 5;
width = 3.3;

difference() {
    cylinder(height, width, 2.3);
    translate([0,0,-0.1])
    cylinder(6, 1.8, 1.8);
}