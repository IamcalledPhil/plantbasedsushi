const showMenu = (selectedMenu) => {
    const menus = document.getElementsByClassName('menu-content');
    for (const menu of menus){
        if (menu.id !== selectedMenu){
            menu.style.display='none';
        } else {
            menu.style.display='flex';
        }
    }
}