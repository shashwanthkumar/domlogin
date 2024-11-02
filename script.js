

let nm=document.getElementsByName("nm")[0]
let ps=document.getElementsByName("ps")[0]

function log(){
    let nms=nm.value 
    let pss=ps.value 
    let para1=document.createElement("p")
    document.body.appendChild(para1)
    para1.innerText=`this is user - ${nms}`
    console.log(nms)
    nm.value=''
    let para2=document.createElement("p")
    document.body.appendChild(para2)
    para2.innerHTML=` This is password - ${pss}`
    ps.value=''
    console.log(pss)
    }


let fi=document.getElementsByName("f")[0]
let sc=document.getElementsByName("s")[0]
let em=document.getElementsByName("e")[0]
let pho=document.getElementsByName("ph")[0]
let ci=document.getElementsByName("cy")[0]

function sign(){
    let f=fi.value
    let s=sc.value
    let e=em.value
    let ph=pho.value
    let c=ci.value
let p0=document.createElement("p")
console.log("FirstName:-"+f)
document.body.appendChild(p0)
p0.innerHTML=`firstname:- ${f}`
fi.value=''

let p1=document.createElement("p")
console.log("Last Name:-"+s)
document.body.appendChild(p1)
p1.innerHTML=`Last Name:- ${s}`
sc.value=''

let p2=document.createElement("p")
console.log("email:-"+e)
document.body.appendChild(p2)
p2.innerHTML=`E-mail:- ${e}`
em.value=''

let p3=document.createElement("p")
console.log("Phone no:-"+ph)
document.body.appendChild(p3)
p3.innerHTML=`phoneno:- ${ph}`
pho.value=''

let p4=document.createElement("p")
console.log("City:-"+c)
document.body.appendChild(p4)
p4.innerHTML=`city:- ${c}`
ci.value=''
}


document.getElementById("sgn").addEventListener("click",function(){
    document.getElementById("fn").focus()
})
