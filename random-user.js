const displayData=()=>{

    fetch('https://randomuser.me/api/?results=100')
    .then(reponse=>reponse.json())
    .then(data=>DisplayUser(data.results))
}

DisplayUser=(users)=>{
    console.log (users);

    const userinfo= document.getElementById('user-info')
    userinfo.innerHTML= '';
    const div= document.createElement('div')
    div.classList.add('add-div');
    
    for(info of users){

        console.log(info.name.first, '' ,info.name.last)
        div.innerHTML= `
        <div id="user-info" "row-cols-md-3"  >
        <img src=" ${info.picture.large}" class="card-img-top rounded-circle " alt="">
       <div class="card-body">
         <h5 class="card-title">Hey, How you doing. Is it easy for you to find me, isn't it?</h5>
            <p class="card-text">
                Name: ${info.name.first} ${info.name.last}  <br>
                Age: ${info.dob.age} <br>
                Address: ${info.location.city}, ${info.location.country}, ${info.location.postcode}   <br>
                Email:  ${info.email}  <br>
                Number: ${info.phone} <br>
            </p>
        
      </div>
        
        `

        userinfo.appendChild(div);

    }
    

}





// const userinfo= document.getElementById('user-info')
//     const div= document.createElement('div')
//     div.classList.add('add-div');
    
//     for(info of users){

//         console.log(info.name.first, '' ,info.name.last)
//         div.innerHTML= `
//         <div id="user-info"  class="card" style="width: 25rem;">
//         <img src="my-pic.jpg" class="card-img-top" alt="...">
//        <div class="card-body">
//          <h5 class="card-title">Card title</h5>
//             <p class="card-text">
//                 Name: ${info.name.first, '' ,info.name.last}  <br>
//                 Address:  <br>
//                 Email: <br>
//                 Location: <br>
//                 Number: <br>
//             </p>
        
//           <a href="#" class="btn btn-primary">Go somewhere</a>
//       </div>
        
//         `

//         userinfo.appendChild(div);

//     }