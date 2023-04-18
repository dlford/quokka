$fa = $preview ? 1 : 0.01;
$fs = $preview ? 0.1 : 0.01;
$fn = $preview ? 32 : 64;

spacer_height = 2;

linear_extrude(height = spacer_height) {
    import("src/3d_case_spacer.dxf", dpi = 96);
}