// const langHeaderHead={
//     az:["Yeni movsum uslublarina 50%-e qeder endirim elde edin,yalniz mehdud vaxt"],
//     en:["Get up to 50% off new season styles, limited time only"]
// }
// const langHeaderSearch={
//     az:["Axtar","Giris/Qeydiyyat"],
//     en:["Search","Login/Register"]
// }
// const langNav={
//     az:["Kateqoriyalar","Ana sehife","Deb","Yeni mehsullar","Butun brendler","En yaxsi mehsullar","Blog"],
//     en:["SHOP BY CAREGORIES","Home","Fhasion","New Arrivals","All Brands","Best Deals","Blog"]
// }
// const langSlider={
//     az:["Boyuk qenaet gunleri","Qadinlar ucun solid yasil t-shirt","Yalniz baslayan","Indi al","Samsung VR Kamera","Indi al","Marcel Metbex Stulu","indi al","Agilli tablet","Krepe Koynek","Deri saat","Brilliyant","Taxta Stul","Sport Ayaqqabi"],
//     en:["Big Saving Days Sale","Woman Solid Round Green T-Shirt","Starting At Only","SHOP NOW","Samsung Gear VR Camera","SHOP NOW","Marcel Dining Room Chair","SHOP NOW","Smart Tablet","Crape T-Shirt","Leather Watch","Rolling Diamond","Wooden Chair","Sneaker Shoes"]
// }
// const langShipping={
//     az:["ODENISSIZ TESLIM","İlk Sifarişinizdə və 200$-dan yuxarı Pulsuz Çatdırılma","YALNIZ $200"],
//     en:["FREE SHIPPING","Free delivery NowON Your First Order and over $200","-ONLY $200"]
// }
// const langthreecard={
//     az:["S22 Samsung Smartfon","INDI AL","Metbex esyalari","INDI AL","Simsiz qulaqciq","INDI AL"],
//     en:["S22 Samsung Smartphone","SHOP NOW","Armchair Mad By sgopstic","SHOP NOW","Noise Wireless Headphones","SHOP NOW"]
// }
// const langsixcard={
//     az:["Deb","Elektronik","Mebel","Apple Agilli Saat/Midnight Aluminium","Apple Agilli Saat/Midnight Aluminium","Apple Agilli Saat/Midnight Aluminium","Saten Bomber Ceket","Kisiler ucun pambiq gundelik koynek"],
//     en:["Fashion","Electronic","Furniture","Apple Smart Watch / Midnight Aluminium","Apple Smart Watch / Midnight Aluminium","Apple Smart Watch / Midnight Aluminium","Cropped Satin Bomber Jacket","Mens Cotton Casual Short Sleeve T-Shirts"]
// }
// const langsecondsixcard={
//     az:["Ən Son Məhsullar","Plastik Bambuk Tozsoran və Fırça Qara","Plastik Bambuk Tozsoran və Fırça Qara","Plastik Bambuk Tozsoran və Fırça Qara","Apple Agilli Saat/Midnight Aluminium","Apple Agilli Saat/Midnight Aluminium","Apple Agilli Saat/Midnight Aluminium"],
//     en:["Latest Products","Plastic Bamboo Dustpan & Brush Black","Plastic Bamboo Dustpan & Brush Black","Plastic Bamboo Dustpan & Brush Black","Apple Smart Watch / Midnight Aluminium","Apple Smart Watch / Midnight Aluminium","Apple Smart Watch / Midnight Aluminium"]
// }
// const langBtn=document.querySelector('#langBtn');
// const navLink=document.querySelectorAll('.left-side');
// const navMiddle=document.querySelectorAll('.navmiddle');
// const navCateg=document.querySelectorAll('.nav-link');
// const mainSlider=document.querySelectorAll('.slidermain');
// const shippingCon=document.querySelectorAll('#shippinglg');
// const threeCards=document.querySelectorAll('.threecard');
// const sixCards=document.querySelectorAll('.sixcard')
// const secondSixCards=document.querySelectorAll('.sixcardsecond')

