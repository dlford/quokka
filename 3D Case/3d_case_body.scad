$fa = $preview ? 1 : 0.01;
$fs = $preview ? 0.1 : 0.01;
$fn = $preview ? 32 : 64;

keycap_bottom_height_from_plate = 7;
pcb_thickness = 1.6;
pcb_gap_below = 2;
promicro_height = 6;
promicro_x_offset = 0;
promicro_y_offset = 0;
promicro_z_offset = 7;
trrs_height = 10;
trrs_x_offset = 0;
trrs_y_offset = 0;
trrs_z_offset = 2.5;
reset_switch_height = 16;
reset_switch_x_offset = 0;
reset_switch_y_offset = 4.25;
reset_switch_z_offset = 0;

/* Hidden */
pcb_height = pcb_gap_below + pcb_thickness;
wall_height = pcb_gap_below + pcb_thickness + 5 + keycap_bottom_height_from_plate;

module case_body() {
    linear_extrude(height = 3) {
        import("src/3d_case_base.dxf", dpi = 96);
    }
    translate([0, 0, 3]) {
        linear_extrude(height = pcb_gap_below) {
            import("src/3d_case_pcb_risers.dxf", dpi = 96);
        }
        linear_extrude(height = wall_height) {
            import("src/3d_case_wall.dxf", dpi = 96);
        }
    }
}

module case_ports() {
    translate([promicro_x_offset, promicro_y_offset, promicro_z_offset]) {
        minkowski() {
            linear_extrude(height = promicro_height) {
                import("src/3d_case_port_promicro.dxf", dpi = 96);
            }
            sphere(0.5);
        }
    }
    translate([trrs_x_offset, trrs_y_offset, trrs_z_offset]) {
        minkowski() {
            linear_extrude(height = trrs_height) {
                import("src/3d_case_port_trrs.dxf", dpi = 96);
            }
            sphere(0.5);
        }
    }
    translate([reset_switch_x_offset, reset_switch_y_offset, reset_switch_z_offset]) {
        minkowski() {
            linear_extrude(height = reset_switch_height) {
                import("src/3d_case_port_reset_switch.dxf", dpi = 96);
            }
            sphere(0.5);
        }
    }
}

difference() {
    case_body();
    translate([0,0,pcb_height + 3])
        case_ports();
}
