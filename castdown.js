var request = require('request');
var fs = require('fs')
const download = require('image-downloader')
const { encode, decode } = require('url-encode-decode')
var sleep = require('system-sleep');
const cheerio = require("cheerio");
var os = require('os');







function castindir(isimler){
    
setTimeout(function () {

    var postlist = isimler.split(',');


    var liste = []
    liste = postlist
    var downcastlong = liste.length
    console.log(downcastlong)



    liste.forEach((element, index) => {
        var yenielement = encode(element)

        request.get('https://www.imdb.com/find?q=' + yenielement + '&ref_=nv_sr_sm', { timeout: 15000 }, function (error, response, html) {
            if (error) {
                console.log(error)
            }
            const $ = cheerio.load(html);

            $("td[class='primary_photo'] > a > img").each((index2, inelement) => {
                if (index2 == 0) {
                    var bulunanresimyolu = $(inelement).attr("src")
                    if (bulunanresimyolu.includes('https://m.media-amazon.com/images/S/sash')) {
                        var normalisim = decode(yenielement)

                    } else {
                        var normalisim = decode(yenielement)
                        var alttireliisim = normalisim.split(' ').join('_');
                        


                        var buyukresimyolu = bulunanresimyolu.split('_V1')
                        var sonresimyolu = buyukresimyolu[0] + '_V1'

                        if(alttireliisim.includes('\r\n')){
                            alttireliisim = alttireliisim.split('\r\n').join('');
                        
                        }
                        

                        const options = {
                            url: sonresimyolu,
                            dest: '.\\images\\' + alttireliisim + '.jpg'
                        }

                        download.image(options)
                            .then(({ filename }) => {
                                console.log('Download is successful: ' + filename)
                            })
                            .catch((err) => console.error(err))


                    }


                }



            });

        });

        sleep(2000);

    })
  }, 0);
}


module.exports ={
    castindir,
}


