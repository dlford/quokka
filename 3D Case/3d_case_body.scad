$fa=1;
$fs=0.4;

wall_height = 20.6;
pcb_height = 5; // from bottom of case to bottom of PCB
promicro_height = 1.5;
promicro_x_offset = 0;
promicro_y_offset = 0;
promicro_z_offset = 0; // height of port above PCB / 2
promicro_x_scale = 0;
promicro_y_scale = 0;
promicro_z_scale = 0;
trrs_height = 1.5;
trrs_x_offset = 0;
trrs_y_offset = 0;
trrs_z_offset = 0;
trrs_x_scale = 0;
trrs_y_scale = 0;
trrs_z_scale = 0;
reset_switch_height = 1.5;
reset_switch_x_offset = 0;
reset_switch_y_offset = 0;
reset_switch_z_offset = 0;
reset_switch_x_scale = 0;
reset_switch_y_scale = 0;
reset_switch_z_scale = 0;

module case_body() {
    linear_extrude(height = wall_height) {
        import("src/3d_case_wall.dxf", dpi = 96);
    }
    linear_extrude(height = 1.5) {
        import("src/3d_case_base_upper.dxf", dpi = 96);
    }
    translate([0, 0, -1.5]) {
        linear_extrude(height = 1.5) {
            import("src/3d_case_base_lower.dxf", dpi = 96);
        }
    }
}

module case_ports() {
    translate([promicro_x_offset, promicro_y_offset, promicro_z_offset]) {
        linear_extrude(height = promicro_height) {
            import("src/3d_case_port_promicro.dxf", dpi = 96);
        }
    }
    translate([trrs_x_offset, trrs_y_offset, trrs_z_offset]) {
        linear_extrude(height = trrs_height) {
            import("src/3d_case_port_trrs.dxf", dpi = 96);
        }
    }
    translate([reset_switch_x_offset, reset_switch_y_offset, reset_switch_z_offset]) {
        linear_extrude(height = reset_switch_height) {
            import("src/3d_case_port_reset_switch.dxf", dpi = 96);
        }
    }
}

// difference() {
    case_body();
    translate([0,0,pcb_height])
        case_ports();
// }
