// GME12864-49 OLED display 128x64
//
// Nets
//    GND: corresponds to pin 1
//    VCC: corresponds to pin 2
//    SCL: corresponds to pin 3
//    SDA: corresponds to pin 4

module.exports = {
  params: {
    designator: 'DS', // display https://klc.kicad.org/symbol/s6/s6.1/
    GND: {type: 'net', value: 'GND'},
    VCC: {type: 'net', value: 'VCC'},
    SCL: undefined,
    SDA: undefined,
  },
  body: p => `
      (module GME12864-49_OLED (layer F.Cu) (tedit 5970F8E5)

      ${p.at /* parametric position */}

      ${'' /* footprint */}
      (attr through_hole)
      (fp_text reference "${p.ref}" (at 0 0 180) (layer "F.SilkS") hide
          (effects (font (size 1.27 1.27) (thickness 0.15)))
      )
      (fp_text value "GME12864-49_OLED" (at 0 0 180) (layer "F.SilkS") hide
          (effects (font (size 1.27 1.27) (thickness 0.15)))
      )
      (fp_rect (start 0 0) (end 24.7 27)
        (stroke (width 0.1) (type default)) (fill none) (layer "F.SilkS") (tstamp e95fafcf-9e7a-48a3-b105-f26e0ba3f32b))
      (fp_rect (start 0.98 6.08) (end 23.72 17.94)
        (stroke (width 0.1) (type default)) (fill none) (layer "F.SilkS") (tstamp 36fdf97a-cf36-4869-9ca5-723cb5ececce))
      (fp_circle (center 2.1 2) (end 3.5 2)
        (stroke (width 0.1) (type default)) (fill none) (layer "F.SilkS") (tstamp 6707f652-7f76-4175-8620-3f40d258db3e))
      (fp_circle (center 2.1 25) (end 3.5 25)
        (stroke (width 0.1) (type default)) (fill none) (layer "F.SilkS") (tstamp a0f365b6-a4b9-4d2a-881b-b6f86e8b66f5))
      (fp_circle (center 22.6 2) (end 24 2)
        (stroke (width 0.1) (type default)) (fill none) (layer "F.SilkS") (tstamp 14f5c409-d173-4f1c-855f-b64952f3fae4))
      (fp_circle (center 22.6 25) (end 24 25)
        (stroke (width 0.1) (type default)) (fill none) (layer "F.SilkS") (tstamp ba55452c-c243-4df0-8eda-c5f722d3490a))
      (pad "" smd custom (at 8.53 -0.08 ${p.rot}) (size 0.25 1) (layers "F.Cu")
        (zone_connect 0) (thermal_bridge_angle 45)
        (options (clearance outline) (anchor rect))
        (primitives
        ) (tstamp 6ad3b4b6-23aa-4e65-bc8d-7fe257e9f7d6))
      (pad "" smd custom (at 8.54 -0.828 ${p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask")
        (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45)
        (options (clearance outline) (anchor rect))
        (primitives
          (gr_poly
            (pts
              (xy -0.6 0.4)
              (xy 0.6 0.4)
              (xy 0.6 0.2)
              (xy 0 -0.4)
              (xy -0.6 0.2)
            )
            (width 0) (fill yes))
        ) (tstamp a65684f8-2cec-43d4-9031-5f47cb794e16))
      (pad "" smd custom (at 8.54 -0.8 ${p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask")
        (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45)
        (options (clearance outline) (anchor rect))
        (primitives
          (gr_poly
            (pts
              (xy 0.6 0.4)
              (xy -0.6 0.4)
              (xy -0.6 0.2)
              (xy 0 -0.4)
              (xy 0.6 0.2)
            )
            (width 0) (fill yes))
        ) (tstamp 459ecf3b-bd3d-45e6-a0a9-e0365da5e799))
      (pad "" smd custom (at 8.54 -0.16 ${p.rot}) (size 0.25 1) (layers "B.Cu")
        (zone_connect 0) (thermal_bridge_angle 45)
        (options (clearance outline) (anchor rect))
        (primitives
        ) (tstamp 5f1ec4ee-3edf-4c0a-8f0c-4bd2abaabaac))
      (pad "" thru_hole oval (at 8.54 1.5 ${p.rot}) (size 1.574 2.675) (drill 1.016) (layers "*.Cu" "*.Mask") (tstamp 66340c30-33e0-4125-a14c-a8dfa3d91969))
      (pad "" thru_hole oval (at 11.08 1.5 ${p.rot}) (size 1.574 2.675) (drill 1.016) (layers "*.Cu" "*.Mask") (tstamp 8829698f-5dc9-4fd1-b87e-5796817e77ec))
      (pad "" smd custom (at 11.1 -0.79 ${p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask")
        (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45)
        (options (clearance outline) (anchor rect))
        (primitives
          (gr_poly
            (pts
              (xy 0.6 0.4)
              (xy -0.6 0.4)
              (xy -0.6 0.2)
              (xy 0 -0.4)
              (xy 0.6 0.2)
            )
            (width 0) (fill yes))
        ) (tstamp 43f65cb8-adea-4894-b7d4-bfc5457b1574))
      (pad "" smd custom (at 11.1 -0.16 ${p.rot}) (size 0.25 1) (layers "B.Cu")
        (zone_connect 0) (thermal_bridge_angle 45)
        (options (clearance outline) (anchor rect))
        (primitives
        ) (tstamp 27c4529e-4661-4e1e-94ed-d53606f60666))
      (pad "" smd custom (at 11.11 -0.15 ${p.rot}) (size 0.25 1) (layers "F.Cu")
        (zone_connect 0) (thermal_bridge_angle 45)
        (options (clearance outline) (anchor rect))
        (primitives
        ) (tstamp ad073c40-70e3-415f-9149-2aa01327e711))
      (pad "" smd custom (at 11.14 -0.828 ${p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask")
        (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45)
        (options (clearance outline) (anchor rect))
        (primitives
          (gr_poly
            (pts
              (xy -0.6 0.4)
              (xy 0.6 0.4)
              (xy 0.6 0.2)
              (xy 0 -0.4)
              (xy -0.6 0.2)
            )
            (width 0) (fill yes))
        ) (tstamp a6ed773b-05cc-4a4e-a0f4-f2a08a709fe0))
      (pad "" smd custom (at 13.6 -0.814 ${p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask")
        (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45)
        (options (clearance outline) (anchor rect))
        (primitives
          (gr_poly
            (pts
              (xy 0.6 0.4)
              (xy -0.6 0.4)
              (xy -0.6 0.2)
              (xy 0 -0.4)
              (xy 0.6 0.2)
            )
            (width 0) (fill yes))
        ) (tstamp 051d3457-145e-4a20-a32a-99074472bb75))
      (pad "" thru_hole oval (at 13.62 1.5 ${p.rot}) (size 1.574 2.675) (drill 1.016) (layers "*.Cu" "*.Mask") (tstamp b6717d95-3a6b-40b3-9b89-ce62c018965f))
      (pad "" smd custom (at 13.63 -0.15 ${p.rot}) (size 0.25 1) (layers "F.Cu")
        (zone_connect 0) (thermal_bridge_angle 45)
        (options (clearance outline) (anchor rect))
        (primitives
        ) (tstamp e142f81d-0223-468b-8082-362234619be3))
      (pad "" smd custom (at 13.64 -0.804 ${p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask")
        (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45)
        (options (clearance outline) (anchor rect))
        (primitives
          (gr_poly
            (pts
              (xy -0.6 0.4)
              (xy 0.6 0.4)
              (xy 0.6 0.2)
              (xy 0 -0.4)
              (xy -0.6 0.2)
            )
            (width 0) (fill yes))
        ) (tstamp bccedd37-3787-4da7-ba9b-87457fc4d1e5))
      (pad "" smd custom (at 13.64 -0.14 ${p.rot}) (size 0.25 1) (layers "B.Cu")
        (zone_connect 0) (thermal_bridge_angle 45)
        (options (clearance outline) (anchor rect))
        (primitives
        ) (tstamp 49a62a9c-449b-4e64-a2da-7308e1df5871))
      (pad "" thru_hole oval (at 16.16 1.5 ${p.rot}) (size 1.574 2.675) (drill 1.016) (layers "*.Cu" "*.Mask") (tstamp 8e3da8c7-9f40-44f9-b0a8-094194a344b4))
      (pad "" smd custom (at 16.2 -0.814 ${p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask")
        (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45)
        (options (clearance outline) (anchor rect))
        (primitives
          (gr_poly
            (pts
              (xy 0.6 0.4)
              (xy -0.6 0.4)
              (xy -0.6 0.2)
              (xy 0 -0.4)
              (xy 0.6 0.2)
            )
            (width 0) (fill yes))
        ) (tstamp 338188b4-d7cf-4fe3-abdb-6bf9199e5f0f))
      (pad "" smd custom (at 16.2 -0.814 ${p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask")
        (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45)
        (options (clearance outline) (anchor rect))
        (primitives
          (gr_poly
            (pts
              (xy -0.6 0.4)
              (xy 0.6 0.4)
              (xy 0.6 0.2)
              (xy 0 -0.4)
              (xy -0.6 0.2)
            )
            (width 0) (fill yes))
        ) (tstamp 287c98f0-c8ef-45ea-b02a-fad255c67484))
      (pad "" smd custom (at 16.2 -0.14 ${p.rot}) (size 0.25 1) (layers "B.Cu")
        (zone_connect 0) (thermal_bridge_angle 45)
        (options (clearance outline) (anchor rect))
        (primitives
        ) (tstamp d477c1fa-9439-40a0-bbf0-206fee0d9ea5))
      (pad "" smd custom (at 16.2 -0.13 ${p.rot}) (size 0.25 1) (layers "F.Cu")
        (zone_connect 0) (thermal_bridge_angle 45)
        (options (clearance outline) (anchor rect))
        (primitives
        ) (tstamp 97b9235d-2cf4-4e7e-a999-9622822c864f))
      (pad "1" smd custom (at 8.54 -1.816 ${p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask") ${p.GND.str}
        (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45)
        (options (clearance outline) (anchor rect))
        (primitives
          (gr_poly
            (pts
              (xy 0.6 0)
              (xy -0.6 0)
              (xy -0.6 1)
              (xy 0 0.4)
              (xy 0.6 1)
            )
            (width 0) (fill yes))
        ) (tstamp d21b125c-e81c-4ade-ad6f-c8ddad1cc52a))
      (pad "1" smd custom (at 8.59 -2.45 ${p.rot}) (size 0.25 1.5) (layers "F.Cu") ${p.GND.str}
        (zone_connect 0) (thermal_bridge_angle 45)
        (options (clearance outline) (anchor rect))
        (primitives
        ) (tstamp f0758694-dd86-4b5c-9eab-e9a0d5af56c0))
      (pad "1" thru_hole circle (at 8.6 -3.35 ${p.rot}) (size 0.5 0.5) (drill 0.25) (layers "*.Cu" "*.Mask") ${p.GND.str} (tstamp 433572ff-de9b-40b0-8770-924cdc95466f))
      (pad "1" smd custom (at 8.85 -3.35 ${p.rot}) (size 0.25 0.25) (layers "B.Cu") ${p.GND.str}
        (zone_connect 0) (thermal_bridge_angle 45)
        (options (clearance outline) (anchor circle))
        (primitives
          (gr_line (start 0 0) (end 1 -1.25) (width 0.25))
          (gr_line (start 1 -1.25) (end 5.5 -1.25) (width 0.25))
          (gr_line (start 5.5 -1.25) (end 7 1.25) (width 0.25))
        ) (tstamp 07005720-b735-4d58-a0f6-e872df8a265e))
      (pad "1" smd custom (at 16.2 -1.83 ${p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask") ${p.GND.str}
        (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45)
        (options (clearance outline) (anchor rect))
        (primitives
          (gr_poly
            (pts
              (xy -0.6 0)
              (xy 0.6 0)
              (xy 0.6 1)
              (xy 0 0.4)
              (xy -0.6 1)
            )
            (width 0) (fill yes))
        ) (tstamp 3bb1ad47-8389-459f-957c-7cab286d22bc))
      (pad "2" smd custom (at 11.1 -1.806 ${p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask") ${p.VCC.str}
        (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45)
        (options (clearance outline) (anchor rect))
        (primitives
          (gr_poly
            (pts
              (xy 0.6 0)
              (xy -0.6 0)
              (xy -0.6 1)
              (xy 0 0.4)
              (xy 0.6 1)
            )
            (width 0) (fill yes))
        ) (tstamp 047c510d-0c55-4897-9283-775ec508db13))
      (pad "2" thru_hole circle (at 11.13 -3.36 ${p.rot}) (size 0.5 0.5) (drill 0.25) (layers "*.Cu" "*.Mask") ${p.VCC.str} (tstamp 80ea84f5-fe1a-4871-ab33-345ea9b794cb))
      (pad "2" smd custom (at 11.13 -2.46 ${p.rot}) (size 0.25 1.5) (layers "F.Cu") ${p.VCC.str}
        (zone_connect 0) (thermal_bridge_angle 45)
        (options (clearance outline) (anchor rect))
        (primitives
        ) (tstamp 9a29da44-c106-4a9a-9138-c7f835454e64))
      (pad "2" smd custom (at 11.38 -3.36 ${p.rot}) (size 0.25 0.25) (layers "B.Cu") ${p.VCC.str}
        (zone_connect 0) (thermal_bridge_angle 45)
        (options (clearance outline) (anchor circle))
        (primitives
          (gr_line (start 0 0) (end 0.5 -0.5) (width 0.25))
          (gr_line (start 0.5 -0.5) (end 2.5 -0.5) (width 0.25))
          (gr_line (start 2.5 -0.5) (end 3 0) (width 0.25))
          (gr_line (start 3 0) (end 3 1) (width 0.25))
          (gr_line (start 3 1) (end 2.5 1.5) (width 0.25))
        ) (tstamp ab3351bc-8c41-4910-a200-9ab16581ea2b))
      (pad "2" smd custom (at 13.64 -1.82 ${p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask") ${p.VCC.str}
        (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45)
        (options (clearance outline) (anchor rect))
        (primitives
          (gr_poly
            (pts
              (xy -0.6 0)
              (xy 0.6 0)
              (xy 0.6 1)
              (xy 0 0.4)
              (xy -0.6 1)
            )
            (width 0) (fill yes))
        ) (tstamp 70fc95f8-b8fd-464a-9c79-338a3bd59703))
      (pad "3" smd custom (at 11.14 -1.844 ${p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask") ${p.SCL.str}
        (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45)
        (options (clearance outline) (anchor rect))
        (primitives
          (gr_poly
            (pts
              (xy -0.6 0)
              (xy 0.6 0)
              (xy 0.6 1)
              (xy 0 0.4)
              (xy -0.6 1)
            )
            (width 0) (fill yes))
        ) (tstamp 9076f1f1-3ce6-4cd6-98ed-710ae367ea8d))
      (pad "3" smd custom (at 13.34 -3.41 ${p.rot}) (size 0.25 0.25) (layers "B.Cu") ${p.SCL.str}
        (zone_connect 0) (thermal_bridge_angle 45)
        (options (clearance outline) (anchor circle))
        (primitives
          (gr_line (start 0 0) (end -1.75 1.75) (width 0.25))
        ) (tstamp ac29c7c8-9a8b-409c-af3a-ecddd11674c4))
      (pad "3" thru_hole circle (at 13.59 -3.41 ${p.rot}) (size 0.5 0.5) (drill 0.25) (layers "*.Cu" "*.Mask") ${p.SCL.str} (tstamp 303d1acc-ed8e-43c1-b9c6-b38e527201c8))
      (pad "3" smd custom (at 13.6 -2.49 ${p.rot}) (size 0.25 1.5) (layers "F.Cu") ${p.SCL.str}
        (zone_connect 0) (thermal_bridge_angle 45)
        (options (clearance outline) (anchor rect))
        (primitives
        ) (tstamp ae17565c-4a1f-4bbb-9240-2da2bc5087da))
      (pad "3" smd custom (at 13.6 -1.83 ${p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask") ${p.SCL.str}
        (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45)
        (options (clearance outline) (anchor rect))
        (primitives
          (gr_poly
            (pts
              (xy 0.6 0)
              (xy -0.6 0)
              (xy -0.6 1)
              (xy 0 0.4)
              (xy 0.6 1)
            )
            (width 0) (fill yes))
        ) (tstamp e3251ae8-6ad3-4fcf-a070-aefe6da123b4))
      (pad "4" smd custom (at 8.05712 -2.132022 ${p.rot}) (size 0.25 0.25) (layers "B.Cu") ${p.SDA.str}
        (zone_connect 0) (thermal_bridge_angle 45)
        (options (clearance outline) (anchor circle))
        (primitives
          (gr_line (start 0 0) (end 0 -2) (width 0.25))
          (gr_line (start 0 -2) (end 1 -3) (width 0.25))
          (gr_line (start 1 -3) (end 7.25 -3) (width 0.25))
          (gr_line (start 7.25 -3) (end 8 -2) (width 0.25))
          (gr_line (start 8 -2) (end 8 -1.5) (width 0.25))
        ) (tstamp f25f0f09-356a-4831-9d86-e8c04ec99d1c))
      (pad "4" smd custom (at 8.54 -1.844 ${p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask") ${p.SDA.str}
        (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45)
        (options (clearance outline) (anchor rect))
        (primitives
          (gr_poly
            (pts
              (xy -0.6 0)
              (xy 0.6 0)
              (xy 0.6 1)
              (xy 0 0.4)
              (xy -0.6 1)
            )
            (width 0) (fill yes))
        ) (tstamp b4413039-65e4-48e7-8ced-6669e57c9ddc))
      (pad "4" thru_hole circle (at 16.17 -3.41 ${p.rot}) (size 0.5 0.5) (drill 0.25) (layers "*.Cu" "*.Mask") ${p.SDA.str} (tstamp 773f3117-9797-4426-bc34-53e9e79fc0f7))
      (pad "4" smd custom (at 16.18 -2.51 ${p.rot}) (size 0.25 1.5) (layers "F.Cu") ${p.SDA.str}
        (zone_connect 0) (thermal_bridge_angle 45)
        (options (clearance outline) (anchor rect))
        (primitives
        ) (tstamp cc858ba6-9941-48be-8b32-9ca8ae71fda2))
      (pad "4" smd custom (at 16.2 -1.83 ${p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask") ${p.SDA.str}
        (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45)
        (options (clearance outline) (anchor rect))
        (primitives
          (gr_poly
            (pts
              (xy 0.6 0)
              (xy -0.6 0)
              (xy -0.6 1)
              (xy 0 0.4)
              (xy 0.6 1)
            )
            (width 0) (fill yes))
        ) (tstamp 5d0a94b8-37f8-4c4b-8e97-d5cb236504cf))
    )
  `
}


