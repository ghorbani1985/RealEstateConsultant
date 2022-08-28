let searchKey = {

};
//function for create objects from class
window.onload = function(){
    let mock1 = new House(
      'آ‌پارتمان۱۵۵ متر گلسار‌ بلوار گیلان هوشمند دو‌‌ پارکینگ',
      'http://127.0.0.1:5501/assets/images/04.webp',
      'مشاوره املاک رشتیان','buy','apartment','رشت',
      9500000000,155,1,1400,1,true,true,true
      );
      HouseHandler.addData(mock1);
    let mock2 = new House(
      'آپارتمان باپارکینگ مسکن مهر(صفرکلیدنخورده)',
      'http://127.0.0.1:5501/assets/images/01-1.webp',
      'مشاوره املاک شهرک',
      'rent',
      'apartment',
      'لاهیجان',
      920000000,155,1,1399,1,true,true,true,
    );
      HouseHandler.addData(mock2);
      fillData(HouseHandler.getDataList());
      fillLocations();
}
//function for clear form
function clearAddNewAdsFrom(){
       let form = document.getElementById('addNewItemAdsForm');
         form['title'].value = "";
         form['image'].value = "";
         form['agency'].value = "";
         form['adsType'].value = "";
         form['houseType'].value = "";
         form['location'].value = "";
         form['price'].value = "";
         form['area'].value = "";
         form['roomCount'].value = "";
         form['year'].value = "";
         form['floor'].value = "";
         form['warehouse'].value = "";
         form['elevator'].value = "";
         form['parking'].value = "";
}
//functions for open and close add new ads from
function openNewAdsBox(){
    let newAdsForm = document.getElementById('addNewAdsForm');
    let form = document.getElementById('addNewItemAdsForm');
    newAdsForm.classList.remove("hidden");
    newAdsForm.classList.add("block");
    form['title'].focus();
}
function closeNewAdsBox(){
    let newAdsForm = document.getElementById('addNewAdsForm');
    newAdsForm.classList.remove('block');
    newAdsForm.classList.add('hidden');
}
//function for fill data in html template
function fillData(dataList) {
  let template = document.getElementById('adsItemTemplate').innerHTML;
  let wrapper = document.getElementById('adsWrapper');
  wrapper.innerHTML = "";
  for (let index = 0; index < dataList.length; index++) {
    let currentItemTemplate = template;
    let currentItem = dataList[index];
    currentItemTemplate = currentItemTemplate.replace('__TITLE__', currentItem.title);
    currentItemTemplate = currentItemTemplate.replace('__PRICE__', currentItem.price);
    currentItemTemplate = currentItemTemplate.replace('__AGENCY__', currentItem.agency);
    currentItemTemplate = currentItemTemplate.replace('__IMG__', currentItem.image);
    wrapper.innerHTML += currentItemTemplate;
  }
}
//function for add new items of ads
function createNewAds(){
  if(!isValidForm()){
    return;
  }
  let form = document.getElementById('addNewItemAdsForm');
    let data = new House(
      form['title'].value,
      form['image'].value,
      form['agency'].value,
      form['adsType'].value,
      form['houseType'].value,
      form['location'].value,
      Number(form['price'].value),
      Number(form['area'].value),
      Number(form['roomCount'].value),
      Number(form['year'].value),
      Number(form['floor'].value),
      Boolean(form['warehouse'].value),
      Boolean(form['elevator'].value),
      Boolean(form['parking'].value),
    );
    HouseHandler.addData(data);
    fillData(HouseHandler.getDataList());
    clearAddNewAdsFrom();
    closeNewAdsBox();
    alert('کاربر گرامی آگهی شما به درستی ثبت گردید.');
}
//function for form validation
function isValidForm(){
     let form = document.getElementById('addNewItemAdsForm');
     let error = document.getElementById('error');
    if (form['title'].value == '') {
       error.classList.remove('hidden');
       error.innerText = 'لطفا عنوان آگهی را مشخص فرمایید.';
       form['title'].focus();
       form['title'].classList.add('focus:ring-2','focus:ring-red-500');
       return false;
     } else if (form['agency'].value == '') {
      error.classList.remove('hidden');
      error.innerText = 'لطفا نام آژانس املاک را مشخص فرمایید.';
       form['agency'].focus();
      form['agency'].classList.add('focus:ring-2','focus:ring-red-500');
       return false;
     } else if (form['location'].value == 0) {
       error.classList.remove('hidden');
       error.innerText = 'لطفا محل را مشخص فرمایید.';
       form['location'].focus();
       form['location'].classList.add('focus:ring-2','focus:ring-red-500');
       return false;
     } else if (form['price'].value == '') {
       error.classList.remove('hidden');
       error.innerText = 'لطفا قیمت را مشخص فرمایید.';
       form['price'].focus();
       form['price'].classList.add('focus:ring-2','focus:ring-red-500');
       return false;
     } else if (form['area'].value == '') {
       error.classList.remove('hidden');
       error.innerText = 'لطفا متراژ را مشخص فرمایید.';
       form['area'].focus();
       form['area'].classList.add('focus:ring-2','focus:ring-red-500');
       return false;
     } else if (form['roomCount'].value == '') {
       error.classList.remove('hidden');
       error.innerText = 'لطفا تعداد اتاق را مشخص فرمایید.';
       form['roomCount'].focus();
       form['roomCount'].classList.add('focus:ring-2','focus:ring-red-500');
       return false;
     } else if (form['year'].value == '') {
       error.classList.remove('hidden');
       error.innerText = 'لطفا سال ساخت بنا را مشخص فرمایید.';
       form['year'].focus();
       form['year'].classList.add('focus:ring-2','focus:ring-red-500');
       return false;
     } else if (form['floor'].value == '') {
       error.classList.remove('hidden');
       error.innerText = 'لطفا تعداد طبقه بنا را مشخص فرمایید.';
       form['floor'].focus();
       form['floor'].classList.add('focus:ring-2','focus:ring-red-500');
       return false;
     } else if (form['image'].value == '') {
       error.classList.remove('hidden');
       error.innerText = 'لطفا لینک تصویر را مشخص فرمایید.';
       form['image'].focus();
       form['image'].classList.add('focus:ring-2','focus:ring-red-500');
       return false;
     } else {
       error.classList.add('hidden');
       return true;
     }
}
//function for fill location options
function fillLocations(){
    let locations = [
      'رشت',
      'لاهیجان',
      'انزلی',
      'خشکبیجار',
      'فومن',
      'شفت',
      'خمام',
      'صومعه سرا',
      'تالش',
      'چابکسر',
      'آستارا',
      'رودسر',
      'لنگرود',
      'هشتپر',
      'آستانه',
      'بندر کیاشهر',
      'رضوانشهر',
      'لوشان',
      'کوچصفهان',
      'لشت نشاء',
      'چوکام',
      'احمد سرگوراب',
      'املش',
      'بازار جمعه'
    ];
    let elements = document.getElementsByClassName("locations");
    for(ele of elements){
      for(loc of locations){
     ele.innerHTML += "<option value='" + loc + "'>" + loc + "</option> ";
      }
    }
}
//function for search
function search() {
  let result = HouseHandler.getDataList().slice(0);
  for (let index = 0; index < result.length; index++) {
    if (searchKey.adsType != undefined && result[index].adsType.toLowerCase().indexOf(searchKey.adsType.toLowerCase()) < 0) {
      result.splice(index, 1);
      index--;
      continue;
    }
    if (searchKey.houseType != undefined && result[index].houseType.toLowerCase().indexOf(searchKey.houseType.toLowerCase()) < 0) {
      result.splice(index, 1);
      index--;
    }
    if (searchKey.location != undefined && result[index].location.toLowerCase().indexOf(searchKey.location.toLowerCase()) < 0) {
      result.splice(index, 1);
      index--;
    }
    if (searchKey.minPrice != undefined && searchKey.minPrice != '' &&  searchKey.minPrice >0 && result[index].price >= searchKey.minPrice) {
      result.splice(index, 1);
      index--;
    }
    if (
      searchKey.maxPrice != undefined &&
      searchKey.maxPrice != '' &&
      searchKey.maxPrice > 0 &&
      result[index].price <= searchKey.maxPrice
    ) {
      result.splice(index, 1);
      index--;
    }
    if (
      searchKey.minArea != undefined &&
      searchKey.minArea != '' &&
      searchKey.minArea > 0 &&
      result[index].area >= searchKey.minArea
    ) {
      result.splice(index, 1);
      index--;
    }
    if (
      searchKey.maxArea != undefined &&
      searchKey.maxArea != '' &&
      searchKey.maxArea > 0 &&
      result[index].area <= searchKey.maxArea
    ) {
      result.splice(index, 1);
      index--;
    }
  }
  fillData(result);
}
function changeFilter(ele,key,value){
   switch(key){
    case 'adsType':
      searchKey.adsType = value;
      for (let index = 0; index < ele.parentNode.children.length; index++) {
        ele.parentNode.children[index].classList.remove('text-slate-800', 'font-bold');
      }
      ele.classList.add("text-slate-800","font-bold");
      break;
      case 'houseType' :
         searchKey.houseType = value;
      for (let index = 0; index < ele.parentNode.children.length; index++) {
        ele.parentNode.children[index].classList.remove('text-slate-800', 'font-bold');
      }
      ele.classList.add("text-slate-800","font-bold");
      break;
      case 'location' :
         searchKey.location = ele.value;
      break;
      case 'minPrice' :
         searchKey.minPrice = ele.value;
      break;
      case 'maxPrice' :
         searchKey.maxPrice = ele.value;
      break;
      case 'minArea' :
         searchKey.minArea = ele.value;
      break;
      case 'maxArea' :
         searchKey.maxArea = ele.value;
      break;
   }
}