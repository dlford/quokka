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
            (fp_text reference "${p.ref}" (at 0 2.1 unlocked) (layer "F.SilkS") hide
                (effects (font (size 0.7 0.7) (thickness 0.15)))
            )
            (fp_text value "SK6812-MINI-E" (at 0 -0.5 unlocked) (layer "F.SilkS") hide
                (effects (font (size 1 1) (thickness 0.15)))
            )
            (fp_poly
              (pts
                (xy -2.8 -1.4)
                (xy -2.2 -1.4)
                (xy -2.2 -2)
              )

              (stroke (width 0.1) (type solid)) (fill solid) (layer "B.SilkS") (tstamp 0c6f38ec-5dd2-4ede-993f-44355c5e2fdb))
            (fp_poly
              (pts
                (xy 2.8 -1.4)
                (xy 2.2 -1.4)
                (xy 2.2 -2)
              )

              (stroke (width 0.1) (type solid)) (fill solid) (layer "F.SilkS") (tstamp ff1711f4-cb52-497a-9b68-5de0b53a5d4a))
            (fp_line (start -1.6 -1.4) (end -1.6 1.4)
              (stroke (width 0.12) (type solid)) (layer "Cmts.User") (tstamp 150da041-f48c-4693-8d09-c50f6f139928))
            (fp_line (start -1.6 -1.4) (end 1.6 -1.4)
              (stroke (width 0.12) (type solid)) (layer "Cmts.User") (tstamp 17083a03-48b3-4229-bfd3-b734e41a04ca))
            (fp_line (start -1.6 1.4) (end -1.6 -1.4)
              (stroke (width 0.12) (type solid)) (layer "Cmts.User") (tstamp 9854e074-fada-4297-bf7a-b5f20c8d21de))
            (fp_line (start -1.6 1.4) (end 1.6 1.4)
              (stroke (width 0.12) (type solid)) (layer "Cmts.User") (tstamp 3bbac496-db0b-4a4a-817c-585a8c331649))
            (fp_line (start 1.6 -1.4) (end -1.6 -1.4)
              (stroke (width 0.12) (type solid)) (layer "Cmts.User") (tstamp 3338c2cd-b2fa-44ba-8169-b881dceb5575))
            (fp_line (start 1.6 -1.4) (end 1.6 1.4)
              (stroke (width 0.12) (type solid)) (layer "Cmts.User") (tstamp fc54e9db-8eb0-4213-b5ff-49ed42089a89))
            (fp_line (start 1.6 1.4) (end -1.6 1.4)
              (stroke (width 0.12) (type solid)) (layer "Cmts.User") (tstamp a37530ef-02c9-47ea-bca2-488c6ab9f4e3))
            (fp_line (start 1.6 1.4) (end 1.6 -1.4)
              (stroke (width 0.12) (type solid)) (layer "Cmts.User") (tstamp 32c64d35-4abb-4579-ad2c-6b1aec0b5b4c))
            (fp_line (start -1.7 -1.5) (end -1.7 1.5)
              (stroke (width 0.12) (type solid)) (layer "Edge.Cuts") (tstamp 69f0114f-b64d-40ee-907e-c37f9e5c5567))
            (fp_line (start -1.7 -1.5) (end 1.7 -1.5)
              (stroke (width 0.12) (type solid)) (layer "Edge.Cuts") (tstamp 820d09a2-f60d-4378-84e2-4e8fbedf1791))
            (fp_line (start -1.7 1.5) (end -1.7 -1.5)
              (stroke (width 0.12) (type solid)) (layer "Edge.Cuts") (tstamp 1a2feecd-b12d-4d87-b815-a4e16d822995))
            (fp_line (start -1.7 1.5) (end 1.7 1.5)
              (stroke (width 0.12) (type solid)) (layer "Edge.Cuts") (tstamp 01634f37-7043-4d40-98f0-cf97e5e6767c))
            (fp_line (start 1.7 -1.5) (end -1.7 -1.5)
              (stroke (width 0.12) (type solid)) (layer "Edge.Cuts") (tstamp 9859e8d5-1ff2-49f9-908e-6ece1b481bb3))
            (fp_line (start 1.7 -1.5) (end 1.7 1.5)
              (stroke (width 0.12) (type solid)) (layer "Edge.Cuts") (tstamp 1b97c5fb-d04c-42c6-908b-2f720d807367))
            (fp_line (start 1.7 1.5) (end -1.7 1.5)
              (stroke (width 0.12) (type solid)) (layer "Edge.Cuts") (tstamp dbafda7c-ff18-4349-9218-74bd5d886daa))
            (fp_line (start 1.7 1.5) (end 1.7 -1.5)
              (stroke (width 0.12) (type solid)) (layer "Edge.Cuts") (tstamp b23e9d58-891e-498d-8d6c-9eb2e1b406f0))
            (pad "1" smd custom (at -3 0.74 ${p.rot}) (size 0.25 0.25) (layers "F.Cu") ${p.VCC.str}
              (zone_connect 0) (thermal_bridge_angle 45)
              (options (clearance outline) (anchor circle))
              (primitives
                (gr_line (start 0 0) (end 0 1.5) (width 0.25))
              ) (tstamp 3b56d5a5-c89e-4464-ab01-0700069ead62))
            (pad "1" thru_hole circle (at -3 2.5 ${p.rot}) (size 0.5 0.5) (drill 0.25) (layers "*.Cu" "*.Mask") ${p.VCC.str} (tstamp 68ea44d6-ad71-4005-aecc-09ccdc7b49b3))
            (pad "1" smd rect (at -2.55 0.75 ${p.rot}) (size 1.7 0.82) (layers "F.Cu" "F.Paste" "F.Mask") ${p.VCC.str} (tstamp 1fef913d-a687-4cd7-9aa2-9619e41a1315))
            (pad "1" smd custom (at 0.01 2.51 ${p.rot}) (size 0.25 0.25) (layers "F.Cu") ${p.VCC.str}
              (zone_connect 0) (thermal_bridge_angle 45)
              (options (clearance outline) (anchor circle))
              (primitives
                (gr_line (start -2.7 0) (end 2.7 0) (width 0.25))
              ) (tstamp 0fef19bd-d756-4ab8-9c34-aa4383104e8c))
            (pad "1" smd rect (at 2.55 0.75 ${p.rot}) (size 1.7 0.82) (layers "B.Cu" "B.Paste" "B.Mask") ${p.VCC.str} (tstamp aa81c944-344f-4a8f-8315-f3149d69c730))
            (pad "1" thru_hole circle (at 3 2.5 ${p.rot}) (size 0.5 0.5) (drill 0.25) (layers "*.Cu" "*.Mask") ${p.VCC.str} (tstamp 7eabb769-5353-42a1-815d-c4be60fe1c04))
            (pad "1" smd custom (at 3.01 0.73 ${p.rot}) (size 0.25 0.25) (layers "B.Cu") ${p.VCC.str}
              (zone_connect 0) (thermal_bridge_angle 45)
              (options (clearance outline) (anchor circle))
              (primitives
                (gr_line (start 0 1.5) (end 0 0) (width 0.25))
              ) (tstamp c5c585c5-c2cb-4232-b69c-d40503533b2f))
            (pad "2" thru_hole circle (at -4 2 ${p.rot}) (size 0.5 0.5) (drill 0.25) (layers "*.Cu" "*.Mask") ${p.dout.str} (tstamp 319b88cf-59bd-42d1-8ee7-7bc52961da73))
            (pad "2" smd custom (at -3.4 -0.75 ${p.rot + 180}) (size 0.25 0.25) (layers "F.Cu") ${p.dout.str}
              (zone_connect 0) (thermal_bridge_angle 45)
              (options (clearance outline) (anchor circle))
              (primitives
                (gr_line (start 0 0) (end 0.566 -0.566) (width 0.25))
                (gr_line (start 0.566 -0.566) (end 0.566 -2.5) (width 0.25))
              ) (tstamp b75b0387-4076-4ce4-92bf-f25484164264))
            (pad "2" smd rect (at -2.55 -0.75 ${p.rot}) (size 1.7 0.82) (layers "F.Cu" "F.Paste" "F.Mask") ${p.dout.str} (tstamp 7c6f8857-73f1-499f-b206-9c8a05568645))
            (pad "2" smd custom (at -2.01 1.99 ${p.rot}) (size 0.25 0.25) (layers "B.Cu") ${p.dout.str}
              (zone_connect 0) (thermal_bridge_angle 45)
              (options (clearance outline) (anchor circle))
              (primitives
                (gr_line (start -1.75 0) (end 1.75 0) (width 0.25))
              ) (tstamp f9274d61-6cde-42fc-b246-edcc39df60f5))
            (pad "2" thru_hole circle (at 0 2 ${p.rot}) (size 0.5 0.5) (drill 0.25) (layers "*.Cu" "*.Mask") ${p.dout.str} (tstamp ee850902-fc1a-4dd0-ab89-3884b9345ba7))
            (pad "2" smd custom (at 2 2 ${p.rot}) (size 0.25 0.25) (layers "F.Cu") ${p.dout.str}
              (zone_connect 0) (thermal_bridge_angle 45)
              (options (clearance outline) (anchor circle))
              (primitives
                (gr_line (start -1.75 0) (end 1.75 0) (width 0.25))
              ) (tstamp 1029b401-e681-4b77-88b0-86d166aa2bb3))
            (pad "2" smd rect (at 2.55 -0.75 ${p.rot}) (size 1.7 0.82) (layers "B.Cu" "B.Paste" "B.Mask") ${p.dout.str} (tstamp 80e74d5a-79e3-472e-b803-68860962d5a9))
            (pad "2" smd custom (at 3.4 -0.75 ${p.rot + 180}) (size 0.25 0.25) (layers "B.Cu") ${p.dout.str}
              (zone_connect 0) (thermal_bridge_angle 45)
              (options (clearance outline) (anchor circle))
              (primitives
                (gr_line (start -0.566 -0.566) (end 0 0) (width 0.25))
                (gr_line (start -0.566 -2.5) (end -0.566 -0.566) (width 0.25))
              ) (tstamp 57250594-6181-4ea7-b6cd-d8c80b02533f))
            (pad "2" thru_hole circle (at 4 2 ${p.rot}) (size 0.5 0.5) (drill 0.25) (layers "*.Cu" "*.Mask") ${p.dout.str} (tstamp ce5a0e65-db66-4898-a998-c72a31698ea5))
            (pad "3" thru_hole circle (at -3 -2.5 ${p.rot}) (size 0.5 0.5) (drill 0.25) (layers "*.Cu" "*.Mask") ${p.GND.str} (tstamp 8768a028-ab32-4e4c-ba6a-66f312099aff))
            (pad "3" smd custom (at -3 -2.25 ${p.rot}) (size 0.25 0.25) (layers "B.Cu") ${p.GND.str}
              (zone_connect 0) (thermal_bridge_angle 45)
              (options (clearance outline) (anchor circle))
              (primitives
                (gr_line (start 0 1.5) (end 0 0) (width 0.25))
              ) (tstamp 38b8dea3-8c78-40e5-a942-cdcd2f77b7d4))
            (pad "3" smd roundrect (at -2.55 -0.75 ${p.rot}) (size 1.7 0.82) (layers "B.Cu" "B.Paste" "B.Mask") ${p.GND.str} (roundrect_rratio 0.25) (tstamp 42348561-c490-45f7-a637-ce9d87605398))
            (pad "3" smd custom (at -0.01 -2.5 ${p.rot}) (size 0.25 0.25) (layers "F.Cu") ${p.GND.str}
              (zone_connect 0) (thermal_bridge_angle 45)
              (options (clearance outline) (anchor circle))
              (primitives
                (gr_line (start -2.7 0) (end 2.7 0) (width 0.25))
              ) (tstamp 31712f9c-7146-41dc-af62-f31175ca0fc7))
            (pad "3" smd roundrect (at 2.55 -0.75 ${p.rot}) (size 1.7 0.82) (layers "F.Cu" "F.Paste" "F.Mask") ${p.GND.str} (roundrect_rratio 0.25) (tstamp fa5ee4f9-616c-4a1d-a2c3-2b384c45b825))
            (pad "3" thru_hole circle (at 3 -2.5 ${p.rot}) (size 0.5 0.5) (drill 0.25) (layers "*.Cu" "*.Mask") ${p.GND.str} (tstamp 602a0907-b382-44b8-9d7d-f2905fc5215a))
            (pad "3" smd custom (at 3 -2.25 ${p.rot}) (size 0.25 0.25) (layers "F.Cu") ${p.GND.str}
              (zone_connect 0) (thermal_bridge_angle 45)
              (options (clearance outline) (anchor circle))
              (primitives
                (gr_line (start 0 0) (end 0 1.5) (width 0.25))
              ) (tstamp 79cb08d2-235b-48f0-9cf1-595ae272021e))
            (pad "4" thru_hole circle (at -4 -2 ${p.rot}) (size 0.5 0.5) (drill 0.25) (layers "*.Cu" "*.Mask") ${p.din.str} (tstamp 2ff855ef-6a93-4db3-9231-8a60bcc2a89b))
            (pad "4" smd custom (at -3.4 0.75 ${p.rot}) (size 0.25 0.25) (layers "B.Cu") ${p.din.str}
              (zone_connect 0) (thermal_bridge_angle 45)
              (options (clearance outline) (anchor circle))
              (primitives
                (gr_line (start -0.566 -0.566) (end 0 0) (width 0.25))
                (gr_line (start -0.566 -2.5) (end -0.566 -0.566) (width 0.25))
              ) (tstamp 756fa4c8-9ad4-46ba-924d-1e998cb77b86))
            (pad "4" smd rect (at -2.55 0.75 ${p.rot}) (size 1.7 0.82) (layers "B.Cu" "B.Paste" "B.Mask") ${p.din.str} (tstamp 11346546-b0ef-4632-8775-6f184d2d529c))
            (pad "4" smd custom (at -2.02 -1.99 ${p.rot}) (size 0.25 0.25) (layers "F.Cu") ${p.din.str}
              (zone_connect 0) (thermal_bridge_angle 45)
              (options (clearance outline) (anchor circle))
              (primitives
                (gr_line (start -1.75 0) (end 1.75 0) (width 0.25))
              ) (tstamp 151b1b67-b06d-4116-8787-12ec794475a4))
            (pad "4" thru_hole circle (at 0 -2 ${p.rot}) (size 0.5 0.5) (drill 0.25) (layers "*.Cu" "*.Mask") ${p.din.str} (tstamp f904b717-6f67-4041-9fdf-17d8e98a3e53))
            (pad "4" smd custom (at 2.01 -2 ${p.rot}) (size 0.25 0.25) (layers "B.Cu") ${p.din.str}
              (zone_connect 0) (thermal_bridge_angle 45)
              (options (clearance outline) (anchor circle))
              (primitives
                (gr_line (start -1.75 0) (end 1.75 0) (width 0.25))
              ) (tstamp a8e7a091-2d58-4695-a682-eff911763b88))
            (pad "4" smd rect (at 2.55 0.75 ${p.rot}) (size 1.7 0.82) (layers "F.Cu" "F.Paste" "F.Mask") ${p.din.str} (tstamp 0c165654-cdb7-4cc1-8782-2ea683b6b441))
            (pad "4" smd custom (at 3.4 0.75 ${p.rot}) (size 0.25 0.25) (layers "F.Cu") ${p.din.str}
              (zone_connect 0) (thermal_bridge_angle 45)
              (options (clearance outline) (anchor circle))
              (primitives
                (gr_line (start 0 0) (end 0.566 -0.566) (width 0.25))
                (gr_line (start 0.566 -0.566) (end 0.566 -2.5) (width 0.25))
              ) (tstamp a1bb6333-6e4d-43aa-be8d-8acd42ca4781))
            (pad "4" thru_hole circle (at 4 -2 ${p.rot}) (size 0.5 0.5) (drill 0.25) (layers "*.Cu" "*.Mask") ${p.din.str} (tstamp 1a685565-5ae6-4e58-b6c5-4d22638a5af7))
        )
    `
}
