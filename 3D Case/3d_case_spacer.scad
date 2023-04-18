$fa=2;
$fs=0.1;

spacer_height = 2;

linear_extrude(height = spacer_height) {
    import("src/3d_case_spacer.dxf", dpi = 96);
}