// const multiLang=()=>{
//     if(langBtn.innerHTML==='AZ'){
//         langHeaderHead.az.map((i,c)=>{
//             navLink[c].innerHTML=i;
//         })
//         langHeaderSearch.az.map((i,c)=>{
//             navMiddle[c].innerHTML=i;
//         })
//         langNav.az.map((i,c)=>{
//             navCateg[c].innerHTML=i;
//         })
//         langSlider.az.map((i,c)=>{
//             mainSlider[c].innerHTML=i;
//         })
//         langShipping.az.map((i,c)=>{
//             shippingCon[c].innerHTML=i;
//         })
//         langthreecard.az.map((i,c)=>{
//             threeCards[c].innerHTML=i;
//         })
//         langsixcard.az.map((i,c)=>{
//             sixCards[c].innerHTML=i;
//         })
//         langsecondsixcard.az.map((i,c)=>{
//             secondSixCards[c].innerHTML=i;
//         })
//         langBtn.innerHTML="EN";
//         localStorage.setItem('text',"az");
//     }else{
//         langHeaderHead.en.map((i,c)=>{
//             navLink[c].innerHTML=i;
//         })
//         langHeaderSearch.en.map((i,c)=>{
//             navMiddle[c].innerHTML=i;
//         })
//         langNav.en.map((i,c)=>{
//             navCateg[c].innerHTML=i;
//         })
//         langSlider.en.map((i,c)=>{
//             mainSlider[c].innerHTML=i;
//         })
//         langShipping.en.map((i,c)=>{
//             shippingCon[c].innerHTML=i;
//         })
//         langthreecard.en.map((i,c)=>{
//             threeCards[c].innerHTML=i;
//         })
//         langsixcard.en.map((i,c)=>{
//             sixCards[c].innerHTML=i;
//         })
//         langsecondsixcard.en.map((i,c)=>{
//             secondSixCards[c].innerHTML=i;
//         })
//         langBtn.innerHTML="AZ";
//         localStorage.setItem('text',"en");
//     }
// }
// langBtn.onclick=multiLang;

// if(localStorage.getItem('text')=="az"){
//     langBtn.innerHTML="EN";
    
// }else{
//     langBtn.innerHTML="AZ";
    
// }







// const button=document.querySelector('button')
// const toggleMode=()=>{
//     if(document.body.className==='light'){
//         document.body.className='dark'
//     }else{
//         document.body.className='light'
//     }
// }
// button.onclick=toggleMode;







const langHeaderHead={
    az:["Yeni movsum uslublarina 50%-e qeder endirim elde edin,yalniz mehdud vaxt"],
    en:["Get up to 50% off new season styles, limited time only"]
}
const langHeaderSearch={
    az:["Axtar","Giris/Qeydiyyat"],
    en:["Search","Login/Register"]
}
const langNav={
    az:["Kateqoriyalar","Ana sehife","Deb","Yeni mehsullar","Butun brendler","En yaxsi mehsullar","Blog"],
    en:["SHOP BY CAREGORIES","Home","Fhasion","New Arrivals","All Brands","Best Deals","Blog"]
}
const langSlider={
    az:["Boyuk qenaet gunleri","Qadinlar ucun solid yasil t-shirt","Yalniz baslayan","Indi al","Samsung VR Kamera","Indi al","Marcel Metbex Stulu","indi al","Agilli tablet","Krepe Koynek","Deri saat","Brilliyant","Taxta Stul","Sport Ayaqqabi"],
    en:["Big Saving Days Sale","Woman Solid Round Green T-Shirt","Starting At Only","SHOP NOW","Samsung Gear VR Camera","SHOP NOW","Marcel Dining Room Chair","SHOP NOW","Smart Tablet","Crape T-Shirt","Leather Watch","Rolling Diamond","Wooden Chair","Sneaker Shoes"]
}
const langShipping={
    az:["ODENISSIZ TESLIM","İlk Sifarişinizdə və 200$-dan yuxarı Pulsuz Çatdırılma","YALNIZ $200"],
    en:["FREE SHIPPING","Free delivery NowON Your First Order and over $200","-ONLY $200"]
}
const langthreecard={
    az:["S22 Samsung Smartfon","INDI AL","Metbex esyalari","INDI AL","Simsiz qulaqciq","INDI AL"],
    en:["S22 Samsung Smartphone","SHOP NOW","Armchair Mad By sgopstic","SHOP NOW","Noise Wireless Headphones","SHOP NOW"]
}
const langsixcard={
    az:["Deb","Elektronik","Mebel","Apple Agilli Saat/Midnight Aluminium","Apple Agilli Saat/Midnight Aluminium","Apple Agilli Saat/Midnight Aluminium","Saten Bomber Ceket","Kisiler ucun pambiq gundelik koynek"],
    en:["Fashion","Electronic","Furniture","Apple Smart Watch / Midnight Aluminium","Apple Smart Watch / Midnight Aluminium","Apple Smart Watch / Midnight Aluminium","Cropped Satin Bomber Jacket","Mens Cotton Casual Short Sleeve T-Shirts"]
}
const langsecondsixcard={
    az:["Ən Son Məhsullar","Plastik Bambuk Tozsoran və Fırça Qara","Plastik Bambuk Tozsoran və Fırça Qara","Plastik Bambuk Tozsoran və Fırça Qara","Apple Agilli Saat/Midnight Aluminium","Apple Agilli Saat/Midnight Aluminium","Apple Agilli Saat/Midnight Aluminium"],
    en:["Latest Products","Plastic Bamboo Dustpan & Brush Black","Plastic Bamboo Dustpan & Brush Black","Plastic Bamboo Dustpan & Brush Black","Apple Smart Watch / Midnight Aluminium","Apple Smart Watch / Midnight Aluminium","Apple Smart Watch / Midnight Aluminium"]
}
const langBtn=document.querySelector('#langBtn');
const navLink=document.querySelectorAll('.left-side');
const navMiddle=document.querySelectorAll('.navmiddle');
const navCateg=document.querySelectorAll('.nav-link');
const mainSlider=document.querySelectorAll('.slidermain');
const shippingCon=document.querySelectorAll('#shippinglg');
const threeCards=document.querySelectorAll('.threecard');
const sixCards=document.querySelectorAll('.sixcard')
const secondSixCards=document.querySelectorAll('.sixcardsecond')

