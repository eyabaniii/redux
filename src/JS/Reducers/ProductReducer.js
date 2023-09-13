import { ADD_PRODUCT, DELETE_PRODUCT, DISPONIBLE_PRODUCT, MIN, PLUS } from "../ActionTypes/ActionsTypes";


//initialState//
const initialState={
ListProduct:[
    {
      id: Math.random(),
      name: "iphone 13 pro max",
      description:
        "Double SIM - Ecran Super Retina XDR OLED ProMotion 6.7, 120 Hz - Résolution 1284 x 2778px - Processeur Apple A15 Bionic Hexa-Core - RAM 6 Go",
      price: "3500",
      posterUrl:
        "https://www.tunisianet.com.tn/230300-large/smartphone-apple-iphone-13-pro-max-5g-6-go-512-go-bleu.jpg",
    dispo:false,
    compter:0},
    {
      id: Math.random(),
      name: "redmi note 11 pro max",
      description:
        "Sim : Double - Ecran : 6.43 Super AMOLED, 120Hz- Résolution : 2400 x 1080 Pixels - Processeur : Mediatek Helio G96 (12 nm) - Système : Android 11",
      price: "3000",
      posterUrl: "https://i.ebayimg.com/images/g/8MYAAOSwXt5he24t/s-l1600.jpg",
      dispo:false,
      compter:0},
    {
      id: Math.random(),
      name: "samsung s22 ultra",
      description:
        "Samsung Galaxy S22 ultra prix Tunisie - Galaxy S22 Ultra fiche technique Tunisie Couleur Phantom Black",
      price: "4000",
      posterUrl:
        "https://www.samsungtunisie.tn/8225-large_default/samsung-galaxy-s22-ultra-prix-tunisie.jpg",
        dispo:false,
        compter:0},
    {
      id: Math.random(),
      name: "infinix note 12",
      description:
        "Infinix Note 12 Pro Price In Tunisia - Mobile57 Tn",
      price: "5000",
      posterUrl:
        "https://www.mobile57.com/product_images/webp/Infinix-Note-12-Pro.webp",
        dispo:true,
        compter:0}
  ]
  
};


//Pure functions
const ListReducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case ADD_PRODUCT:
            return{
                ...state,ListProduct:[...state.ListProduct,payload]
            }
        case DELETE_PRODUCT:
            return{...state,ListProduct:state.ListProduct.filter(el=>el.id!==payload)}
        case DISPONIBLE_PRODUCT:
            return{...state,ListProduct:state.ListProduct.map((el)=>el.id==payload?{...el,dispo:!el.dispo}:el)}
        case PLUS:
          return{...state,ListProduct:state.ListProduct.map((el)=>el.id==payload?{...el,compter:el.compter>=6?el.compter:el.compter+1}:el)}
        case MIN:
          return{...state,ListProduct:state.ListProduct.map((el)=>el.id==payload?{...el,compter:el.compter<=0?el.compter:el.compter-1}:el)}  
    
        default:
            return state;
            
    }

}
export default ListReducer
