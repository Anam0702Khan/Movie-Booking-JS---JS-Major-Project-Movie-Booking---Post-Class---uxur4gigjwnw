export const database = [
    { name: 'Barbie', imgUrl: 'https://image.tmdb.org/t/p/w1280	/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg ',rating :'9.4' },
    { name: 'Talk to Me', imgUrl: 'https://image.tmdb.org/t/p/original/	/kdPMUMJzyYAc4roD52qavX0nLIC.jpg',rating :'6.6' },
    { name : 'Heart Of Stone', imgUrl :'https://image.tmdb.org/t/p/original//vB8o2p4ETnrfiWEgVxHmHWP9yRl.jpg' ,rating :'7.9'},
    { name: 'Cars', imgUrl: 'https://upload.wikimedia.org/wikipedia/en/3/34/Cars_2006.jpg' ,rating :'8.0'},
    { name: 'Blow', imgUrl: 'https://image.tmdb.org/t/p/original/yYZFVfk8aeMP4GxBSU9MTvqs9mJ.jpg',rating : '5.6' },
    { name: 'Stars Wars', imgUrl: 'https://image.tmdb.org/t/p/original/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg',rating :'8.5' },
    { name: 'Culpa Mia', imgUrl: 'https://image.tmdb.org/t/p/original/w46Vw536HwNnEzOa7J24YH9DPRS.jpg ' ,rating :'9.0'},
    { name: 'Sleepers ', imgUrl: 'https://image.tmdb.org/t/p/original//yUpiEk2EojS9ZEXb3nIQonQCYYF.jpg ',rating :'8.6'},
    { name: 'The Blind Side', imgUrl: 'https://image.tmdb.org/t/p/original/bMgq7VBriuBFknXEe9E9pVBYGZq.jpg ',rating :'7.6'},
    { name: 'Extraction', imgUrl: 'https://image.tmdb.org/t/p/original//nygOUcBKPHFTbxsYRFZVePqgPK6.jpg', rating :'7.7'},
    { name: 'The Last Duel', imgUrl: 'https://image.tmdb.org/t/p/original//zjrJE0fpzPvX8saJXj8VNfcjBoU.jpg    ' ,rating :'5.6'},
    { name:'Charades', imgUrl: 'https://image.tmdb.org/t/p/original/ijJ73UgR6nOqjSP8MO0Z7hawCdm.jpg' ,rating :'8.9'},
    { name: 'The Matrix', imgUrl: 'https://image.tmdb.org/t/p/original/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg' ,rating :'8.6'},
    { name: 'Hustle', imgUrl: 'https://image.tmdb.org/t/p/original/xWic7kPq13oRxYjbGLApXCnc7pz.jpg' ,rating :'7.6'},
    { name: 'Oppenheimer', imgUrl: 'https://image.tmdb.org/t/p/original//8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',rating :'9.4'},
    { name: 'Fast X', imgUrl: 'https://image.tmdb.org/t/p/original//fiVW06jE7z9YnO4trhaMEdclSiC.jpg    ',rating :'9.6'}
]
export const availibility = {
    'Barbie': [1, 2, 5, 8, 9,19,22,20,11],
    'Fast X': [1, 2, 3, 5, 6,10,11,12,13,14,15,16,17, 24],
    'Oppenheimer': [1, 2, 3, 4, 5, 6,15,16,20,21,22,23,24],
    'The Blind Side': [4, 6, 8,10,11,12,13,14,15,16],
    'The Matrix': [3, 5, 7, 9,20,21,12,13,19,24],
    'Hustle': [4, 6, 8,10,11,12,13,14,15,16],
    'Sleepers ': [4, 6, 8,10,11,12,13,14,15,16],
    'Charades': [4, 6, 8,10,11,12,13,14,15,16],
    'Extraction': [4, 6, 8,10,11,12,13,14,15,16],
    'Heart Of Stone': [4, 6, 8,10,11,12,13,14,15,16],
    'Moonrise Kingdom': [3, 5, 7, 9,20,21,12,13,19,24],
    'The Blind Side': [4, 6, 8,10,11,12,13,14,15,16],
    'Stars Wars': [4, 6, 8,10,11,12,13,14,15,16],
    'Blow': [4, 6, 8,10,11,12,13,14,15,16],
    'Culpa Mia': [4, 6, 8,10,11,12,13,14,15,16],
    'Talk to Me': [3, 5, 7, 9,20,21,12,13,19,24],
    'The Last Duel': [4, 6, 8,10,11,12,13,14,15,16],
}
const fetchMovieList =  new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Promise resolved')
            resolve(database)
        }, 500)
    })


const fetchMovieAvailability = async(movieName)=>{
    return new Promise((resolve, reject) => {
            setTimeout(() => {
                for (let m in availibility) {
                    if (m === movieName) resolve(availibility[m])
                }
                resolve([])
            }, 500)
        })
}  


export { fetchMovieList, fetchMovieAvailability }


