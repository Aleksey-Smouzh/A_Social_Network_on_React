
let state = {

    postData: [
        { id: 1, message: "Have are you?", likes: "200" },
        { id: 2, message: "Nothing, never mind", likes: "250" },
        { id: 3, message: "What's up?", likes: "300" },
        { id: 4, message: "Hello", likes: "90" },
        { id: 5, message: "Have are you?", likes: "2" },
        { id: 5, message: "Nothing, never mind", likes: "1" },
    ],

    dialogsData: [
        { id: 1, name: "Vasya" },
        { id: 2, name: "Petya" },
        { id: 3, name: "Kolya" },
        { id: 1, name: "Marysya" },
        { id: 1, name: "Dima" },
        { id: 1, name: "Zorro" },
    ],

    messageData: [
        { id: 1, message: " Hi" },
        { id: 2, message: "Yo" },
        { id: 3, message: "What's up?" },
        { id: 4, message: "Hello" },
        { id: 5, message: "Have are you?" },
        { id: 5, message: "Nothing, never mind" },
    ],

    profileData: [
        {
            id: 1,
            name: "Pupkin",
            age: "23",
            country: "Gonduras ",
            city: "Chupacabra",
        },
        // {id:2, name: "Gonza", age: "34", country: "Gorza",city: "Chupxondric"},
        // {id:3, name: "Krukva", age: "73", country: "Nikaragua ",city: "Minskas"},
        // {id:4, name: "Pronya", age: "13", country: "Brazilia ",city: "Prazenbam"},
        // {id:5, name: "Patrik", age: "63", country: "Yotube",city: "Culima"},
    ],

}

export let addPost = (postMessage) =>{
   
    let newPost = {
        id: 5,
        message: postMessage,
        likes: "3038"
    };
    state.postData.push(newPost)  
}




export default state