
export default {
    sideMenuShowe(){
        return {
            type: 'SHOW_SIDE_MENU',
        }
    },
    addNavTab(tab:any){
        return {
            type:'ADD_NAV_TAB',
            tab:tab
        }
    }
}
