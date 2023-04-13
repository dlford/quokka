module.exports = {
    params: {
        designator: 'S',
        from: {type: 'net', value: 'from'},
        to: {type: 'net', value: 'to'}
    },
    body: p => `

    (module TL1105_Side_Switch (layer F.Cu) (tstamp 5BF2CC3C)
        ${p.at /* parametric position */}

        ${''/* symbols */}
        (fp_rect (start -8.133348 -8.417902) (end -2.393494 -5.08) (layer "F.SilkS") (width 0.12) (fill none) (tstamp a13ab237-8f8d-4e16-8c47-4440653b8534))
        (fp_rect (start -6.238 -5.08) (end -4.294354 -0.963546) (layer "F.SilkS") (width 0.12) (fill none) (tstamp d5b800ca-1ab6-4b66-b5f7-2dda5658b504))

        ${''/* THT terminals */}
        (pad 1 thru_hole circle (at -7.528 -5.12) (size 1.524 1.524) (drill 1) (layers *.Cu *.Mask) ${p.from.str})
        (pad 2 thru_hole circle (at -3.028 -5.12) (size 1.524 1.524) (drill 1) (layers *.Cu *.Mask) ${p.to.str})

        ${''/* anchors */}
        (pad 3 thru_hole circle (at -8.778 -7.62) (size 2 2) (drill 1.3) (layers *.Cu *.Mask))
        (pad 4 thru_hole circle (at -1.778 -7.62) (size 2 2) (drill 1.3) (layers *.Cu *.Mask))
    )

    `
}
