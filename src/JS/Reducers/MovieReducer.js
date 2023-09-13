import { ADD_MOVIE, DELETE_MOVIE } from "../ActionTypes/ActionsTypes"

const initialState = {
  MOVIESdata:[
    {
      id: 1,
      title: "Her",
      wallpaper: "https://m.media-amazon.com/images/M/MV5BMjA1Nzk0OTM2OF5BMl5BanBnXkFtZTgwNjU2NjEwMDE@._V1_FMjpg_UX1000_.jpg",
      rate: 4,
      description:
        "In a near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BMjA1Nzk0OTM2OF5BMl5BanBnXkFtZTgwNjU2NjEwMDE@._V1_.jpg",
      trailer: "https://www.youtube.com/embed/6QRvTv_tpw0"
    },
    {
      id: 2,
      title: "The Lobster",
      wallpaper: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/072e06e03fbe52dbc710b2d353cc71602a88466c63e81b5c7234fc3dc66876de._RI_TTW_.jpg",
      rate: 3,
      description:
        "In a dystopian near future, single people, according to the laws of The City, are taken to The Hotel, where they are obliged to find a romantic partner in forty-five days or are transformed into beasts and sent off into The Woods.",
      posterUrl:
        "https://i.pinimg.com/originals/43/9b/19/439b192bedc27cfaa0ec1cc787db800d.jpg",
      trailer: "https://www.youtube.com/embed/vU29VfayDMw"
    },
    {
      id: 3,
      title: "The Pianist",
      wallpaper: "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      rate: 5,
      description:
        "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      trailer: "https://www.youtube.com/embed/BFwGqLa_oAo"
    },
    {
      id: 4,
      title: "Avengers: Endgame",
      wallpaper: "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0,0,540,810",
      rate: 1,
      description:
        "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
      trailer: "https://www.youtube.com/embed/TcMBFSGVi1c"
    },
    {
      id: 5,
      title: "Gangs of New York",
      wallpaper: "https://upload.wikimedia.org/wikipedia/en/a/ae/Gangs_of_New_York_Poster.jpg",
      rate: 3,
      description:
        "In 1862, Amsterdam Vallon returns to the Five Points area of New York City seeking revenge against Bill the Butcher, his father's killer.",
      posterUrl:
        "https://img7.cdn.cinoche.com/images/14aa038469eaf2ca96dbc3da4182428c.jpg",
      trailer: "https://www.youtube.com/embed/qHVUPri5tjA"
    },
    {
      id: 6,
      title: "Inheritance",
      wallpaper: "https://m.media-amazon.com/images/M/MV5BNzliMTMzYzUtMTM5Yi00Mzg4LWIwMjItYTJjODliZDE4NTJkXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
      rate: 3,
      description:
        "A patriarch of a wealthy and powerful family suddenly passes away, leaving his daughter with a shocking secret inheritance that threatens to unravel and destroy the family.",
      posterUrl:
        "https://i1.wp.com/setthetape.com/wp-content/uploads/2020/06/Inheritance-POSTER.jpg?resize=225%2C300&ssl=1",
      trailer: "https://www.youtube.com/embed/bkaWQ5HlE5U"
    },
    {
      id: 7,
      title: "The Fountain",
      wallpaper: "https://m.media-amazon.com/images/M/MV5BMTU5OTczMTcxMV5BMl5BanBnXkFtZTcwNDg3MTEzMw@@._V1_.jpg",
      rate: 4,
      description:
        "As a modern-day scientist, Tommy is struggling with mortality, desperately searching for the medical breakthrough that will save the life of his cancer-stricken wife, Izzi.",
      posterUrl:
        "https://upload.wikimedia.org/wikipedia/en/e/ee/Fountain_poster_1.jpg",
      trailer: "https://www.youtube.com/embed/m8IlyFCbNZg"
    },
    {
      id: 8,
      title: "Spotlight",
      wallpaper: "https://flxt.tmsimg.com/assets/p11897076_p_v10_aa.jpg",
      rate: 4,
      description:
        "The true story of how the Boston Globe uncovered the massive scandal of child molestation and cover-up within the local Catholic Archdiocese, shaking the entire Catholic Church to its core.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BMjIyOTM5OTIzNV5BMl5BanBnXkFtZTgwMDkzODE2NjE@._V1_.jpg",
      trailer: "https://www.youtube.com/embed/EwdCIpbTN5g"
    },
    {
      id: 9,
      title: "Avengers: Infinity War",
      wallpaper: "https://lumiere-a.akamaihd.net/v1/images/p_avengersinfinitywar_19871_cb171514.jpeg?region=0%2C0%2C540%2C810",
      rate: 1,
      description:
        "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
      posterUrl:
        "https://cinesite-media-cloud-production.s3-accelerate.amazonaws.com/2017/04/avengers-infinity-war-poster-1093756-528x787.jpeg",
      trailer: "https://www.youtube.com/embed/6ZfuNTqbHE8"
    },
    {
      id: 10,
      title: "The Machinist",
      wallpaper: "https://fr.web.img2.acsta.net/medias/nmedia/18/35/40/81/18405123.jpg",
      rate: 4,
      description:
        "An industrial worker who hasn't slept in a year begins to doubt his own sanity.",
      posterUrl:
        "https://upload.wikimedia.org/wikipedia/en/b/b9/The_Machinist_poster.JPG",
      trailer: "https://www.youtube.com/embed/gxH8U_49QnU"
    },
    {
      id: 11,
      title: "Skyfall",
      wallpaper: "https://m.media-amazon.com/images/M/MV5BMWZiNjE2OWItMTkwNy00ZWQzLWI0NTgtMWE0NjNiYTljN2Q1XkEyXkFqcGdeQXVyNzAwMjYxMzA@._V1_FMjpg_UX1000_.jpg",
      rate: 1,
      description:
        "James Bond's loyalty to M is tested when her past comes back to haunt her. When MI6 comes under attack, 007 must track down and destroy the threat, no matter how personal the cost.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BMWZiNjE2OWItMTkwNy00ZWQzLWI0NTgtMWE0NjNiYTljN2Q1XkEyXkFqcGdeQXVyNzAwMjYxMzA@._V1_.jpg",
      trailer: "https://www.youtube.com/embed/6kw1UVovByw"
    },
    {
      id: 12,
      title: "Parasite",
      wallpaper: "https://media.services.cinergy.ch/media/box1600/39e57195ad664672d3646a57cbdfe055a4eed9ee.jpg",
      rate: 3,
      description:
        "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UY1200_CR90,0,630,1200_AL_.jpg",
      trailer: "https://www.youtube.com/embed/SEUXfv87Wpk"
    },
  ]
}

// pure fuction Movie
const MovieReducer =(state=initialState,{ type, payload }) => {
  switch (type) {
    case ADD_MOVIE:
      return {...state,MOVIESdata: [...state.MOVIESdata, payload] }
    case DELETE_MOVIE:
      return {...state,MOVIESdata: state.MOVIESdata.filter((el) => el.id !== payload) }
    default:
      return state;
  }


}

export default MovieReducer