$fa = $preview ? 1 : 0.01;
$fs = $preview ? 0.1 : 0.01;
$fn = $preview ? 32 : 64;

plate_thickness = 1.6;

height = 5 - plate_thickness;
width = 2.8;

difference() {
    cylinder(height, width, 2.3);
    translate([0,0,-0.1])
    cylinder(6, 1.8, 1.8);
}