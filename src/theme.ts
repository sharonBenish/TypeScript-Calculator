const themeToggleDiv = document.querySelector(".radios")!;
const getThemePref = ()=>{
    const themePref = localStorage.getItem('theme');
    if (themePref){
        const theme:string = JSON.parse(themePref);
        document.body.className = theme
        const themeRadio = document.getElementById(theme) as HTMLInputElement;
        themeRadio.checked = true;
    }
}
getThemePref();
themeToggleDiv.addEventListener('change',(e:Event)=>{
   const target = e.target as HTMLInputElement;
   const id:string = target.id
   document.body.className = id;
   localStorage.setItem('theme', JSON.stringify(id));
})


