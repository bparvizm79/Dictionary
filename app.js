$(".search_btn").click(function(){
    const word = $(".search").val()
    axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then((res)=>{
        const data = res.data[0]
        console.log(data)
        const sound = new Audio(data.phonetics[0].audio)
        $(".dictionary").html(`
        <h1>${data.word}</h1>
        <button class="sound">click to sound</button>
        <p>${data.meanings[0].definitions[0].definition}</p>
        <h2>sinonym</h2>
        <ul>
            ${data.meanings[0].synonyms.map((val)=>(
                `<li>${val}</li>`
            ))}
        </ul>
        <h2>antonym</h2>
        <ul>
        ${data.meanings[0].antonyms.map((val)=>(
            `<li>${val}</li>`
        ))}
        </ul>
        `)
        $(".sound").click(function(){
            sound.play()
        })
    })
})