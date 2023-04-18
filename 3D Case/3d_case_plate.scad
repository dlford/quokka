$fa = $preview ? 1 : 0.01;
$fs = $preview ? 0.1 : 0.01;
$fn = $preview ? 32 : 64;
 
linear_extrude(height = 1.5) {
    import("src/3d_case_plate_lower.dxf", dpi = 96);
};

translate([0, 0, 1.5]) {
    linear_extrude(height = 1.5) {
        import("src/3d_case_plate_upper.dxf", dpi = 96);
    }
}