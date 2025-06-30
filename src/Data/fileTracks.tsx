// Color constant
const w = "#EBF6FB";
const r = "#FF3D3E";
// const l = "#9EA4FF";
const b = "#1E22E5";
const y = "#E0FA25";
const g = "#2EFF65";
const gr = "#b1bbca";
const p = "#9346DC";
interface TrackFile {
    type: "piano" | "sample" | "fx" | "file";
    name: string;
    icon: string;
    color: string;
    borderTop?: number;
    open?: boolean;
    tracks?: TrackFile[];           // Recursive children
}

const fileTracks: TrackFile[] = [   // borderTop: 1
    {
        type: "piano",
        name: "Guide_Main",
        icon: "Track/piano.png",
        color: w,
        borderTop: 1
    },
    {
        type: "piano",
        name: "Guide_Main2",
        icon: "Track/piano.png",
        color: w,
    },
    {
        type: "piano",
        name: "Guide_Main2cho",
        icon: "Track/piano.png",
        color: w,
    },
    {
        type: "piano",
        name: "Cho",
        icon: "Track/piano.png",
        color: w,
    },
    {
        type: "piano",
        name: "SynthV_1cho",
        icon: "Track/piano.png",
        color: w,
    },
    {
        type: "piano",
        name: "Miku",
        icon: "Track/piano.png",
        color: w,
    },
    {
        type: "sample",
        name: "CrashL",
        icon: "Track/sample.png",
        color: r
    },
    {
        type: "sample",
        name: "CrashR",
        icon: "Track/sample.png",
        color: r
    },
    {
        type: "sample",
        name: "Glass1",
        icon: "Track/sample.png",
        color: r
    },
    {
        type: "sample",
        name: "Glass2",
        icon: "Track/sample.png",
        color: r
    },
    {
        type: "sample",
        name: "Kick",
        icon: "Track/sample.png",
        color: r
    },
    {
        type: "sample",
        name: "ClapB",
        icon: "Track/sample.png",
        color: r
    },
    {
        type: "sample",
        name: "ClapB2",
        icon: "Track/sample.png",
        color: r
    },
    {
        type: "sample",
        name: "SnareA",
        icon: "Track/sample.png",
        color: r
    },
    {
        type: "sample",
        name: "ClapSabi",
        icon: "Track/sample.png",
        color: r
    },
    {
        type: "sample",
        name: "HatR_A",
        icon: "Track/sample.png",
        color: r
    },
    {
        type: "sample",
        name: "HatL_A",
        icon: "Track/sample.png",
        color: r
    },
    {
        type: "sample",
        name: "HatR_A 2",
        icon: "Track/sample.png",
        color: r
    },
    {
        type: "sample",
        name: "HatSabiL",
        icon: "Track/sample.png",
        color: r
    },
    {
        type: "sample",
        name: "Clock",
        icon: "Track/sample.png",
        color: r
    },
    {
        type: "sample",
        name: "HatBL",
        icon: "Track/sample.png",
        color: r
    },
    {
        type: "sample",
        name: "SnareGst",
        icon: "Track/sample.png",
        color: r
    },
    {
        type: "sample",
        name: "Snap",
        icon: "Track/sample.png",
        color: r
    },
    {
        type: "sample",
        name: "BassSlide",
        icon: "Track/sample.png",
        color: b,
    },
    {
        type: "piano",
        name: "BassPLCenter",
        icon: "Track/piano.png",
        color: b,
    },
    {
        type: "piano",
        name: "BassPLWide",
        icon: "Track/piano.png",
        color: b,
    },
    {
        type: "piano",
        name: "Bass808",
        icon: "Track/piano.png",
        color: b,
    },
    {
        type: "piano",
        name: "BassBLine",
        icon: "Track/piano.png",
        color: b,
    },
    {
        type: "piano",
        name: "BA_Vtl_Line",
        icon: "Track/piano.png",
        color: b,
    },
    {
        type: "piano",
        name: "BA_Srm_Sub",
        icon: "Track/piano.png",
        color: b,
    },
    {
        type: "piano",
        name: "BA_Avn_Wide",
        icon: "Track/piano.png",
        color: b,
    },
    {
        type: "piano",
        name: "BassFing",
        icon: "Track/piano.png",
        color: b,
    },
    {
        type: "piano",
        name: "PianoAcos",
        icon: "Track/piano.png",
        color: y,
    },
    {
        type: "piano",
        name: "PianoPan",
        icon: "Track/piano.png",
        color: y,
    },
    {
        type: "piano",
        name: "SY_Sine",
        icon: "Track/piano.png",
        color: y,
    },
    {
        type: "piano",
        name: "SYLd_L",
        icon: "Track/piano.png",
        color: y,
    },
    {
        type: "piano",
        name: "SY_Pad",
        icon: "Track/piano.png",
        color: y,
    },
    {
        type: "piano",
        name: "SYPluck",
        icon: "Track/piano.png",
        color: y,
    },
    {
        type: "piano",
        name: "Chryl",
        icon: "Track/piano.png",
        color: y,
    },
    {
        type: "piano",
        name: "SYBellB",
        icon: "Track/piano.png",
        color: y,
    },
    {
        type: "piano",
        name: "PianoMain",
        icon: "Track/piano.png",
        color: y,
    },
    {
        type: "piano",
        name: "SY_CdSabi",
        icon: "Track/piano.png",
        color: y,
    },
    {
        type: "piano",
        name: "SabiLdR",
        icon: "Track/piano.png",
        color: y,
    },
    {
        type: "piano",
        name: "SabiLdL",
        icon: "Track/piano.png",
        color: y,
    },
    {
        type: "piano",
        name: "SabiLd_Lay1",
        icon: "Track/piano.png",
        color: y,
    },
    {
        type: "piano",
        name: "SabiLd_Lay2",
        icon: "Track/piano.png",
        color: y,

    },
    {
        type: "piano",
        name: "SYBrass",
        icon: "Track/piano.png",
        color: y,
    },
    {
        type: "piano",
        name: "SYPad",
        icon: "Track/piano.png",
        color: y,
    },
    {
        type: "piano",
        name: "VocalChop",
        icon: "Track/piano.png",
        color: y,
    },
    {
        type: "piano",
        name: "SYCd_E",
        icon: "Track/piano.png",
        color: y,
    },
    {
        type: "piano",
        name: "SYPl_E",
        icon: "Track/piano.png",
        color: y,
    },
    {
        type: "piano",
        name: "SYPl_E2",
        icon: "Track/piano.png",
        color: y,
    },
    {
        type: "piano",
        name: "LastLo_Hi",
        icon: "Track/piano.png",
        color: g,
    },
    {
        type: "piano",
        name: "RGtL",
        icon: "Track/piano.png",
        color: g,
    },
    {
        type: "sample",
        name: "RGtL",
        icon: "Track/sample.png",
        color: g,
    },
    {
        type: "sample",
        name: "EGt 1",
        icon: "Track/sample.png",
        color: g,
    },
    {
        type: "sample",
        name: "EGt 2",
        icon: "Track/sample.png",
        color: g,
    },
    {
        type: "sample",
        name: "EGt 3",
        icon: "Track/sample.png",
        color: g,
    },
    {
        type: "sample",
        name: "EGt 5",
        icon: "Track/sample.png",
        color: g,
    },
    {
        type: "sample",
        name: "EGt 6",
        icon: "Track/sample.png",
        color: g,
    },
    {
        name: "EGtCut_Sabi",
        type: "file",
        icon: "Track/file.png",
        color: g,
        open: true,
        tracks: [
            {
                type: "sample",
                name: "EGt 7",
                icon: "Track/sample.png",
                color: gr,

            },
            {
                type: "sample",
                name: "EGt 8",
                icon: "Track/sample.png",
                color: gr,

            },
            {
                type: "sample",
                name: "EGt 9",
                icon: "Track/sample.png",
                color: gr,

            },
            {
                type: "sample",
                name: "EGt 10",
                icon: "Track/sample.png",
                color: g,

            },
        ]
    },
    {
        type: "sample",
        name: "SubDrop",
        icon: "Track/sample.png",
        color: p,

    },
    {
        type: "sample",
        name: "Reverse_sub",
        icon: "Track/sample.png",
        color: p,

    },
    {
        type: "sample",
        name: "PianoRev",
        icon: "Track/sample.png",
        color: p,

    },
    {
        type: "sample",
        name: "MO_SHINJU_140_synth_",
        icon: "Track/sample.png",
        color: p,

    },
    {
        type: "sample",
        name: "MO_SHINJU_140_synth_",
        icon: "Track/sample.png",
        color: p,
    },
    {
        type: "sample",
        name: "MO_FN_texture_asmr_might",
        icon: "Track/sample.png",
        color: p,
    },
    // miss some Japanese-named track here
    {
        type: "sample",
        name: "水流3",
        icon: "Track/sample.png",
        color: p,
    },
    {
        type: "sample",
        name: "New track",
        icon: "Track/sample.png",
        color: p,
    },
    {
        type: "sample",
        name: "P♭",
        icon: "Track/sample.png",
        color: p,
    },
    {
        type: "sample",
        name: "MO_FN_texture_asmr_is_fled",
        icon: "Track/sample.png",
        color: p,
    },
    {
        type: "sample",
        name: "PianoRev",
        icon: "Track/sample.png",
        color: p,
    },
    {
        type: "sample",
        name: "AcosFill",
        icon: "Track/sample.png",
        color: p,

    },
    {
        type: "sample",
        name: "WoodFill",
        icon: "Track/sample.png",
        color: p,
    },
    {
        type: "sample",
        name: "New track",
        icon: "Track/sample.png",
        color: p,
    },
    {
        type: "sample",
        name: "Radio",
        icon: "Track/sample.png",
        color: p,

    },
    {
        type: "sample",
        name: "Stab_Str",
        icon: "Track/sample.png",
        color: p,

    },
    {
        type: "sample",
        name: "PMAM_Vocal_Chop_03_C",
        icon: "Track/sample.png",
        color: p,

    },
    {
        type: "sample",
        name: "PMAM_Vocal_Chop_03_C 2",
        icon: "Track/sample.png",
        color: p,
    },
    {
        type: "sample",
        name: "UVIWorkstation",
        icon: "Track/sample.png",
        color: p,
    },
    {
        type: "sample",
        name: "UVIWorkstation 2",
        icon: "Track/sample.png",
        color: p,
    },
    {
        type: "sample",
        name: "MO_TB_hihat_opentrill",
        icon: "Track/sample.png",
        color: p,
    },
    {
        type: "sample",
        name: "MO_SVI_prec_variance",
        icon: "Track/sample.png",
        color: p,
    },
    {
        type: "piano",
        name: "BBC Symphony Orchestra",
        icon: "Track/piano.png",
        color: p,
    },
    {
        type: "piano",
        name: "BBC Symphony Orchestra",
        icon: "Track/piano.png",
        color: p,
    },
    {
        type: "sample",
        name: "VOX_HHC_94_vocal_ra_wet",
        icon: "Track/sample.png",
        color: p,
    },
    {
        type: "sample",
        name: "Shaker",
        icon: "Track/sample.png",
        color: p,
    },
    {
        type: "sample",
        name: "Shaker2",
        icon: "Track/sample.png",
        color: p,
    },
    {
        type: "piano",
        name: "SlapFX",
        icon: "Track/piano.png",
        color: p,

    },
    {
        type: "sample",
        name: "AGt",
        icon: "Track/sample.png",
        color: p,
    },
    {
        type: "sample",
        name: "cvc_vox_vooch_G♯",
        icon: "Track/sample.png",
        color: p,
    },
    {
        type: "sample",
        name: "cvc_vox_wah_C",
        icon: "Track/sample.png",
        color: p,
    },
    // Japanese tracks
    {
        type: "sample",
        name: "電子レンジでチン",
        icon: "Track/sample.png",
        color: p,
    },
    {
        type: "sample",
        name: "吸う_はぁ_強い",
        icon: "Track/sample.png",
        color: p,
    },
        {
        type: "sample",
        name: "吸う_はぁ_強い 2",
        icon: "Track/sample.png",
        color: p,
    },
    {
        type: "sample",
        name: "ForestBirdChirp_SFXB.69",
        icon: "Track/sample.png",
        color: p,

    },
    {
        type: "sample",
        name: "ForestBirdChirp_SFXB.69 2",
        icon: "Track/sample.png",
        color: p,

    },
    {
        type: "sample",
        name: "Sweep",
        icon: "Track/sample.png",
        color: p,
    },
    {
        type: "sample",
        name: "E_Bells",
        icon: "Track/sample.png",
        color: p,
    },
    {
        type: "sample",
        name: "Pooon",
        icon: "Track/sample.png",
        color: p,
    },
    {
        type: "sample",
        name: "ClapImpact",
        icon: "Track/sample.png",
        color: p,
    },
    {
        type: "sample",
        name: "ClapImpact2",
        icon: "Track/sample.png",
        color: p,
    },
    {
        type: "sample",
        name: "WCLP_vocal_fx_reverse",
        icon: "Track/sample.png",
        color: p,
    },
    {
        type: "sample",
        name: "DS_VPH_fx_vocal_one_se_D",
        icon: "Track/sample.png",
        color: p,
    },
    {
        type: "sample",
        name: "Bpm155_Kit26_Cymbals_PL",
        icon: "Track/sample.png",
        color: p,
    },
    {
        type: "sample",
        name: "P2J_snap_snap",
        icon: "Track/sample.png",
        color: p,
    },
    {
        type: "sample",                  // maybe error
        name: "MO_PHR_132_percussiooley",
        icon: "Track/sample.png",
        color: p,
    },
    {
        type: "sample",
        name: "Routh",
        icon: "Track/sample.png",
        color: p,
    },
    {
        type: "sample",
        name: "JCRiser",
        icon: "Track/sample.png",
        color: p,
    },
    {
        type: "sample",
        name: "Sweep",
        icon: "Track/sample.png",
        color: p,
    },
    {
        type: "sample",
        name: "Sweep 2",
        icon: "Track/sample.png",
        color: p,
    },
    {
        type: "sample",
        name: "SweepRev",
        icon: "Track/sample.png",
        color: p,
    },
    // Jap track
    {
        type: "sample",
        name: "TAIKI_NULIGHT___128",
        icon: "Track/sample.png",
        color: p,
    },
    {
        type: "sample",
        name: "breaks_scratch_125_kktatch",
        icon: "Track/sample.png",
        color: gr,
    },
    {
        type: "sample",
        name: "WindRev",
        icon: "Track/sample.png",
        color: p,
    },
    {
        type: "file",
        name: "Main",
        icon: "Track/file.png",
        color: r,
        open: true,
        tracks: [
            {
                type: "sample",
                name: "A",
                icon: "Track/sample.png",
                color: r,
            },
            {
                type: "sample",
                name: "A 4",
                icon: "Track/sample.png",
                color: r,
            },
            {
                type: "sample",
                name: "A 3",
                icon: "Track/sample.png",
                color: r,
            },
            {
                type: "sample",
                name: "A 2",
                icon: "Track/sample.png",
                color: r,
            },
            {
                type: "sample",
                name: "B",
                icon: "Track/sample.png",
                color: r,
            },
            {
                type: "sample",
                name: "B 2",
                icon: "Track/sample.png",
                color: r,
            },
            {
                type: "sample",
                name: "Sabi",
                icon: "Track/sample.png",
                color: r,
            },
        ]
    },
    {
        type: "sample",
        name: "Oct",
        icon: "Track/sample.png",
        color: r
    },
    {
        type: "sample",
        name: "Oct 2",
        icon: "Track/sample.png",
        color: r
    },
    {
        type: "sample",
        name: "MikuFull - HarmoHigh",
        icon: "Track/sample.png",
        color: r
    },
    {
        type: "sample",
        name: "MikuFull - HarmoHigh 2",
        icon: "Track/sample.png",
        color: r
    },
    {
        type: "sample",
        name: "MikuFull - Cho",
        icon: "Track/sample.png",
        color: r
    },
    {
        type: "sample",
        name: "MikuFull - ChoDub",
        icon: "Track/sample.png",
        color: r
    },
    {
        type: "sample",
        name: "MikuFull - Cho 2",
        icon: "Track/sample.png",
        color: r
    },
    {
        type: "sample",
        name: "MikuFull - ChoDub 2",
        icon: "Track/sample.png",
        color: r
    },
    {
        type: "fx",
        name: "VoxLens",
        icon: "Track/fx.png",
        color: r
    },
];

export default fileTracks;