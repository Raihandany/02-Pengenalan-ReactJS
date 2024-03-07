function MyButton(){
    return (
      <button>Saya adalah tomboL</button>
    );
}

function MyTextNimName(){
    return(
        <h1>Raihan Dany Radhinnur - 2141720166</h1>
    );
}
  
export default function MyApp() {
    return(
      <div>
        <h1>Selamat Datang di aplikasi sayaa Raihan Dany</h1>
        
        <MyTextNimName/>
        <MyButton />

      </div>
    );
}

