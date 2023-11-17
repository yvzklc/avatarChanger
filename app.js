const nameInp = document.querySelector(".name")
const emailInp = document.querySelector(".email")
const phoneInp = document.querySelector(".phone")
const pictureInp = document.querySelector(".picture")
const pictureSrc = document.querySelector(".pictureSrc")
const API = "https://randomuser.me/api/";

const getFetch = ()=>{
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

    nameInp.textContent = title + " " + first + " " +  last
    emailInp.textContent = email
    phoneInp.textContent = phone
    pictureSrc.setAttribute("src",`${picture.large}`)
}
getFetch()    