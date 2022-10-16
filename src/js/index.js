const tabs = document.querySelectorAll(".tab");


tabs.forEach(tab => {
    tab.addEventListener('click', () => {

        if (!tab.classList.contains('selected')) {
            selectTab(tab)
            removeInformation()
            addInformation(tab)
        }
    });
});

function selectTab(tab) {
    const selectedTab = document.querySelector('.tab.selected');
    selectedTab.classList.remove('selected')

    tab.classList.add('selected')
}

function removeInformation() {
    const informationSelected = document.querySelector('.information.selected')
    informationSelected.classList.remove('selected')
}

function addInformation(tab) {
    const idInformationShow = `information-${tab.id}`;
    const tabInformation = document.getElementById(idInformationShow);
    tabInformation.classList.add('selected')
}