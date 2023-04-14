// GME12864-49 OLED display 128x64
//
// Nets
//    GND: corresponds to pin 1
//    VCC: corresponds to pin 2
//    SCL: corresponds to pin 3
//    SDA: corresponds to pin 4

module.exports = {
  params: {
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
      (fp_text reference "REF**" (at -0.6 -15.4 unlocked) (layer "F.SilkS") hide
          (effects (font (size 1 1) (thickness 0.1)))
        (tstamp 39ad4271-0419-4ccb-beab-699bd3dfa44d)
      )
      (fp_text value "GME12864-49" (at -0.6 -13.9 unlocked) (layer "F.Fab")
          (effects (font (size 1 1) (thickness 0.15)))
        (tstamp 2b7d300a-7512-427e-8a79-17a1f29f9ce4)
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

      (pad 1 thru_hole oval (at 8.54 1.5 ${p.rot}) (size 1.574 2.675) (drill 1.016) (layers "*.Cu" "*.Mask") ${p.GND.str})
      (pad 2 thru_hole oval (at 11.08 1.5 ${p.rot}) (size 1.574 2.675) (drill 1.016) (layers "*.Cu" "*.Mask") ${p.VCC.str})
      (pad 3 thru_hole oval (at 13.62 1.5 ${p.rot}) (size 1.574 2.675) (drill 1.016) (layers "*.Cu" "*.Mask") ${p.SCL.str})
      (pad 4 thru_hole oval (at 16.16 1.5 ${p.rot}) (size 1.574 2.675) (drill 1.016) (layers "*.Cu" "*.Mask") ${p.SDA.str})
    )
  `
}


