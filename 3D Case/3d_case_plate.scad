$fa=1;
$fs=0.1;
 
linear_extrude(height = 1.5) {
    import("src/3d_case_plate_lower.dxf", dpi = 96);
};

translate([0, 0, 1.5]) {
    linear_extrude(height = 1.5) {
        import("src/3d_case_plate_upper.dxf", dpi = 96);
    }
}