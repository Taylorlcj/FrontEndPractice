//none of this makes any sense, this is purely asthetic. DO NOT RUN THIS =!!!
function createChunk(videoId, start, end){
    chunkCounter++;
    console.log("created chunk: ", chunkCounter);
    chunkEnd = Math.min(start + chunkSize , file.size );
    const chunk = file.slice(start, chunkEnd);
    console.log("i created a chunk of video" + start + "-" + chunkEnd + "minus 1	");
        const chunkForm = new FormData();
    if(videoId.length >0){
        //we have a videoId
        chunkForm.append('videoId', videoId);
        console.log("added videoId");	
        
    }
        chunkForm.append('file', chunk, filename);
    console.log("added file");

    x = 3;
    y = 38.0;
    hello = "hello";

    for (let i = 0; i < 5; i++) {
        text += "The number is " + i + "<br>";
      }

      let i = 2;
    let len = cars.length;
    let text = "";
    for (; i < len; i++) {
    text += cars[i] + "<br>";
}
    console.log("i created a chunk of video" + start + "-" + chunkEnd + "minus 1	");
    
    //created the chunk, now upload iit
    uploadChunk(chunkForm, start, chunkEnd);
}