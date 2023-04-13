module.exports = {
    params: {
        designator: 'LED',
        din: undefined,
        dout: undefined,
        VCC: {type: 'net', value: 'VCC'},
        GND: {type: 'net', value: 'GND'}
    },
    body: p => `
        (module SK6812-MINI-E (layer F.Cu) (tedit 53BEE615)

            ${p.at /* parametric position */}

            ${'' /* footprint reference */}
            (attr through_hole)
            (fp_text value "SK6812-MINI-E" (at 0 -0.5 unlocked) (layer "F.SilkS") hide
                (effects (font (size 1 1) (thickness 0.15)))
              (tstamp 5348ab7e-dbf3-4399-a292-276524886805)
            )
            (fp_poly
              (pts
                (xy -2.8 -1.4)
                (xy -2.2 -1.4)
                (xy -2.2 -2)
              )

              (stroke (width 0.1) (type solid)) (fill solid) (layer "B.SilkS") (tstamp 1860db68-6028-4af5-a8c3-2fc49e3ddd82))
            (fp_poly
              (pts
                (xy 2.8 -1.4)
                (xy 2.2 -1.4)
                (xy 2.2 -2)
              )

              (stroke (width 0.1) (type solid)) (fill solid) (layer "F.SilkS") (tstamp d75c6d88-49a2-4633-89cd-bee6e98b4c9f))
            (fp_line (start -1.6 -1.4) (end -1.6 1.4)
              (stroke (width 0.12) (type solid)) (layer "Cmts.User") (tstamp 16ce0b72-81d2-4386-a772-a0a767cc7b26))
            (fp_line (start -1.6 -1.4) (end 1.6 -1.4)
              (stroke (width 0.12) (type solid)) (layer "Cmts.User") (tstamp 7a8c5882-900a-479b-9afc-dce7af028e62))
            (fp_line (start -1.6 1.4) (end -1.6 -1.4)
              (stroke (width 0.12) (type solid)) (layer "Cmts.User") (tstamp 70dbdd98-d522-4889-8311-7d43e2ba4cbb))
            (fp_line (start -1.6 1.4) (end 1.6 1.4)
              (stroke (width 0.12) (type solid)) (layer "Cmts.User") (tstamp 1c16235b-04af-4bac-923b-fcb7d4599e2b))
            (fp_line (start 1.6 -1.4) (end -1.6 -1.4)
              (stroke (width 0.12) (type solid)) (layer "Cmts.User") (tstamp f27c93f5-ff5f-4917-9679-2255d765bea7))
            (fp_line (start 1.6 -1.4) (end 1.6 1.4)
              (stroke (width 0.12) (type solid)) (layer "Cmts.User") (tstamp c86efa10-0800-4d31-a1aa-2b69b757e441))
            (fp_line (start 1.6 1.4) (end -1.6 1.4)
              (stroke (width 0.12) (type solid)) (layer "Cmts.User") (tstamp 8fa7080e-49aa-4a8a-9709-5c99a9b52b31))
            (fp_line (start 1.6 1.4) (end 1.6 -1.4)
              (stroke (width 0.12) (type solid)) (layer "Cmts.User") (tstamp 9b8f476e-1c03-432e-a926-7ea53f3527a9))
            (fp_line (start -1.7 -1.5) (end -1.7 1.5)
              (stroke (width 0.12) (type solid)) (layer "Edge.Cuts") (tstamp a1e43516-c297-48af-88e6-bfddfe0ffcad))
            (fp_line (start -1.7 -1.5) (end 1.7 -1.5)
              (stroke (width 0.12) (type solid)) (layer "Edge.Cuts") (tstamp 29bb1431-60a5-4ce7-b192-7c2113bcb6ae))
            (fp_line (start -1.7 1.5) (end -1.7 -1.5)
              (stroke (width 0.12) (type solid)) (layer "Edge.Cuts") (tstamp 8d87a72e-0923-44f5-b29e-5b9e9330992b))
            (fp_line (start -1.7 1.5) (end 1.7 1.5)
              (stroke (width 0.12) (type solid)) (layer "Edge.Cuts") (tstamp 0a600847-68fe-46b0-ba0a-d72f4991cd22))
            (fp_line (start 1.7 -1.5) (end -1.7 -1.5)
              (stroke (width 0.12) (type solid)) (layer "Edge.Cuts") (tstamp 1dfc9150-2b79-4232-a82a-ef71375f4048))
            (fp_line (start 1.7 -1.5) (end 1.7 1.5)
              (stroke (width 0.12) (type solid)) (layer "Edge.Cuts") (tstamp c2cdca7f-43c0-45ec-9f0c-05033c24c02e))
            (fp_line (start 1.7 1.5) (end -1.7 1.5)
              (stroke (width 0.12) (type solid)) (layer "Edge.Cuts") (tstamp 40b619bd-4db7-4029-83cf-57ad8937addc))
            (fp_line (start 1.7 1.5) (end 1.7 -1.5)
              (stroke (width 0.12) (type solid)) (layer "Edge.Cuts") (tstamp 67f8d08f-24cc-4b25-ac99-741c5d61691a))

            (pad 1 smd rect (at -2.55 0.75 ${p.rot}) (size 1.7 0.82) (layers "F.Cu" "F.Paste" "F.Mask") ${p.VCC.str})
            (pad 1 smd rect (at 2.55 0.75 ${p.rot}) (size 1.7 0.82) (layers "B.Cu" "B.Paste" "B.Mask") ${p.VCC.str})
            (pad 2 smd rect (at -2.55 -0.75 ${p.rot}) (size 1.7 0.82) (layers "F.Cu" "F.Paste" "F.Mask") ${p.dout.str})
            (pad 2 smd rect (at 2.55 -0.75 ${p.rot}) (size 1.7 0.82) (layers "B.Cu" "B.Paste" "B.Mask") ${p.dout.str})
            (pad 3 smd roundrect (at -2.55 -0.75 ${p.rot}) (size 1.7 0.82) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.25) ${p.GND.str})
            (pad 3 smd roundrect (at 2.55 -0.75 ${p.rot}) (size 1.7 0.82) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) ${p.GND.str})
            (pad 4 smd rect (at -2.55 0.75 ${p.rot}) (size 1.7 0.82) (layers "B.Cu" "B.Paste" "B.Mask") ${p.din.str})
            (pad 4 smd rect (at 2.55 0.75 ${p.rot}) (size 1.7 0.82) (layers "F.Cu" "F.Paste" "F.Mask") ${p.din.str})
        )
    `
}
