module.exports = {
    params: {},
    body: p => `
        (module M2_Screw_fhole (layer F.Cu) (tedit 5E1ADAC2)
        ${p.at /* parametric position */} 
          (descr "Mounting Hole 2.2mm, M2, ISO7380")
          (tags "mounting hole 2.2mm m2 iso7380")
          (attr exclude_from_pos_files exclude_from_bom)
          (fp_circle (center 0 0) (end 1.75 0)
            (stroke (width 0.15) (type solid)) (fill none) (layer "Cmts.User") (tstamp d1e3209a-3978-41af-9c4a-60df54b55082))
          (fp_circle (center 0 0) (end 2 0)
            (stroke (width 0.05) (type solid)) (fill none) (layer "F.CrtYd") (tstamp a9ba0bbc-f330-45be-a20f-a7ba18571631))
          (pad "" thru_hole circle (at 0 0) (size 3.5 3.5) (drill 2.2) (layers "*.Cu" "*.Mask") (tstamp 918f7b43-a716-4836-a785-e27070288d67))
        )
      `
}
