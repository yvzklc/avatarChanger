const nameSpn = document.querySelector(".name")
const emailSpn = document.querySelector(".email")
const phoneSpn = document.querySelector(".phone")
const pictureSrc = document.querySelector(".pictureSrc")
const API = "https://randomuser.me/api/";

const getData = ()=>{
    fetch(API)
      .then((res) => { 
        if(!res.ok){
            throw new error("Something went wrong",res.status)
        }
        return res.json()
    })
    .then((data) => showData(data))
    .catch((err) => console.log(res.status))
}

const showData = (data) => {
    const {name ,email,phone,picture} = data.results[0]

   
    let {title,first,last} = name

    nameSpn.textContent = title + " " + first + " " +  last
    emailSpn.textContent = email
    phoneSpn.textContent = phone
    pictureSrc.setAttribute("src",`${picture.large}`)
}
getData()    