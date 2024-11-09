window.onscroll = function() {scrollFunction()};
 
 function scrollFunction() {console.log(121);
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
//返回頂點
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
/*-------------------------------------------------------------*/
function setProgressBar(progressBarId, value) {    
    let progressBar = document.getElementById(progressBarId);//進度條效果
    let width = parseInt(progressBar.style.width) || 0; 
    if (width >= value) return; 

    let interval = setInterval(() => {
        if (width >= value) {
            clearInterval(interval); 
        } else {
            width++; 
            progressBar.style.width = width + '%'; 
        }
    }, 30); 
}
window.onload = function() {
setProgressBar('cssProgressBar', 75); 
setProgressBar('jsProgressBar', 60); 
setProgressBar('pythonProgressBar', 85);
setProgressBar('javaProgressBar', 80); 
setProgressBar('htmlProgressBar', 90); 
setProgressBar('sqlProgressBar', 70); 
new google.translate.TranslateElement({   //翻譯
        pageLanguage: 'zh-TW',
        includedLanguages: 'en,zh-CN,zh-TW,es,fr,de,it',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
};

  