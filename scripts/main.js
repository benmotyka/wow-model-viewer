const scriptData = {
    race: "dwarf",
    sex: "male",
}

$(window).on("load", () => {
    const $model = $("#model");
    window.WH = {
        debug: () => { },
    };

    console.log($model.outerWidth())
    console.log($model.outerHeight())

const characterModel = {
    type: ZamModelViewer.WOW,
    contentPath: "https://wow.zamimg.com/modelviewer/live/",
    container: $model,
    hd: true,
    aspect: 1,
    charCustomization: {
        race: 3,
        gender: 1,
        // options: charData.customizationOptions,
        sheathMain: -1,
        sheathOff: -1,
    },
    cls: 1,
    items: null,
    models: {
        type: ZamModelViewer.Wow.Types.CHARACTER,
        id: `${scriptData.race}${scriptData.sex}`,
    },
    mount: {
        type: ZamModelViewer.Wow.Types.NPC,
        id: 2,
    },
};

const viewer = new ZamModelViewer(characterModel);
})

