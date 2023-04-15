// Kailh MX hotswap only, reversed
// Nets
//    from: corresponds to pin 1
//    to: corresponds to pin 2

module.exports = {
  params: {
    designator: 'S',
    from: undefined,
    to: undefined
  },
  body: p => `
    (module MX (layer F.Cu) (tedit 5DD4F656)
    ${p.at /* parametric position */}

    ${'' /* footprint */}
      (attr through_hole)
      (fp_text reference "${p.ref}" (at 0 0) (layer "F.SilkS") hide
          (effects (font (size 1.27 1.27) (thickness 0.15)))
        (tstamp aa138d25-0dce-4e96-af0a-4ae54ebeef5f)
      )
      (fp_line (start -7 -7) (end -7 -6)
        (stroke (width 0.15) (type solid)) (layer "Dwgs.User") (tstamp eaca791c-85e7-4fb8-bd5e-52903a3c83a8))
      (fp_line (start -7 -7) (end -6 -7)
        (stroke (width 0.15) (type solid)) (layer "Dwgs.User") (tstamp 5cfa3667-11f2-4515-8dc4-dbe69935c838))
      (fp_line (start -7 -6) (end -7 -7)
        (stroke (width 0.15) (type solid)) (layer "Dwgs.User") (tstamp e2103c61-b443-45fd-873e-99bf63d32451))
      (fp_line (start -7 6) (end -7 7)
        (stroke (width 0.15) (type solid)) (layer "Dwgs.User") (tstamp c40ac4fd-0197-4447-bf99-a2f21b5216e3))
      (fp_line (start -7 7) (end -7 6)
        (stroke (width 0.15) (type solid)) (layer "Dwgs.User") (tstamp 304369d1-b017-47ca-a624-98466f661434))
      (fp_line (start -7 7) (end -6 7)
        (stroke (width 0.15) (type solid)) (layer "Dwgs.User") (tstamp a55619a9-b665-4539-aea2-e52189e48213))
      (fp_line (start -6 -7) (end -7 -7)
        (stroke (width 0.15) (type solid)) (layer "Dwgs.User") (tstamp 5ff48f2f-ace9-4bb3-bcb8-b0bd3a2d8bfd))
      (fp_line (start -6 7) (end -7 7)
        (stroke (width 0.15) (type solid)) (layer "Dwgs.User") (tstamp f111b03b-5cf2-4f59-bf58-afd20ece724d))
      (fp_line (start 6 -7) (end 7 -7)
        (stroke (width 0.15) (type solid)) (layer "Dwgs.User") (tstamp b8a02322-4c77-41a0-a9b7-4ac1fbde0065))
      (fp_line (start 6 7) (end 7 7)
        (stroke (width 0.15) (type solid)) (layer "Dwgs.User") (tstamp 8d3eac43-1b41-4123-ac96-356d0db12092))
      (fp_line (start 7 -7) (end 6 -7)
        (stroke (width 0.15) (type solid)) (layer "Dwgs.User") (tstamp 46f1a639-b590-4e60-9ed0-540cab6c27f2))
      (fp_line (start 7 -7) (end 7 -6)
        (stroke (width 0.15) (type solid)) (layer "Dwgs.User") (tstamp a9c1eb9e-4d1f-419d-adca-e56880dcc834))
      (fp_line (start 7 -6) (end 7 -7)
        (stroke (width 0.15) (type solid)) (layer "Dwgs.User") (tstamp ff1f818a-65a0-403f-9358-72b3c64de87c))
      (fp_line (start 7 6) (end 7 7)
        (stroke (width 0.15) (type solid)) (layer "Dwgs.User") (tstamp 060c25ac-df7a-44f5-ac6e-a93abf2d82cf))
      (fp_line (start 7 7) (end 6 7)
        (stroke (width 0.15) (type solid)) (layer "Dwgs.User") (tstamp 1d2e9696-6585-4084-a71a-31a5d296ec89))
      (fp_line (start 7 7) (end 7 6)
        (stroke (width 0.15) (type solid)) (layer "Dwgs.User") (tstamp 961c9749-5677-4a18-ae7e-c972ade55d0b))
      (pad "" np_thru_hole circle (at -5.08 0) (size 1.7018 1.7018) (drill 1.7018) (layers "*.Cu" "*.Mask") (tstamp 5863906d-1256-4c8c-92fe-038d5526fafd))
      (pad "" np_thru_hole circle (at -5.08 0) (size 1.7018 1.7018) (drill 1.7018) (layers "*.Cu" "*.Mask") (tstamp fa14f5c8-50fa-4a2a-808d-da0544e6b116))
      (pad "" np_thru_hole circle (at -3.81 -2.54) (size 3 3) (drill 3) (layers "*.Cu" "*.Mask") (tstamp e53e91be-a1c3-4b07-844e-44e5581e2e6a))
      (pad "" np_thru_hole circle (at -2.54 -5.08) (size 3 3) (drill 3) (layers "*.Cu" "*.Mask") (tstamp 7db0edb9-3cbe-40eb-8a84-4ce99dc57cd1))
      (pad "" np_thru_hole circle (at 0 0) (size 3.9878 3.9878) (drill 3.9878) (layers "*.Cu" "*.Mask") (tstamp 4f5aa90b-7a79-4abb-84ba-046b33c55094))
      (pad "" np_thru_hole circle (at 0 0) (size 3.9878 3.9878) (drill 3.9878) (layers "*.Cu" "*.Mask") (tstamp 9d74c24a-f0d9-4694-9b28-3a99082a56f4))
      (pad "" np_thru_hole circle (at 2.54 -5.08) (size 3 3) (drill 3) (layers "*.Cu" "*.Mask") (tstamp b85c5c94-935c-47d5-a428-f4121edfd1b4))
      (pad "" np_thru_hole circle (at 3.81 -2.54) (size 3 3) (drill 3) (layers "*.Cu" "*.Mask") (tstamp d8576071-34b6-4bc3-a64d-cb9bb78fb171))
      (pad "" np_thru_hole circle (at 5.08 0) (size 1.7018 1.7018) (drill 1.7018) (layers "*.Cu" "*.Mask") (tstamp 5ff1e773-16b9-4963-b4f9-b8206367904e))
      (pad "" np_thru_hole circle (at 5.08 0) (size 1.7018 1.7018) (drill 1.7018) (layers "*.Cu" "*.Mask") (tstamp 6e4410bf-fc11-4231-a9af-d4aed07e8daa))
      (pad "1" smd rect (at -7.085 -2.54 ${p.rot}) (size 2.55 2.5) (layers "B.Cu" "B.Paste" "B.Mask") ${p.from.str} (tstamp 84486e51-c38a-4a61-ae57-fcc2c328b81d))
      (pad "1" thru_hole circle (at -6.47 -3.8 ${p.rot}) (size 0.5 0.5) (drill 0.25) (layers "*.Cu" "*.Mask") ${p.from.str} (tstamp 5e552c45-f9a7-4392-ae46-6dd04131de97))
      (pad "1" smd rect (at -5.842 -5.08 ${p.rot}) (size 2.55 2.5) (layers "F.Cu" "F.Paste" "F.Mask") ${p.from.str} (tstamp fa7e7827-e3c4-4bb8-8bc2-140d021bc2f7))
      (pad "2" smd rect (at 5.842 -5.08 ${p.rot}) (size 2.55 2.5) (layers "B.Cu" "B.Paste" "B.Mask") ${p.to.str} (tstamp 7accd5eb-8fa3-48b3-928a-6d597394d112))
      (pad "2" thru_hole circle (at 6.41 -3.81 ${p.rot}) (size 0.5 0.5) (drill 0.25) (layers "*.Cu" "*.Mask") ${p.to.str} (tstamp eed2c57f-f473-4f6c-9590-db4a3abe3769))
      (pad "2" smd rect (at 7.085 -2.54 ${p.rot}) (size 2.55 2.5) (layers "F.Cu" "F.Paste" "F.Mask") ${p.to.str} (tstamp 8802e133-8996-46ec-8b06-74e5e1354db5))
    )`
}
