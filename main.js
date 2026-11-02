setcpm(90/4)

arrange(
  [4,stack(
    note("<[c4,e4,g4] [a3,c4,e4] [f3,a3,c4] [g3,b3,d4]>")
      .sound("<gm_piano gm_epiano1 gm_epiano2 gm_harpsichord>")
      .struct("x ~ x ~ x ~ x ~")
      .room(0.4)
      .gain(0.65)
      ._pianoroll(),

    note("<c2 a1 f1 g1>")
      .sound("gm_acoustic_bass")
      .lpf(550)
      .release(0.8)
      .gain(0.7)
      ._pianoroll()
    
  )],

  [4,stack(
    note("c4 ~ e5 ~ c4 ~ e4 ~ a5 ~ c5 ~ c5 ~ d5 ~")
      .sound("<gm_music_box gm_celesta gm_glockenspiel gm_vibraphone>")
      .room(0.7)
      .delay(0.5)
      .gain(0.6)
      ._pianoroll(),

    note("< c3 a1 f2 g1 >")
      .sound("gm_acoustic_bass")
      .lpf(200)
      .release(0.6)
      .gain(0.55)
      ._pianoroll()
  )],

  [4,stack(
    note("c5 ~ e5 ~ g5 ~ e5 ~ c5 ~ b4 ~ g4 ~ e4 ~")
      .sound("<gm_lead_1_square gm_lead_2_sawtooth gm_lead_3_calliope gm_lead_6_voice>")
      .lpf(1900)
      .room(0.6)
      .delay(0.5)
      .gain(0.3)
      ._pianoroll(),

    note("<[c3,e3,g3] [a2,c3,e3] [f2,a2,c3] [g2,b2,d3]>")
      .sound("gm_pad_sweep")
      .attack(1)
      .release(2)
      .room(0.9)
      .gain(0.15)
      ._pitchwheel(),

    note("<c2 a1 f1 g1>")
      .sound("gm_synth_bass_1")
      .lpf(400)
      .decay(0.3)
      .gain(0.7)
      ._scope(),

    sound("<bd ~ ~ ~, ~ ~ sd ~, ~ hh ~ hh>")
      .bank("RolandTR808")
      .gain(0.20)
      ._punchcard()
  )],

  [4,stack(
    note("<[c4,e4,g4] [a3,c4,e4] [f3,a3,c4] [g3,b3,d4]>")
      .sound("<gm_trumpet gm_trombone gm_french_horn gm_brass_section>")
      .struct("x ~ x x ~ x ~ x")
      .room(0.5)
      .gain(0.45)
      ._pianoroll(),

    note("<c2 a1 f1 g1>")
      .sound("gm_acoustic_bass")
      .lpf(300)
      .release(0.4)
      .gain(0.7)
      ._pianoroll(),

    sound("<bd ~ ~ ~, ~ ~ sd ~, ~ hh ~ hh>")
      .bank("RolandTR808")
      .gain(0.4)
      ._punchcard()
  )],

  [4,stack(
    note("<c5 e5 g5 e5> <a4 c5 e5 c5> <f4 a4 c5 a4> <g4 b4 d5 b4>")
      .sound("<gm_violin gm_viola gm_cello gm_string_ensemble_1>")
      .attack(0.6)
      .release(1)
      .room(1.5)
      .gain(0.3)
      ._pianoroll(),

    note("<[c3,e3,g3] [a2,c3,e3] [f2,a2,c3] [g2,b2,d3]>")
      .sound("gm_pad_warm")
      .attack(1.5)
      .release(1)
      .room(0.4)
      .gain(0.2)
      ._pitchwheel(),

    note("<c2 a1 f1 g1>")
      .sound("gm_contrabass")
      .lpf(400)
      .release(1.5)
      .gain(0.45)
      ._pianoroll()
  )],

  [4,stack(
    note("c5 ~ e5 g5 ~ e5 c5 ~ a4 ~ c5 e5 ~ c5 a4 ~")
      .sound("<gm_flute gm_clarinet gm_oboe gm_bassoon>")
      .room(0.6)
      .delay(0.8)
      .gain(0.8)
      ._pianoroll(),

    note("<[c3,e3,g3] [a2,c3,e3] [f2,a2,c3] [g2,b2,d3]>")
      .sound("gm_pad_warm")
      .attack(0.8)
      .release(1)
      .room(1.7)
      .gain(0.7)
      ._pitchwheel(),

    note("<c2 a1 f1 g1>")
      .sound("gm_acoustic_bass")
      .lpf(300)
      .release(0.4)
      .gain(0.3 )
      ._pianoroll()
  )],

  
  [4,stack(
    note("<c5 e5 g5 e5> <a4 c5 e5 c5> <f4 a4 c5 a4> <g4 b4 d5 b4>")
      .sound("<gm_sitar gm_koto gm_shamisen gm_kalimba>")
      .struct("x ~ x x ~ x ~ x")
      .room(0.3)
      .gain(0.4)
      ._pianoroll(),

    note("<c2 a1 f1 g1>")
      .sound("gm_acoustic_bass")
      .lpf(300)
      .release(0.8)
    
  )],

  [4,stack(  
     note("c5 ~ e5 ~ g5 ~ e5 ~ c5 ~ b4 ~ g4 ~ e4 ~")
      .sound("gm_string_ensemble_1")
      .attack(0.05)
      .release(1.5)
      .room(0.8)
      .gain(saw.range(0.28, 0).slow(4))
      ._pianoroll(),

    note("<[c3,e3,g3] [a2,c3,e3] [f2,a2,c3] [g2,b2,d3]>")
      .sound("gm_choir_aahs")
      .attack(1.5)
      .release(3)
      .room(1)
      .gain(saw.range(0.15, 0).slow(4))
      ._pitchwheel(),

    note("<c2 a1 f1 g1>")
      .sound("gm_acoustic_bass")
      .lpf(400)
      .release(2)
      .gain(saw.range(0.45, 0).slow(4))
      ._pianoroll(),

    note("c6 ~ ~ ~")
      .sound("gm_tubular_bells")
      .room(1)
      .release(4)
      .gain(saw.range(0.3, 0).slow(4))
      ._pianoroll()
  )],
  
)
