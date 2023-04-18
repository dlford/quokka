$fa=1;
$fs=0.4;

spacer_height = 3;

linear_extrude(height = spacer_height) {
    import("src/3d_case_spacer.dxf", dpi = 96);
}