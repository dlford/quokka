# Quokka Keyboard

![Quokka Keyboard PCB](img/render.svg)

## Features

- Designed for smaller handed folks
  - Steep columnar stagger
  - Slightly tucked in thumb cluster
- Per-key RGB Matrix using the easier to solder SK6812-MINI-E LEDs
- Piezo speakers
- 128x64 OLED displays
- TRRS jack faces back to keep your cables out of the way
- Full duplex serial connection between halves

## Parts List

**\* Affiliate Links**

- 36x MX keys
- 36x [Kailh MX Hot Swap Sockets](https://amzn.to/3pdbQfA)\*
- 36x [D_0805 1N4148 Diodes](https://amzn.to/3pfWarV)\*
- 2x [PJ-320A TRRS Jacks](https://amzn.to/3NHV4iI)\*
- 2x [Adafruit KB2040 MCU](https://www.adafruit.com/product/5302)
- 8x [Stick-on Rubber Feet](https://amzn.to/3HISXHJ)\*
- 2x [PTS636 SP43 LFS Reset Buttons](https://www.digikey.com/en/products/detail/c-k/PTS636-SP43-LFS/10071717) (Optional)
- 36x [SK6812-MINI-E RGB LEDs](https://www.diykeyboards.com/parts/product/sk6812-mini-e-rgb-led) (Optional)
- 2x [GME12864-49 OLED Displays](https://www.littlekeyboards.com/products/128x64-oled-screen) (Optional)
- 2x [KLJ-1102 Piezo Speakers](https://keeb.io/collections/diy-parts/products/piezo-speaker) (Optional)
- [Pin header strip sockets](https://amzn.to/3VFhROo)\* (Recommended, for hot swapping MCUs/OLEDs)
  - Through hole resistors or diodes to sacrifice legs for pin header strip sockets (if using)
- OLED hardware
  - 16x M2x4mm screws
  - 4x M2x10mm stand-offs for OLED mounting
  - 4x M2x15mm stand-offs for OLED covers
- 3D Printed Case hardware
  - 10x M2x9mm screws
  - 10x [M2x3mm heat set inserts](https://www.mcmaster.com/97163A146/)
- Plated Case hardware
  - 20x M2x4mm screws
  - 10x M2x8mm round stand-offs for plate cases ([these stand-offs](https://amzn.to/42FXkLX)\* fit in a 1/8" hole, don't forget a drill and 1/8" drill bit)

## Build Guide

1.  Lay out two PCBs, make sure one is flipped, as if you were to type on the keyboard.

    \*Note: if you intend to use plates for the case, you will need to carefully drill out the 5 mounting holes on each PCB (marked in green) with a 1/8" drill bit so the stand-offs can fit through the holes (do not drill out the OLED or OLED cover mounting holes marked in red).

    ![PCB mounting holes to drill out for plated case](img/build/3a.jpg)

2.  Tin SMD Pads

    Add a bit of solder to on leg of the diodes, switches, and LEDs (if using)

    When soldering SMD components, line up the part close to it's mounting place, heat up the solder on the pre-tinned pad, then slide the part in place, hold it there until after solder is cooled (tweezers will help with smaller parts), then solder the remaining legs, and go back over the first leg to ensure a good connection.

    ![SMD Pads Tinned](img/build/3.jpg)

3.  Solder LEDs (if using)

    Place the LEDs _face down_ in the square holes, match the leg with a notch in it to the white triangle on the PCB

    ![LED orientation, the leg with a notch cut into it matches with the white triangle on the PCB](img/build/1.jpg)

    ![LEDs soldered in place](img/build/4.jpg)

4.  Solder Diodes

    Place the diodes with the stripe facing the top of the keyboard (opposite the thumb keys)

    ![Diode orientation](img/build/2.jpg)

    ![Diodes soldered in place](img/build/5.jpg)

5.  Solder Hot Swap Sockets

    Place the sockets so the curved portion is on the left, so as not to cover the center hole for the switch pin

    ![Hot swap socket orientation](img/build/6.jpg)

    ![Hot swap sockets soldered in place](img/build/7.jpg)

6.  Flip the PCBs over, so everything you just soldered on is on the back, facing the table

7.  Solder the jumpers for the MCU and OLED (if using)

    ![Jumpers soldered](img/build/8.jpg)

8.  Solder the TRRS jacks

    ![TRRS jacks soldered](img/build/9.jpg)

9.  Solder the reset switches

    ![Reset switches soldered](img/build/10.jpg)

10. Solder the piezo elements (if using)

    The orientation of piezo elements does not matter

    ![Piezo elements soldered](img/build/11.jpg)

11. Solder the header strip sockets for the MCU and OLED (if using)

    After soldering the first leg, heat it back up and adjust the angle of the strip to be as close to vertical as possible

    ![Header strip sockets soldered](img/build/12.jpg)

12. Place the MCUs

    Orient the MCUs so they are face up, with the USB-C port facing the back of the keyboard (opposite the thumb keys)

    Use through hole diode or resistor legs to pin down the four corners of each MCU, you should feel some resistance before they drop into the socket, then they will feel snug. Solder down the four corners first.

    ![MCUs placed](img/build/13.jpg)

    Note that the two contacts closest to the USB-C port on the KB2040 are not used here (also, you may paint black over the power LEDs like I did here, they are quite bright)

    ![MCU unused contacts](img/build/14.jpg)

    Cut the diode or resistor legs above the solder joint, and continue soldering each leg the same way

    ![MCU contacts soldering process](img/build/15.jpg)

    ![MCUs soldered in place](img/build/16.jpg)

13. Now is a good time to flash your MCUs, since the boot button will be covered by the OLEDs later on. After the initial flash, they can be put into bootloader mode by double clicking the reset switch (configured by the QMK options `RP2040_BOOTLOADER_DOUBLE_TAP_RESET` and `RP2040_BOOTLOADER_DOUBLE_TAP_RESET_TIMEOUT` in `config.h`)

14. Install OLEDs (if using)

    Install M2x10mm stand-offs in the two holes in line with the OLED header strip sockets

    ![OLED mounting standoffs](img/build/17.jpg)

    Screw the OLEDs to the stand-offs but leave them loose for now

    ![OLED loosely attached](img/build/18.jpg)

    Push more diode or resistor legs into the OLED header strip sockets

    ![OLED pins installed](img/build/19.jpg)

    Now tighten the OLED mounting screws, keeping it as straight as possible

    ![OLED screws tightened](img/build/20.jpg)

    Solder and cut the pins

    ![OLED installed](img/build/21.jpg)

15. Install OLED covers

    Install M2x15mm stand-offs into the OLED cover mounting holes

    ![OLED cover stand-offs](img/build/23.jpg)

    Install the OLED covers onto the standoffs

    ![OLED cover installed](img/build/24.jpg)

16. Case options

    - No Case

      The easiest option, just stick some rubber feet to the bottom of the PCBs and call it a day

      ![Rubber feet on PCB](img/build/25.jpg)

      ![No case keyboard finished](img/build/26.jpg)

    - 3D Printed Case

      1. Print or order the parts

      2. Install the heat set inserts into the bottom of the case body parts, careful not to push too deep as they will go right through the case.

      3. Sand and paint the case, if desired

      4. Place the PCB into the case body

      5. Place an M2x9mm screw into each of the holes in the plate, then push a spacer on the the screw from the bottom of the plate

      6. Place the plate over the PCB and tighten each screw

      7. Install your switches

      8. Stick some rubber feet on the bottom of the case

      ![Quokka Keyboard](img/complete.jpg)

    - Plated Case

      _Note: If using the 3D printed plate spacers, assemble without switches and install them last, using the bottom spacer with the wide end against the bottom plate, and the top spacer with the wide end against the PCB._

      1. Install M2x8mm stand-offs on the bottom of the plates in the mounting holes

      2. Install a switch into each corner of the plates

      3. Install the PCB onto the switches in the plate

      4. Install the remaining switches

      5. Install the bottom plate on the stand-offs

      6. Stick some rubber feet on the bottom plate

      Shown here using Aluminum plates from [Ponoko](https://ponoko.com), though I would recommend using FR4 plates, or deburred and anodized aluminum plates from [sendcutsend.com](https://sendcutsend.com) for less money

      ![Plate stack build](img/plated.jpg)
