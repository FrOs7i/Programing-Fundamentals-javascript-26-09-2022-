function repaint(input) {

    let paintAmm = Number(input[0])
    let wallpaperAmm = Number(input[1])
    let priceOfPaintPBuck = 21.5
    let priceOfWallpaperRoll = 5.20
    let glovesAmm = Math.ceil(wallpaperAmm * 0.35)
    let brushAmm = Math.floor(paintAmm * 0.48)
    let priceOfGloves = Number(input[2]);
    let priceOfBrush = Number(input[3]);
    let tottaPrice = ((paintAmm * priceOfPaintPBuck) + (wallpaperAmm * priceOfWallpaperRoll) + (glovesAmm * priceOfGloves) + (brushAmm * priceOfBrush))
    let deliveri = tottaPrice / 15





    console.log(`This delivery will cost ${deliveri.toFixed(2)} lv.`);
} repaint(["21", "18", "5", "2.2"])