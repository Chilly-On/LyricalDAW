const fileTrack = () => {
    const fileTracks = [
        {
            name: "File closed",
            icon: "Track/file.png",
            color: "#e6357a",
            borderTop: 1
        },
        {
            name: "File opened",
            icon: "Track/file-open.png",
            color: "#b167ff",
            open: true,
            tracks: [
                {
                    id: 1,
                    name: "Harmony",
                    color: "#f5c848",
                    icon: "Track/harmony.png"
                },
                {
                    id: 2,
                    name: "Mixing",
                    color: "#41dfe2",
                    icon: "Track/mix.png"
                },
                {
                    id: 3,
                    name: "Piano",
                    color: "#dff155",
                    icon: "Track/piano.png"
                },
                {
                    id: 4,
                    name: "Sample",
                    color: "#b1bbca",
                    icon: "Track/sample.png"
                },
                {
                    name: "Nested File",
                    icon: "Track/file-open.png",
                    color: "#b167ff",
                    open: true,
                    tracks: [
                        {
                            id: 5,
                            name: "Harmony",
                            color: "#f5c848",
                            icon: "Track/harmony.png"
                        },
                        {
                            id: 6,
                            name: "Mixing",
                            color: "#41dfe2",
                            icon: "Track/mix.png"
                        },
                        {
                            id: 7,
                            name: "Piano",
                            color: "#dff155",
                            icon: "Track/piano.png"
                        },
                        {
                            id: 8,
                            name: "Sample",
                            color: "#b1bbca",
                            icon: "Track/sample.png"
                        }
                    ]
                }
            ]
        },
/*        {
            id: 9,
            name: "Piano 2",
            icon: "Track/piano.png",
            color: "#dff155"
        },
        {
            id: 10,
            name: "A very long name track to test overflow",
            icon: "Track/piano.png",
            color: "#41dfe2"
        },
        {
            id: 9,
            name: "Piano 2",
            icon: "Track/piano.png",
            color: "#dff155"
        },
        {
            id: 9,
            name: "Piano 2",
            icon: "Track/piano.png",
            color: "#dff155"
        },
        {
            id: 9,
            name: "Piano 2",
            icon: "Track/piano.png",
            color: "#dff155"
        },
        {
            id: 9,
            name: "Piano 2",
            icon: "Track/piano.png",
            color: "#dff155"
        },
        {
            id: 9,
            name: "Piano 2",
            icon: "Track/piano.png",
            color: "#dff155"
        }, {
            id: 9,
            name: "Piano 2",
            icon: "Track/piano.png",
            color: "#dff155"
        },
        {
            id: 9,
            name: "Piano 2",
            icon: "Track/piano.png",
            color: "#dff155"
        },
        {
            id: 9,
            name: "Piano 2",
            icon: "Track/piano.png",
            color: "#dff155"
        },
        {
            id: 9,
            name: "Piano 2",
            icon: "Track/piano.png",
            color: "#dff155"
        },
        {
            id: 9,
            name: "Piano 2",
            icon: "Track/piano.png",
            color: "#dff155"
        },
        {
            id: 9,
            name: "Piano 2",
            icon: "Track/piano.png",
            color: "#dff155"
        },
        {
            id: 9,
            name: "Piano 2",
            icon: "Track/piano.png",
            color: "#dff155"
        },
        {
            id: 9,
            name: "Piano 2",
            icon: "Track/piano.png",
            color: "#dff155"
        },
        {
            id: 9,
            name: "Piano 2",
            icon: "Track/piano.png",
            color: "#dff155"
        },
        {
            id: 9,
            name: "Piano 2",
            icon: "Track/piano.png",
            color: "#dff155"
        },
        {
            id: 9,
            name: "Piano 2",
            icon: "Track/piano.png",
            color: "#dff155"
        },
        {
            id: 9,
            name: "Piano 2",
            icon: "Track/piano.png",
            color: "#dff155"
        }, {
            id: 9,
            name: "Piano 2",
            icon: "Track/piano.png",
            color: "#dff155"
        }, {
            id: 9,
            name: "Piano 2",
            icon: "Track/piano.png",
            color: "#dff155"
        }, {
            id: 9,
            name: "Piano 2",
            icon: "Track/piano.png",
            color: "#dff155"
        }, {
            id: 9,
            name: "Piano 2",
            icon: "Track/piano.png",
            color: "#dff155"
        }, {
            id: 9,
            name: "Piano 2",
            icon: "Track/piano.png",
            color: "#dff155"
        }, {
            id: 9,
            name: "Piano 2",
            icon: "Track/piano.png",
            color: "#dff155"
        }, {
            id: 9,
            name: "Piano 2",
            icon: "Track/piano.png",
            color: "#dff155"
        }, {
            id: 9,
            name: "Piano 2",
            icon: "Track/piano.png",
            color: "#dff155"
        }, {
            id: 9,
            name: "Piano 2",
            icon: "Track/piano.png",
            color: "#dff155"
        }, {
            id: 9,
            name: "Piano 2",
            icon: "Track/piano.png",
            color: "#dff155"
        }, {
            id: 9,
            name: "Piano 2",
            icon: "Track/piano.png",
            color: "#dff155"
        }, {
            id: 9,
            name: "Piano 2",
            icon: "Track/piano.png",
            color: "#dff155"
        }, {
            id: 9,
            name: "Piano 2",
            icon: "Track/piano.png",
            color: "#dff155"
        }, {
            id: 9,
            name: "Piano 2",
            icon: "Track/piano.png",
            color: "#dff155"
        }, {
            id: 9,
            name: "Piano 2",
            icon: "Track/piano.png",
            color: "#dff155"
        }, */{
            id: 9,
            name: "Piano 2",
            icon: "Track/piano.png",
            color: "#dff155"
        }
    ];
    return fileTracks;
};

export default fileTrack;