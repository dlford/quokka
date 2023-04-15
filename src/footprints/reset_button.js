module.exports = {
    params: {
        designator: 'S',
        from: {type: 'net', value: 'from'},
        to: {type: 'net', value: 'to'},
    },
    body: p => `

    (module PTS636_SP43_LFS (layer F.Cu) (tstamp 5BF2CC3C)
      ${p.at /* parametric position */}
      (attr through_hole)
      (fp_rect (start -3 -1.75) (end 3 1.75)
        (stroke (width 0.1) (type default)) (fill none) (layer "F.SilkS") (tstamp f1aa01b3-2926-4391-8681-066d00797866))
      (pad "1" thru_hole circle (at -3.2 0 ${p.rot}) (size 2 2) (drill 1) (layers "*.Cu" "*.Mask") ${p.from.str} (tstamp c1bfc80a-da2c-40fa-b2de-c754a235f452))
      (pad "2" thru_hole circle (at 3.2 0 ${p.rot}) (size 2 2) (drill 1) (layers "*.Cu" "*.Mask") ${p.to.str} (tstamp 388645c9-48fa-49fb-97f9-62f7e1fd96ec))
    )

    `
}
