function execute(url) {
    const doc = Http.get(url+'/').html('gbk');
    return Response.success({
        name: doc.select("h1.booktitle").text(),
        cover: doc.select(".bookcover img").first().attr("src"),
        author: doc.select(".booktag a").first().text(),
        description: doc.select(".bookintro").text(),
        detail: doc.select(".booktag").first().html()+'<br>'+doc.select("#info p").last().html(),
        ongoing : doc.select(".hang_1").html().indexOf("完结") == 1,
        host: "https://www.mbtxt.la"
    });
}