// built by Usama Munir
// usama_1s@hotmail.com
// usamamunir1s@gmail.com
// 23/06/2020
// custom dropdowns
  let ShowLangMenu = false;
  function langChng() {
    var langText = document.getElementById("lang-text");
    var opt2 = document.getElementById("opt2");

    if (!ShowLangMenu) {
      langText.classList.add("langChngText");
      opt2.classList.add("show");
      opt2.classList.remove("hide");
      opt2.classList.add("addpadding");
      ShowLangMenu = true;
    }else if (ShowLangMenu) {
      langText.classList.remove("langChngText");
      opt2.classList.add("hide");
      opt2.classList.remove("addpadding");
      ShowLangMenu = false;
    }
  }
  function langChng2() {
    var langText = document.getElementById("lang-text2");
    var opt2 = document.getElementById("opt22");
    var opt1 = document.getElementById("opt12");

    if (!ShowLangMenu) {
      langText.classList.add("langChngText");
      opt2.classList.add("show");
      opt2.classList.remove("hide");
      opt2.classList.add("addpadding");
      ShowLangMenu = true;
    } else if (ShowLangMenu) {
      langText.classList.remove("langChngText");
      opt2.classList.add("hide");
      opt2.classList.remove("addpadding");
      ShowLangMenu = false;
    }
  }
  function langChng3() {
    var langText = document.getElementById("lang-text3");
    var opt2 = document.getElementById("opt23");
    var opt1 = document.getElementById("opt13");

    if (!ShowLangMenu) {
      langText.classList.add("langChngText");
      opt2.classList.add("show");
      opt2.classList.remove("hide");
      opt2.classList.add("addpadding");
      ShowLangMenu = true;
    } else if (ShowLangMenu) {
      langText.classList.remove("langChngText");
      opt2.classList.add("hide");
      opt2.classList.remove("addpadding");
      ShowLangMenu = false;
    }
  }

  let ShowMobMenu = false;
  function mobMenu(){
    var social1 = document.getElementById("social1");
    var social2 = document.getElementById("social2");
    var social3 = document.getElementById("social3");
    var social4 = document.getElementById("social4");

    var mobicon1 = document.getElementById("mob-icon1");
    var mobicon2 = document.getElementById("mob-icon2");

    var brand3 = document.getElementById("brand-3");

    var mobmenubtn = document.getElementById("mob-menu-btn");

    if (!ShowMobMenu){
      social1.classList.add("show1");
      social2.classList.add("show1");
      social3.classList.add("show1");
      social4.classList.add("show1");
      mobicon1.classList.add("hide");
      mobicon2.classList.add("show1");
      mobmenubtn.classList.add("show11");
      brand3.classList.add("hide");
      ShowMobMenu = true;
    } else if (ShowMobMenu){

        social1.classList.remove("show1");
        social2.classList.remove("show1");
        social3.classList.remove("show1");
        social4.classList.remove("show1");
        mobicon1.classList.remove("hide");
        mobicon2.classList.remove("show1");
        mobmenubtn.classList.remove("show11");
        brand3.classList.remove("hide");
        ShowMobMenu = false;
    }
  }