const multiLang=()=>{
    if(langBtn.innerHTML==='AZ'){
        langHeaderHead.az.map((i,c)=>{
            navLink[c].innerHTML=i;
        })
        langHeaderSearch.az.map((i,c)=>{
            navMiddle[c].innerHTML=i;
        })
        langNav.az.map((i,c)=>{
            navCateg[c].innerHTML=i;
        })
        langSlider.az.map((i,c)=>{
            mainSlider[c].innerHTML=i;
        })
        langShipping.az.map((i,c)=>{
            shippingCon[c].innerHTML=i;
        })
        langthreecard.az.map((i,c)=>{
            threeCards[c].innerHTML=i;
        })
        langsixcard.az.map((i,c)=>{
            sixCards[c].innerHTML=i;
        })
        langsecondsixcard.az.map((i,c)=>{
            secondSixCards[c].innerHTML=i;
        })
        langBtn.innerHTML="EN";
        localStorage.setItem('text',"az");


    }else{
        langHeaderHead.en.map((i,c)=>{
            navLink[c].innerHTML=i;
        })
        langHeaderSearch.en.map((i,c)=>{
            navMiddle[c].innerHTML=i;
        })
        langNav.en.map((i,c)=>{
            navCateg[c].innerHTML=i;
        })
        langSlider.en.map((i,c)=>{
            mainSlider[c].innerHTML=i;
        })
        langShipping.en.map((i,c)=>{
            shippingCon[c].innerHTML=i;
        })
        langthreecard.en.map((i,c)=>{
            threeCards[c].innerHTML=i;
        })
        langsixcard.en.map((i,c)=>{
            sixCards[c].innerHTML=i;
        })
        langsecondsixcard.en.map((i,c)=>{
            secondSixCards[c].innerHTML=i;
        })
        langBtn.innerHTML="AZ";
        localStorage.setItem('text',"en");



    }
}
langBtn.onclick=multiLang;

if(localStorage.getItem('text')==="az"){
     langHeaderHead.az.map((i,c)=>{
            navLink[c].innerHTML=i;
        })
        langHeaderSearch.az.map((i,c)=>{
            navMiddle[c].innerHTML=i;
        })
        langNav.az.map((i,c)=>{
            navCateg[c].innerHTML=i;
        })
        langSlider.az.map((i,c)=>{
            mainSlider[c].innerHTML=i;
        })
        langShipping.az.map((i,c)=>{
            shippingCon[c].innerHTML=i;
        })
        langthreecard.az.map((i,c)=>{
            threeCards[c].innerHTML=i;
        })
        langsixcard.az.map((i,c)=>{
            sixCards[c].innerHTML=i;
        })
        langsecondsixcard.az.map((i,c)=>{
            secondSixCards[c].innerHTML=i;
        })
        langBtn.innerHTML="EN";
    
}else{
    langHeaderHead.en.map((i,c)=>{
        navLink[c].innerHTML=i;
    })
    langHeaderSearch.en.map((i,c)=>{
        navMiddle[c].innerHTML=i;
    })
    langNav.en.map((i,c)=>{
        navCateg[c].innerHTML=i;
    })
    langSlider.en.map((i,c)=>{
        mainSlider[c].innerHTML=i;
    })
    langShipping.en.map((i,c)=>{
        shippingCon[c].innerHTML=i;
    })
    langthreecard.en.map((i,c)=>{
        threeCards[c].innerHTML=i;
    })
    langsixcard.en.map((i,c)=>{
        sixCards[c].innerHTML=i;
    })
    langsecondsixcard.en.map((i,c)=>{
        secondSixCards[c].innerHTML=i;
    })
    langBtn.innerHTML="AZ";
    
}


const button=document.querySelector('button')
const toggleMode=()=>{
    if(document.body.className==='light'){
        document.body.className='dark'
        localStorage.setItem('mode','dark')
    }else{
        document.body.className='light'
        localStorage.setItem('mode','light')
    }
}


if(localStorage.getItem('mode')==='light'){
      document.body.className='light'
}
else{
     document.body.className='dark'
}
button.onclick=toggleMode





