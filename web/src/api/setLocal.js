export const setLocal = (data) => {
    //localStorage.clear();
    Object.keys(data).forEach(key => {
        if (data[key] == null){
           localStorage.setItem(key, "");
        }
        else{
           localStorage.setItem(key, data[key]);
        }
    })
}