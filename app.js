let wavesurfer = WaveSurfer.create({
    container: '#waveform'
});

$(".search_btn").click(function(){
    const word = $(".search").val()
    axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then((res)=>{
        const data = res.data[0]
        console.log(data)
        // const sound = new Audio(data.phonetics[0].audio)
      $(".title").text(data.word) 
 wavesurfer.load(data.phonetics[0].audio);

      $(".discription p").text(data.meanings[0].definitions[0].definition) 
      $(".sinonym").html(data.meanings[0].synonyms.map((val)=>(
        `<li>${val}</li>`
    )))
    $(".antonym").html(data.meanings[0].antonyms.map((val)=>(
        `<li>${val}</li>`
    )))
      $(".sound_btn").click(function(){
            // sound.play()
            wavesurfer.play()
        })
    })
})