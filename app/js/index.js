// side content
const search = document.querySelector('.cta-search');
const notification = document.querySelector('.cta-notification');
const moreOption = document.querySelector('.cta-more-option');
const closeSideContainer = document.querySelectorAll('.close-side-content');

search.addEventListener('click', function() {
    document.querySelector('.search-container').classList.add('show');
});
notification.addEventListener('click', function() {
    document.querySelector('.notification-container').classList.add('show');
});
moreOption.addEventListener('click', function() {
    document.querySelector('.more-options-container').classList.add('show');
});

for (const close of closeSideContainer) {
    close.addEventListener('click', function() {
        document.querySelector('.side-container.show').classList.remove('show');
    });
}
// end of side content

// popup - fetch
const popupFetch = document.querySelector('.cta-fetch');
const closePopup = document.querySelectorAll('.close-popup');

popupFetch.addEventListener('click', function() {
    document.querySelector('.bg-overlay').style.display = 'block';
    document.querySelector('.popup-fetch').style.display = 'block';
});
for (const popupClose of closePopup) {
    popupClose.addEventListener('click', function() {
        document.querySelector('.popup-container').style.display = 'none';
        document.querySelector('.bg-overlay').style.display = 'none';
    });
}
// end of popup - fetch

// side content - notificaton header
const notifyHeaderA = document.querySelectorAll('.side-container-header a');

for(const notifyHeader of notifyHeaderA){
    notifyHeader.addEventListener('click', selectNotifyHeader, false);
}

function selectNotifyHeader () {
    document.querySelector('.side-container-header a.selected').classList.remove('selected');
    this.classList.add('selected');
}

const searchNotification = document.querySelector('.search-notification');

searchNotification.addEventListener('click', function() {
    for(const notifyHeader of notifyHeaderA) {
        notifyHeader.style.display = 'none';
    }
    document.querySelector('.side-container-header a.selected').style.display = 'inline-block';
});


const closeSearchNotify = document.querySelector('.cta-search-notify');
closeSearchNotify.addEventListener('click', closeSearchNotification, false);

function closeSearchNotification (){
    for(notifyHeader of notifyHeaderA) {
        if(notifyHeader == notifyHeaderA[0]) {
            notifyHeader.classList.add('selected');
        } else {
            notifyHeader.classList.remove('selected');
        }
        notifyHeader.style.display	=	"inline-block";
    }
    event.stopPropagation();
}
// end of side content - notificaton header


// sub content
const subHeaderForms = document.querySelectorAll('.sub-container-header li');

for(const subHeaderFormsLi of subHeaderForms){
    subHeaderFormsLi.addEventListener('click', selectSubFormsHeader, false);
}

function selectSubFormsHeader () {
    document.querySelector('.sub-container-header li.selected').classList.remove('selected');
    this.classList.add('selected');
}

const ctaAddFields = document.querySelector('.cta-addFields');
const ctaFieldSettings = document.querySelector('.cta-fieldSettings');
const ctaFormSettings = document.querySelector('.cta-formSettings');

ctaAddFields.addEventListener('click', function() {
    document.querySelector('.add-field-container').style.display = 'block';
    document.querySelector('.field-settings-container').style.display = 'none';
    document.querySelector('.form-settings-container').style.display = 'none';
});
ctaFieldSettings.addEventListener('click', function() {
    document.querySelector('.field-settings-container').style.display = 'block';
    document.querySelector('.add-field-container').style.display = 'none';
    document.querySelector('.form-settings-container').style.display = 'none';
});
ctaFormSettings.addEventListener('click', function() {
    document.querySelector('.form-settings-container').style.display = 'block';
    document.querySelector('.add-field-container').style.display = 'none';
    document.querySelector('.field-settings-container').style.display = 'none';
});


// end of sub content


// dropdown


const dropdownList  =   document.querySelectorAll('.dropdown a');

for(const dropdown of dropdownList) {
    dropdown.addEventListener('click', function() {

        const opened = document.querySelector('.dropdown.open');
        const parent = this.parentElement;
        if(opened)
            opened.classList.remove('open');
        
        if(parent == opened)
            parent.classList.remove('open');
        else
            parent.classList.add('open');
    });
}

const searchList    =   document.querySelectorAll('.dropdown-search input');

for(const search of searchList) {
    search.addEventListener('focus', function() {
        const opened = document.querySelector('.dropdown-search.open');
        const parent = this.parentElement;
        if(opened && opened != parent)
            opened.classList.remove('open');
        else
            parent.classList.add('open');
    });

    search.addEventListener('blur', function() {
        const opened = document.querySelector('.dropdown-search.open');
        if(opened)
            opened.classList.remove('open');
    });
}


// end of dropdown



// bottom menu


const iconList  =   document.querySelectorAll('.bottom_icon_list');

for(const icon of iconList) {
    icon.addEventListener('click', function() {
        const container	=	 document.getElementById(this.id.replace('a', 'div'));
        const selected  =    document.querySelector('.bottom_icon_list.selected');

        if(selected && selected != this) {
            selected.classList.remove('selected');
            document.getElementById(selected.id.replace('a', 'div')).style.display   =   "none";

        }
            if(container.style.display == "block") {
                container.style.display = "none";
                this.classList.remove('selected');
            } else {
                container.style.display = "block";
                this.classList.add('selected');
            }
        
    });
}

// document.getElementById('menuOptions_a').addEventListener('click', function() {
//     const container	=	 document.getElementById(this.id.replace('a', 'div'));
    
//     if(container.style.display	==	"block")
//        container.style.display = "none";
//     else 
//        container.style.display = "block";
// });


// end of bottom menu