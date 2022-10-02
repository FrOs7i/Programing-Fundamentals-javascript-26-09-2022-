//function gramophone(band, album, song) {
 //   let songInSecons =Number((album.lenght * band.lenght) * song.lenght / 2)
 //   let rotation = Math.ceil(songInSecons /2.5)
 //   console.log(`The plate was rotated ${rotation} times.`);
//}
//gramophone('Black Sabbath', 'Paranoid', 'War Pigs')
function gramophone(band,album,name) {
    let bandNum = 0
    for (let index = 0; index < band.length; index++) {
         bandNum ++
    }
    let albumNum =0
    for (let index = 0; index < album.length; index++) {
        albumNum ++
   }
    let nameNum =0
    for (let index = 0; index < name.length; index++) {
        nameNum ++
   }
    let seconds = ((bandNum*albumNum)*nameNum/2)
    let timeInMin = Math.ceil(seconds/2.5)
    console.log(`The plate was rotated ${timeInMin} times.`);
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs')